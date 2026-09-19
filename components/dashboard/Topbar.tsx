"use client";

import { useState } from "react";

export default function Topbar() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/[0.06] bg-[#060816]/80 backdrop-blur-xl lg:left-64">
      <div className="flex h-20 items-center justify-between px-5 sm:px-8">
        <div>
          <p className="text-[9px] uppercase tracking-[0.25em] text-gray-600">
            Nova Workspace
          </p>

          <h1 className="mt-1 text-sm font-semibold text-white sm:text-base">
            Good evening, Alex.
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden h-10 items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 text-xs text-gray-500 transition hover:border-white/10 hover:text-white sm:flex"
          >
            <span>⌘</span>
            <span>Search</span>
            <span className="ml-3 rounded border border-white/10 px-1.5 py-0.5 text-[9px]">
              K
            </span>
          </button>

          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.02] text-sm text-gray-500 transition hover:text-white"
          >
            ♢
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] p-1.5 pr-3 transition hover:bg-white/[0.05]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-300 to-blue-500 text-xs font-bold text-black">
                A
              </div>

              <div className="hidden text-left sm:block">
                <p className="text-[10px] font-semibold text-white">
                  Alex Morgan
                </p>
                <p className="text-[9px] text-gray-600">Pro Workspace</p>
              </div>

              <span className="text-[10px] text-gray-600">⌄</span>
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-14 w-52 rounded-2xl border border-white/[0.08] bg-[#0c1120] p-2 shadow-2xl shadow-black/40">
                <button className="w-full rounded-xl px-3 py-2.5 text-left text-xs text-gray-400 transition hover:bg-white/[0.05] hover:text-white">
                  Profile Settings
                </button>

                <button className="w-full rounded-xl px-3 py-2.5 text-left text-xs text-gray-400 transition hover:bg-white/[0.05] hover:text-white">
                  Workspace Settings
                </button>

                <div className="my-1 border-t border-white/[0.06]" />

                <button className="w-full rounded-xl px-3 py-2.5 text-left text-xs text-red-400 transition hover:bg-red-400/5">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}