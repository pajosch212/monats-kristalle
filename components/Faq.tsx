"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Wie funktioniert die 4-wöchige Bedenkzeit?",
    a: "Dein erstes Paket kommt kostenlos zu dir nach Hause. Ab Erhalt hast du 4 Wochen Zeit, in Ruhe zu testen. Gefällt es dir nicht, kündigst du innerhalb dieser Frist und zahlst nichts weiter.",
  },
  {
    q: "Wie kündige ich meine Mitgliedschaft?",
    a: "Deine Mitgliedschaft läuft monatlich und ist jederzeit zum Ende des laufenden Monats kündbar — ganz ohne Mindestlaufzeit oder Kündigungsfrist im Kleingedruckten.",
  },
  {
    q: "Was ist in einem Paket enthalten?",
    a: "Jedes Paket enthält handverlesene Kristalle passend zu einem monatlichen Thema, dazu spirituelle Extras und Erläuterungen zur Wirkung der Steine. Der Wert entspricht mindestens dem doppelten deines monatlichen Beitrags.",
  },
  {
    q: "Wie funktioniert die monatliche Auslosung?",
    a: "Jede aktive Mitgliedschaft nimmt automatisch an einer monatlichen Verlosung um Einkaufsguthaben und Bonuskristalle teil. Gewinne werden automatisch deiner nächsten Sendung beigelegt.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-terracotta mb-4">Fragen</div>
          <h2 className="font-display font-light text-3xl md:text-4xl text-ink leading-tight">
            Bevor du <em className="italic font-medium text-terracotta">startest</em>
          </h2>
        </div>
        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map((item, i) => (
            <div key={item.q} className="border border-line rounded-2xl overflow-hidden bg-card">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 font-semibold text-ink"
              >
                {item.q}
                <span
                  className={`text-terracotta text-xl flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className="grid transition-all duration-300 ease-in-out px-6"
                style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="text-sm leading-relaxed text-taupe pb-5">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
