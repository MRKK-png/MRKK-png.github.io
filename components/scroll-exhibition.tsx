'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExhibitionOverlay } from '@/components/exhibition-overlay';
import { ExhibitionScene } from '@/components/exhibition-scene';

export function ScrollExhibition() {
  const journeyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const journey = journeyRef.current;
    if (!journey) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: journey,
          start: 'top top',
          end: 'bottom bottom',
          scrub: reduceMotion.matches ? 0 : 1.15,
          invalidateOnRefresh: true,
        },
        defaults: { ease: 'none' },
      });

      // The first 20% deliberately holds the approved cover composition.
      timeline.to({}, { duration: 0.2 });
      timeline
        .to('.scene-camera', {
          scale: reduceMotion.matches ? 1.06 : 1.3,
          yPercent: reduceMotion.matches ? -0.5 : -2.1,
          duration: 0.8,
        }, 0.2)
        .to('.vitrine-depth', {
          scale: reduceMotion.matches ? 1.01 : 1.035,
          yPercent: reduceMotion.matches ? 0 : -0.35,
          duration: 0.8,
        }, 0.2)
        .to('.reflection-depth', {
          yPercent: reduceMotion.matches ? 0 : 2.6,
          scaleY: reduceMotion.matches ? 1 : 1.045,
          opacity: reduceMotion.matches ? 0.42 : 0.72,
          duration: 0.8,
        }, 0.2)
        .to('.wall-caption-left', { x: -22, opacity: 0.18, duration: 0.62 }, 0.35)
        .to('.wall-caption-right', { x: 22, opacity: 0.18, duration: 0.62 }, 0.35)
        .to('.identity, .inventory, .archive-status, .scroll-cue', {
          opacity: 0.28,
          duration: 0.58,
        }, 0.39)
        .to('.archive-navigation', { y: -8, opacity: 0.58, duration: 0.55 }, 0.42)
        .to('.approach-shade', { opacity: 0.14, duration: 0.8 }, 0.2);

      if (!reduceMotion.matches && finePointer.matches) {
        const moveBaseX = gsap.quickTo('.scene-pointer', 'x', { duration: 0.8, ease: 'power3.out' });
        const moveBaseY = gsap.quickTo('.scene-pointer', 'y', { duration: 0.8, ease: 'power3.out' });
        const moveRoomX = gsap.quickTo('.vitrine-depth', 'x', { duration: 0.9, ease: 'power3.out' });
        const moveRoomY = gsap.quickTo('.vitrine-depth', 'y', { duration: 0.9, ease: 'power3.out' });

        const onPointerMove = (event: PointerEvent) => {
          const x = event.clientX / window.innerWidth - 0.5;
          const y = event.clientY / window.innerHeight - 0.5;
          moveBaseX(x * -6);
          moveBaseY(y * -4);
          moveRoomX(x * 8);
          moveRoomY(y * 6);
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
        <ExhibitionScene />
        <ExhibitionOverlay />
      </div>
    </main>
  );
}
