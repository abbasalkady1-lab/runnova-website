import React from "react";
import { useTranslations } from "next-intl";
import { ShieldCheck, Lock, Cloud, KeyRound } from "lucide-react";

export const SecurityTrustBar: React.FC = () => {
  const t = useTranslations("security");

  const trustItems = [
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: t("item1Title"),
      desc: t("item1Desc"),
    },
    {
      icon: <Lock className="h-5 w-5 text-brand" />,
      title: t("item2Title"),
      desc: t("item2Desc"),
    },
    {
      icon: <Cloud className="h-5 w-5 text-blue-600" />,
      title: t("item3Title"),
      desc: t("item3Desc"),
    },
    {
      icon: <KeyRound className="h-5 w-5 text-purple-600" />,
      title: t("item4Title"),
      desc: t("item4Desc"),
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-charcoal-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2 block">
            {t("badge")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight font-display mb-3">
            {t("title")}
          </h2>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-charcoal-border bg-charcoal-surface/40 p-6 flex flex-col"
            >
              <div className="p-2.5 rounded-xl bg-white border border-charcoal-border w-fit mb-4">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-charcoal mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
