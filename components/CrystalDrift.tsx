"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { asset } from "@/lib/assets";

const crystals = [
  { src: asset("/images/crystals/amethyst.png"), side: "left" as const, topPct: 4, size: 90, rotateStart: -8, rotateEnd: 340 },
  { src: asset("/images/crystals/labradorit.png"), side: "right" as const, topPct: 12, size: 100, rotateStart: 10, rotateEnd: -330 },
  { src: asset("/images/crystals/rubin.png"), side: "left" as const, topPct: 26, size: 85, rotateStart: -12, rotateEnd: 348 },
  { src: asset("/images/crystals/kristallspitze.png"), side: "right" as const, topPct: 38, size: 85, rotateStart: -15, rotateEnd: 350 },
  { src: asset("/images/crystals/tuerkiser-kristall.png"), side: "left" as const, topPct: 50, size: 95, rotateStart: 9, rotateEnd: -338 },
  { src: asset("/images/crystals/zitrin.png"), side: "right" as const, topPct: 62, size: 80, rotateStart: 12, rotateEnd: -345 },
  { src: asset("/images/crystals/aquamarin.png"), side: "left" as const, topPct: 74, size: 90, rotateStart: -10, rotateEnd: 342 },
  { src: asset("/images/crystals/karneol.png"), side: "right" as const, topPct: 86, size: 90, rotateStart: -10, rotateEnd: 355 },
  { src: asset("/images/crystals/quadratischer-stein.png"), side: "left" as const, topPct: 98, size: 85, rotateStart: 14, rotateEnd: -352 },
  { src: asset("/images/crystals/roter-stein.png"), side: "right" as const, topPct: 110, size: 90, rotateStart: -9, rotateEnd: 346 },
  { src: asset("/images/crystals/zoisit.png"), side: "left" as const, topPct: 122, size: 95, rotateStart: 8, rotateEnd: -350 },
  { src: asset("/images/crystals/rare-crystal.png"), side: "right" as const, topPct: 134, size: 80, rotateStart: -11, rotateEnd: 341 },
  { src: asset("/images/crystals/kristall-unbekannt.png"), side: "left" as const, topPct: 146, size: 85, rotateStart: 10, rotateEnd: -344 },
];

// Kristalle sind auf 150% der Fensterhöhe verteilt (also ~7 gleichzeitig im
// Bild), driften beim Scrollen nach oben und loopen von unten wieder rein,
// während sie sich weiter drehen.
const LOOP_PCT = 150;

export function CrystalDrift() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>(".crystal-float"));

    let ticking = false;
    function update() {
      ticking = false;
      const vh = window.innerHeight / 100;
      const scrollY = window.scrollY;
      for (const item of items) {
        const basePct = Number(item.dataset.topPct);
        const start = Number(item.dataset.rotateStart);
        const end = Number(item.dataset.rotateEnd);

        // Position driftet mit dem Scrollen nach oben und loopt innerhalb von LOOP_PCT.
        const driftPct = ((basePct - scrollY / vh * 0.6) % LOOP_PCT + LOOP_PCT) % LOOP_PCT;
        const angle = start + (end - start) * ((scrollY / vh) % 360) / 360;

        item.style.top = `${driftPct}%`;
        item.style.transform = `rotate(${angle}deg)`;
      }
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className="crystal-drift pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
      {crystals.map((c) => (
        <div
          key={c.src}
          className="crystal-float absolute opacity-90"
          data-top-pct={c.topPct}
          data-rotate-start={c.rotateStart}
          data-rotate-end={c.rotateEnd}
          style={{
            top: `${c.topPct}%`,
            [c.side]: "2%",
            width: c.size,
            height: c.size,
            transform: `rotate(${c.rotateStart}deg)`,
          }}
        >
          <Image src={c.src} alt="" fill className="object-contain drop-shadow-xl" sizes="100px" />
        </div>
      ))}
    </div>
  );
}
