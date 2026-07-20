export function LivePulseDot() {
  return (
    <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-70" />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
    </span>
  );
}
