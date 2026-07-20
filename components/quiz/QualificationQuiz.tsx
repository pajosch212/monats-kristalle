"use client";

import { useState } from "react";
import { LivePulseDot } from "@/components/quiz/LivePulseDot";
import { Confetti } from "@/components/quiz/Confetti";
import { useCountdown } from "@/components/quiz/useCountdown";
import { questions } from "@/components/quiz/questions";

// Anzahl auf der Landingpage vs. bei Frage 5 unterscheidet sich bewusst (3 -> 2),
// um während des Quiz-Durchlaufs den Eindruck von "live sinkender Verfügbarkeit"
// zu erzeugen.
const SPOTS_INTRO = 3;
const SPOTS_DURING_QUIZ = 2;

type Stage = "quiz" | "evaluating" | "result";

export function QualificationQuiz() {
  const [stage, setStage] = useState<Stage>("quiz");
  const [step, setStep] = useState(0);
  const [evalProgress, setEvalProgress] = useState(0);
  const countdown = useCountdown(stage === "result");

  function selectAnswer() {
    if (step < questions.length - 1) {
      setStep(step + 1);
      return;
    }
    setStage("evaluating");
    let progress = 0;
    const interval = setInterval(() => {
      progress += 3 + Math.random() * 6;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => setStage("result"), 400);
      }
      setEvalProgress(Math.min(100, Math.round(progress)));
    }, 150);
  }

  if (stage === "quiz") {
    const current = questions[step];
    const progressPct = Math.round(((step + 1) / questions.length) * 100);

    return (
      <div className="max-w-lg mx-auto bg-card border-[1.5px] border-ink rounded-3xl p-8 md:p-10 text-center">
        <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-red-600/30 bg-red-600/[0.06] px-4 py-2 text-sm font-semibold text-red-700">
          <LivePulseDot />
          Nur noch {SPOTS_INTRO} Gratis-Kristallpakete verfügbar
        </div>

        <div className="font-display font-semibold text-4xl md:text-5xl text-terracotta mb-4">OH NEIN! :(</div>

        <h1 className="font-display font-light text-2xl md:text-3xl text-ink leading-tight mb-4">
          Aufgrund der hohen Nachfrage müssen wir den Zugang zu unserem Neukundenangebot begrenzen
        </h1>

        <p className="text-taupe leading-relaxed mb-8">
          Beantworte dieses kurze Quiz — nur 30 Sekunden. Es wird automatisch sofort danach geprüft, ob
          wir dir eines der letzten Pakete reservieren können. Du erhältst in wenigen Sekunden
          automatisiert die Antwort.
        </p>

        <div className="mb-6 text-left">
          <div className="flex justify-between items-center text-xs font-semibold text-taupe mb-2">
            <span>
              Frage {step + 1} von {questions.length}
            </span>
            <span>{progressPct}%</span>
          </div>
          <div className="h-2 rounded-full bg-bg overflow-hidden">
            <div
              className="h-full bg-terracotta rounded-full transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        <h2 className="font-display font-medium text-xl md:text-2xl text-ink leading-snug mb-6 text-left">
          {step === questions.length - 1 ? (
            <>
              Wie sehr würdest du dich freuen, eines der letzten{" "}
              <span className="inline-flex items-center gap-1.5 text-terracotta">
                <LivePulseDot />
                {SPOTS_DURING_QUIZ}
              </span>{" "}
              Kristallpakete komplett gratis zu bekommen?
            </>
          ) : (
            current.question
          )}
        </h2>

        <div className="flex flex-col gap-3">
          {current.answers.map((answer) => (
            <button
              key={answer}
              type="button"
              onClick={selectAnswer}
              className="text-left px-5 py-4 rounded-2xl border border-line bg-bg hover:border-terracotta hover:bg-terracotta/[0.06] transition-colors duration-200 text-ink font-medium"
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (stage === "evaluating") {
    return (
      <div className="max-w-lg mx-auto bg-card border-[1.5px] border-ink rounded-3xl p-8 md:p-10 text-center">
        <h2 className="font-display font-medium text-xl md:text-2xl text-ink mb-6">
          Wir analysieren deine Antworten …
        </h2>
        <p className="text-taupe text-sm mb-6">Wir prüfen, ob wir eines der Pakete für dich reservieren können.</p>
        <div className="h-3 rounded-full bg-bg overflow-hidden mb-3">
          <div
            className="h-full bg-terracotta rounded-full transition-all duration-150"
            style={{ width: `${evalProgress}%` }}
          />
        </div>
        <div className="text-sm font-semibold text-terracotta">{evalProgress}%</div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto bg-card border-[1.5px] border-ink rounded-3xl p-8 md:p-10 text-center relative">
      <Confetti />
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-sage/15">
        <span className="text-4xl text-sage">✓</span>
      </div>
      <h2 className="font-display font-medium text-2xl md:text-3xl text-ink leading-tight mb-3">
        Wir gratulieren dir!
      </h2>
      <p className="text-taupe leading-relaxed mb-6">
        Du passt genau in unser Profil für Neukunden. Wir haben dir eines der letzten Pakete reserviert.
      </p>
      <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-red-600/30 bg-red-600/[0.06] px-4 py-2 text-sm font-semibold text-red-700">
        <LivePulseDot />
        Wir haben dir dein Paket für 10 Minuten reserviert! Nach Ablauf der Zeit verfällt dieser Anspruch.
      </div>
      <a
        href="/abo/"
        className="w-full inline-flex justify-center items-center gap-2 bg-ink text-card font-semibold text-base py-4 rounded-full hover:bg-terracotta transition-colors duration-300"
      >
        {countdown.ready ? `Jetzt Paket sichern (${countdown.minutes}:${countdown.seconds})` : "Jetzt Paket sichern"}
      </a>
    </div>
  );
}
