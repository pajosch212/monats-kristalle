import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/FinalCta";
import { CrystalDrift } from "@/components/CrystalDrift";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1">
      <CrystalDrift count={5} />
      <NavBar />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
