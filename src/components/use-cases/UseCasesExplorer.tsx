"use client";

import React, { useState } from "react";
import { useCasesData, UseCaseItem } from "@/data/use-cases";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

export const UseCasesExplorer: React.FC<{ locale?: string }> = ({ locale = "en" }) => {
  const isAr = locale === "ar";
  const t = useTranslations("useCasesPage");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: t("filterAll") },
    { id: "real-estate", label: t("filterRealEstate") },
    { id: "healthcare", label: t("filterHealthcare") },
    { id: "ecommerce", label: t("filterEcommerce") },
    { id: "b2b", label: t("filterB2b") },
  ];

  const filtered =
    selectedCategory === "all"
      ? useCasesData
      : useCasesData.filter((u) => u.category === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Filters Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === cat.id
                ? "bg-brand text-white shadow-sm shadow-brand/25"
                : "bg-white border border-charcoal-border text-charcoal hover:bg-charcoal-surface"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Scenarios List */}
      <div className="space-y-8">
        {filtered.map((uc) => (
          <div
            key={uc.id}
            className="rounded-3xl border border-charcoal-border bg-white p-6 sm:p-10 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-charcoal-border/70 mb-6">
              <div>
                <span className="text-xs font-bold text-brand bg-brand-soft px-3 py-1 rounded-full mb-2 inline-block">
                  {uc.categoryLabel[isAr ? "ar" : "en"]}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal">
                  {uc.title[isAr ? "ar" : "en"]}
                </h2>
              </div>
              <span className="text-xs font-medium text-charcoal-muted">
                {uc.clientType[isAr ? "ar" : "en"]}
              </span>
            </div>

            <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
              {uc.subtitle[isAr ? "ar" : "en"]}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Before */}
              <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider mb-2">
                  <XCircle className="h-4 w-4" />
                  <span>{isAr ? "التحديات السابقة (قبل الدمج)" : "Previous Operational Bottlenecks"}</span>
                </div>
                <h3 className="text-sm font-bold text-charcoal mb-3">
                  {uc.before.headline[isAr ? "ar" : "en"]}
                </h3>
                <ul className="space-y-2 text-xs text-charcoal-muted">
                  {uc.before.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold mt-0.5">•</span>
                      <span>{pt[isAr ? "ar" : "en"]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{isAr ? "مع منظومة Runnova الذكية" : "With Runnova AI Systems"}</span>
                </div>
                <h3 className="text-sm font-bold text-charcoal mb-3">
                  {uc.after.headline[isAr ? "ar" : "en"]}
                </h3>
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

            {/* Metrics */}
            <div className="pt-6 border-t border-charcoal-border/70 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {uc.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-charcoal-surface border border-charcoal-border/60">
                  <div className="text-2xl font-extrabold text-brand font-mono mb-0.5">
                    {m.value}
                  </div>
                  <div className="text-xs text-charcoal-muted">
                    {m.label[isAr ? "ar" : "en"]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
