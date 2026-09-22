/* oxlint-disable next/no-img-element -- Project figures are compressed local documentation assets. */
import type { ReactNode } from 'react';
import { ArchiveReturn } from '@/components/archive-return';

export function WorkDocument({ category, title, subtitle, description, children, section = 'WORK' }: {
  section?: 'WORK' | 'ARCHIVE'; category: string; title: string; subtitle: string; description: ReactNode; children: ReactNode;
}) {
  return <main className="work-document-page">
    <header className="project-document-header">
      <ArchiveReturn /><p>PERSONAL ARCHIVE / {section} / {category}</p><p>DATE / [ TO BE ADDED ]</p>
    </header>
    <article className="work-document">
      <header className="work-document-hero">
        <p className="project-kicker">{section === 'ARCHIVE' ? 'CHAPTER 03' : section} / {category}</p>
        <h1 className={section === 'ARCHIVE' && title.length > 20 ? 'work-title-long' : undefined}>{title}</h1><p className="work-subtitle">{subtitle}</p>
        <div className="work-introduction">{description}</div>
      </header>
      {children}
      <footer className="project-document-footer"><p>XIAO YUCHENG / 肖裕诚</p><p>DESIGN DOCUMENTATION</p><ArchiveReturn /></footer>
    </article>
  </main>;
}

export function WorkSection({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return <section className="work-section"><div className="project-section-heading"><span>{number}</span><h2>{title}</h2></div><div className="work-section-body">{children}</div></section>;
}

export function WorkFigure({ src, alt, caption, width = 1920, height = 1080 }: { src: string; alt: string; caption: string; width?: number; height?: number }) {
  return <figure className="work-figure"><img src={src} alt={alt} width={width} height={height} loading="lazy" /><figcaption>{caption}</figcaption></figure>;
}
