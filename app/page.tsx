import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/FinalCta";
import { CrystalDrift } from "@/components/CrystalDrift";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export default function Home() {
  return (
    <>
      <CrystalDrift count={4} />
      <NavBar />
      <main className="flex-1">
        <Hero />
      </main>
      <NewsletterSignup />
      <Footer />
    </>
  );
}
