"use client";

import { useEffect, useState } from "react";
import { CHECKOUT_URL } from "@/lib/checkout";

export function StickyCheckoutBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 bg-card/95 backdrop-blur-md border-t border-line px-4 py-3 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <span className="font-display text-xl font-semibold text-terracotta">0€</span>
          <span className="text-taupe/60 line-through text-sm ml-2">29,95€</span>
          <span className="text-taupe text-xs block sm:inline sm:ml-2">erster Monat</span>
        </div>
        <a
          href={CHECKOUT_URL}
          className="flex-1 sm:flex-none text-center inline-flex justify-center items-center gap-2 bg-ink text-card font-semibold text-sm py-3 px-8 rounded-full hover:bg-terracotta transition-colors duration-300"
        >
          Jetzt kostenlos starten
        </a>
      </div>
    </div>
  );
}
