import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { resources } from "@/components/resource-data";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return resources.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps) {
  const { slug } = await params;

  const article = resources.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;

  const article = resources.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#060816] text-white">
      <Navbar />

      <article className="pt-20">
        {/* Header */}
        <header className="relative overflow-hidden border-b border-white/[0.05] px-6 pb-20 pt-20 sm:pt-28">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-400/[0.045] blur-[130px]" />

          <div className="relative mx-auto max-w-4xl">
            <Link
              href="/resources"
              className="inline-flex text-[10px] uppercase tracking-[0.2em] text-gray-600 transition hover:text-cyan-300"
            >
              ← Back to resources
            </Link>

            <div className="mt-12 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-400/10 bg-cyan-400/[0.05] px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-cyan-300">
                {article.category}
              </span>

              <span className="text-[9px] text-gray-700">
                {article.readTime}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-7xl">
              {article.title}
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              {article.description}
            </p>
          </div>
        </header>

        {/* Article body */}
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
          <div className="mb-14 h-px bg-white/[0.06]" />

          <div className="space-y-9">
            {article.content.map((paragraph, index) => (
              <div key={paragraph}>
                {index === 0 && (
                  <span className="float-left mr-3 mt-1 text-6xl font-black leading-none text-cyan-400">
                    {paragraph.charAt(0)}
                  </span>
                )}

                <p className="text-base leading-8 text-gray-400 sm:text-lg sm:leading-9">
                  {index === 0
                    ? paragraph.slice(1)
                    : paragraph}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 rounded-3xl border border-cyan-400/10 bg-cyan-400/[0.035] p-7 sm:p-9">
            <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
              Nova AI
            </p>

            <h2 className="mt-3 text-xl font-bold">
              Ready to make your workflow smarter?
            </h2>

            <p className="mt-3 text-xs leading-6 text-gray-600">
              Start building a more intelligent workspace with Nova.
            </p>

            <Link
              href="/pricing"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-xs font-semibold text-black transition hover:bg-cyan-300"
            >
              Start Free Trial →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}