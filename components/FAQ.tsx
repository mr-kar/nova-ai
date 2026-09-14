"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is there a free plan?",
    answer:
      "Yes. Nova offers a Free plan with 3 AI projects, basic analytics, community support, and one workspace. You can start without entering a credit card.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. Pro subscriptions can be cancelled at any time. Your workspace remains available until the end of your current billing period.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is built into the Nova platform. We use modern security practices to protect workspace data and keep your information isolated from other teams.",
  },
  {
    question: "Can I use Nova with my team?",
    answer:
      "Yes. Team collaboration is included with the Pro plan, allowing multiple team members to work together inside the same workspace.",
  },
  {
    question: "Does Nova provide API access?",
    answer:
      "API access is available on the Enterprise plan for organizations that need custom integrations and deeper automation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-t border-white/[0.04] py-28 sm:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        {/* Heading */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            FAQ
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Questions?
            <br />
            <span className="text-gray-600">We Have Answers.</span>
          </h2>

          <p className="mt-6 max-w-sm text-sm leading-7 text-gray-500">
            Everything you need to know about Nova, pricing, security,
            and getting started.
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-white/[0.07]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-white/[0.07]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-sm font-medium text-gray-200 sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-cyan-300" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] pb-6 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-xs leading-6 text-gray-600 sm:text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}