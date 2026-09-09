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
        .to('.wall-caption-left', { x: -22, opacity: 0.18, duration: 0.2 }, 0.35)
        .to('.wall-caption-right', { x: 22, opacity: 0.18, duration: 0.2 }, 0.35)
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
        .to('.wall-caption, .identity, .inventory, .archive-status, .scroll-cue', {
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
        <ExhibitionScene />
        <ExhibitionOverlay />
      </div>
    </main>
  );
}
