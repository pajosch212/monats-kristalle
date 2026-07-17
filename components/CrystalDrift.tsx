"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { asset } from "@/lib/assets";

const crystals = [
  { src: asset("/images/crystals/amethyst.png"), side: "left" as const, top: "2%", size: 90, rotateStart: -8, rotateEnd: 700 },
  { src: asset("/images/crystals/labradorit.png"), side: "right" as const, top: "6%", size: 100, rotateStart: 10, rotateEnd: -660 },
  { src: asset("/images/crystals/rubin.png"), side: "left" as const, top: "13%", size: 85, rotateStart: -12, rotateEnd: 640 },
  { src: asset("/images/crystals/kristallspitze.png"), side: "right" as const, top: "18%", size: 85, rotateStart: -15, rotateEnd: 690 },
  { src: asset("/images/crystals/tuerkiser-kristall.png"), side: "left" as const, top: "26%", size: 95, rotateStart: 9, rotateEnd: -670 },
  { src: asset("/images/crystals/zitrin.png"), side: "right" as const, top: "32%", size: 80, rotateStart: 12, rotateEnd: -650 },
  { src: asset("/images/crystals/aquamarin.png"), side: "left" as const, top: "40%", size: 90, rotateStart: -10, rotateEnd: 680 },
  { src: asset("/images/crystals/karneol.png"), side: "right" as const, top: "48%", size: 90, rotateStart: -10, rotateEnd: 710 },
  { src: asset("/images/crystals/quadratischer-stein.png"), side: "left" as const, top: "58%", size: 85, rotateStart: 14, rotateEnd: -690 },
  { src: asset("/images/crystals/roter-stein.png"), side: "right" as const, top: "66%", size: 90, rotateStart: -9, rotateEnd: 660 },
  { src: asset("/images/crystals/zoisit.png"), side: "left" as const, top: "76%", size: 95, rotateStart: 8, rotateEnd: -700 },
  { src: asset("/images/crystals/rare-crystal.png"), side: "right" as const, top: "84%", size: 80, rotateStart: -11, rotateEnd: 640 },
  { src: asset("/images/crystals/kristall-unbekannt.png"), side: "left" as const, top: "92%", size: 85, rotateStart: 10, rotateEnd: -670 },
];

// Kristalle über 180% der Fensterhöhe gestaffelt: beim Landen sind die ersten
// ~7 direkt sichtbar, der Rest kommt beim Scrollen nach; alle drehen sich weiter mit.
const SPREAD_VH = 180;

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
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      for (const item of items) {
        const start = Number(item.dataset.rotateStart);
        const end = Number(item.dataset.rotateEnd);
        const angle = start + (end - start) * progress;
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
    <div
      ref={ref}
      className="crystal-drift pointer-events-none absolute inset-x-0 top-0 z-40 overflow-hidden"
      style={{ height: `${SPREAD_VH}vh` }}
      aria-hidden="true"
    >
      {crystals.map((c) => (
        <div
          key={c.src}
          className="crystal-float absolute opacity-90"
          data-rotate-start={c.rotateStart}
          data-rotate-end={c.rotateEnd}
          style={{
            top: c.top,
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
