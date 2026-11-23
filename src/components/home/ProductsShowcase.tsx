import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { productsData } from "@/data/products";
import { Box, ExternalLink, ArrowRight, Check, Zap } from "lucide-react";

export const ProductsShowcase: React.FC = () => {
  const t = useTranslations("productsSection");
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section className="py-16 sm:py-24 bg-charcoal-surface border-y border-charcoal-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand mb-2 block">
              {t("badge")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight font-display mb-3">
              {t("title")}
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-hover transition-colors flex-shrink-0"
          >
            <span>{t("allProducts")}</span>
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {productsData.map((prod) => (
            <div
              key={prod.slug}
              className="rounded-3xl border border-charcoal-border bg-white p-7 sm:p-10 shadow-sm flex flex-col justify-between transition-all hover:border-brand/40 hover:shadow-md"
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

                <h3 className="text-2xl font-bold text-charcoal mb-2 font-display">
                  {prod.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-brand mb-4">
                  {prod.tagline[isAr ? "ar" : "en"]}
                </p>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-6">
                  {prod.description[isAr ? "ar" : "en"]}
                </p>

                {/* Problem Solved Callout */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-charcoal-border/80 text-xs text-charcoal mb-6">
                  <span className="font-bold text-charcoal block mb-1">
                    {isAr ? "المشكلة التي يحلها:" : "Problem Solved:"}
                  </span>
                  <span className="text-charcoal-muted">{prod.problemSolved[isAr ? "ar" : "en"]}</span>
                </div>

                {/* 3 Capabilities */}
                <div className="space-y-2.5 mb-8">
                  {prod.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal">
                      <Check className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">{cap.title[isAr ? "ar" : "en"]}: </span>
                        <span className="text-charcoal-muted">{cap.desc[isAr ? "ar" : "en"]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-charcoal-border flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={prod.internalLink}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand hover:bg-brand-hover text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                >
                  <span>{t("viewDetails")}</span>
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Link>
                <a
                  href={prod.externalAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-charcoal-surface hover:bg-slate-100 border border-charcoal-border text-charcoal text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>{t("launchApp")}</span>
                  <ExternalLink className="h-4 w-4 text-charcoal-muted" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
