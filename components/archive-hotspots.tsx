import type { CSSProperties } from 'react';
import type { ArchiveTargetId } from '@/components/archive-content';

type HotspotData = {
  id: string;
  chapter?: number;
  label: string;
  entry: ArchiveTargetId;
  details: string[];
  x: number;
  y: number;
  align?: 'left' | 'right';
  hidden?: boolean;
};

const guidedHotspots: HotspotData[] = [
  {
    id: 'hotspot-identity', chapter: 1, label: 'WHO AM I', entry: 'about',
    details: ['Identity', 'Education', 'Experience', 'Resume'], x: 20, y: 42,
  },
  {
    id: 'hotspot-imac', chapter: 2, label: 'WHAT I CREATE', entry: 'work',
    details: ['Internship', 'Product Projects', 'Research Projects'], x: 39, y: 57,
  },
  {
    id: 'hotspot-camera', chapter: 3, label: 'WHAT INSPIRES ME', entry: 'archive',
    details: ['Photography', 'Field Notes', 'Architecture', 'Research'], x: 12, y: 69,
  },
];

const freeExploreHotspots: HotspotData[] = [
  { id: 'free-camera', label: 'CAMERA', entry: 'archive', details: ['Canon Powershot E1', 'Photography / observation'], x: 12, y: 69 },
  { id: 'free-computer', label: 'COMPUTER', entry: 'work', details: ['Projects', 'Prototypes / AI products'], x: 39, y: 57 },
  { id: 'free-books', label: 'BOOKS', entry: 'archive', details: ['Research', 'References / field notes'], x: 70, y: 47, align: 'right' },
  {
    id: 'free-clothes', label: 'CLOTHES', entry: 'second-nice', details: ['Identity', 'Social Design', '2nd NICE'], x: 20, y: 42,
  },
  { id: 'free-documents', label: 'DOCUMENTS', entry: 'about', details: ['Education', 'Experience / resume'], x: 83, y: 70, align: 'right' },
  { id: 'free-photographs', label: 'PHOTOGRAPHS', entry: 'archive', details: ['Visual archive', 'Memory / places'], x: 49, y: 31 },
];

function ArchiveHotspot({ item, onOpen }: { item: HotspotData; onOpen: (entry: ArchiveTargetId) => void }) {
  const position = {
    '--hotspot-x': `${item.x}%`,
    '--hotspot-y': `${item.y}%`,
  } as CSSProperties;

  return (
    <button
      id={item.id}
      type="button"
      className={`archive-hotspot${item.align === 'right' ? ' archive-hotspot-right' : ''}`}
      style={position}
      onClick={() => onOpen(item.entry)}
      aria-label={`${item.chapter ? `Chapter ${item.chapter}: ` : ''}${item.label}`}
    >
        <span className="hotspot-marker" aria-hidden="true"><span /></span>
        <span className="hotspot-label" aria-hidden="true">
          <span className="hotspot-label-heading">
            {item.chapter && <em>{String(item.chapter).padStart(2, '0')}</em>}
            <strong>{item.label}</strong>
          </span>
          <span className="hotspot-label-details">
            {item.details.map((detail) => <small key={detail}>{detail}</small>)}
          </span>
        </span>
    </button>
  );
}

export function ArchiveHotspots({
  active,
  guidedIndex,
  freeExplore,
  onOpen,
}: {
  active: boolean;
  guidedIndex: number;
  freeExplore: boolean;
  onOpen: (entry: ArchiveTargetId) => void;
}) {
  const visibleHotspots = freeExplore ? freeExploreHotspots : [guidedHotspots[guidedIndex]];

  return (
    <div className={`archive-hotspots${active ? ' archive-hotspots-active' : ''}`} aria-hidden={!active}>
      {visibleHotspots.map((item) => <ArchiveHotspot key={item.id} item={item} onOpen={onOpen} />)}
      {freeExplore && <output className="free-explore-status">FREE EXPLORE MODE</output>}
    </div>
  );
}
