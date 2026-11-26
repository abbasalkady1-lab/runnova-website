import React from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { solutionsData } from "@/data/solutions";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { Bot, Cpu, Database, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const isAr = locale === "ar";
  const url = `${siteConfig.url}${isAr ? "/ar" : ""}/solutions`;

  return {
    title: t("solutionsTitle"),
    description: t("solutionsDescription"),
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}/solutions`,
        ar: `${siteConfig.url}/ar/solutions`,
        "x-default": `${siteConfig.url}/solutions`,
      },
    },
    openGraph: {
      images: [siteConfig.ogImage],
      title: t("solutionsTitle"),
      description: t("solutionsDescription"),
      url,
    },
  };
}

export default async function SolutionsHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const getIcon = (slug: string) => {
    switch (slug) {
      case "ai-agents":
        return <Bot className="h-7 w-7 text-brand" />;
      case "workflow-automation":
        return <Cpu className="h-7 w-7 text-brand" />;
      case "enterprise-ai-rag":
        return <Database className="h-7 w-7 text-brand" />;
      default:
        return <Bot className="h-7 w-7 text-brand" />;
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isAr ? "الرئيسية" : "Home",
        item: `${siteConfig.url}${isAr ? "/ar" : ""}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isAr ? "الحلول المخصصة" : "Solutions",
        item: `${siteConfig.url}${isAr ? "/ar" : ""}/solutions`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="pt-16 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft text-brand text-xs font-semibold mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{isAr ? "قدرات Runnova الهندسية" : "Core Engineering Capabilities"}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight font-display mb-4">
              {isAr
                ? "حلول ذكاء اصطناعي مخصصة مهندسة لنمو الشركات"
                : "Bespoke Enterprise AI Engineering Solutions"}
            </h1>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              {isAr
                ? "نبني أنظمة ذكاء اصطناعي مستقلة ومسارات أتمتة شاملة تتصل مباشرة ببنيتكم التقنية الحالية وتحقق نتائج تشغيلية ملموسة."
                : "We architect autonomous AI systems, fault-tolerant workflow automations, and private RAG engines that plug directly into your current tech stack."}
            </p>
          </div>

          {/* Detailed Solutions Cards */}
          <div className="space-y-12">
            {solutionsData.map((item, index) => (
              <div
                key={item.slug}
                className="rounded-3xl border border-charcoal-border bg-charcoal-surface/30 p-8 sm:p-12 shadow-sm transition-all hover:border-brand/40 hover:bg-white hover:shadow-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-white border border-charcoal-border shadow-2xs">
                        {getIcon(item.slug)}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-brand bg-brand-soft px-2.5 py-0.5 rounded-full">
                          {item.badge[isAr ? "ar" : "en"]}
                        </span>
                        <h2 className="text-2xl font-bold text-charcoal mt-1">
                          {item.title[isAr ? "ar" : "en"]}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-charcoal leading-relaxed">
                      {item.description[isAr ? "ar" : "en"]}
                    </p>

                    <div className="p-4 rounded-xl bg-white border border-charcoal-border text-xs text-charcoal space-y-2">
                      <div className="font-bold text-rose-700">
                        {isAr ? "التكلفة التشغيلية لعدم التطبيق:" : "Cost of Inaction:"}
                      </div>
                      <p className="text-charcoal-muted">
                        {item.painPoint.costOfInaction[isAr ? "ar" : "en"]}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/solutions/${item.slug}`}
                        className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-brand hover:bg-brand-hover text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                      >
                        <span>{isAr ? "استكشف تفاصيل الحل والمعمارية" : "Explore Technical Architecture"}</span>
                        <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column (Capabilities & Technical Stack) */}
                  <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-charcoal-border space-y-5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      {isAr ? "الميزات والقدرات الرئيسية" : "Core Capabilities"}
                    </h3>
                    <div className="space-y-3">
                      {item.keyCapabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-charcoal">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold">{cap.title[isAr ? "ar" : "en"]}: </span>
                            <span className="text-charcoal-muted">{cap.desc[isAr ? "ar" : "en"]}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-charcoal-border/70">
                      <span className="text-[11px] font-semibold text-charcoal-muted uppercase tracking-wider block mb-2">
                        {isAr ? "التكامل مع الأنظمة" : "Native Integrations"}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.technicalIntegrations.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-charcoal-surface border border-charcoal-border text-charcoal"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
