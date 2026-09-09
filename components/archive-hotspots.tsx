'use client';

import type { CSSProperties } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

type HotspotData = {
  id: string;
  label: string;
  object: string;
  descriptor: string;
  categories: string[];
  x: number;
  y: number;
  align?: 'left' | 'right';
  hidden?: boolean;
};

const hotspots: HotspotData[] = [
  {
    id: 'hotspot-camera',
    label: 'FIELD NOTES',
    object: 'Canon Powershot E1',
    descriptor: 'Photography / observation',
    categories: ['Photography', 'Travel observations', 'Visual research', 'Field notes'],
    x: 11,
    y: 68,
  },
  {
    id: 'hotspot-imac',
    label: 'SELECTED WORKS',
    object: 'Old iMac / computer',
    descriptor: 'Projects / prototypes',
    categories: ['Portfolio projects', 'Prototypes', 'AI product work', 'Case studies'],
    x: 39,
    y: 57,
  },
  {
    id: 'hotspot-archive',
    label: 'ARCHIVE',
    object: 'Shelves / folders',
    descriptor: 'Experience / records',
    categories: ['CV', 'Experience', 'Education', 'Awards', 'Skills'],
    x: 70,
    y: 43,
    align: 'right',
  },
  {
    id: 'hotspot-identity',
    label: 'IDENTITY',
    object: 'Garment area',
    descriptor: 'About / perspective',
    categories: ['About', 'Interests', 'Design perspective', 'Personal statement'],
    x: 19,
    y: 45,
  },
  {
    id: 'hotspot-journey',
    label: 'JOURNEY',
    object: 'Archive collage',
    descriptor: 'Timeline / trajectory',
    categories: ['Timeline', 'Architecture to interaction', 'Research trajectory'],
    x: 48,
    y: 35,
  },
  {
    id: 'hotspot-extra',
    label: 'EXTRA',
    object: 'Small archive object',
    descriptor: 'Experiments / references',
    categories: ['Reading', 'Music', 'Bookmarks', 'Experiments'],
    x: 82,
    y: 71,
    align: 'right',
    hidden: true,
  },
];

function ArchiveHotspot({ item, active }: { item: HotspotData; active: boolean }) {
  const position = {
    '--hotspot-x': `${item.x}%`,
    '--hotspot-y': `${item.y}%`,
  } as CSSProperties;

  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            id={item.id}
            type="button"
            className={`archive-hotspot${item.align === 'right' ? ' archive-hotspot-right' : ''}${item.hidden ? ' archive-hotspot-hidden' : ''}`}
            style={position}
            disabled={!active}
            tabIndex={active ? 0 : -1}
            aria-label={`${item.label}: ${item.object}`}
          />
        }
      >
        <span className="hotspot-marker" aria-hidden="true"><span /></span>
        <span className="hotspot-label" aria-hidden="true">
          <strong>{item.label}</strong>
          <span>{item.object}</span>
          <small>{item.descriptor}</small>
        </span>
      </DialogTrigger>

      <DialogContent className="archive-sheet sm:max-w-lg">
        <DialogHeader className="archive-sheet-header">
          <p className="archive-sheet-index">ARCHIVE ENTRY / STRUCTURE RESERVED</p>
          <DialogTitle className="archive-sheet-title">{item.label}</DialogTitle>
          <DialogDescription className="archive-sheet-description">
            {item.object}<br />{item.descriptor}
          </DialogDescription>
        </DialogHeader>
        <div className="archive-sheet-rule" />
        <p className="archive-sheet-status">CONTENT IN PREPARATION</p>
        <ul className="archive-sheet-list">
          {item.categories.map((category) => <li key={category}>{category}</li>)}
        </ul>
        <p className="archive-sheet-note">
          This entry is a provisional navigation structure. Final material and wording will replace this placeholder.
        </p>
      </DialogContent>
    </Dialog>
  );
}

export function ArchiveHotspots({ active }: { active: boolean }) {
  return (
    <div className={`archive-hotspots${active ? ' archive-hotspots-active' : ''}`} aria-hidden={!active}>
      {hotspots.map((item) => <ArchiveHotspot key={item.id} item={item} active={active} />)}
    </div>
  );
}
