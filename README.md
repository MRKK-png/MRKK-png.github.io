# Personal Archive Room — Phase 1

Static exhibition homepage. Run `npm install` and `npm run dev` in this directory.

Built with the Sites scaffold (Vinext's Next.js App Router API, React, TypeScript, Tailwind). No GSAP, WebGL or 3D dependency has been added for this static phase.

## Scope

- Centered glass vitrine, magenta exhibition hall and reflective floor.
- Interior follows the latest reference: garments left, desk and blue iMac center, pink shelving and mannequin right.
- Independent HTML navigation and editorial captions. Copy remains provisional. Navigation is intentionally marked `aria-disabled` but keyboard-focusable; no content destinations exist yet.
- Scroll indicator is visual only in Phase 1. No scroll sequence, object hotspots or content panels yet.
- Scene asset is a single photographic plate. It is not a separated 2.5D scene yet.

## Assets

`public/images/exhibition.jpg` is the compressed generated composite; full source and original reference images are retained in the parent workspace's `public/` directory. Output resolution is 1672 × 941. A higher-resolution plate and separate depth layers will be required for the approach phase. Camera props are not verified as Canon Powershot E1 and should be replaced with an accurate asset before enabling its hotspot.

The source documents are `../AGENTS.md`, `../docs/project-brief.md`, `../docs/interaction-spec.md` and `../docs/reference-map.md`.

## Verification

Visually inspected at 1440 × 900, 1280 × 800 and 1728 × 1117. Central vitrine and its base remain fully visible; side captions do not overlap the vitrine. Keyboard Tab reaches the provisional navigation and displays a visible focus outline.

`npm run build`, TypeScript and lint for authored components are the Phase 1 checks. The full scaffold lint has pre-existing failures in unused Shadcn components and hooks; those vendored files are preserved. The installation also reports dependency audit findings; dependencies were not force-upgraded as part of this visual phase.

Mobile narrative adaptation and final content accessibility belong to the later responsive/content phases.
