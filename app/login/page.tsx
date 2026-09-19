import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#060816] px-6 py-12 text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.05] blur-[130px]" />

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
              Welcome back
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-[-0.04em]">
              Sign in to Nova.
            </h1>

            <p className="mt-3 text-xs leading-5 text-gray-600">
              Continue where your team left off.
            </p>
          </div>

          <form className="mt-8 space-y-4">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[10px] uppercase tracking-[0.15em] text-gray-600"
              >
                Email
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
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-[10px] uppercase tracking-[0.15em] text-gray-600"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="text-[9px] text-cyan-300 hover:text-cyan-200"
                >
                  Forgot password?
                </button>
              </div>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="h-12 w-full rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 text-xs text-white outline-none placeholder:text-gray-700 focus:border-cyan-400/30"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-white py-3.5 text-xs font-semibold text-black transition hover:bg-cyan-300"
            >
              Sign In →
            </button>
          </form>

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="text-[9px] uppercase tracking-[0.15em] text-gray-700">
              or
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>

          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] py-3.5 text-xs text-gray-400 transition hover:bg-white/[0.05] hover:text-white">
            <span className="font-bold">G</span>
            Continue with Google
          </button>

          <p className="mt-7 text-center text-[10px] text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-cyan-300 hover:text-cyan-200"
            >
              Create one
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-[9px] text-gray-800">
          By continuing, you agree to Nova AI&apos;s Terms and Privacy Policy.
        </p>
      </div>
    </main>
  );
}