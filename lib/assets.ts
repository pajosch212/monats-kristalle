// Backup-Deploy läuft unter /monats-kristalle (siehe next.config.ts
// basePath) statt auf der Domain-Root, daher hier mit demselben Präfix
// versehen.
const basePath = "/monats-kristalle";

export function asset(path: string) {
  return `${basePath}${path}`;
}
