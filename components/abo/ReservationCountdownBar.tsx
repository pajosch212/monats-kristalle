"use client";

import { useCountdown } from "@/components/quiz/useCountdown";
import { NavBar } from "@/components/NavBar";

export function ReservationCountdownBar() {
  const { minutes, seconds, expired, ready } = useCountdown(true);

  if (!ready || expired) {
    return <NavBar />;
  }

  return (
    <div className="sticky top-0 z-[60] bg-red-700 text-white flex items-center justify-between gap-4 py-3.5 px-4 md:px-6 text-base md:text-lg font-bold tracking-tight">
      <span>Dein reserviertes Paket läuft ab in</span>
      <span>
        {minutes}:{seconds}
      </span>
    </div>
  );
}
