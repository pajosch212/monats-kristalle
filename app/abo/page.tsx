import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { AboHero } from "@/components/abo/AboHero";
import { ValueStack } from "@/components/abo/ValueStack";
import { HowItWorks } from "@/components/abo/HowItWorks";
import { PackageContents } from "@/components/abo/PackageContents";
import { TrustBadges } from "@/components/abo/TrustBadges";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/FinalCta";
import { StickyCheckoutBar } from "@/components/abo/StickyCheckoutBar";

export const metadata: Metadata = {
  title: "Monats-Kristalle Abo — Alle Infos & Jetzt für 1€ starten",
  description:
    "Alle Vorteile deines Monats-Kristalle Abos auf einen Blick: doppelter Wert, automatische Gewinnspiel-Teilnahme, monatlich kündbar. Erster Monat für nur 1€.",
};

export default function AboPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pb-20">
        <AboHero />
        <ValueStack />
        <HowItWorks />
        <PackageContents />
        <TrustBadges />
        <Faq />
      </main>
      <Footer />
      <StickyCheckoutBar />
    </>
  );
}
