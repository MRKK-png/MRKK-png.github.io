import { ExhibitionScene } from '@/components/exhibition-scene';
import { ExhibitionOverlay } from '@/components/exhibition-overlay';

export default function Home() {
  return (
    <main className="exhibition" aria-labelledby="archive-title">
      <h1 id="archive-title" className="sr-only">Personal Archive Room</h1>
      <ExhibitionScene />
      <ExhibitionOverlay />
    </main>
  );
}
