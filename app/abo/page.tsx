import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { CrystalDrift } from "@/components/CrystalDrift";
import { AboHero } from "@/components/abo/AboHero";
import { HowItWorks } from "@/components/abo/HowItWorks";
import { WhyOneEuro } from "@/components/abo/WhyOneEuro";
import { PackageContents } from "@/components/abo/PackageContents";
import { CheckoutCard } from "@/components/abo/CheckoutCard";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/FinalCta";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { StickyCheckoutBar } from "@/components/abo/StickyCheckoutBar";

export const metadata: Metadata = {
  title: "Monats-Kristalle Mitgliedschaft — Alle Infos & Jetzt kostenlos starten",
  description:
    "Alle Vorteile deiner Monats-Kristalle Mitgliedschaft auf einen Blick: doppelter Wert, automatische Gewinnspiel-Teilnahme, monatlich kündbar. Erster Monat kostenlos.",
};

export default function AboPage() {
  return (
    <>
      <CrystalDrift count={26} />
      <NavBar />
      <main className="flex-1 pb-20">
        <AboHero />
        <HowItWorks />
        <WhyOneEuro />
        <PackageContents />
        <Faq />
        <CheckoutCard />
      </main>
      <NewsletterSignup />
      <Footer />
      <StickyCheckoutBar />
    </>
  );
}
