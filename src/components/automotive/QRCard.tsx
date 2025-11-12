export default function QRCard({
  href,
  label,
  img = "/assets/qr/placeholder.png",
}: {
  href: string;
  label?: string;
  img?: string;
}) {
  return (
    <div
      className="mx-auto max-w-md rounded-2xl border border-ahk-gold/25 bg-ahk-navy-dark/60
                    backdrop-blur p-6 text-center shadow-[0_0_30px_rgba(212,175,55,0.15)]"
    >
      <p className="text-ahk-light mb-4">{label ?? "Scan to request the deck"}</p>
      <img
        src={img}
        alt="QR"
        className="mx-auto w-40 h-40 rounded-lg border border-ahk-gold/20"
      />
      <div className="mt-3 text-sm text-ahk-light/70">
        Direct link: <span className="text-ahk-gold">{href}</span>
      </div>
    </div>
  );
}
