# Personal Archive Room — Phase 2

Scroll-led exhibition homepage. Run `npm install` and `npm run dev` in this directory.

Built with the Sites scaffold (Vinext's Next.js App Router API, React, TypeScript, Tailwind) and GSAP ScrollTrigger. No WebGL or 3D dependency has been added.

## Scope

- Centered glass vitrine, magenta exhibition hall and reflective floor.
- Interior follows the latest reference: garments left, desk and blue iMac center, pink shelving and mannequin right.
- Independent HTML navigation and editorial captions. Copy remains provisional. Navigation is intentionally marked `aria-disabled` but keyboard-focusable; no content destinations exist yet.
- The opening frame holds for the first 20% of progress, then slowly approaches the vitrine.
- The camera plate, vitrine detail, floor reflection and editorial overlay move at restrained, different rates.
- Fine pointers add 4–8 px of ambient parallax. Touch devices and reduced-motion settings suppress it.
- No glass-threshold transition, object hotspots or content panels yet.
- Scene depth is simulated from masked copies of one photographic plate. True separated assets remain a later fidelity upgrade.

## Assets

`public/images/exhibition.jpg` is the compressed generated composite; full source and original reference images are retained in the parent workspace's `public/` directory. Output resolution is 1672 × 941. A higher-resolution plate and separate depth layers will be required for the approach phase. Camera props are not verified as Canon Powershot E1 and should be replaced with an accurate asset before enabling its hotspot.

The source documents are `../AGENTS.md`, `../docs/project-brief.md`, `../docs/interaction-spec.md` and `../docs/reference-map.md`.

## Verification

The Phase 1 opening frame was visually inspected at 1440 × 900, 1280 × 800 and 1728 × 1117. Phase 2 preserves that exact zero-scroll composition. Central vitrine and its base remain fully visible; side captions do not overlap the vitrine. Keyboard Tab reaches the provisional navigation and displays a visible focus outline.

`npm run build`, TypeScript and lint for authored components are the Phase 2 checks. The full scaffold lint has pre-existing failures in unused Shadcn components and hooks; those vendored files are preserved. The installation also reports dependency audit findings; dependencies were not force-upgraded as part of this visual phase.

Mobile narrative adaptation and final content accessibility belong to the later responsive/content phases.
