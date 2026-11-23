import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Wrench, Box, Check, ArrowRight } from "lucide-react";

export const TwoTrackSection: React.FC = () => {
  const t = useTranslations("twoTracks");

  return (
    <section className="py-16 sm:py-24 bg-charcoal-surface border-y border-charcoal-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Track 1: Custom AI Integration */}
          <div className="rounded-3xl border-2 border-brand/30 bg-white p-7 sm:p-10 shadow-sm flex flex-col justify-between transition-all hover:border-brand hover:shadow-md">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft text-brand text-xs font-semibold mb-6">
                <Wrench className="h-3.5 w-3.5" />
                <span>{t("track1Badge")}</span>
              </div>
              <h3 className="text-2xl font-bold text-charcoal tracking-tight mb-3">
                {t("track1Title")}
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
                {t("track1Desc")}
              </p>

              <div className="space-y-3 pt-4 border-t border-charcoal-border/70 mb-8">
                {[
                  t("track1Point1"),
                  t("track1Point2"),
                  t("track1Point3"),
                  t("track1Point4"),
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal">
                    <Check className="h-4 w-4 text-brand flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-brand hover:bg-brand-hover text-white text-sm font-semibold transition-colors shadow-sm"
            >
              <span>{t("track1Cta")}</span>
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>

          {/* Track 2: Ready-to-Deploy AI Products */}
          <div className="rounded-3xl border border-charcoal-border bg-white p-7 sm:p-10 shadow-sm flex flex-col justify-between transition-all hover:border-charcoal-muted/40 hover:shadow-md">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-charcoal-muted text-xs font-semibold mb-6">
                <Box className="h-3.5 w-3.5 text-charcoal" />
                <span>{t("track2Badge")}</span>
              </div>
              <h3 className="text-2xl font-bold text-charcoal tracking-tight mb-3">
                {t("track2Title")}
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
                {t("track2Desc")}
              </p>

              <div className="space-y-3 pt-4 border-t border-charcoal-border/70 mb-8">
                {[
                  t("track2Point1"),
                  t("track2Point2"),
                  t("track2Point3"),
                  t("track2Point4"),
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal">
                    <Check className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-charcoal-surface hover:bg-slate-100 border border-charcoal-border text-charcoal text-sm font-semibold transition-colors"
            >
              <span>{t("track2Cta")}</span>
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
