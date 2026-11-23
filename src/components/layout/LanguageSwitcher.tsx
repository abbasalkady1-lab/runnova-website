"use client";

import React from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = "" }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-charcoal-border text-xs font-semibold text-charcoal hover:bg-charcoal-surface hover:border-charcoal-muted/30 transition-colors ${className}`}
      aria-label={locale === "en" ? "تبديل إلى اللغة العربية" : "Switch to English"}
    >
      <Globe className="h-3.5 w-3.5 text-brand" />
      <span>{locale === "en" ? "العربية" : "EN"}</span>
    </button>
  );
};
