export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="/monats-kristalle/" className="font-display text-lg font-medium text-ink flex items-baseline gap-0.5">
          Monats<span className="text-terracotta">.</span>Kristalle
        </a>
        <ul className="hidden md:flex gap-9 list-none text-sm font-medium text-ink/75">
          <li><a href="/monats-kristalle/abo/" className="hover:text-ink transition-opacity">Mitgliedschaft abschließen</a></li>
        </ul>
        <button
          type="button"
          aria-label="Menü öffnen"
          className="flex flex-col justify-center gap-[5px] w-9 h-9 items-center"
        >
          <span className="block w-6 h-[1.5px] bg-ink" />
          <span className="block w-6 h-[1.5px] bg-ink" />
          <span className="block w-6 h-[1.5px] bg-ink" />
        </button>
      </div>
    </nav>
  );
}
