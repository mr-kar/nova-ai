"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Features", href: "/features" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/resources") {
      return pathname.startsWith("/resources");
    }

    return pathname === href;
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="absolute inset-0 border-b border-white/[0.06] bg-[#060816]/75 backdrop-blur-xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-black text-black transition-transform duration-300 group-hover:rotate-6">
              N
            </div>

            <span className="text-sm font-bold tracking-[0.18em]">
              NOVA AI
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-xs transition-all duration-300 ${
                    active
                      ? "bg-white/[0.07] text-white"
                      : "text-gray-500 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
            >
              Start Free
            </Link>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] md:hidden"
          >
            <span
              className={`h-px w-4 bg-white transition-transform ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-px w-4 bg-white transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-px w-4 bg-white transition-transform ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile nav */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <nav className="rounded-2xl border border-white/[0.08] bg-[#0b1020]/95 p-3 backdrop-blur-xl">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm transition ${
                    active
                      ? "bg-white/[0.07] text-white"
                      : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/pricing"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black"
            >
              Start Free
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}