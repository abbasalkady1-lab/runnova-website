import React from "react";
import { useTranslations } from "next-intl";

export const HowWeWork: React.FC = () => {
  const t = useTranslations("howWeWork");

  const steps = [
    { num: t("step1Num"), title: t("step1Title"), desc: t("step1Desc") },
    { num: t("step2Num"), title: t("step2Title"), desc: t("step2Desc") },
    { num: t("step3Num"), title: t("step3Title"), desc: t("step3Desc") },
    { num: t("step4Num"), title: t("step4Title"), desc: t("step4Desc") },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-charcoal-border bg-charcoal-surface/50 p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-extrabold text-brand/30 font-mono block mb-4">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-charcoal-border/70 text-[11px] font-mono text-charcoal-muted">
                Milestone 0{idx + 1} • Verified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
