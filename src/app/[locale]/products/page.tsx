import React from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { productsData } from "@/data/products";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { Box, ExternalLink, ArrowRight, Check, Zap, Sparkles } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const isAr = locale === "ar";
  const url = `${siteConfig.url}${isAr ? "/ar" : ""}/products`;

  return {
    title: t("productsTitle"),
    description: t("productsDescription"),
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}/products`,
        ar: `${siteConfig.url}/ar/products`,
        "x-default": `${siteConfig.url}/products`,
      },
    },
    openGraph: {
      images: [siteConfig.ogImage],
      title: t("productsTitle"),
      description: t("productsDescription"),
      url,
    },
  };
}

export default async function ProductsHubPage({
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
        name: isAr ? "المنتجات الجاهزة" : "Products",
        item: `${siteConfig.url}${isAr ? "/ar" : ""}/products`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="pt-16 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft text-brand text-xs font-semibold mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{isAr ? "برمجيات ذكاء اصطناعي جاهزة" : "Turnkey AI Software"}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight font-display mb-4">
              {isAr ? "منتجات ذكاء اصطناعي جاهزة للإطلاق الفوري" : "Ready-to-Deploy Enterprise AI Applications"}
            </h1>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              {isAr
                ? "انطلق في أقل من 48 ساعة مع برمجيات معيارية جرى اختبارها لتحقيق عائد تشغيلي مباشر، مع إمكانية التخصيص الكامل عند التوسع."
                : "Launch in under 48 hours with battle-tested modular applications engineered for immediate operational return, customizable as you scale."}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productsData.map((prod) => (
              <div
                key={prod.slug}
                className="rounded-3xl border border-charcoal-border bg-charcoal-surface/30 p-8 sm:p-10 shadow-sm flex flex-col justify-between transition-all hover:border-brand/40 hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="text-xs font-bold text-brand bg-brand-soft px-3 py-1 rounded-full">
                      {prod.badge[isAr ? "ar" : "en"]}
                    </span>
                    <span className="text-xs font-mono text-charcoal-muted flex items-center gap-1">
                      <Zap className="h-3 w-3 text-amber-500" />
                      {prod.deploymentTime[isAr ? "ar" : "en"]}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal mb-2 font-display">
                    {prod.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-brand mb-4">
                    {prod.tagline[isAr ? "ar" : "en"]}
                  </p>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-6">
                    {prod.description[isAr ? "ar" : "en"]}
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-charcoal-border text-xs text-charcoal mb-6">
                    <span className="font-bold text-charcoal block mb-1">
                      {isAr ? "المشكلة التي يقضي عليها:" : "Problem Solved:"}
                    </span>
                    <span className="text-charcoal-muted">{prod.problemSolved[isAr ? "ar" : "en"]}</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {prod.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal">
                        <Check className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold">{cap.title[isAr ? "ar" : "en"]}: </span>
                          <span className="text-charcoal-muted">{cap.desc[isAr ? "ar" : "en"]}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-charcoal-border flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href={prod.internalLink}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-brand hover:bg-brand-hover text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                  >
                    <span>{isAr ? "تفاصيل المنتج والمواصفات" : "Product Details & Specs"}</span>
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </Link>
                  <a
                    href={prod.externalAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-charcoal-surface hover:bg-slate-100 border border-charcoal-border text-charcoal text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <span>{isAr ? "فتح التطبيق التجريبي" : "Launch App"}</span>
                    <ExternalLink className="h-4 w-4 text-charcoal-muted" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
