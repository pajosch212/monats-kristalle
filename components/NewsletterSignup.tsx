"use client";

import { useState } from "react";

export function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="border-t border-line py-14">
      <div className="max-w-lg mx-auto px-6 text-center">
        <div className="font-display text-xl font-medium text-ink mb-2">Kristall-Neuigkeiten per Mail</div>
        <p className="text-sm text-taupe mb-6">
          Trag dich ein und verpasse keine neuen Steine, Aktionen oder Rituale.
        </p>
        {submitted ? (
          <p className="text-sm font-medium text-terracotta">Danke! Du bist dabei.</p>
        ) : (
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="email"
              required
              placeholder="deine@email.de"
              className="flex-1 rounded-full border border-line bg-card px-5 py-3 text-sm text-ink placeholder:text-taupe/60 focus:outline-none focus:border-terracotta"
            />
            <button
              type="submit"
              className="rounded-full bg-ink text-card font-semibold text-sm px-6 py-3 hover:bg-terracotta transition-colors duration-300"
            >
              Anmelden
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
