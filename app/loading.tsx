export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#060816] text-white">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-black text-cyan-300 animate-pulse">
          N
        </div>

        <div className="mt-5 h-1 w-24 overflow-hidden rounded-full bg-white/[0.05]">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-cyan-400/50" />
        </div>

        <p className="mt-4 text-[9px] uppercase tracking-[0.3em] text-gray-700">
          Loading Nova
        </p>
      </div>
    </main>
  );
}