import Image from "next/image";
import { asset } from "@/lib/assets";

// Jedes Objekt hat eine eigene topPct/leftPct-Position (unregelmäßig verteilt,
// keine formelhafte Kette) statt einem gleichmäßigen Raster — wirkt organischer,
// weniger symmetrisch. Die Werte decken 4%–92% ab, damit nichts am Rand
// abgeschnitten wirkt.
const crystals = [
  { src: asset("/images/crystals/amethyst.png"), top: 4, left: 3, size: 90, rotateStart: -8, rotateEnd: 340 },
  { src: asset("/images/crystals/labradorit.png"), top: 10, left: 82, size: 100, rotateStart: 10, rotateEnd: -330 },
  { src: asset("/images/crystals/rubin.png"), top: 22, left: 12, size: 85, rotateStart: -12, rotateEnd: 348 },
  { src: asset("/images/crystals/kristallspitze.png"), top: 16, left: 68, size: 85, rotateStart: -15, rotateEnd: 350 },
  { src: asset("/images/crystals/tuerkiser-kristall.png"), top: 34, left: 88, size: 95, rotateStart: 9, rotateEnd: -338 },
  { src: asset("/images/crystals/zitrin.png"), top: 30, left: 6, size: 80, rotateStart: 12, rotateEnd: -345 },
  { src: asset("/images/crystals/aquamarin.png"), top: 46, left: 78, size: 90, rotateStart: -10, rotateEnd: 342 },
  { src: asset("/images/crystals/karneol.png"), top: 42, left: 20, size: 90, rotateStart: -10, rotateEnd: 355 },
  { src: asset("/images/crystals/quadratischer-stein.png"), top: 58, left: 90, size: 85, rotateStart: 14, rotateEnd: -352 },
  { src: asset("/images/crystals/roter-stein.png"), top: 54, left: 4, size: 90, rotateStart: -9, rotateEnd: 346 },
  { src: asset("/images/crystals/zoisit.png"), top: 66, left: 72, size: 95, rotateStart: 8, rotateEnd: -350 },
  { src: asset("/images/crystals/rare-crystal.png"), top: 70, left: 26, size: 80, rotateStart: -11, rotateEnd: 341 },
  { src: asset("/images/crystals/kristall-unbekannt.png"), top: 78, left: 85, size: 85, rotateStart: 10, rotateEnd: -344 },
  { src: asset("/images/crystals/krokoit.png"), top: 82, left: 10, size: 90, rotateStart: -13, rotateEnd: 347 },
  { src: asset("/images/crystals/rote-painite.png"), top: 14, left: 40, size: 80, rotateStart: 11, rotateEnd: -336 },
  { src: asset("/images/crystals/kaemmererit.png"), top: 38, left: 55, size: 85, rotateStart: -9, rotateEnd: 353 },
  { src: asset("/images/crystals/blauer-saphir.png"), top: 62, left: 45, size: 90, rotateStart: 13, rotateEnd: -341 },
  { src: asset("/images/crystals/andradit-granat.png"), top: 88, left: 60, size: 85, rotateStart: -14, rotateEnd: 349 },
  { src: asset("/images/crystals/alunit.png"), top: 26, left: 92, size: 90, rotateStart: 9, rotateEnd: -352 },
  { src: asset("/images/crystals/fluorit.png"), top: 50, left: 34, size: 95, rotateStart: -11, rotateEnd: 344 },
  { src: asset("/images/crystals/proustit-rubinkristall.png"), top: 74, left: 50, size: 80, rotateStart: 12, rotateEnd: -339 },
  { src: asset("/images/crystals/turmalin.png"), top: 92, left: 30, size: 85, rotateStart: -10, rotateEnd: 348 },
];

// Jeder Kristall steht an einer festen Stelle relativ zum umgebenden Element
// (top/left in % von dessen Höhe/Breite) und dreht sich zusätzlich per CSS
// scroll(root) — reines CSS, kein JS-Scroll-Handler. Grund: auf Mobile läuft
// natives Scrollen auf einem eigenen Compositor-Thread getrennt vom
// JS-Thread, wodurch jede JS-basierte Positionsberechnung dem echten
// Scrollen leicht hinterherhinkt und beim Stoppen sichtbar "nachschnappt".
// CSS scroll-timelines laufen selbst auf dem Compositor-Thread und haben
// dieses Problem nicht.
export function CrystalDrift({ count = crystals.length }: { count?: number }) {
  const visible = crystals.slice(0, count);
  return (
    <div className="crystal-drift pointer-events-none absolute inset-0 z-40 overflow-hidden" aria-hidden="true">
      {visible.map((c) => (
        <div
          key={c.src}
          className="crystal-float absolute opacity-90"
          style={
            {
              top: `${c.top}%`,
              left: `${c.left}%`,
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
