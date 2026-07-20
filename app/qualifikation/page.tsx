import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { CrystalDrift } from "@/components/CrystalDrift";
import { QualificationQuiz } from "@/components/quiz/QualificationQuiz";
import { Footer } from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Qualifiziere dich für dein Gratis-Kristallpaket — Monats-Kristalle",
  robots: { index: false, follow: false },
};

export default function QualifikationPage() {
  return (
    <>
      <CrystalDrift count={6} />
      <NavBar />
      <main className="flex-1 px-4 md:px-6 py-10 md:py-16">
        <QualificationQuiz />
      </main>
      <Footer />
    </>
  );
}
