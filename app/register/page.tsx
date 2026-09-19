import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#060816] px-6 py-12 text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.04] blur-[140px]" />

      <div className="relative w-full max-w-md">
        <Link
          href="/"
          className="mx-auto flex w-fit items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-black text-black">
            N
          </div>

          <span className="text-sm font-bold tracking-[0.18em]">
            NOVA AI
          </span>
        </Link>

        <div className="glass mt-8 rounded-3xl p-7 sm:p-9">
          <div className="text-center">
            <p className="text-[9px] uppercase tracking-[0.3em] text-cyan-300">
              Get started
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-[-0.04em]">
              Create your workspace.
            </h1>

            <p className="mt-3 text-xs leading-5 text-gray-600">
              Start building a smarter workflow with Nova AI.
            </p>
          </div>

          <form className="mt-8 space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-[10px] uppercase tracking-[0.15em] text-gray-600"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Alex Morgan"
                className="h-12 w-full rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 text-xs text-white outline-none placeholder:text-gray-700 focus:border-cyan-400/30"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[10px] uppercase tracking-[0.15em] text-gray-600"
              >
                Work Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                className="h-12 w-full rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 text-xs text-white outline-none placeholder:text-gray-700 focus:border-cyan-400/30"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-[10px] uppercase tracking-[0.15em] text-gray-600"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                className="h-12 w-full rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 text-xs text-white outline-none placeholder:text-gray-700 focus:border-cyan-400/30"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-white py-3.5 text-xs font-semibold text-black transition hover:bg-cyan-300"
            >
              Create Workspace →
            </button>
          </form>

          <p className="mt-7 text-center text-[10px] text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-cyan-300 hover:text-cyan-200"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}