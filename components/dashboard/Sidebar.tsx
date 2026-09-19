"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: "⌂",
  },
  {
    label: "Projects",
    href: "/dashboard/projects",
    icon: "◈",
  },
  {
    label: "Tasks",
    href: "/dashboard/tasks",
    icon: "✓",
  },
  {
    label: "AI Notes",
    href: "/dashboard/ai-notes",
    icon: "✦",
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: "⌁",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 border-r border-white/[0.06] bg-[#080b18] lg:flex lg:flex-col">
      <div className="flex h-20 items-center border-b border-white/[0.06] px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-black text-black">
            N
          </div>

          <div>
            <p className="text-sm font-bold tracking-[0.18em] text-white">
              NOVA AI
            </p>
            <p className="mt-0.5 text-[8px] uppercase tracking-[0.2em] text-gray-600">
              Workspace
            </p>
          </div>
        </Link>
      </div>

      <div className="flex-1 px-4 py-6">
        <p className="px-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-700">
          Workspace
        </p>

        <nav className="mt-4 space-y-1">
          {navigation.map((item) => {
            const active =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all ${
                  active
                    ? "bg-cyan-400/10 text-cyan-300"
                    : "text-gray-500 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm ${
                    active
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "bg-white/[0.03] text-gray-600 group-hover:text-gray-300"
                  }`}
                >
                  {item.icon}
                </span>

                <span>{item.label}</span>

                {active && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-300" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="mt-10">
          <p className="px-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-700">
            AI Tools
          </p>

          <div className="mt-4 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                ✦
              </div>

              <span className="text-xs font-semibold text-white">
                AI Assistant
              </span>
            </div>

            <p className="mt-3 text-[11px] leading-5 text-gray-600">
              Ask Nova to summarize, organize, or improve your workflow.
            </p>

            <button className="mt-4 w-full rounded-lg border border-cyan-400/10 bg-cyan-400/5 py-2 text-[10px] font-semibold text-cyan-300 transition hover:bg-cyan-400/10">
              Open Assistant
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06] p-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-3 py-3 text-xs text-gray-600 transition hover:bg-white/[0.04] hover:text-white"
        >
          <span>↗</span>
          Back to website
        </Link>
      </div>
    </aside>
  );
}