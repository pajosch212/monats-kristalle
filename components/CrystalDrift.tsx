import Image from "next/image";
import { asset } from "@/lib/assets";

const crystals = [
  { src: asset("/images/crystals/amethyst.png"), side: "left" as const, size: 90, rotateStart: -8, rotateEnd: 340 },
  { src: asset("/images/crystals/labradorit.png"), side: "right" as const, size: 100, rotateStart: 10, rotateEnd: -330 },
  { src: asset("/images/crystals/rubin.png"), side: "left" as const, size: 85, rotateStart: -12, rotateEnd: 348 },
  { src: asset("/images/crystals/kristallspitze.png"), side: "right" as const, size: 85, rotateStart: -15, rotateEnd: 350 },
  { src: asset("/images/crystals/tuerkiser-kristall.png"), side: "left" as const, size: 95, rotateStart: 9, rotateEnd: -338 },
  { src: asset("/images/crystals/zitrin.png"), side: "right" as const, size: 80, rotateStart: 12, rotateEnd: -345 },
  { src: asset("/images/crystals/aquamarin.png"), side: "left" as const, size: 90, rotateStart: -10, rotateEnd: 342 },
  { src: asset("/images/crystals/karneol.png"), side: "right" as const, size: 90, rotateStart: -10, rotateEnd: 355 },
  { src: asset("/images/crystals/quadratischer-stein.png"), side: "left" as const, size: 85, rotateStart: 14, rotateEnd: -352 },
  { src: asset("/images/crystals/roter-stein.png"), side: "right" as const, size: 90, rotateStart: -9, rotateEnd: 346 },
  { src: asset("/images/crystals/zoisit.png"), side: "left" as const, size: 95, rotateStart: 8, rotateEnd: -350 },
  { src: asset("/images/crystals/rare-crystal.png"), side: "right" as const, size: 80, rotateStart: -11, rotateEnd: 341 },
  { src: asset("/images/crystals/kristall-unbekannt.png"), side: "left" as const, size: 85, rotateStart: 10, rotateEnd: -344 },
];

// Jeder Kristall steht an einer festen Stelle im Dokument (48vh Abstand
// zueinander, also ~2 gleichzeitig im Bild bei ~90vh Viewport) und dreht
// sich rein über CSS scroll(root) — reines CSS, kein JS-Scroll-Handler.
// Grund: auf Mobile läuft natives Scrollen auf einem eigenen Compositor-
// Thread getrennt vom JS-Thread, wodurch jede JS-basierte Positions-
// berechnung dem echten Scrollen leicht hinterherhinkt und beim Stoppen
// sichtbar "nachschnappt". CSS scroll-timelines laufen selbst auf dem
// Compositor-Thread und haben dieses Problem nicht.
const STEP_VH = 48;

export function CrystalDrift() {
  return (
    <div
      className="crystal-drift pointer-events-none absolute inset-x-0 top-0 z-40"
      style={{ height: `${crystals.length * STEP_VH}vh` }}
      aria-hidden="true"
    >
      {crystals.map((c, i) => (
        <div
          key={c.src}
          className="crystal-float absolute opacity-90"
          style={
            {
              top: `${i * STEP_VH}vh`,
              [c.side]: "2%",
              width: c.size,
              height: c.size,
              "--rotate-start": `${c.rotateStart}deg`,
              "--rotate-end": `${c.rotateEnd}deg`,
            } as React.CSSProperties
          }
        >
          <Image src={c.src} alt="" fill className="object-contain drop-shadow-xl" sizes="100px" />
        </div>
      ))}
    </div>
  );
}
