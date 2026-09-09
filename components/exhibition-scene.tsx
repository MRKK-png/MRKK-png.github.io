/* oxlint-disable next/no-img-element -- This precompressed photographic plate is served directly; avoid runtime image processing. */
import { ArchiveHotspots } from '@/components/archive-hotspots';
import type { ArchiveEntryId } from '@/components/archive-content';

/** Exterior plate and user-approved near-room plate for the threshold sequence. */
export function ExhibitionScene({ roomReady, guidedIndex, freeExplore, onOpen }: {
  roomReady: boolean;
  guidedIndex: number;
  freeExplore: boolean;
  onOpen: (entry: ArchiveEntryId) => void;
}) {
  return (
    <div className="scene-stage">
      <div className="scene-camera">
        <div className="scene-pointer">
          <img className="scene-plate" src="/images/exhibition.jpg" width={1672} height={941}
            fetchPriority="high"
            alt="A white personal archive displayed in a central glass vitrine, surrounded by magenta gallery walls and a reflective black floor. Garments stand on the left, a blue iMac and chair at the center, and pink-backed shelves and a mannequin on the right." />
        </div>
        <div className="vitrine-depth" aria-hidden="true">
          <img className="scene-plate" src="/images/exhibition.jpg" width={1672} height={941} alt="" />
        </div>
        <div className="reflection-depth" aria-hidden="true">
          <img className="scene-plate" src="/images/exhibition.jpg" width={1672} height={941} alt="" />
        </div>
      </div>
      <div className="near-room">
        <img className="near-room-plate" src="/images/archive-room-close.jpg" width={1601} height={983} alt="" />
        <ArchiveHotspots active={roomReady} guidedIndex={guidedIndex} freeExplore={freeExplore} onOpen={onOpen} />
      </div>
      <div className="glass-surface" aria-hidden="true" />
      <div className="threshold-flash" aria-hidden="true" />
      <div className="approach-shade" aria-hidden="true" />
    </div>
  );
}
