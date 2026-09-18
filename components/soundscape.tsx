/* oxlint-disable jsx-a11y/media-has-caption -- Instrumental soundtrack; credit links identify the recording. */
'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

/** Music starts only from this control; audible project media takes priority. */
export function Soundscape() {
  const audio = useRef<HTMLAudioElement>(null);
  const enabled = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const [credits, setCredits] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const music = audio.current;
    if (!music) return;
    music.volume = 0.22;
    const hasAudibleMedia = () => Array.from(document.querySelectorAll('video, audio')).some((media) => {
      const item = media as HTMLMediaElement;
      return item !== music && !item.paused && !item.ended && !item.muted && item.volume > 0;
    });
    const sync = () => {
      if (!enabled.current || document.hidden || hasAudibleMedia()) music.pause();
      else void music.play().catch(() => { setFailed(true); });
    };
    const onMedia = (event: Event) => { if (event.target !== music) sync(); };
    for (const event of ['play', 'pause', 'ended', 'volumechange']) document.addEventListener(event, onMedia, true);
    document.addEventListener('visibilitychange', sync);
    return () => {
      for (const event of ['play', 'pause', 'ended', 'volumechange']) document.removeEventListener(event, onMedia, true);
      document.removeEventListener('visibilitychange', sync);
      music.pause();
    };
  }, []);

  const toggle = () => {
    const music = audio.current;
    if (!music) return;
    if (enabled.current && !failed) { enabled.current = false; music.pause(); return; }
    enabled.current = true;
    setFailed(false);
    const otherMedia = Array.from(document.querySelectorAll('video, audio')).some((media) => {
      const item = media as HTMLMediaElement;
      return item !== music && !item.paused && !item.ended && !item.muted && item.volume > 0;
    });
    if (otherMedia) return;
    // This call stays in the user gesture, including on mobile browsers.
    void music.play().catch(() => { enabled.current = false; setFailed(true); });
  };

  return <aside className={`sound-control${path !== '/' ? ' sound-control-document' : ''}`} aria-label="Exhibition soundtrack">
    <audio ref={audio} src="/assets/audio/ketsa-teach-me-jazz.mp3" loop preload="none"
      onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
    <button type="button" onClick={toggle} aria-pressed={playing} aria-label={playing ? '关闭背景音乐' : '开启背景音乐'}>
      {failed ? 'SOUND / RETRY' : playing ? 'SOUND ON' : 'SOUND OFF'}
    </button>
    <span aria-hidden="true">·</span>
    <button type="button" aria-expanded={credits} aria-controls="sound-credits" onClick={() => setCredits(!credits)}>CREDITS</button>
    {credits && <div className="sound-credits" id="sound-credits">
      <p>Music: <a href="https://freemusicarchive.org/music/Ketsa/master-builder/teach-me-jazz/" target="_blank" rel="noreferrer">Teach Me Jazz</a></p>
      <p>By <a href="https://ketsa.uk/" target="_blank" rel="noreferrer">Ketsa / Ketsa.uk</a> · Free Music Archive</p>
      <p><a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">CC BY 4.0</a> · Original recording</p>
    </div>}
  </aside>;
}
