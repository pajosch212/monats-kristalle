import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
