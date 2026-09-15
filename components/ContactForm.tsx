"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      {submitted ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300">
            ✓
          </div>

          <h2 className="mt-6 text-2xl font-bold">
            Message received.
          </h2>

          <p className="mt-3 max-w-md text-sm leading-7 text-gray-500">
            Thanks for reaching out. This demo form is working on the
            frontend. A real backend can be connected later.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-medium text-gray-400"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-cyan-400/30 focus:bg-white/[0.05]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-medium text-gray-400"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-cyan-400/30 focus:bg-white/[0.05]"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-xs font-medium text-gray-400"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell us what you need..."
              className="w-full resize-none rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-cyan-400/30 focus:bg-white/[0.05]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            Send Message →
          </button>
        </form>
      )}
    </div>
  );
}