// Stripe Payment Link fürs Monats-Kristalle Abo (0€ erste 28 Tage Trial,
// danach 29,95€ alle 28 Tage via subscription trial_period_days). LIVE-Modus
// (Konto "MonatsKristall", acct_1Tt6RQAw9gTNNcLV) — echtes Geld fließt hier.
export const CHECKOUT_URL = "https://buy.stripe.com/fZu7sKbcdfoT53f380gbm05";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    pintrk?: (...args: unknown[]) => void;
  }
}

export function trackCheckoutClick() {
  window.gtag?.("event", "click_checkout");
  window.pintrk?.("track", "checkout", { value: 29.95, order_quantity: 1, currency: "EUR" });
}
