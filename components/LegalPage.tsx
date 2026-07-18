import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/FinalCta";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="flex-1 px-4 md:px-6 py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display font-light text-3xl md:text-4xl text-ink mb-10">{title}</h1>
          <div className="flex flex-col gap-6 text-sm leading-relaxed text-taupe [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-medium [&_h2]:text-ink [&_h2]:mt-4 [&_strong]:text-ink [&_a]:text-terracotta [&_a]:underline">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
