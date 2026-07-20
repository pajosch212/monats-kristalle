"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "mk_reservation_deadline";
const RESERVATION_MINUTES = 10;

// start=false: liest nur einen ggf. schon laufenden Timer mit, startet aber
// keinen neuen (für die Anzeige, bevor die Reservierung feststeht).
// start=true: legt beim ersten Aufruf einen Ablaufzeitpunkt in sessionStorage
// fest (10 Min ab jetzt) und zählt bei jedem weiteren Aufruf — auch nach
// Seitenwechsel — bis zu genau diesem Zeitpunkt runter, statt bei jedem
// Seitenaufruf neu zu starten. Wird erst aufgerufen, sobald das Quiz
// tatsächlich erfolgreich abgeschlossen ist, nicht schon beim Betreten der
// Quiz-Seite.
export function useCountdown(start: boolean) {
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);

  useEffect(() => {
    if (!start) return;
    let deadline = Number(sessionStorage.getItem(STORAGE_KEY));
    if (!deadline || deadline < Date.now()) {
      deadline = Date.now() + RESERVATION_MINUTES * 60 * 1000;
      sessionStorage.setItem(STORAGE_KEY, String(deadline));
    }

    function tick() {
      const remaining = Math.max(0, Math.round((deadline - Date.now()) / 1000));
      setSecondsLeft(remaining);
    }
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [start]);

  if (secondsLeft === null) return { minutes: "10", seconds: "00", expired: false, ready: false };
  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");
  return { minutes, seconds, expired: secondsLeft <= 0, ready: true };
}
