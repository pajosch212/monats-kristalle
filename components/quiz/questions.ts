export const questions = [
  {
    question: "Was reizt dich am meisten an Kristallen?",
    answers: ["Innere Ruhe finden & Energie & Fokus", "Einfach schöne Steine sammeln", "Beides davon"],
  },
  {
    question: "Wie oft nimmst du dir bewusst Zeit für dich?",
    answers: ["Täglich", "Ein paar Mal die Woche", "Zu selten"],
  },
  {
    question: "Hast du schon Erfahrung mit Kristallen oder Ritualen?",
    answers: ["Ja, schon länger", "Ein bisschen", "Nein, bin neu hier"],
  },
  {
    question: "Hast du Interesse, dir eine hochwertige Kristallsammlung aufzubauen?",
    answers: ["Ja, definitiv", "Nein, eher nicht", "Weiß noch nicht"],
  },
  {
    // Platzhalter {SPOTS} wird zur Laufzeit durch die aktuelle Restanzahl ersetzt
    question: "Wie sehr würdest du dich freuen, einen der letzten {SPOTS} Kristallpakete komplett gratis zu erhalten?",
    answers: ["Ich würde mich mega freuen", "Ich würde mich ein bisschen freuen", "Wäre mir ziemlich egal"],
  },
] as const;
