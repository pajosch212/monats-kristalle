"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, Suspense, lazy } from "react";
import { asset } from "@/lib/assets";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="w-full pt-3 md:pt-8 pb-4 px-4 md:px-6">
      <div
        className="w-full max-w-7xl mx-auto relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[40px] border border-line bg-card min-h-[600px] md:min-h-[680px] flex flex-col items-center justify-center text-center px-6 pt-10 md:pt-24 pb-16 duration-500">
          <Suspense fallback={<div className="absolute inset-0 bg-bg/40" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50 mix-blend-multiply">
              <Dithering
                colorBack="#00000000"
                colorFront="#7A1F2B"
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-terracotta/20 bg-terracotta/[0.06] backdrop-blur-sm px-4 py-2 text-sm font-medium text-terracotta">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-terracotta" />
              </span>
              Diesen Monat: 1€ statt 24,99€
            </div>

            <h1 className="font-display font-light text-5xl md:text-7xl lg:text-[5.2rem] tracking-tight text-ink mb-7 leading-[1.04]">
              Jeden Monat ziehen neue <br />
              <em className="italic font-medium text-terracotta">Kristalle</em> bei dir ein
            </h1>

            <p className="text-taupe text-lg md:text-xl max-w-xl mb-9 leading-relaxed">
              Dein handverlesenes Paket mit mehreren Kristallen & besonderen Extras —
              automatisch jeden Monat in deinem Briefkasten.
            </p>

            <div className="relative w-full max-w-xl aspect-square rounded-3xl overflow-hidden shadow-xl shadow-ink/15 mb-9 border border-line">
              <Image
                src={asset("/images/spiritual-objects.jpeg")}
                alt="Spirituelle Objekte und Kristalle"
                fill
                sizes="(min-width: 768px) 36rem, 90vw"
                className="object-cover"
              />
            </div>

            <div className="flex items-baseline gap-4 flex-wrap justify-center mb-9">
              <span className="font-display text-5xl font-semibold text-terracotta">1€</span>
              <span className="text-taupe/60 line-through text-lg">24,99€</span>
              <span className="text-taupe text-sm text-left leading-snug">
                erster Monat · danach 24,99€/Monat
                <br />+ 4,95€ Versand · jederzeit kündbar
              </span>
            </div>

            <a
              href="#preis"
              className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-ink px-10 text-base font-semibold text-card transition-all duration-300 hover:bg-terracotta hover:scale-105 active:scale-95 hover:ring-4 hover:ring-terracotta/20"
            >
              <span className="relative z-10">Jetzt für 1€ dein Paket sichern</span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <p className="text-taupe text-sm mt-4">14 Tage Bedenkzeit inklusive</p>
            <div className="flex items-center gap-3 mt-6 text-sm text-taupe">
              <span className="text-terracotta tracking-widest">★★★★★</span>
              8,4/10 aus 81 Bewertungen
            </div>
          </div>
        </div>

        {/* photo pair, overlapping the statement card */}
        <div className="relative max-w-md mx-auto -mt-16 px-6 z-20">
          <div className="flex gap-4">
            <div className="photo-slot flex-1 aspect-[4/5] -rotate-3 shadow-xl shadow-ink/10">
              <Image
                src={asset("/images/kristalle.webp")}
                alt="Kristalle"
                fill
                sizes="(min-width: 768px) 20vw, 45vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="photo-slot flex-1 aspect-[4/5] rotate-3 shadow-xl shadow-ink/10">
              <Image
                src={asset("/images/detail.webp")}
                alt="Kristall Detail"
                fill
                sizes="(min-width: 768px) 20vw, 45vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
