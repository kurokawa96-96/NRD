"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "NRDとは" },
  { href: "/declaration", label: "宣言" },
  { href: "/types", label: "7タイプ" },
  { href: "/diagnosis", label: "診断" },
  { href: "/compatibility", label: "相性" },
  { href: "/applications", label: "活用例" },
  { href: "/papers", label: "論文" },
  { href: "/blog", label: "ブログ" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 bg-canvas/90 backdrop-blur border-b border-line">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-6 flex-wrap">
        <Link
          href="/"
          className="font-display text-lg font-bold text-navy tracking-[0.14em] shrink-0"
        >
          NRD
        </Link>

        <nav className="flex items-center gap-5 flex-wrap">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-body text-[12.5px] tracking-[0.02em] transition-colors ${
                  isActive
                    ? "font-semibold text-navy"
                    : "font-normal text-ink-secondary hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
