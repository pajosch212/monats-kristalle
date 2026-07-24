const features = [
  "Handverlesenes Kristallpaket, jeden Monat neu",
  "2 Wochen Bedenkzeit ab Erhalt des ersten Pakets",
  "Automatische Teilnahme an der monatlichen Auslosung",
  "Jederzeit monatlich kündbar",
];

export function Pricing() {
  return (
    <section id="preis" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-terracotta mb-4">Dein Einstieg</div>
          <h2 className="font-display font-light text-3xl md:text-4xl text-ink leading-tight">
            Starte deinen <em className="italic font-medium text-terracotta">ersten Monat</em>
          </h2>
        </div>
        <div className="max-w-lg mx-auto bg-card border-[1.5px] border-ink rounded-3xl p-12 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-card bg-terracotta px-4 py-1.5 rounded-full mb-6">
            Nur für Neumitglieder
          </span>
          <div className="font-display text-6xl font-semibold text-ink leading-none">
            0€<span className="text-2xl font-normal text-taupe"> · erster Monat</span>
          </div>
          <div className="mt-3 text-taupe">danach 29,95€/Monat inkl. Versand</div>
          <div className="h-px bg-line my-7" />
          <ul className="flex flex-col gap-3.5 text-left mb-8">
            {features.map((f) => (
              <li key={f} className="flex gap-3 text-ink text-sm">
                <span className="text-sage">◈</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href="/abo/"
            className="w-full inline-flex justify-center items-center gap-2 bg-ink text-card font-semibold text-base py-4 rounded-full hover:bg-terracotta transition-colors duration-300"
          >
            Jetzt kostenlos dein Paket sichern
          </a>
          <p className="mt-5 text-xs leading-relaxed text-taupe/85">
            Nach Ablauf der 2-wöchigen Bedenkzeit verlängert sich deine Mitgliedschaft automatisch um jeweils
            einen Monat zum Preis von 29,95€ inkl. Versand, bis du kündigst. Kündigung ist
            monatlich zum Ende der jeweiligen Laufzeit möglich.
          </p>
        </div>
      </div>
    </section>
  );
}
