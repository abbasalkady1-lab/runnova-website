import React from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { UseCasesExplorer } from "@/components/use-cases/UseCasesExplorer";
import { Sparkles } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const isAr = locale === "ar";
  const url = `${siteConfig.url}${isAr ? "/ar" : ""}/use-cases`;

  return {
    title: t("useCasesTitle"),
    description: t("useCasesDescription"),
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}/use-cases`,
        ar: `${siteConfig.url}/ar/use-cases`,
        "x-default": `${siteConfig.url}/use-cases`,
      },
    },
    openGraph: {
      title: t("useCasesTitle"),
      description: t("useCasesDescription"),
      url,
    },
  };
}

export default async function UseCasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

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
        name: isAr ? "دراسات الحالة" : "Use Cases",
        item: `${siteConfig.url}${isAr ? "/ar" : ""}/use-cases`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="pt-16 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft text-brand text-xs font-semibold mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{isAr ? "نتائج أعمال حقيقية" : "Real Enterprise Impact"}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight font-display mb-4">
              {isAr ? "سيناريوهات واقعية. أرقام مثبتة. عائد استثماري مباشر." : "Real Enterprises. Concrete Metrics. Measurable ROI."}
            </h1>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              {isAr
                ? "اكتشف كيف استطاعت الشركات في مختلف القطاعات التخلص من عنق الزجاجة التشغيلي ومضاعفة إنتاجيتها مع Runnova."
                : "Explore how forward-thinking companies eliminate operational bottlenecks and multiply efficiency with Runnova."}
            </p>
          </div>

          <UseCasesExplorer locale={locale} />
        </div>
      </section>
    </>
  );
}
