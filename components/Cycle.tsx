const steps = [
  { phase: "Phase 1", title: "Bestellen", text: "Du sicherst dir dein erstes Paket für nur 1€ — ganz ohne Risiko." },
  { phase: "Phase 2", title: "Ankommen", text: "Dein Paket erreicht dich per Post, liebevoll von Hand zusammengestellt." },
  { phase: "Phase 3", title: "4 Wochen entscheiden", text: "Du testest in Ruhe. Gefällt es dir nicht, kündigst du innerhalb von 4 Wochen ohne weitere Kosten." },
  { phase: "Phase 4", title: "Zyklus wiederholt sich", text: "Ab Monat 2 zu 24,99€ + Versand — jeden Monat neu, jederzeit kündbar." },
];

export function Cycle() {
  return (
    <section id="zyklus" className="py-24 bg-card border-y border-line">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-terracotta mb-4">
            Der Monatszyklus
          </div>
          <h2 className="font-display font-light text-3xl md:text-4xl text-ink leading-tight">
            Wie dein <em className="italic font-medium text-terracotta">Ritual</em> abläuft
          </h2>
          <p className="mt-4 text-taupe">Vier Phasen, die sich jeden Monat aufs Neue wiederholen.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
          {steps.map((s) => (
            <div key={s.title}>
              <div className="photo-slot aspect-[4/3] mb-5">
                <span className="text-xl opacity-50">🖼</span>
                <span className="text-xs uppercase tracking-wide font-semibold opacity-65">Foto</span>
              </div>
              <div className="text-xs font-bold tracking-widest uppercase text-terracotta mb-2">{s.phase}</div>
              <div className="font-display text-xl font-medium text-ink mb-2.5">{s.title}</div>
              <p className="text-sm leading-relaxed text-taupe">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
