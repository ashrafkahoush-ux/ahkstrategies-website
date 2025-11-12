export default function CTAButtons({
  requestHref = "/contact?r=unknown",
  checkoutHref = "/boutique/checkout?sku=unknown",
}: {
  requestHref?: string;
  checkoutHref?: string;
}) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <a
        href={requestHref}
        className="px-6 py-3 rounded-full bg-ahk-gold text-ahk-navy font-semibold hover:bg-ahk-gold-light"
      >
        Request the deck →
      </a>
      <a
        href={checkoutHref}
        className="px-6 py-3 rounded-full border border-ahk-gold/60 text-ahk-gold hover:bg-ahk-gold/10"
      >
        Bank Gateway
      </a>
    </div>
  );
}
