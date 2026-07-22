// ponytail: Platzhalter-Zitate, gegen echte Kundenstimmen austauschen sobald vorhanden
const testimonials = [
  {
    name: "Lena M.",
    text: "Ich war skeptisch wegen der 0€-Box, aber die Steine waren wirklich hochwertig. Freu mich jeden Monat auf's Päckchen.",
  },
  {
    name: "Jana K.",
    text: "Die Auswahl ist jedes Mal anders und liebevoll zusammengestellt. Fühlt sich an wie ein kleines Geschenk an mich selbst.",
  },
  {
    name: "Sophie R.",
    text: "Kündigen war unkompliziert erklärt, brauchte ich aber gar nicht — bin seit Monaten dabei und bleibe.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-terracotta mb-4">
            Was Mitglieder sagen
          </div>
          <h2 className="font-display font-light text-3xl md:text-4xl text-ink leading-tight">
            9,4/10 aus <em className="italic font-medium text-terracotta">310 Bewertungen</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="border-l-2 border-terracotta/30 pl-6">
              <div className="text-terracotta text-sm mb-2 tracking-tight">★★★★★</div>
              <p className="text-sm leading-relaxed text-taupe mb-3">„{t.text}“</p>
              <div className="font-display text-sm font-medium text-ink">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
