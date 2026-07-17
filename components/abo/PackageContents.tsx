import Image from "next/image";
import { asset } from "@/lib/assets";

const items = [
  { src: asset("/images/crystals/krokoit.png"), label: "Krokoit" },
  { src: asset("/images/crystals/rote-painite.png"), label: "Rote Painite" },
  { src: asset("/images/crystals/kaemmererit.png"), label: "Kämmererit" },
  { src: asset("/images/crystals/labradorit.png"), label: "Labradorit" },
  { src: asset("/images/crystals/aquamarin.png"), label: "Aquamarin" },
  { src: asset("/images/crystals/zoisit.png"), label: "Zoisit" },
];

export function PackageContents() {
  return (
    <section className="py-20 md:py-24 bg-card border-y border-line">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-terracotta mb-4">
            Beispiel-Inhalt
          </div>
          <h2 className="font-display font-light text-3xl md:text-4xl text-ink leading-tight">
            Handverlesene <em className="italic font-medium text-terracotta">Kristalle</em> jeden Monat
          </h2>
          <p className="mt-4 text-taupe">
            Jedes Paket ist individuell zusammengestellt — hier ein paar Steine, die schon dabei waren.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <div className="relative aspect-square rounded-2xl bg-bg border border-line overflow-hidden mb-3">
                <Image src={item.src} alt={item.label} fill className="object-contain p-4" sizes="200px" />
              </div>
              <div className="text-sm font-medium text-ink">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
