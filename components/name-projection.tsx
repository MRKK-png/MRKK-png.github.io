import Image from "next/image";
import type { CSSProperties } from 'react';

const spotlights = [
  { x: 27, width: 138, height: 780, angle: -12, duration: 9.7, delay: -4.2, low: .07, mid: .16, high: .27, blur: 22 },
  { x: 41, width: 112, height: 720, angle: 18, duration: 12.9, delay: -8.1, low: .06, mid: .14, high: .24, blur: 19 },
  { x: 72, width: 146, height: 820, angle: -10, duration: 11.3, delay: -2.7, low: .08, mid: .18, high: .3, blur: 24 },
  { x: 89, width: 96, height: 690, angle: 7, duration: 14.6, delay: -10.4, low: .025, mid: .07, high: .12, blur: 27 },
];

export function NameProjection() {
  return (
    <>
      <div className="runway-spotlights" aria-hidden="true">
        {spotlights.map((beam, index) => (
          <span key={index} className="spotlight-beam" style={{
            left: `${beam.x}%`, width: `${beam.width}px`,
            '--beam-height': `${beam.height}px`, '--beam-angle': `${beam.angle}deg`,
            '--beam-duration': `${beam.duration}s`, '--beam-delay': `${beam.delay}s`,
            '--beam-low': beam.low, '--beam-mid': beam.mid, '--beam-high': beam.high,
            '--beam-blur': `${beam.blur}px`,
          } as CSSProperties} />
        ))}
      </div>
      <div className="name-projection">
        {/* The external SVG keeps the original lettering and animates its 424 dot paths independently. */}
        <Image
          src="/images/name-projection.svg"
          width={1543}
          height={214}
          alt="XIAO YUCHENG"
          priority
        />
      </div>
    </>
  );
}
