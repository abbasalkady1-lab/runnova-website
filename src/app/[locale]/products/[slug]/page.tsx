import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { productsData } from "@/data/products";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { Link } from "@/i18n/routing";
import {
  Box,
  ExternalLink,
  ArrowRight,
  Check,
  Zap,
  ShieldCheck,
  Sparkles,
  Server,
  Layers,
} from "lucide-react";

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  for (const locale of ["en", "ar"]) {
    for (const prod of productsData) {
      params.push({ locale, slug: prod.slug });
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
  const prod = productsData.find((p) => p.slug === slug);
  if (!prod) return {};

  const isAr = locale === "ar";
  const url = `${siteConfig.url}${isAr ? "/ar" : ""}/products/${prod.slug}`;
  const title = `${prod.name}`;
  const description = prod.tagline[isAr ? "ar" : "en"];

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}/products/${prod.slug}`,
        ar: `${siteConfig.url}/ar/products/${prod.slug}`,
        "x-default": `${siteConfig.url}/products/${prod.slug}`,
      },
    },
    openGraph: {
      images: [siteConfig.ogImage],
      title,
      description,
      url,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const prod = productsData.find((p) => p.slug === slug);

  if (!prod) {
    notFound();
  }

  const isAr = locale === "ar";
  const currentUrl = `${siteConfig.url}${isAr ? "/ar" : ""}/products/${prod.slug}`;

  // Structured Data: SoftwareApplication Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${currentUrl}/#software`,
    name: prod.name,
    headline: prod.tagline[isAr ? "ar" : "en"],
    description: prod.description[isAr ? "ar" : "en"],
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud, On-Premise",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
  };

  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero Section */}
      <section className="pt-16 pb-16 sm:pt-20 sm:pb-20 bg-white border-b border-charcoal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft text-brand text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{prod.badge[isAr ? "ar" : "en"]}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight font-display">
              {prod.name}
            </h1>

            <p className="text-base sm:text-xl font-semibold text-brand">
              {prod.tagline[isAr ? "ar" : "en"]}
            </p>

            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed max-w-2xl mx-auto">
              {prod.description[isAr ? "ar" : "en"]}
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={prod.externalAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand hover:bg-brand-hover text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
              >
                <span>{isAr ? "فتح التطبيق التجريبي الآن" : "Launch App Demo"}</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-charcoal-surface hover:bg-slate-100 border border-charcoal-border text-charcoal text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>{isAr ? "طلب تخصيص لمؤسستك" : "Request Enterprise Customization"}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>

          {/* Problem Solved Box */}
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-charcoal-surface border border-charcoal-border mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
              {isAr ? "المشكلة التشغيلية المعالجة:" : "Operational Bottleneck Addressed:"}
            </h2>
            <p className="text-sm sm:text-base text-charcoal leading-relaxed">
              {prod.problemSolved[isAr ? "ar" : "en"]}
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-xl font-bold text-charcoal mb-6 text-center">
              {isAr ? "أبرز القدرات الوظيفية للمنتج" : "Core Functional Capabilities"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {prod.capabilities.map((cap, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-charcoal-border shadow-2xs">
                  <div className="p-2 rounded-lg bg-brand-soft text-brand w-fit mb-3">
                    <Check className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-charcoal mb-2">
                    {cap.title[isAr ? "ar" : "en"]}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {cap.desc[isAr ? "ar" : "en"]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-charcoal-border shadow-sm">
            <h2 className="text-base font-bold text-charcoal mb-4 flex items-center gap-2">
              <Server className="h-4 w-4 text-brand" />
              <span>{isAr ? "المواصفات التقنية ومعايير الأداء" : "Technical & SLA Specifications"}</span>
            </h2>

            <div className="divide-y divide-charcoal-border">
              {prod.techSpecs.map((spec, idx) => (
                <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <span className="font-semibold text-charcoal-muted">
                    {spec.label[isAr ? "ar" : "en"]}
                  </span>
                  <span className="font-mono font-bold text-charcoal mt-1 sm:mt-0">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Link to Custom Integration */}
      <section className="py-16 bg-charcoal-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            {isAr ? "هل تحتاج إلى تعديل خاص؟" : "Need Custom Architecture?"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal font-display">
            {isAr
              ? "نستطيع تكييف وتطوير هذا المنتج ليلائم نظامك تماماً"
              : "We Can Tailor and Extend This Product to Your Proprietary Stack"}
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-xl mx-auto leading-relaxed">
            {isAr
              ? "يمكن لمهندسينا إضافة محولات مخصصة لقواعد بياناتك أو إضافة نماذج صوتية مخصصة أو استضافته بالكامل داخل شبكتك."
              : "Our engineering team can build custom database bridges, proprietary fine-tuned voice models, or deploy on your private isolated network."}
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-brand hover:bg-brand-hover text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              <span>{isAr ? "تحدث مع مهندسينا حول التخصيص" : "Discuss Custom Integration"}</span>
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
