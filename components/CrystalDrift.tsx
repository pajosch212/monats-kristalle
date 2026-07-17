import Image from "next/image";
import { asset } from "@/lib/assets";

const crystals = [
  { src: asset("/images/crystals/amethyst.png"), side: "left" as const, top: "6%", size: 90, rotateStart: -8, rotateEnd: 340 },
  { src: asset("/images/crystals/labradorit.png"), side: "right" as const, top: "12%", size: 100, rotateStart: 10, rotateEnd: -330 },
  { src: asset("/images/crystals/kristallspitze.png"), side: "left" as const, top: "30%", size: 85, rotateStart: -15, rotateEnd: 350 },
  { src: asset("/images/crystals/zitrin.png"), side: "right" as const, top: "42%", size: 80, rotateStart: 12, rotateEnd: -345 },
  { src: asset("/images/crystals/karneol.png"), side: "left" as const, top: "58%", size: 90, rotateStart: -10, rotateEnd: 355 },
  { src: asset("/images/crystals/zoisit.png"), side: "right" as const, top: "70%", size: 95, rotateStart: 8, rotateEnd: -350 },
];

export function CrystalDrift() {
  return (
    <div className="crystal-drift pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
      {crystals.map((c, i) => (
        <div
          key={c.src}
          className="crystal-float absolute opacity-90"
          style={
            {
              top: c.top,
              [c.side]: "2%",
              width: c.size,
              height: c.size,
              "--rotate-start": `${c.rotateStart}deg`,
              "--rotate-end": `${c.rotateEnd}deg`,
              animationDelay: `${i * -1.3}s`,
            } as React.CSSProperties
          }
        >
          <Image src={c.src} alt="" fill className="object-contain drop-shadow-xl" sizes="100px" />
        </div>
      ))}
    </div>
  );
}
