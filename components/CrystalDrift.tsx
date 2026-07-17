import Image from "next/image";
import { asset } from "@/lib/assets";

const crystals = [
  { src: asset("/images/crystals/amethyst.png"), side: "left" as const, top: "4%", size: 90, rotateStart: -8, rotateEnd: 340 },
  { src: asset("/images/crystals/labradorit.png"), side: "right" as const, top: "10%", size: 100, rotateStart: 10, rotateEnd: -330 },
  { src: asset("/images/crystals/rubin.png"), side: "left" as const, top: "18%", size: 85, rotateStart: -12, rotateEnd: 348 },
  { src: asset("/images/crystals/kristallspitze.png"), side: "right" as const, top: "26%", size: 85, rotateStart: -15, rotateEnd: 350 },
  { src: asset("/images/crystals/tuerkiser-kristall.png"), side: "left" as const, top: "34%", size: 95, rotateStart: 9, rotateEnd: -338 },
  { src: asset("/images/crystals/zitrin.png"), side: "right" as const, top: "42%", size: 80, rotateStart: 12, rotateEnd: -345 },
  { src: asset("/images/crystals/aquamarin.png"), side: "left" as const, top: "50%", size: 90, rotateStart: -10, rotateEnd: 342 },
  { src: asset("/images/crystals/karneol.png"), side: "right" as const, top: "58%", size: 90, rotateStart: -10, rotateEnd: 355 },
  { src: asset("/images/crystals/quadratischer-stein.png"), side: "left" as const, top: "66%", size: 85, rotateStart: 14, rotateEnd: -352 },
  { src: asset("/images/crystals/roter-stein.png"), side: "right" as const, top: "74%", size: 90, rotateStart: -9, rotateEnd: 346 },
  { src: asset("/images/crystals/zoisit.png"), side: "left" as const, top: "82%", size: 95, rotateStart: 8, rotateEnd: -350 },
  { src: asset("/images/crystals/rare-crystal.png"), side: "right" as const, top: "88%", size: 80, rotateStart: -11, rotateEnd: 341 },
  { src: asset("/images/crystals/kristall-unbekannt.png"), side: "left" as const, top: "94%", size: 85, rotateStart: 10, rotateEnd: -344 },
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
