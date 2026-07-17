import Image from "next/image";

const crystals = [
  { src: "/images/crystals/amethyst.png", side: "left" as const, top: "4%", size: 120, rotateStart: -8, rotateEnd: 25 },
  { src: "/images/crystals/labradorit.png", side: "right" as const, top: "18%", size: 130, rotateStart: 10, rotateEnd: -20 },
  { src: "/images/crystals/kristallspitze.png", side: "left" as const, top: "38%", size: 110, rotateStart: -15, rotateEnd: 15 },
  { src: "/images/crystals/zitrin.png", side: "right" as const, top: "52%", size: 105, rotateStart: 12, rotateEnd: -18 },
  { src: "/images/crystals/karneol.png", side: "left" as const, top: "68%", size: 115, rotateStart: -10, rotateEnd: 22 },
  { src: "/images/crystals/zoisit.png", side: "right" as const, top: "82%", size: 120, rotateStart: 8, rotateEnd: -25 },
];

export function CrystalDrift() {
  return (
    <div className="crystal-drift pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {crystals.map((c, i) => (
        <div
          key={c.src}
          className="crystal-float absolute opacity-0 md:opacity-100"
          style={
            {
              top: c.top,
              [c.side]: "-2%",
              width: c.size,
              height: c.size,
              "--rotate-start": `${c.rotateStart}deg`,
              "--rotate-end": `${c.rotateEnd}deg`,
              animationDelay: `${i * -1.3}s`,
            } as React.CSSProperties
          }
        >
          <Image src={c.src} alt="" fill className="object-contain drop-shadow-xl" sizes="130px" />
        </div>
      ))}
    </div>
  );
}
