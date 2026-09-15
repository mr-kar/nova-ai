import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Nova AI team.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060816] text-white">
      <Navbar />

      <div className="pt-20">
        <section className="relative px-6 pb-28 pt-20 sm:pt-32">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-400/[0.04] blur-[130px]" />

          <div className="relative mx-auto max-w-6xl">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              {/* Intro */}
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
                  Contact Nova
                </p>

                <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] sm:text-6xl">
                  Let&apos;s Build
                  <br />
                  <span className="text-gray-600">Something Smarter.</span>
                </h1>

                <p className="mt-7 max-w-md text-sm leading-7 text-gray-500">
                  Have a question, partnership idea, or need help choosing
                  the right plan? Send us a message.
                </p>

                <div className="mt-10 space-y-5">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-gray-700">
                      Email
                    </p>

                    <p className="mt-2 text-sm text-gray-400">
                      hello@nova-ai.example
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-gray-700">
                      Sales
                    </p>

                    <p className="mt-2 text-sm text-gray-400">
                      sales@nova-ai.example
                    </p>
                  </div>
                </div>
              </div>

              {/* Form
              <form
                onSubmit={(event) => event.preventDefault()}
                className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[9px] uppercase tracking-[0.15em] text-gray-600"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-700 focus:border-cyan-400/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-[9px] uppercase tracking-[0.15em] text-gray-600"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-700 focus:border-cyan-400/30"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="company"
                    className="text-[9px] uppercase tracking-[0.15em] text-gray-600"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    type="text"
                    placeholder="Company name"
                    className="mt-2 w-full rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-700 focus:border-cyan-400/30"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="text-[9px] uppercase tracking-[0.15em] text-gray-600"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us how we can help..."
                    className="mt-2 w-full resize-none rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-700 focus:border-cyan-400/30"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-xl bg-white px-5 py-3.5 text-xs font-semibold text-black transition hover:bg-cyan-300"
                >
                  Send Message →
                </button>

                <p className="mt-4 text-center text-[9px] text-gray-700">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </form> */}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}