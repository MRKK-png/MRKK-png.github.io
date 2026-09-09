/* oxlint-disable next/no-img-element -- This precompressed photographic plate is served directly; avoid runtime image processing. */
/** Phase 1 photographic plate. Split depth assets here in the approach phase. */
export function ExhibitionScene() {
  return (
    <div className="scene-stage">
      <img className="scene-plate" src="/images/exhibition.jpg" width={1672} height={941}
        fetchPriority="high"
        alt="A white personal archive displayed in a central glass vitrine, surrounded by magenta gallery walls and a reflective black floor. Garments stand on the left, a blue iMac and chair at the center, and pink-backed shelves and a mannequin on the right." />
    </div>
  );
}
