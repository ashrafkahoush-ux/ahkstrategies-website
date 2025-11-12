export default function EmmaPulseBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-ahk-navy bg-emma-pulse animate-emma-pulse" />
      <div className="relative">{children}</div>
    </div>
  );
}
