import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutionsData } from "@/data/solutions";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { Link } from "@/i18n/routing";
import { AgentSimulator } from "@/components/home/AgentSimulator";
import { PipelineVisual } from "@/components/solutions/PipelineVisual";
import { RagVisual } from "@/components/solutions/RagVisual";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  for (const locale of ["en", "ar"]) {
    for (const sol of solutionsData) {
      params.push({ locale, slug: sol.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const sol = solutionsData.find((s) => s.slug === slug);
  if (!sol) return {};

  const isAr = locale === "ar";
  const url = `${siteConfig.url}${isAr ? "/ar" : ""}/solutions/${sol.slug}`;
  const title = `${sol.title[isAr ? "ar" : "en"]}`;
  const description = sol.subtitle[isAr ? "ar" : "en"];

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}/solutions/${sol.slug}`,
        ar: `${siteConfig.url}/ar/solutions/${sol.slug}`,
        "x-default": `${siteConfig.url}/solutions/${sol.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
    },
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const sol = solutionsData.find((s) => s.slug === slug);

  if (!sol) {
    notFound();
  }

  const isAr = locale === "ar";
  const currentUrl = `${siteConfig.url}${isAr ? "/ar" : ""}/solutions/${sol.slug}`;

  // Structured Data: Service + FAQPage
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${currentUrl}/#service`,
        name: sol.title[isAr ? "ar" : "en"],
        description: sol.description[isAr ? "ar" : "en"],
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        areaServed: "Global",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: sol.title[isAr ? "ar" : "en"],
          itemListElement: sol.keyCapabilities.map((cap) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: cap.title[isAr ? "ar" : "en"],
              description: cap.desc[isAr ? "ar" : "en"],
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${currentUrl}/#faq`,
        mainEntity: sol.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question[isAr ? "ar" : "en"],
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer[isAr ? "ar" : "en"],
          },
        })),
      },
    ],
  };

  const renderVisualComponent = () => {
    switch (sol.slug) {
      case "ai-agents":
        return <AgentSimulator locale={locale} />;
      case "workflow-automation":
        return <PipelineVisual locale={locale} />;
      case "enterprise-ai-rag":
        return <RagVisual locale={locale} />;
      default:
        return null;
    }
  };

  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* Hero Section */}
      <section className="pt-16 pb-16 sm:pt-20 sm:pb-20 bg-white border-b border-charcoal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft text-brand text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{sol.badge[isAr ? "ar" : "en"]}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight font-display">
              {sol.title[isAr ? "ar" : "en"]}
            </h1>

            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              {sol.subtitle[isAr ? "ar" : "en"]}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 py-3.5 px-6 rounded-xl bg-brand hover:bg-brand-hover text-white text-sm font-semibold transition-colors shadow-sm"
              >
                <span>{isAr ? "احجز استشارة تقنية مخصصة لهذا الحل" : "Book Architecture Call for this Solution"}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>

          {/* Interactive Visual Simulator */}
          <div className="max-w-4xl mx-auto mb-16">
            {renderVisualComponent()}
          </div>

          {/* Metrics Ribbon */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8 border-t border-charcoal-border/70">
            {sol.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-charcoal-surface border border-charcoal-border text-center">
                <div className="text-3xl font-extrabold text-brand font-mono mb-1">
                  {m.value}
                </div>
                <div className="text-xs text-charcoal-muted font-medium">
                  {m.label[isAr ? "ar" : "en"]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Point & Cost of Inaction */}
      <section className="py-16 bg-charcoal-surface border-b border-charcoal-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-rose-200 bg-rose-50/40 p-8 sm:p-10">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider mb-2">
              <AlertTriangle className="h-4 w-4" />
              <span>{isAr ? "التحدي التشغيلي وتكلفة التأخير" : "Operational Challenge & Cost of Inaction"}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
              {sol.painPoint.title[isAr ? "ar" : "en"]}
            </h2>
            <p className="text-sm text-charcoal-muted leading-relaxed">
              {sol.painPoint.costOfInaction[isAr ? "ar" : "en"]}
            </p>
          </div>
        </div>
      </section>

      {/* Technical Workflow Steps */}
      <section className="py-16 sm:py-24 bg-white border-b border-charcoal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand mb-2 block">
              {isAr ? "سير العمليات البرمجية" : "Technical Execution Flow"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight font-display mb-3">
              {isAr ? "كيف ينفذ النظام المهام بدقة وحتمية؟" : "How the Architecture Executes with Zero Hallucination"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {sol.workflowSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl border border-charcoal-border bg-charcoal-surface/40 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-mono font-bold text-brand block mb-3">
                    0{step.step}
                  </span>
                  <h3 className="text-base font-bold text-charcoal mb-2">
                    {step.title[isAr ? "ar" : "en"]}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {step.description[isAr ? "ar" : "en"]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Integrations */}
          <div className="mt-12 p-6 rounded-2xl border border-charcoal-border bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-bold text-charcoal uppercase tracking-wider">
              {isAr ? "التكامل المدعوم:" : "Verified Integrations:"}
            </div>
            <div className="flex flex-wrap gap-2">
              {sol.technicalIntegrations.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-white border border-charcoal-border text-xs font-mono text-charcoal font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24 bg-charcoal-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-charcoal-border text-xs font-semibold text-charcoal mb-3">
              <HelpCircle className="h-3.5 w-3.5 text-brand" />
              <span>{isAr ? "الأسئلة التقنية الشائعة" : "Technical FAQs"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight font-display">
              {isAr ? "كل ما تود معرفته عن هذا الحل" : "Everything You Need to Know"}
            </h2>
          </div>

          <div className="space-y-4">
            {sol.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-charcoal-border bg-white shadow-2xs"
              >
                <h3 className="text-base font-bold text-charcoal mb-2">
                  {faq.question[isAr ? "ar" : "en"]}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {faq.answer[isAr ? "ar" : "en"]}
                </p>
              </div>
            ))}
          </div>

          {/* Contextual CTA */}
          <div className="mt-14 p-8 rounded-3xl bg-brand text-white text-center space-y-4 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              {isAr ? `جاهز لتطبيق ${sol.title.ar} في شركتك؟` : `Ready to Integrate ${sol.title.en}?`}
            </h3>
            <p className="text-xs sm:text-sm text-brand-100 max-w-xl mx-auto leading-relaxed">
              {isAr
                ? "احجز جلسة استشارية فنية مع مهندسينا لدراسة سير عملك وتحديد متطلبات الدمج والجدول الزمني."
                : "Schedule a technical discovery session with our lead architects to review your workflows and integration timeline."}
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-white text-brand hover:bg-slate-100 font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <span>{isAr ? "احجز جلستك المجانية" : "Book Your Free Session"}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
