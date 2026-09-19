import type { Metadata } from "next";
import Link from "next/link";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export const metadata: Metadata = {
  title: "Workspace",
  description: "Nova AI workspace dashboard.",
};

const mobileNav = [
  ["⌂", "Home", "/dashboard"],
  ["◈", "Projects", "/dashboard/projects"],
  ["✓", "Tasks", "/dashboard/tasks"],
  ["✦", "AI", "/dashboard/ai-notes"],
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#060816] text-white">
      <Sidebar />
      <Topbar />

      <main className="min-h-screen pb-24 pt-20 lg:pb-0 lg:pl-64">
        <div className="mx-auto max-w-[1600px] p-5 sm:p-8">
          {children}
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/[0.06] bg-[#080b18]/95 px-3 py-3 backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-lg items-center justify-around">
          {mobileNav.map(([icon, label, href]) => (
            <Link
              key={href}
              href={href}
              className="flex min-w-16 flex-col items-center gap-1.5 rounded-xl px-3 py-2 text-gray-600 transition hover:bg-white/[0.04] hover:text-white"
            >
              <span className="text-sm">{icon}</span>
              <span className="text-[8px]">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}