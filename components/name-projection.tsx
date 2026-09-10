import Image from "next/image";
import type { CSSProperties } from 'react';

// Fixed positions keep the server and client identical; independent periods avoid a shared pulse.
const glints = [
  [15, 24, 8.7, -2.1], [29, 71, 11.3, -7.4], [43, 39, 13.1, -4.8],
  [53, 18, 9.9, -6.2], [64, 67, 14.7, -10.3], [76, 30, 12.1, -1.7],
  [88, 76, 10.9, -8.6],
];

export function NameProjection() {
  return (
    <div className="name-projection">
      {/* Replace this file to update the custom projection lettering. */}
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
  );
}
