import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#060816] px-6 text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.04] blur-[120px]" />

      <div className="relative text-center">
        <p className="text-8xl font-black tracking-[-0.08em] text-white/[0.08] sm:text-[12rem]">
          404
        </p>

        <div className="-mt-10 sm:-mt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Page Not Found
          </p>

          <h1 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
            This page drifted
            <br />
            <span className="text-gray-600">into another dimension.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-gray-600">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved somewhere else.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-xs font-semibold text-black transition hover:bg-cyan-300"
          >
            Back to Nova →
          </Link>
        </div>
      </div>
    </main>
  );
}