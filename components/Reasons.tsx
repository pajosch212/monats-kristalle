const reasons = [
  { icon: "✋", title: "Von Hand zusammengestellt", text: "Jedes Paket wird individuell gepackt, nicht maschinell abgefüllt — mit echtem Gespür für Steine und Energie." },
  { icon: "💰", title: "Mindestens doppelter Wert", text: "Der Inhalt jedes Pakets ist beim Einzelkauf mindestens doppelt so viel wert wie dein monatlicher Beitrag." },
  { icon: "🎁", title: "Jeden Monat eine neue Überraschung", text: "Neues Thema, neue Steine, neue Rituale — kein Monat gleicht dem anderen." },
  { icon: "🎟️", title: "Automatische Auslosung inklusive", text: "Als Abonnent nimmst du jeden Monat automatisch an einer Verlosung um Einkaufsguthaben und Bonuskristalle teil." },
];

export function Reasons() {
  return (
    <section id="gruende" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-terracotta mb-4">
            Vier gute Gründe
          </div>
          <h2 className="font-display font-light text-3xl md:text-4xl text-ink leading-tight">
            Warum sich Menschen für <em className="italic font-medium text-terracotta">Monats-Kristalle</em> entscheiden
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-card border border-line rounded-[18px] p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
            >
              <span className="text-2xl block mb-4">{r.icon}</span>
              <div className="font-display text-xl font-medium text-ink mb-2.5">{r.title}</div>
              <p className="text-sm leading-relaxed text-taupe">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
