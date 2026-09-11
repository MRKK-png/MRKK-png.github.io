import Image from "next/image";

export function NameProjection() {
  return (
    <div className="name-projection">
      <Image
        src="/images/name-projection.svg"
        width={1543}
        height={214}
        alt="XIAO YUCHENG"
        priority
      />
    </div>
  );
}
