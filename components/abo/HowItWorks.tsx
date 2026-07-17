const steps = [
  {
    number: "1",
    title: "Jetzt für 1€ bestellen",
    text: "Du sicherst dir dein erstes Paket für nur 1€ — ganz ohne Risiko.",
  },
  {
    number: "2",
    title: "Paket erhalten & testen",
    text: "Dein Paket wird per Post in deinen Briefkasten zugestellt — du musst dafür nicht zu Hause sein. 14 Tage Zeit, in Ruhe zu entscheiden.",
  },
  {
    number: "3",
    title: "Jeden Monat neu erleben",
    text: "Ab dem zweiten Monat 24,99€ + Versand — jederzeit monatlich kündbar.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-terracotta mb-4">
            So einfach geht&apos;s
          </div>
          <h2 className="font-display font-light text-3xl md:text-4xl text-ink leading-tight">
            Dein <em className="italic font-medium text-terracotta">Kristallpaket</em> in wenigen Tagen im Briefkasten
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {steps.map((s) => (
            <div key={s.number} className="flex items-start gap-5">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-ink text-card flex items-center justify-center font-display text-lg font-medium">
                {s.number}
              </div>
              <div>
                <div className="font-display text-lg font-medium text-ink mb-1">{s.title}</div>
                <p className="text-sm leading-relaxed text-taupe">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
