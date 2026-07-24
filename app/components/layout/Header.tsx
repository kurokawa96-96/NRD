"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "NRDとは" },
  { href: "/declaration", label: "宣言" },
  { href: "/types", label: "7タイプ" },
  { href: "/compatibility", label: "相性" },
  { href: "/applications", label: "活用例" },
  { href: "/papers", label: "論文" },
  { href: "/blog", label: "ブログ" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      {open ? (
        <path
          d="M5 5l10 10M15 5L5 15"
          stroke="#16264A"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M3 6h14M3 10h14M3 14h14"
          stroke="#16264A"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-30 bg-canvas/90 backdrop-blur border-b border-line">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-bold text-navy tracking-[0.14em] shrink-0"
          onClick={() => setOpen(false)}
        >
          NRD
        </Link>

        {/* デスクトップナビ */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-body text-[12.5px] tracking-[0.02em] transition-colors ${
                isActive(item.href)
                  ? "font-semibold text-navy"
                  : "font-normal text-ink-secondary hover:text-navy"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* 唯一の塗りつぶしボタン */}
          <Link
            href="/diagnosis"
            className="hidden sm:inline-block font-body text-[12.5px] font-semibold text-white bg-navy rounded-full px-5 py-2 transition-opacity hover:opacity-90"
          >
            診断する
          </Link>

          {/* モバイル：ハンバーガー */}
          <button
            className="md:hidden p-1.5"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {open && (
        <div className="md:hidden border-t border-line bg-canvas">
          <nav className="max-w-4xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`font-body text-[13.5px] py-2.5 border-b border-line/60 last:border-b-0 ${
                  isActive(item.href)
                    ? "font-semibold text-navy"
                    : "font-normal text-ink-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/diagnosis"
              onClick={() => setOpen(false)}
              className="mt-4 text-center font-body text-[13px] font-semibold text-white bg-navy rounded-full px-5 py-2.5"
            >
              診断する
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
