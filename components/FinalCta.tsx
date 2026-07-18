export function FinalCta() {
  return (
    <section className="text-center pb-32 pt-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xs font-bold tracking-widest uppercase text-terracotta mb-4">
          Bereit für deinen ersten Stein?
        </div>
        <h2 className="font-display font-light text-3xl md:text-4xl text-ink leading-tight">
          Dein Kraftstein wartet
          <br />
          auf seinen <em className="italic font-medium text-terracotta">ersten Monat</em>
        </h2>
        <a
          href="/monats-kristalle/abo/"
          className="mt-9 inline-flex items-center gap-2 bg-ink text-card font-semibold px-9 py-4 rounded-full hover:bg-terracotta hover:scale-105 transition-all duration-300"
        >
          Jetzt für 1€ starten →
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-11">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center flex-wrap gap-4">
        <div className="font-display text-lg font-medium text-ink">Monats-Kristalle</div>
        <ul className="flex gap-6 flex-wrap list-none text-sm text-taupe">
          <li><a href="/monats-kristalle/impressum/" className="hover:text-ink transition-colors">Impressum</a></li>
          <li><a href="/monats-kristalle/datenschutz/" className="hover:text-ink transition-colors">Datenschutz</a></li>
          <li><a href="/monats-kristalle/agb/" className="hover:text-ink transition-colors">AGB</a></li>
          <li><a href="/monats-kristalle/widerrufsrecht/" className="hover:text-ink transition-colors">Widerrufsrecht</a></li>
          <li><a href="/monats-kristalle/kontakt/" className="hover:text-ink transition-colors">Kontakt</a></li>
        </ul>
        <div className="text-sm text-taupe">© 2026 Monats-Kristalle</div>
      </div>
    </footer>
  );
}
