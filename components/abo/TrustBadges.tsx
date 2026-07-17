const badges = [
  { icon: "📦", title: "Versand inklusive", text: "4,95€ Versand ab dem zweiten Monat" },
  { icon: "🗓️", title: "Jederzeit kündbar", text: "Monatlich, ohne Mindestlaufzeit" },
  { icon: "🛡️", title: "14 Tage Bedenkzeit", text: "Ab Erhalt deines ersten Pakets" },
  { icon: "🔒", title: "Sicherer Checkout", text: "Verschlüsselte Zahlungsabwicklung" },
];

export function TrustBadges() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((b) => (
            <div key={b.title} className="text-center">
              <span className="text-3xl block mb-3">{b.icon}</span>
              <div className="font-display text-base font-medium text-ink mb-1">{b.title}</div>
              <p className="text-xs leading-relaxed text-taupe">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
