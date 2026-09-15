import Link from "next/link";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "/contact" },
  { label: "Partners", href: "#" },
];

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Discord", href: "#" },
  { label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#040611]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-black text-black">
                N
              </div>

              <span className="text-sm font-bold tracking-[0.18em]">
                NOVA AI
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-xs leading-6 text-gray-600">
              AI productivity infrastructure for people and teams who
              want to work faster and think bigger.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-gray-700">
              Product
            </p>

            <div className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-xs text-gray-500 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-gray-700">
              Company
            </p>

            <div className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-xs text-gray-500 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-gray-700">
              Social
            </p>

            <div className="mt-5 space-y-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-xs text-gray-500 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/[0.05] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] text-gray-700">
            © 2026 Nova AI. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="text-[9px] text-gray-700 transition hover:text-gray-400"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-[9px] text-gray-700 transition hover:text-gray-400"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}