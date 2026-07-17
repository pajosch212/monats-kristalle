import Image from "next/image";
import { asset } from "@/lib/assets";

const values = [
  {
    title: "Doppelter Wert der Kristalle",
    text: "Der Inhalt jedes Pakets ist beim Einzelkauf mindestens doppelt so viel wert wie dein monatlicher Beitrag.",
    image: asset("/images/crystals/amethyst.png"),
  },
  {
    title: "Automatische Gewinnspiel-Teilnahme",
    text: "Als Abonnent nimmst du jeden Monat automatisch an einer Verlosung um Einkaufsguthaben und Bonuskristalle teil.",
    image: asset("/images/crystals/labradorit.png"),
  },
  {
    title: "Monatlich kündbar — kein Risiko",
    text: "Keine Mindestlaufzeit, keine Kündigungsfrist im Kleingedruckten. Du entscheidest jeden Monat neu.",
    image: asset("/images/crystals/rubin.png"),
  },
  {
    title: "1€ symbolisch im ersten Monat",
    text: "Damit du in Ruhe testen kannst, bevor du dich entscheidest. Danach 24,99€ + 4,95€ Versand.",
    image: asset("/images/crystals/tuerkiser-kristall.png"),
  },
];

export function ValueStack() {
  return (
    <section className="py-20 md:py-24 bg-card border-y border-line">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-terracotta mb-4">
            Das bekommst du
          </div>
          <h2 className="font-display font-light text-3xl md:text-4xl text-ink leading-tight">
            Vier gute Gründe für dein <em className="italic font-medium text-terracotta">Abo</em>
          </h2>
        </div>

        <div className="flex flex-col gap-9">
          {values.map((v) => (
            <div key={v.title} className="flex items-center gap-6">
              <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-full bg-bg border border-line overflow-hidden flex items-center justify-center">
                <Image src={v.image} alt="" fill className="object-contain p-3" sizes="96px" />
              </div>
              <div>
                <div className="font-display text-lg md:text-xl font-medium text-ink mb-1.5">{v.title}</div>
                <p className="text-sm leading-relaxed text-taupe">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
