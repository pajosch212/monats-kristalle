import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/FinalCta";
import { CrystalDrift } from "@/components/CrystalDrift";

export default function Home() {
  return (
    <>
      <CrystalDrift count={10} />
      <NavBar />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
