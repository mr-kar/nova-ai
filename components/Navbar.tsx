"use client";

import { useState } from "react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-[#060816]/70 backdrop-blur-xl border-b border-white/6" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center font-black text-sm transition-transform duration-300 group-hover:rotate-6">
              N
            </div>

            <span className="font-bold tracking-[0.18em] text-sm">
              NOVA AI
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
            >
              Start Free
            </a>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-xl border border-white/10 bg-white/4 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`w-4 h-px bg-white transition-transform ${
                menuOpen ? "translate-y-0.75 rotate-45" : ""
              }`}
            />

            <span
              className={`w-4 h-px bg-white transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`w-4 h-px bg-white transition-transform ${
                menuOpen ? "-translate-y-0.75 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <nav className="rounded-2xl border border-white/8 bg-[#0b1020]/95 backdrop-blur-xl p-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black"
            >
              Start Free
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}