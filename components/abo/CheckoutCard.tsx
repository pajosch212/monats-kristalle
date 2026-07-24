import Image from "next/image";
import { asset } from "@/lib/assets";
import { CHECKOUT_URL } from "@/lib/checkout";
import { GiftSelector } from "@/components/abo/GiftSelector";

const checklist = [
  { text: "70€ Gesamtwert der Kristalle in deinem Gratis-Paket", image: asset("/images/crystals/amethyst.png") },
  { text: "Physische Erklärkarte zu jedem Kristall im Paket", image: asset("/images/crystals/fluorit.png") },
  { text: "Automatische Teilnahme an der monatlichen Gewinnspielverlosung", image: asset("/images/crystals/labradorit.png") },
  { text: "Monatliches Guthaben für den Shop", image: asset("/images/crystals/rubin.png") },
  { text: "Geliefert in den Briefkasten — du musst nicht zu Hause sein", image: asset("/images/crystals/krokoit.png") },
  { text: "Exklusiver Zugang zu Sonderangeboten und zur WhatsApp-Community", image: asset("/images/crystals/tuerkiser-kristall.png") },
  { text: "Jederzeit kündbar — keine Mindestlaufzeit", image: asset("/images/crystals/zitrin.png") },
  { text: "4 Wochen Bedenkzeit — völlig risikolos", image: asset("/images/crystals/aquamarin.png") },
];

export function CheckoutCard() {
  return (
    <section className="w-full px-4 md:px-6 py-16 md:py-20">
      <div className="max-w-lg mx-auto bg-card border-[1.5px] border-ink rounded-3xl p-8 md:p-10 text-center">
        <div className="flex items-baseline justify-center gap-3 mb-1">
          <span className="font-display text-5xl font-semibold text-terracotta">0€</span>
        </div>
        <p className="text-taupe text-sm mb-6">
          erster Monat · danach 29,95€/Monat inkl. Versand · jederzeit kündbar
        </p>

        <ul className="flex flex-col gap-4 text-left mb-8">
          {checklist.map((item) => (
            <li key={item.text} className="flex gap-4 items-center text-sm text-ink">
              <span className="relative w-14 h-14 flex-shrink-0 rounded-full bg-bg border border-line overflow-hidden">
                <Image src={item.image} alt="" fill className="object-contain p-2" sizes="56px" />
              </span>
              {item.text}
            </li>
          ))}
        </ul>

        <GiftSelector />

        <div className="flex items-center justify-center gap-2 mb-3 text-sm">
          <span className="text-terracotta tracking-tight">★★★★★</span>
          <span className="text-taupe">9,4/10 aus 310 Bewertungen</span>
        </div>

        <a
          href={CHECKOUT_URL}
          className="w-full inline-flex justify-center items-center gap-2 bg-ink text-card font-semibold text-base py-4 rounded-full hover:bg-terracotta transition-colors duration-300"
        >
          Jetzt kostenlos starten
        </a>
        <p className="mt-4 text-xs text-taupe/85">4 Wochen Bedenkzeit · monatlich kündbar</p>
      </div>
    </section>
  );
}
