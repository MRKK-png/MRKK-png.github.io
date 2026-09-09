'use client';

import { Button } from '@/components/ui/button';
import type { ArchiveEntryId } from '@/components/archive-content';

const navigation: Array<{ label: string; entry: ArchiveEntryId }> = [
  { label: 'ARCHIVE', entry: 'archive' },
  { label: 'WORK', entry: 'work' },
  { label: 'ABOUT', entry: 'about' },
  { label: 'CONTACT', entry: 'contact' },
];

export function ExhibitionOverlay({ onNavigate }: { onNavigate: (entry: ArchiveEntryId) => void }) {
  return (
    <div className="exhibition-overlay">
      <header className="exhibition-header">
        <p className="identity">DESIGNER<br />RESEARCHER<br />PHOTOGRAPHER</p>
        <nav className="archive-navigation" aria-label="Portfolio navigation">
          {navigation.map((item) => (
            <div className="nav-entry" key={item.label}>
              <Button variant="ghost" className="nav-label" onClick={() => onNavigate(item.entry)}>{item.label}</Button>
              <span className="nav-note" aria-hidden="true">OPEN INDEX</span>
            </div>
          ))}
        </nav>
        <p className="inventory">MEMORY<br />MATERIAL<br />IDEAS<br />PEOPLE<br />PLACES</p>
      </header>
      <p className="wall-caption wall-caption-left">PAST<br />DATA<br />PRESENT<br />POSSIBILITIES<br />FUTURE<br />HUMANS</p>
      <p className="wall-caption wall-caption-right">ARCHIVE<br />AS<br />A WAY<br />OF<br />IMAGINING<br />TOMORROW</p>
      <footer className="exhibition-footer">
        <p id="content-status" className="archive-status">PERSONAL ARCHIVE<br /><span>SHAO YUCHENG / 肖裕诚</span></p>
        <p className="scroll-cue" aria-label="Scroll to approach the archive">
          SCROLL<br />TO<br />EXPLORE
          <svg viewBox="0 0 16 22" width="16" height="22" fill="none" aria-hidden="true"><path d="M8 1v18M2 13l6 6 6-6" stroke="currentColor" strokeWidth="1" /></svg>
        </p>
      </footer>
    </div>
  );
}
