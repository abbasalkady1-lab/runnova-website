"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { WorkflowDiagram } from "@/components/home/WorkflowDiagram";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Phone, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export const HeroSection: React.FC = () => {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 bg-white">
      {/* Dynamic Animated Ambient Light Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-brand/15 to-transparent blur-3xl animate-float"></div>
        <div className="absolute top-20 right-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-purple-500/10 to-transparent blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text / Value Proposition Column */}
          <div className="lg:col-span-6 space-y-6 text-start">
            {/* Eyebrow Badge with 4-Point Star Motif and Subtle Shimmer */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-soft border border-brand/25 text-xs font-semibold text-brand tracking-wide shadow-2xs hover:border-brand/50 transition-colors">
              <Sparkles className="h-3.5 w-3.5 fill-brand animate-pulse" />
              <span>{t("eyebrow")}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-ping ms-1"></span>
            </div>

            {/* Direct B2B ROI-focused H1 with Customization Emphasis */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-charcoal tracking-tight leading-[1.14] font-display">
              <span>{t("titlePrefix")} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-[#5544FF] to-brand-hover inline-block">
                {t("titleHighlight")}
              </span>{" "}
              <span>{t("titleSuffix")}</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-xl">
              {t("description")}
            </p>

            {/* CTAs with Direct Call button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand hover:bg-brand-hover text-white text-sm sm:text-base font-semibold transition-all duration-200 shadow-md shadow-brand/25 hover:shadow-lg hover:shadow-brand/35"
              >
                <span>{t("primaryCta")}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Link>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 text-sm sm:text-base font-bold transition-colors font-mono"
              >
                <Phone className="h-4 w-4 text-emerald-600" />
                <span dir="ltr">{siteConfig.displayPhone}</span>
              </a>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-charcoal-surface border border-charcoal-border text-charcoal text-sm sm:text-base font-semibold transition-colors shadow-2xs"
              >
                <span>{t("secondaryCta")}</span>
              </Link>
            </div>

            {/* 3 Executive Trust Pillars */}
            <div className="pt-6 border-t border-charcoal-border/70 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-charcoal-muted">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-charcoal-surface/60 border border-charcoal-border/50">
                <CheckCircle2 className="h-4 w-4 text-brand flex-shrink-0" />
                <span className="font-semibold text-charcoal">{t("trust1")}</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-charcoal-surface/60 border border-charcoal-border/50">
                <ShieldCheck className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold text-charcoal">{t("trust2")}</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-charcoal-surface/60 border border-charcoal-border/50">
                <Zap className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                <span className="font-semibold text-charcoal">{t("trust3")}</span>
              </div>
            </div>
          </div>

          {/* Right Live React/SVG AI Workflow Diagram */}
          <div className="lg:col-span-6 w-full">
            <WorkflowDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};
