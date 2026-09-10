import Image from "next/image";
import type { CSSProperties } from 'react';

// Fixed positions keep the server and client identical; independent periods avoid a shared pulse.
const glints = [
  [15, 24, 8.7, -2.1], [29, 71, 11.3, -7.4], [43, 39, 13.1, -4.8],
  [53, 18, 9.9, -6.2], [64, 67, 14.7, -10.3], [76, 30, 12.1, -1.7],
  [88, 76, 10.9, -8.6],
];

const spotlights = [
  [7, 112, 10.8, -3.2, -8], [18, 94, 13.4, -7.8, 7], [31, 82, 11.7, -1.6, -5],
  [45, 104, 14.2, -9.1, 6], [59, 88, 12.6, -5.3, -7], [73, 116, 15.1, -11.2, 8],
  [87, 98, 11.9, -4.4, -6], [96, 108, 13.8, -8.5, 5],
];

export function NameProjection() {
  return (
    <>
      <div className="runway-spotlights" aria-hidden="true">
        {spotlights.map(([x, width, duration, delay, drift], index) => (
          <span key={index} className="spotlight-beam" style={{
            left: `${x}%`, width: `${width}px`,
            '--beam-duration': `${duration}s`, '--beam-delay': `${delay}s`, '--beam-drift': `${drift}px`,
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
        <div className="projection-glints" aria-hidden="true">
          {glints.map(([x, y, duration, delay], index) => (
            <span key={index} className="projection-glint" style={{
              left: `${x}%`, top: `${y}%`,
              '--glint-duration': `${duration}s`, '--glint-delay': `${delay}s`,
            } as CSSProperties} />
          ))}
        </div>
      </div>
    </>
  );
}
