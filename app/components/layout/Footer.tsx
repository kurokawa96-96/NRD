import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "NRDとは" },
  { href: "/declaration", label: "宣言" },
  { href: "/types", label: "7タイプ" },
  { href: "/diagnosis", label: "診断" },
  { href: "/compatibility", label: "相性" },
  { href: "/applications", label: "活用例" },
  { href: "/papers", label: "論文" },
  { href: "/blog", label: "ブログ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line mt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="font-display text-lg font-bold text-navy tracking-[0.14em] mb-3">
            NRD
          </div>
          <p className="font-display text-[13px] text-ink-secondary tracking-wide">
            私たちは、人を測らない。優劣ではなく、違いを見る。
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-[12px] text-ink-secondary hover:text-navy transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="w-8 h-px bg-line mx-auto mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span className="font-body text-[11px] text-ink-tertiary tracking-[0.04em]">
            Neural Reward Design
          </span>
          <span className="hidden sm:inline font-body text-[11px] text-ink-tertiary">
            ・
          </span>
          <span className="font-body text-[11px] text-ink-tertiary tracking-[0.04em]">
            &copy; {new Date().getFullYear()} NRD Project
          </span>
        </div>
      </div>
    </footer>
  );
}
