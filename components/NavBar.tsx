export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#" className="font-display text-2xl font-medium text-ink flex items-center gap-2.5">
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path d="M12 2L4 14L12 22L20 14L12 2Z" stroke="#8b4a3f" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M12 2L8 14L12 22L16 14L12 2Z" stroke="#2b2621" strokeWidth="1" strokeLinejoin="round" opacity="0.4" />
          </svg>
          Monats-Kristalle
        </a>
        <ul className="hidden md:flex gap-9 list-none text-sm font-medium text-ink/75">
          <li><a href="#zyklus" className="hover:text-ink transition-opacity">Wie es funktioniert</a></li>
          <li><a href="#gruende" className="hover:text-ink transition-opacity">Warum wir</a></li>
          <li><a href="#auslosung" className="hover:text-ink transition-opacity">Auslosung</a></li>
          <li><a href="#preis" className="hover:text-ink transition-opacity">Preis</a></li>
        </ul>
        <a
          href="#preis"
          className="text-sm font-semibold px-5 py-2.5 border-[1.5px] border-ink rounded-full hover:bg-ink hover:text-card transition-colors"
        >
          Für 1€ starten
        </a>
      </div>
    </nav>
  );
}
