"use client";

import Image from "next/image";
import { useState } from "react";
import { asset } from "@/lib/assets";

const gifts = [
  { id: "amethyst", label: "Amethystspitze", image: asset("/images/crystals/amethyst.png") },
  { id: "mokait", label: "Mokait Rotstein", image: asset("/images/crystals/mokait-rotstein.png") },
  { id: "aventurin", label: "Aventurin Trommelstein", image: asset("/images/crystals/aventurin-trommelstein.png") },
];

export function GiftSelector() {
  const [selected, setSelected] = useState(gifts[0].id);

  return (
    <div className="mb-8">
      <div className="text-xs font-bold tracking-widest uppercase text-terracotta mb-1">Gratis-Geschenk</div>
      <p className="text-sm text-taupe mb-4">Wähle dein persönliches Willkommensgeschenk</p>
      <div className="grid grid-cols-3 gap-3">
        {gifts.map((gift) => (
          <button
            key={gift.id}
            type="button"
            onClick={() => setSelected(gift.id)}
            aria-pressed={selected === gift.id}
            className={`relative flex flex-col items-center gap-2 rounded-2xl border-[1.5px] p-3 transition-colors duration-200 ${
              selected === gift.id ? "border-terracotta bg-terracotta/[0.06]" : "border-line bg-bg hover:border-terracotta/40"
            }`}
          >
            {selected === gift.id && (
              <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-terracotta text-card text-xs flex items-center justify-center font-bold">
                ✓
              </span>
            )}
            <span className="relative w-16 h-16 rounded-full bg-card border border-line overflow-hidden">
              <Image src={gift.image} alt={gift.label} fill className="object-contain p-2" sizes="64px" />
            </span>
            <span className="text-xs font-medium text-ink text-center leading-tight">{gift.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
