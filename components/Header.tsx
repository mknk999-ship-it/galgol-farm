"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import Wrap from "./Wrap";

const menu = [
  { href: "#products", label: "상품" },
  { href: "#about", label: "농장 이야기" },
  { href: "#process", label: "재배 과정" },
  { href: "#visit", label: "오시는 길" },
  { href: "#faq", label: "문의" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/93 backdrop-blur-md">
      <Wrap className="flex h-[60px] items-center justify-between gap-3">
        <a href="#top" onClick={close} className="flex items-baseline gap-[7px]">
          <b className="text-[19px] font-extrabold tracking-[-0.04em] text-ink">
            {siteConfig.name}
          </b>
          <span className="text-[11.5px] tracking-[0.06em] text-faint">
            {siteConfig.region}
          </span>
        </a>

        <nav aria-label="주요 메뉴" className="hidden items-center gap-7 lg:flex">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14.5px] font-semibold text-sub transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href={siteConfig.phoneHref}
            className="rounded-full bg-red px-[16px] py-[9px] text-[13.5px] font-bold whitespace-nowrap text-white transition-colors active:bg-red-deep"
          >
            <span className="md:hidden">☎ 전화</span>
            <span className="hidden md:inline">☎ {siteConfig.phone}</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-ink lg:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </Wrap>

      <nav
        id="mobile-menu"
        aria-label="모바일 메뉴"
        className={`overflow-hidden bg-white transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[22rem] border-t border-line" : "max-h-0"
        }`}
      >
        <ul className="px-[22px] py-1">
          {menu.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={close}
                tabIndex={open ? 0 : -1}
                className="flex items-center justify-between border-b border-line py-[14px] text-[15.5px] font-semibold text-ink last:border-0"
              >
                {item.label}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-faint"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
