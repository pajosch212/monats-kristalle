import Image from "next/image";
import { asset } from "@/lib/assets";

export function AboHero() {
  return (
    <section className="w-full px-4 md:px-6 pt-6 md:pt-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-terracotta/20 bg-terracotta/[0.06] px-4 py-2 text-sm font-medium text-terracotta">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-terracotta" />
            </span>
            Nur für Neumitglieder: 1€
          </div>
          <h1 className="font-display font-light text-4xl md:text-6xl tracking-tight text-ink leading-[1.05] mb-4">
            Deine <em className="italic font-medium text-terracotta">Monats-Kristalle</em> Mitgliedschaft
          </h1>
          <p className="text-taupe text-lg max-w-xl mx-auto leading-relaxed">
            Alles, was du bekommst — auf einen Blick. Sichere dir jetzt deinen ersten Monat für nur 1€.
          </p>
        </div>

        <div className="relative w-full max-w-xl mx-auto aspect-square rounded-[32px] overflow-hidden border border-line shadow-xl shadow-ink/10">
          <Image
            src={asset("/images/spiritual-objects.jpeg")}
            alt="Monats-Kristalle Paketinhalt"
            fill
            sizes="(min-width: 768px) 36rem, 90vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
