// Muss mit `basePath` in next.config.ts übereinstimmen (next/image hängt
// basePath bei unoptimized:true nicht automatisch an src an).
const basePath = "/monats-kristalle";

export function asset(path: string) {
  return `${basePath}${path}`;
}
