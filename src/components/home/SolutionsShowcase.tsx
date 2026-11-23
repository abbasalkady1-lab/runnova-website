import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { solutionsData } from "@/data/solutions";
import { Bot, Cpu, Database, ArrowRight, CheckCircle2 } from "lucide-react";

export const SolutionsShowcase: React.FC = () => {
  const t = useTranslations("solutionsSection");
  const locale = useLocale();
  const isAr = locale === "ar";

  const getIcon = (slug: string) => {
    switch (slug) {
      case "ai-agents":
        return <Bot className="h-6 w-6 text-brand" />;
      case "workflow-automation":
        return <Cpu className="h-6 w-6 text-brand" />;
      case "enterprise-ai-rag":
        return <Database className="h-6 w-6 text-brand" />;
      default:
        return <Bot className="h-6 w-6 text-brand" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
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
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-hover transition-colors flex-shrink-0"
          >
            <span>{t("viewAll")}</span>
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutionsData.map((item) => (
            <div
              key={item.slug}
              className="group rounded-3xl border border-charcoal-border bg-charcoal-surface/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:border-brand/40 hover:bg-white hover:shadow-lg hover:shadow-brand/5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white border border-charcoal-border shadow-2xs group-hover:border-brand/30 group-hover:scale-105 transition-all">
                    {getIcon(item.slug)}
                  </div>
                  <span className="text-[11px] font-semibold text-brand bg-brand-soft px-2.5 py-1 rounded-full">
                    {item.badge[isAr ? "ar" : "en"]}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-brand transition-colors">
                  {item.title[isAr ? "ar" : "en"]}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-6">
                  {item.subtitle[isAr ? "ar" : "en"]}
                </p>

                <div className="space-y-2.5 mb-6 pt-4 border-t border-charcoal-border/60">
                  {item.keyCapabilities.slice(0, 2).map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-charcoal">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{cap.title[isAr ? "ar" : "en"]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-charcoal-border/70 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-charcoal">
                  {item.metrics[0].value} {item.metrics[0].label[isAr ? "ar" : "en"]}
                </span>
                <Link
                  href={`/solutions/${item.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"
                >
                  <span>{t("learnMore")}</span>
                  <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
