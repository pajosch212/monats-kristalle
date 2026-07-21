import Image from "next/image";

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="/" className="font-display text-lg font-medium text-ink flex items-center gap-2">
          <Image src="/logo/logo-nav.png" alt="" width={32} height={32} />
          <span className="flex items-baseline gap-0.5">
            Monats<span className="text-terracotta text-2xl leading-none">.</span>Kristalle
          </span>
        </a>
        <ul className="hidden md:flex gap-9 list-none text-sm font-medium text-ink/75">
          <li><a href="/abo/" className="hover:text-ink transition-opacity">Mitgliedschaft abschließen</a></li>
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
