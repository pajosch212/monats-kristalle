const items = [
  "Einkaufsguthaben für den Shop, per Zufallsprinzip verlost",
  "Bonuskristalle, die deinem nächsten Paket automatisch beigelegt werden",
  "Zusätzlicher spiritueller Krimskrams wie Tee, Räucherwerk und mehr",
  "Gewinne werden automatisch deiner nächsten Sendung beigelegt — kein Einlösen nötig",
];

export function Lottery() {
  return (
    <section id="auslosung" className="py-24 bg-card border-y border-line">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="photo-slot aspect-square">
            <span className="text-2xl opacity-50">🖼</span>
            <span className="text-xs uppercase tracking-wide font-semibold opacity-65">Foto: Gewinne</span>
          </div>
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-terracotta mb-4">
              Jeden Monat automatisch dabei
            </div>
            <h2 className="font-display font-light text-3xl md:text-4xl text-ink leading-tight">
              Gewinnen, ohne <em className="italic font-medium text-terracotta">etwas zu tun</em>
            </h2>
            <p className="mt-4 text-taupe">
              Mit jeder aktiven Mitgliedschaft nimmst du automatisch an der monatlichen Verlosung teil. Kein
              Zusatzkauf, keine Anmeldung nötig.
            </p>
            <ul className="mt-7 flex flex-col gap-4">
              {items.map((item) => (
                <li key={item} className="flex gap-3 items-start text-taupe">
                  <span className="text-terracotta flex-shrink-0 mt-0.5">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
