import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Willkommen bei Monats-Kristalle!",
  robots: { index: false, follow: false },
};

const WHATSAPP_COMMUNITY_URL = "https://chat.whatsapp.com/FCX8swaCEMhEaKqp89LSlT";

export default function DankePage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-lg mx-auto text-center">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-terracotta/20 bg-terracotta/[0.06] px-4 py-2 text-sm font-medium text-terracotta">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-terracotta" />
            </span>
            Zahlung erfolgreich
          </div>

          <h1 className="font-display font-light text-3xl md:text-5xl tracking-tight text-ink leading-[1.1] mb-4">
            Willkommen in deiner <em className="italic font-medium text-terracotta">Kristall-Mitgliedschaft</em>
          </h1>

          <p className="text-taupe text-lg leading-relaxed mb-9">
            Dein erstes Paket wird jetzt vorbereitet und ist bald bei dir im Briefkasten. Tritt jetzt
            unserer WhatsApp-Community bei, um exklusive Sonderangebote nicht zu verpassen und dich
            mit anderen Mitgliedern auszutauschen.
          </p>

          <a
            href={WHATSAPP_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-ink px-10 text-base font-semibold text-card transition-all duration-300 hover:bg-terracotta hover:scale-105 active:scale-95 hover:ring-4 hover:ring-terracotta/20"
          >
            Jetzt der WhatsApp-Community beitreten
          </a>

          <p className="text-taupe text-sm mt-6">
            Du bekommst außerdem eine Bestätigung per E-Mail mit allen Details zu deiner Mitgliedschaft.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
