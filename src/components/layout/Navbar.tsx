"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { RunnovaLogo } from "@/components/brand/RunnovaLogo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Menu, X, ArrowRight, Sparkles, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export const Navbar: React.FC = () => {
  const t = useTranslations("nav");
  const tTop = useTranslations("topBar");
  const locale = useLocale();
  const isAr = locale === "ar";
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/solutions", label: t("solutions") },
    { href: "/products", label: t("products") },
    { href: "/use-cases", label: t("useCases") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-charcoal-border/80 transition-all shadow-xs">
      {/* Sleek Top Utility & Contact Bar */}
      <div className="bg-[#0B132B] text-slate-200 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center gap-1.5 font-medium text-brand-300 truncate">
              <Sparkles className="h-3 w-3 text-brand flex-shrink-0 animate-pulse" />
              <span className="truncate">{tTop("customizationBadge")}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-1.5 font-mono font-bold text-white hover:text-brand-300 transition-colors"
            >
              <Phone className="h-3 w-3 text-emerald-400" />
              <span dir="ltr">{siteConfig.displayPhone}</span>
            </a>

            <span className="text-slate-700 hidden sm:inline">|</span>

            <a
              href={isAr ? siteConfig.whatsappUrl : siteConfig.whatsappUrlEn}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="h-3 w-3" />
              <span>{tTop("whatsapp")}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Area (ALWAYS LTR with generous spacing) */}
          <div className="flex-shrink-0 flex items-center me-6 lg:me-10">
            <Link
              href="/"
              dir="ltr"
              className="flex items-center focus:outline-hidden group"
              aria-label="Runnova Home"
            >
              <RunnovaLogo size={34} />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href + "/"));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-brand bg-brand-soft/80 font-bold shadow-2xs"
                      : "text-charcoal hover:text-brand hover:bg-charcoal-surface"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Utilities (Language Switcher, Call & Primary CTA) */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />

            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-charcoal-surface hover:bg-slate-100 border border-charcoal-border text-charcoal text-xs font-bold transition-colors font-mono"
              title={isAr ? "اتصال هاتفي مباشر" : "Direct Phone Call"}
            >
              <Phone className="h-3.5 w-3.5 text-emerald-600" />
              <span dir="ltr">{siteConfig.displayPhone}</span>
            </a>

            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand hover:bg-brand-hover text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-sm shadow-brand/25 hover:shadow-md hover:shadow-brand/35"
            >
              <span>{t("bookConsultation")}</span>
              <ArrowRight className="h-4 w-4 rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${siteConfig.phone}`}
              className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200"
              aria-label="Call Direct"
            >
              <Phone className="h-4 w-4" />
            </a>
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal hover:bg-charcoal-surface focus:outline-hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-charcoal-border bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="p-3 rounded-xl bg-charcoal-surface border border-charcoal-border flex items-center justify-between">
            <span className="text-xs font-semibold text-charcoal">{isAr ? "اتصال مباشر:" : "Direct Call:"}</span>
            <a href={`tel:${siteConfig.phone}`} className="font-mono font-bold text-brand text-sm" dir="ltr">
              {siteConfig.displayPhone}
            </a>
          </div>

          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand bg-brand-soft font-semibold"
                      : "text-charcoal hover:bg-charcoal-surface"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-charcoal-border/70 space-y-2">
            <a
              href={isAr ? siteConfig.whatsappUrl : siteConfig.whatsappUrlEn}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors shadow-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{isAr ? "محادثة عبر واتساب" : "Chat on WhatsApp"}</span>
            </a>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand hover:bg-brand-hover text-white text-sm font-semibold transition-colors shadow-sm"
            >
              <span>{t("bookConsultation")}</span>
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
