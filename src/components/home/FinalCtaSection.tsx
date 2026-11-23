import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import { Sparkles, ArrowRight, MessageCircle, ShieldCheck, Phone } from "lucide-react";

export const FinalCtaSection: React.FC = () => {
  const t = useTranslations("finalCta");
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-charcoal-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand/20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-300 text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              {t("eyebrow")}
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-display text-white leading-tight">
              {t("title")}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand hover:bg-brand-hover text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-brand/30"
              >
                <span>{t("primary")}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>

              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors shadow-sm font-mono"
              >
                <Phone className="h-4 w-4" />
                <span dir="ltr">{siteConfig.displayPhone}</span>
              </a>

              <a
                href={isAr ? siteConfig.whatsappUrl : siteConfig.whatsappUrlEn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-semibold transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>{t("whatsapp")}</span>
              </a>
            </div>

            <div className="pt-6 border-t border-slate-700/60 flex items-center justify-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>{t("commitment")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
