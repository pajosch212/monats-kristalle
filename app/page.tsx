import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Cycle } from "@/components/Cycle";
import { Reasons } from "@/components/Reasons";
import { Lottery } from "@/components/Lottery";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { FinalCta, Footer } from "@/components/FinalCta";
import { CrystalDrift } from "@/components/CrystalDrift";

export default function Home() {
  return (
    <>
      <CrystalDrift />
      <NavBar />
      <main className="flex-1">
        <Hero />
        <Cycle />
        <Reasons />
        <Lottery />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
