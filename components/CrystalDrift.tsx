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
  { src: asset("/images/crystals/krokoit.png"), side: "right" as const, size: 90, rotateStart: -13, rotateEnd: 347 },
  { src: asset("/images/crystals/rote-painite.png"), side: "left" as const, size: 80, rotateStart: 11, rotateEnd: -336 },
  { src: asset("/images/crystals/kaemmererit.png"), side: "right" as const, size: 85, rotateStart: -9, rotateEnd: 353 },
  { src: asset("/images/crystals/blauer-saphir.png"), side: "left" as const, size: 90, rotateStart: 13, rotateEnd: -341 },
  { src: asset("/images/crystals/andradit-granat.png"), side: "right" as const, size: 85, rotateStart: -14, rotateEnd: 349 },
  { src: asset("/images/crystals/alunit.png"), side: "left" as const, size: 90, rotateStart: 9, rotateEnd: -352 },
  { src: asset("/images/crystals/fluorit.png"), side: "right" as const, size: 95, rotateStart: -11, rotateEnd: 344 },
  { src: asset("/images/crystals/proustit-rubinkristall.png"), side: "left" as const, size: 80, rotateStart: 12, rotateEnd: -339 },
  { src: asset("/images/crystals/turmalin.png"), side: "right" as const, size: 85, rotateStart: -10, rotateEnd: 348 },
  { src: asset("/images/crystals/amethyst.png"), side: "left" as const, size: 85, rotateStart: 7, rotateEnd: -347 },
  { src: asset("/images/crystals/labradorit.png"), side: "right" as const, size: 90, rotateStart: -12, rotateEnd: 336 },
  { src: asset("/images/crystals/rubin.png"), side: "left" as const, size: 80, rotateStart: -9, rotateEnd: 351 },
  { src: asset("/images/crystals/kristallspitze.png"), side: "right" as const, size: 90, rotateStart: 11, rotateEnd: -343 },
];

// Kristalle stehen abwechselnd links/rechts in festem vh-Abstand (22vh), damit
// bei einem ~90vh-Bildschirm ca. 4 gleichzeitig sichtbar sind. Jeder dreht
// sich zusätzlich per CSS scroll(root) — reines CSS, kein JS-Scroll-Handler.
// Grund: auf Mobile läuft natives Scrollen auf einem eigenen Compositor-
// Thread getrennt vom JS-Thread, wodurch jede JS-basierte Positions-
// berechnung dem echten Scrollen leicht hinterherhinkt und beim Stoppen
// sichtbar "nachschnappt". CSS scroll-timelines laufen selbst auf dem
// Compositor-Thread und haben dieses Problem nicht.
const STEP_VH = 22;
const START_VH = 6;

// height="content": Container ist so hoch wie sein Elternelement (für
// Bereiche mit fester Höhe, z.B. nur der Hero). height="page": Container
// erstreckt sich exakt über count*STEP_VH, um die ganze Seite unabhängig
// von ihrer echten Länge mit Kristallen zu schmücken, ohne die Seite selbst
// zu verlängern (er liegt "über" dem Content, nicht im Dokumentfluss).
export function CrystalDrift({
  count = crystals.length,
  indices,
  topOverrides,
  sideOverrides,
}: {
  count?: number;
  /** Explizite Auswahl von Kristall-Indizes statt der ersten `count`. */
  indices?: number[];
  /** Position im Array der sichtbaren Kristalle -> abweichender top-Wert in vh. */
  topOverrides?: Record<number, number>;
  /** Position im Array der sichtbaren Kristalle -> abweichender Randabstand in % (ersetzt die festen 2%). */
  sideOverrides?: Record<number, number>;
}) {
  const visible = (indices ?? crystals.map((_, i) => i).slice(0, count)).map((idx) => crystals[idx]);
  return (
    <div
      className="crystal-drift pointer-events-none absolute inset-x-0 top-0 z-40 overflow-x-hidden"
      style={{ height: `${START_VH + visible.length * STEP_VH}vh` }}
      aria-hidden="true"
    >
      {visible.map((c, i) => {
        const topVh = topOverrides?.[i] ?? START_VH + i * STEP_VH;
        // animation-range pro Kristall relativ zur eigenen top-Position (statt
        // einer für die ganze Seite fixen Range): jeder Kristall bewegt sich
        // erst, sobald man tatsächlich in seine Nähe scrollt, und unabhängig
        // davon, wie lang die Gesamtseite oder wie viele Kristalle sie hat.
        // -100vh: der Kristall betritt den Viewport von unten genau bei
        // scrollY = topVh - 100vh (eine Bildschirmhöhe früher als seine
        // top-Position) — die Range beginnt dort, damit die Bewegung
        // startet, sobald er überhaupt sichtbar wird, statt erst später.
        const rangeStartVh = Math.max(0, topVh - 100);
        const rangeEndVh = topVh + 100;
        return (
          <div
            key={`${c.src}-${i}`}
            className="crystal-float absolute opacity-90"
            style={
              {
                top: `${topVh}vh`,
                [c.side]: `${sideOverrides?.[i] ?? 2}%`,
                width: c.size,
                height: c.size,
                "--rotate-start": `${c.rotateStart}deg`,
                "--rotate-end": `${c.rotateEnd}deg`,
                animationRange: `${rangeStartVh}vh ${rangeEndVh}vh`,
              } as React.CSSProperties
            }
          >
            <Image src={c.src} alt="" fill loading="eager" className="object-contain drop-shadow-xl" sizes="100px" />
          </div>
        );
      })}
    </div>
  );
}
