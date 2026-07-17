import Image from "next/image";
import { asset } from "@/lib/assets";
import { CHECKOUT_URL } from "@/lib/checkout";

const checklist = [
  { text: "Doppelter Wert der Kristalle im Vergleich zum Einzelkauf", image: asset("/images/crystals/amethyst.png") },
  { text: "Automatische Teilnahme an der monatlichen Gewinnspielverlosung", image: asset("/images/crystals/labradorit.png") },
  { text: "Monatliches Guthaben für den Shop", image: asset("/images/crystals/rubin.png") },
  { text: "Exklusiver Zugang zur WhatsApp-Community", image: asset("/images/crystals/tuerkiser-kristall.png") },
  { text: "Jederzeit kündbar — keine Mindestlaufzeit", image: asset("/images/crystals/zitrin.png") },
  { text: "14 Tage Bedenkzeit — völlig risikolos", image: asset("/images/crystals/aquamarin.png") },
];

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

        <div className="relative w-full max-w-xl mx-auto aspect-square rounded-[32px] overflow-hidden border border-line shadow-xl shadow-ink/10 mb-8">
          <Image
            src={asset("/images/spiritual-objects.jpeg")}
            alt="Monats-Kristalle Paketinhalt"
            fill
            sizes="(min-width: 768px) 36rem, 90vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-lg mx-auto bg-card border-[1.5px] border-ink rounded-3xl p-8 md:p-10 text-center">
          <div className="flex items-baseline justify-center gap-3 mb-1">
            <span className="font-display text-5xl font-semibold text-terracotta">1€</span>
          </div>
          <p className="text-taupe text-sm mb-6">
            erster Monat · danach 24,99€/Monat + 4,95€ Versand · jederzeit kündbar
          </p>

          <ul className="flex flex-col gap-3 text-left mb-8">
            {checklist.map((item) => (
              <li key={item.text} className="flex gap-3 items-center text-sm text-ink">
                <span className="relative w-9 h-9 flex-shrink-0 rounded-full bg-bg border border-line overflow-hidden">
                  <Image src={item.image} alt="" fill className="object-contain p-1.5" sizes="36px" />
                </span>
                {item.text}
              </li>
            ))}
          </ul>

          <a
            href={CHECKOUT_URL}
            className="w-full inline-flex justify-center items-center gap-2 bg-ink text-card font-semibold text-base py-4 rounded-full hover:bg-terracotta transition-colors duration-300"
          >
            Jetzt für 1€ starten
          </a>
          <p className="mt-4 text-xs text-taupe/85">14 Tage Bedenkzeit · monatlich kündbar</p>
        </div>
      </div>
    </section>
  );
}
