'use client';

import { Button } from '@/components/ui/button';

const navigation = ['ARCHIVE', 'WORK', 'ABOUT', 'CONTACT'];

export function ExhibitionOverlay() {
  return (
    <div className="exhibition-overlay">
      <header className="exhibition-header">
        <p className="identity">DESIGNER<br />RESEARCHER<br />PHOTOGRAPHER</p>
        <nav className="archive-navigation" aria-label="Portfolio navigation — content in preparation">
          {navigation.map((item) => (
            <div className="nav-entry" key={item}>
              <Button variant="ghost" className="nav-label" aria-disabled="true" aria-describedby="content-status">{item}</Button>
              <span className="nav-note" aria-hidden="true">IN PREPARATION</span>
            </div>
          ))}
        </nav>
        <p className="inventory">MEMORY<br />MATERIAL<br />IDEAS<br />PEOPLE<br />PLACES</p>
      </header>
      <p className="wall-caption wall-caption-left">PAST<br />DATA<br />PRESENT<br />POSSIBILITIES<br />FUTURE<br />HUMANS</p>
      <p className="wall-caption wall-caption-right">ARCHIVE<br />AS<br />A WAY<br />OF<br />IMAGINING<br />TOMORROW</p>
      <footer className="exhibition-footer">
        <p id="content-status" className="archive-status">PERSONAL ARCHIVE<br /><span>INDEX IN PREPARATION</span></p>
        <p className="scroll-cue" aria-label="Scroll to explore — available in the next phase">
          SCROLL<br />TO<br />EXPLORE
          <svg viewBox="0 0 16 22" width="16" height="22" fill="none" aria-hidden="true"><path d="M8 1v18M2 13l6 6 6-6" stroke="currentColor" strokeWidth="1" /></svg>
        </p>
      </footer>
    </div>
  );
}
