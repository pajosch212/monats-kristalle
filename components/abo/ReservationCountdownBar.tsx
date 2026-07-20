"use client";

import { useCountdown } from "@/components/quiz/useCountdown";
import { NavBar } from "@/components/NavBar";

export function ReservationCountdownBar() {
  const { minutes, seconds, expired, ready } = useCountdown(true);

  if (!ready || expired) {
    return <NavBar />;
  }

  return (
    <div className="sticky top-0 z-[60] bg-red-700 text-white text-center py-3.5 px-4 text-base md:text-lg font-bold tracking-tight">
      Dein reserviertes Paket läuft ab in {minutes}:{seconds}
    </div>
  );
}
