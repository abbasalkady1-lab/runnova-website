import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { useCasesData } from "@/data/use-cases";
import { XCircle, CheckCircle2, TrendingUp } from "lucide-react";

export const BeforeAfterSection: React.FC = () => {
  const t = useTranslations("beforeAfter");
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section className="py-16 sm:py-24 bg-charcoal-surface border-b border-charcoal-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand mb-2 block">
            {t("badge")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight font-display mb-4">
            {t("title")}
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-8">
          {useCasesData.slice(0, 3).map((uc) => (
            <div
              key={uc.id}
              className="rounded-3xl border border-charcoal-border bg-white p-6 sm:p-9 shadow-sm"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-charcoal-border/70 mb-6">
                <div>
                  <span className="text-xs font-bold text-brand bg-brand-soft px-3 py-1 rounded-full mb-2 inline-block">
                    {uc.categoryLabel[isAr ? "ar" : "en"]}
                  </span>
                  <h3 className="text-xl font-bold text-charcoal">
                    {uc.title[isAr ? "ar" : "en"]}
                  </h3>
                </div>
                <span className="text-xs font-medium text-charcoal-muted">
                  {uc.clientType[isAr ? "ar" : "en"]}
                </span>
              </div>

              {/* Before vs After Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Before Box */}
                <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider mb-2">
                    <XCircle className="h-4 w-4" />
                    <span>{t("beforeTitle")}</span>
                  </div>
                  <h4 className="text-sm font-bold text-charcoal mb-3">
                    {uc.before.headline[isAr ? "ar" : "en"]}
                  </h4>
                  <ul className="space-y-2 text-xs text-charcoal-muted">
                    {uc.before.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold mt-0.5">•</span>
                        <span>{pt[isAr ? "ar" : "en"]}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After Box */}
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>{t("afterTitle")}</span>
                  </div>
                  <h4 className="text-sm font-bold text-charcoal mb-3">
                    {uc.after.headline[isAr ? "ar" : "en"]}
                  </h4>
                  <ul className="space-y-2 text-xs text-charcoal">
                    {uc.after.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                        <span>{pt[isAr ? "ar" : "en"]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Metrics Ribbon */}
              <div className="pt-4 border-t border-charcoal-border/70 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {uc.metrics.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="text-xl sm:text-2xl font-extrabold text-brand font-mono">
                      {m.value}
                    </div>
                    <div className="text-xs text-charcoal-muted leading-tight">
                      {m.label[isAr ? "ar" : "en"]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
