'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { photoAlbums, type AlbumPhoto, type PhotoAlbum } from '@/lib/photo-albums';
import { useIsMobile } from '@/hooks/use-mobile';

function PhotoPrint({ photo, active, onPlay, replay, reduced }: {
  photo: AlbumPhoto; active: boolean; onPlay: () => void; replay: number; reduced: boolean;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const el = video.current;
    if (!el || !photo.video) return;
    if (!active || (reduced && replay === 0)) { el.pause(); return; }
    let cancelled = false;
    const timer = window.setTimeout(() => {
      el.src = photo.video!;
      el.currentTime = 0;
      void el.play().then(() => { if (cancelled) el.pause(); }).catch(() => {});
    }, replay ? 0 : 450);
    return () => { cancelled = true; window.clearTimeout(timer); el.pause(); };
  }, [active, photo.video, replay, reduced]);
  useEffect(() => {
    const hide = () => { if (document.hidden) video.current?.pause(); };
    document.addEventListener('visibilitychange', hide);
    return () => document.removeEventListener('visibilitychange', hide);
  }, []);
  return <>
    <div className="photo-print">
      <Image src={photo.src} alt={photo.alt} fill unoptimized loading="eager" style={{ objectFit: 'contain' }} sizes="(max-width: 767px) 90vw, 42vw" draggable={false} />
      {photo.video && <video ref={video} muted playsInline preload="none" aria-label={photo.alt}
        className={playing ? 'is-playing' : ''} onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)}
        onError={() => { setPlaying(false); setFailed(true); }} />}
    </div>
    {photo.video && <button type="button" className="photo-live" aria-label={playing ? '暂停动态照片' : '播放动态照片'}
      onClick={() => { if (playing) video.current?.pause(); else { setFailed(false); onPlay(); } }}>
      <span aria-hidden="true">{playing ? 'Ⅱ' : '↻'}</span> {failed ? '重试 LIVE' : playing ? 'PAUSE' : 'LIVE'}
    </button>}
  </>;
}

function PaperPage({ album, index, activeClip, onPlay, replay, reduced, still = false }: {
  album: PhotoAlbum; index: number; activeClip: string | null; onPlay: (id: string) => void;
  replay: number; reduced: boolean; still?: boolean;
}) {
  const photo = album.photos[index];
  return <div className={`album-paper ${index % 2 ? 'paper-right' : 'paper-left'}`}>
    <div className="paper-running"><span>{album.english}</span><span>{album.number}</span></div>
    {photo ? <figure className="paper-figure">
      {still ? <div className="photo-print"><Image src={photo.src} alt="" fill unoptimized loading="eager" style={{ objectFit: 'contain' }} sizes="42vw" draggable={false} /></div> :
        <PhotoPrint key={photo.id} photo={photo} active={activeClip === photo.id} onPlay={() => onPlay(photo.id)} replay={activeClip === photo.id ? replay : 0} reduced={reduced} />}
      <figcaption><span>{photo.id.startsWith('IMG') ? photo.id : 'AUTUMN / 2025'}</span><span>{String(index + 1).padStart(2, '0')}</span></figcaption>
    </figure> : <div className="paper-end"><span>END OF ALBUM</span><p>{album.title}</p><small>{album.photos.length} PHOTOGRAPHS</small></div>}
  </div>;
}

export function PhotoArchive() {
  const [selected, setSelected] = useState<string | null>(null);
  const [positions, setPositions] = useState<Record<string, number>>({});
  const [turn, setTurn] = useState<{ from: number; to: number; direction: number } | null>(null);
  const [reduced, setReduced] = useState(true);
  const [activeClip, setActiveClip] = useState<string | null>(null);
  const [replay, setReplay] = useState(0);
  const root = useRef<HTMLElement>(null);
  const turning = useRef(false);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const mobile = useIsMobile();
  const album = photoAlbums.find(a => a.id === selected);
  const step = mobile ? 1 : 2;
  const savedIndex = selected ? positions[selected] || 0 : 0;
  const index = mobile ? savedIndex : savedIndex - savedIndex % 2;
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(media.matches);
    sync(); media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);
  useEffect(() => {
    if (!turn || !selected) return;
    const timer = window.setTimeout(() => {
      setPositions(p => ({ ...p, [selected]: turn.to }));
      setActiveClip(album?.photos[turn.to]?.id || null);
      setReplay(0); setTurn(null); turning.current = false;
    }, reduced ? 0 : 780);
    return () => window.clearTimeout(timer);
  }, [turn, selected, album, reduced]);
  useEffect(() => {
    if (!album) return;
    for (const photo of album.photos.slice(Math.max(0, index - step), index + step * 2)) {
      const image = new window.Image(); image.src = photo.src;
    }
  }, [album, index, step]);
  const open = (item: PhotoAlbum) => {
    setSelected(item.id); setTurn(null); turning.current = false;
    const pos = positions[item.id] || 0;
    setActiveClip(item.photos[mobile ? pos : pos - pos % 2]?.id || null); setReplay(0);
    requestAnimationFrame(() => root.current?.focus());
  };
  const close = () => {
    const id = selected; setSelected(null); setTurn(null); turning.current = false; setActiveClip(null);
    requestAnimationFrame(() => document.getElementById(`cover-${id}`)?.focus());
  };
  const flip = (direction: number) => {
    if (!album || turning.current) return;
    const to = index + direction * step;
    if (to < 0 || to >= album.photos.length) return;
    turning.current = true; setActiveClip(null); setTurn({ from: index, to, direction });
  };
  const play = (id: string) => { setActiveClip(id); setReplay(r => r + 1); };
  const page = (n: number, still = false) => album && <PaperPage album={album} index={n} activeClip={turn ? null : activeClip} onPlay={play} replay={replay} reduced={reduced} still={still} />;
  useEffect(() => {
    if (!album) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); flip(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); flip(-1); }
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });
  return <main className={`photo-archive${album ? ' album-is-open' : ''}`} ref={root} tabIndex={-1}>
    <header className="photo-header">
      <Link className="photo-return" href="/" onClick={e => {
        if (new URLSearchParams(window.location.search).get('from') === 'room' && window.history.length > 1) { e.preventDefault(); window.history.back(); }
      }}>← <span>返回档案室</span></Link>
      <span className="photo-header-label">PERSONAL ARCHIVE / PHOTOGRAPHY</span>
      <span className="photo-header-count">{album ? `ALBUM ${album.number}` : '02 ALBUMS'}</span>
    </header>
    {!album ? <section className="photo-catalog" aria-labelledby="photo-title">
      <div className="photo-catalog-heading"><div><p>CHAPTER 03 / VISUAL RECORDS</p><h1 id="photo-title">PHOTO<br /><span>ALBUMS</span><sup>〔02〕</sup></h1></div><p className="photo-catalog-caption">摄影与片段<br />PHOTOGRAPHS & FRAGMENTS</p></div>
      <div className="album-shelf">{photoAlbums.map(item => <button id={`cover-${item.id}`} className={`album-cover album-cover-${item.id}`} key={item.id} aria-label={`打开${item.title}影集`} onClick={() => open(item)}>
        <div className="cover-object"><div className="cover-running"><span>PERSONAL ARCHIVE</span><span>VOL. {item.number}</span></div><div className="cover-image"><Image src={item.cover} alt={item.title} fill unoptimized loading="eager" style={{ objectFit: item.id === 'greenland' ? 'cover' : 'contain' }} sizes="(max-width: 767px) 85vw, 32vw" draggable={false} /></div><div className="cover-title"><span>{item.english}</span><strong>{item.title}</strong></div><div className="cover-bottom"><span>{String(item.photos.length).padStart(2, '0')} PHOTOGRAPHS</span><span>{item.photos.some(p => p.video) ? 'STILL + LIVE' : 'FIELD PHOTOGRAPHY'}</span></div></div>
        <div className="cover-label"><span>{item.number} / {item.title}</span><span>打开影集 ↗</span></div>
      </button>)}</div>
      <footer className="photo-catalog-footer"><span>XIAO YUCHENG / 肖裕诚</span><span>COLLECTED MOMENTS</span></footer>
    </section> : <section className="album-reader" aria-label={album.title}>
      <div className="album-toolbar"><button onClick={close}>← 影集目录</button><h1>{album.title}</h1><span>{album.english}</span></div>
      <div className="album-stage" onTouchStart={e => { touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }}
        onTouchEnd={e => { if (!touch.current) return; const dx = e.changedTouches[0].clientX - touch.current.x; const dy = e.changedTouches[0].clientY - touch.current.y; touch.current = null; if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) flip(dx < 0 ? 1 : -1); }}>
        <div className={`open-album${turn ? ' is-turning' : ''}${mobile ? ' single-page' : ''}`}>
          {mobile ? <div className={`mobile-paper${turn ? (turn.direction > 0 ? ' turn-next' : ' turn-previous') : ''}`}>{page(index)}</div> : <>
            <div className="book-base book-left">{page(turn?.direction === -1 ? turn.to : index)}</div>
            <div className="book-base book-right">{page(turn?.direction === 1 ? turn.to + 1 : index + 1)}</div>
            {turn && <div className={`turning-leaf ${turn.direction > 0 ? 'leaf-forward' : 'leaf-backward'}`} aria-hidden="true">
              <div className="leaf-face leaf-front">{page(turn.direction > 0 ? turn.from + 1 : turn.from, true)}</div>
              <div className="leaf-face leaf-back">{page(turn.direction > 0 ? turn.to : turn.to + 1, true)}</div>
            </div>}
          </>}
          <button className="page-corner corner-prev" aria-label="上一页" disabled={index === 0 || !!turn} onClick={() => flip(-1)}>↶</button>
          <button className="page-corner corner-next" aria-label="下一页" disabled={index + step >= album.photos.length || !!turn} onClick={() => flip(1)}>↷</button>
        </div>
      </div>
      <nav className="album-pagination" aria-label="影集翻页"><button onClick={() => flip(-1)} disabled={index === 0 || !!turn}>← 上一页</button><span aria-live="polite" aria-atomic="true">{String(index + 1).padStart(2, '0')}{!mobile && index + 1 < album.photos.length ? ` — ${String(index + 2).padStart(2, '0')}` : ''} <i>/ {String(album.photos.length).padStart(2, '0')}</i></span><button onClick={() => flip(1)} disabled={index + step >= album.photos.length || !!turn}>下一页 →</button></nav>
      <p className="album-instructions">{mobile ? '左右滑动翻页' : '点击页角或使用 ← → 翻页'}{album.photos.some(p => p.video) ? ' · 点击 LIVE 重播动态照片' : ''}</p>
    </section>}
  </main>;
}
