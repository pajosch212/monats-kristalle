const reasons = [
  {
    title: "Zugänglich für alle",
    text: "Wir wollen, dass wirklich jeder die Chance hat, in die Welt der Kristalle einzusteigen — ohne finanzielles Risiko und ohne lange nachzudenken.",
  },
  {
    title: "Wir vertrauen unserem Paket",
    text: "Wir sind überzeugt: Wer unser Paket einmal in den Händen hält, will weitermachen. Deshalb setzen wir auf Qualität statt auf ein teures Lockangebot.",
  },
  {
    title: "Erschwinglich sammeln",
    text: "Eine eigene Kristallsammlung aufzubauen, soll sich niemand vom Preis abhalten lassen. Genau dafür gibt es Monats-Kristalle.",
  },
];

export function WhyOneEuro() {
  return (
    <section className="py-20 md:py-24 bg-card border-y border-line">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-terracotta mb-4">
            Ehrlich gefragt
          </div>
          <h2 className="font-display font-light text-3xl md:text-4xl text-ink leading-tight max-w-xl mx-auto">
            „Warum ist die erste Box <em className="italic font-medium text-terracotta">kostenlos</em>?
            Verliert ihr da nicht Geld?“
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="border-l-2 border-terracotta/30 pl-6">
              <div className="font-display text-lg md:text-xl font-medium text-ink mb-1.5">{r.title}</div>
              <p className="text-sm leading-relaxed text-taupe">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
