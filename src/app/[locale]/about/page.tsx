import React from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { ShieldCheck, Cpu, Globe, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const isAr = locale === "ar";
  const url = `${siteConfig.url}${isAr ? "/ar" : ""}/about`;

  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}/about`,
        ar: `${siteConfig.url}/ar/about`,
        "x-default": `${siteConfig.url}/about`,
      },
    },
    openGraph: {
      images: [siteConfig.ogImage],
      title: t("aboutTitle"),
      description: t("aboutDescription"),
      url,
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const t = await getTranslations({ locale, namespace: "about" });

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
        name: isAr ? "عن الشركة" : "About",
        item: `${siteConfig.url}${isAr ? "/ar" : ""}/about`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="pt-16 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft text-brand text-xs font-semibold mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t("badge")}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight font-display mb-4">
              {t("heroTitle")}
            </h1>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              {t("heroSubtitle")}
            </p>
          </div>

          {/* Philosophy Statement */}
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-charcoal-surface border border-charcoal-border mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
              {t("missionTitle")}
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
              {t("missionDesc")}
            </p>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-3xl border border-charcoal-border bg-white shadow-2xs">
              <div className="p-3 rounded-2xl bg-brand-soft text-brand w-fit mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">
                {t("pillar1Title")}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {t("pillar1Desc")}
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-charcoal-border bg-white shadow-2xs">
              <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 w-fit mb-4">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">
                {t("pillar2Title")}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {t("pillar2Desc")}
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-charcoal-border bg-white shadow-2xs">
              <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 w-fit mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">
                {t("pillar3Title")}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {t("pillar3Desc")}
              </p>
            </div>
          </div>

          {/* Global Presence */}
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-slate-900 text-white text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-brand-300">
              {t("globalPresence")}
            </span>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {t("globalDesc")}
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {siteConfig.regionalOffices.map((office, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200"
                >
                  {office.city} ({office.region})
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 py-3.5 px-6 rounded-xl bg-brand hover:bg-brand-hover text-white text-sm font-semibold transition-colors shadow-sm"
            >
              <span>{isAr ? "احجز استشارة مع فريقنا" : "Book a Call with Our Leadership"}</span>
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
