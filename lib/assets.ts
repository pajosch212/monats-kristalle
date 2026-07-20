// Custom Domain liegt auf Root — kein basePath-Präfix mehr nötig
// (siehe next.config.ts). Bleibt als Funktion bestehen, damit alle
// bisherigen asset(...)-Aufrufe im Code unverändert weiter funktionieren.
export function asset(path: string) {
  return path;
}
