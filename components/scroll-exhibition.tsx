'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExhibitionOverlay } from '@/components/exhibition-overlay';
import { ExhibitionScene } from '@/components/exhibition-scene';
import { archiveEntries, type ArchiveEntryId, type ArchiveTargetId } from '@/components/archive-content';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const chapterOrder: ArchiveEntryId[] = ['about', 'work', 'archive'];
const chapterHotspotIds = ['hotspot-identity', 'hotspot-imac', 'hotspot-camera'];

export function ScrollExhibition() {
  const journeyRef = useRef<HTMLElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const [roomReady, setRoomReady] = useState(false);
  const [activeEntry, setActiveEntry] = useState<ArchiveEntryId | null>(null);
  const [visited, setVisited] = useState<ArchiveEntryId[]>([]);
  const [projectTransition, setProjectTransition] = useState(false);

  const guidedIndex = chapterOrder.findIndex((entry) => !visited.includes(entry));
  const freeExplore = guidedIndex === -1;

  useEffect(() => {
    const saved = window.localStorage.getItem('archive-guided-chapters');
    if (!saved) return;
    try {
      const entries = JSON.parse(saved) as ArchiveEntryId[];
      const frame = window.requestAnimationFrame(() => {
        setVisited(entries.filter((entry) => chapterOrder.includes(entry)));
      });
      return () => window.cancelAnimationFrame(frame);
    } catch {
      window.localStorage.removeItem('archive-guided-chapters');
    }
  }, []);

  const openEntry = (entry: ArchiveTargetId) => {
    returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    if (entry === 'protocol' || entry === 'photos') {
      window.location.assign(entry === 'protocol' ? '/work/x03?from=room' : '/archive/photo?from=room');
      return;
    }
    if (entry === 'second-nice') {
      setProjectTransition(true);
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      gsap.to('.near-room', {
        scale: reduceMotion ? 1.18 : 1.42,
        xPercent: reduceMotion ? 2 : 14,
        duration: reduceMotion ? 0.16 : 0.68,
        ease: 'power2.inOut',
        onComplete: () => window.location.assign('/archive/2nd-nice'),
      });
      return;
    }
    setActiveEntry(entry);
  };

  const handleDialogChange = (open: boolean) => {
    if (open || !activeEntry) return;
    let nextHotspotId: string | null = null;
    if (chapterOrder.includes(activeEntry)) {
      const chapterIndex = chapterOrder.indexOf(activeEntry);
      nextHotspotId = chapterHotspotIds[chapterIndex + 1] ?? 'free-camera';
      setVisited((current) => {
        const next = current.includes(activeEntry) ? current : [...current, activeEntry];
        window.localStorage.setItem('archive-guided-chapters', JSON.stringify(next));
        return next;
      });
    }
    setActiveEntry(null);
    window.setTimeout(() => {
      if (returnFocusRef.current?.isConnected) {
        returnFocusRef.current.focus();
        return;
      }
      if (nextHotspotId) document.getElementById(nextHotspotId)?.focus();
    }, 0);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const journey = journeyRef.current;
    if (!journey) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

    const context = gsap.context(() => {
      let wasReady = false;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: journey,
          start: 'top top',
          end: 'bottom bottom',
          scrub: reduceMotion.matches ? 0 : 1.15,
          invalidateOnRefresh: true,
          onUpdate: ({ progress }) => {
            const ready = progress >= 0.78;
            if (ready !== wasReady) {
              wasReady = ready;
              setRoomReady(ready);
            }
          },
        },
        defaults: { ease: 'none' },
      });

      // A 0–20 hold, 20–55 approach, 55–75 threshold and 75–100 settle.
      timeline.to({}, { duration: 0.2 });
      timeline
        .to('.scene-camera', {
          scale: reduceMotion.matches ? 1.06 : 1.3,
          yPercent: reduceMotion.matches ? -0.5 : -2.1,
          duration: 0.35,
        }, 0.2)
        .to('.vitrine-depth', {
          scale: reduceMotion.matches ? 1.01 : 1.035,
          yPercent: reduceMotion.matches ? 0 : -0.35,
          duration: 0.35,
        }, 0.2)
        .to('.reflection-depth', {
          yPercent: reduceMotion.matches ? 0 : 2.6,
          scaleY: reduceMotion.matches ? 1 : 1.045,
          opacity: reduceMotion.matches ? 0.42 : 0.72,
          duration: 0.35,
        }, 0.2)
        // The projection inherits the scene-camera zoom and floor displacement.
        // Only the plane angle changes locally as the viewpoint approaches it.
        .to('.name-projection', {
          '--projection-angle': reduceMotion.matches ? '18deg' : '6deg',
          duration: 0.55,
        }, 0.2)
        .to('.identity, .inventory, .archive-status, .scroll-cue', {
          opacity: 0.28,
          duration: 0.16,
        }, 0.39)
        .to('.archive-navigation', { y: -8, opacity: 0.58, duration: 0.13 }, 0.42)
        .to('.approach-shade', { opacity: 0.14, duration: 0.35 }, 0.2)
        .to('.scene-camera', {
          scale: reduceMotion.matches ? 1.08 : 1.42,
          opacity: reduceMotion.matches ? 0.4 : 0.22,
          duration: 0.2,
        }, 0.55)
        .fromTo('.near-room', {
          opacity: 0,
          scale: reduceMotion.matches ? 1.02 : 0.97,
          filter: reduceMotion.matches ? 'none' : 'blur(2px)',
        }, {
          opacity: 1,
          scale: reduceMotion.matches ? 1.05 : 1.08,
          filter: 'blur(0px)',
          duration: 0.2,
        }, 0.55)
        .to('.glass-surface', { opacity: reduceMotion.matches ? 0 : 0.32, duration: 0.07 }, 0.55)
        .to('.glass-surface', { opacity: 0.035, duration: 0.13 }, 0.62)
        .to('.threshold-flash', { opacity: reduceMotion.matches ? 0 : 0.2, duration: 0.018 }, 0.625)
        .to('.threshold-flash', { opacity: 0, duration: 0.025 }, 0.643)
        .to('.identity, .inventory, .archive-status, .scroll-cue, .name-projection', {
          opacity: 0,
          duration: 0.16,
        }, 0.56)
        .to('.archive-navigation', { opacity: 0.4, duration: 0.18 }, 0.57)
        .to('.near-room', {
          scale: reduceMotion.matches ? 1.07 : 1.16,
          yPercent: reduceMotion.matches ? 0 : -0.8,
          duration: 0.25,
        }, 0.75)
        .to('.scene-camera, .approach-shade, .glass-surface', { opacity: 0, duration: 0.18 }, 0.75)
        .to('.archive-navigation', { y: 0, opacity: 0.54, duration: 0.2 }, 0.78);

      if (!reduceMotion.matches && finePointer.matches) {
        const moveBaseX = gsap.quickTo('.scene-pointer', 'x', { duration: 0.8, ease: 'power3.out' });
        const moveBaseY = gsap.quickTo('.scene-pointer', 'y', { duration: 0.8, ease: 'power3.out' });
        const moveRoomX = gsap.quickTo('.vitrine-depth', 'x', { duration: 0.9, ease: 'power3.out' });
        const moveRoomY = gsap.quickTo('.vitrine-depth', 'y', { duration: 0.9, ease: 'power3.out' });
        const moveNearX = gsap.quickTo('.near-room', 'x', { duration: 1.1, ease: 'power3.out' });
        const moveNearY = gsap.quickTo('.near-room', 'y', { duration: 1.1, ease: 'power3.out' });

        const onPointerMove = (event: PointerEvent) => {
          const x = event.clientX / window.innerWidth - 0.5;
          const y = event.clientY / window.innerHeight - 0.5;
          moveBaseX(x * -6);
          moveBaseY(y * -4);
          moveRoomX(x * 8);
          moveRoomY(y * 6);
          moveNearX(x * 4);
          moveNearY(y * 3);
        };

        window.addEventListener('pointermove', onPointerMove, { passive: true });
        return () => window.removeEventListener('pointermove', onPointerMove);
      }
    }, journey);

    return () => context.revert();
  }, []);

  return (
    <main ref={journeyRef} className="archive-journey" aria-labelledby="archive-title">
      <div className="exhibition">
        <h1 id="archive-title" className="sr-only">Personal Archive Room</h1>
        <ExhibitionScene
          roomReady={roomReady}
          guidedIndex={freeExplore ? 0 : guidedIndex}
          freeExplore={freeExplore}
          onOpen={openEntry}
        />
        <ExhibitionOverlay onNavigate={openEntry} />
        <div className={`project-transition-label${projectTransition ? ' is-visible' : ''}`} aria-hidden={!projectTransition}>
          <span>ARCHIVE / SOCIAL DESIGN</span>
          <strong>2nd NICE 第二好</strong>
        </div>
        <Dialog open={activeEntry !== null} onOpenChange={handleDialogChange}>
          {activeEntry && (
            <DialogContent className="archive-sheet sm:max-w-2xl">
              <DialogHeader className="archive-sheet-header">
                <p className="archive-sheet-index">{archiveEntries[activeEntry].eyebrow}</p>
                <DialogTitle className="archive-sheet-title">{archiveEntries[activeEntry].title}</DialogTitle>
                <DialogDescription className={archiveEntries[activeEntry].subtitle ? 'archive-sheet-description' : 'sr-only'}>
                  {archiveEntries[activeEntry].subtitle ?? 'Email and WeChat contact details for XIAO YUCHENG.'}
                </DialogDescription>
              </DialogHeader>
              <div className="archive-sheet-rule" />
              {archiveEntries[activeEntry].content}
            </DialogContent>
          )}
        </Dialog>
      </div>
    </main>
  );
}
