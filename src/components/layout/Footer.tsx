import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { RunnovaLogo } from "@/components/brand/RunnovaLogo";
import { siteConfig } from "@/config/site";
import { Mail, MessageCircle, Linkedin, Twitter, Phone, ShieldCheck, Calendar } from "lucide-react";

export const Footer: React.FC = () => {
  const t = useTranslations("footer");
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <footer className="w-full bg-white border-t border-charcoal-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block focus:outline-hidden" aria-label="Runnova Home">
              <RunnovaLogo size={32} />
            </Link>
            <p className="text-sm font-semibold text-brand tracking-wide">
              {siteConfig.tagline}
            </p>
            <p className="text-sm text-charcoal-muted leading-relaxed max-w-sm">
              {t("description")}
            </p>

            {/* Quick Contact Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold font-mono hover:bg-slate-800 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-emerald-400" />
                <span dir="ltr">{siteConfig.displayPhone}</span>
              </a>

              <a
                href={isAr ? siteConfig.whatsappUrl : siteConfig.whatsappUrlEn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-charcoal-surface border border-charcoal-border text-xs font-semibold text-charcoal hover:bg-slate-100 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-charcoal-muted" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Solutions & Customization Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-4">
              {t("solutionsHeader")}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/solutions/ai-agents"
                  className="text-charcoal-muted hover:text-brand transition-colors"
                >
                  {isAr ? "وكلاء الذكاء الاصطناعي المخصصين" : "Custom AI Voice & Chat Agents"}
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/workflow-automation"
                  className="text-charcoal-muted hover:text-brand transition-colors"
                >
                  {isAr ? "أتمتة العمليات والـ CRM" : "Workflow & Systems Automation"}
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/enterprise-ai-rag"
                  className="text-charcoal-muted hover:text-brand transition-colors"
                >
                  {isAr ? "محركات المعرفة الخاصة (RAG)" : "Private Knowledge RAG"}
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-xs font-bold text-brand hover:text-brand-hover transition-colors block pt-1"
                >
                  {isAr ? "جميع خدمات التخصيص ←" : "All Custom Solutions →"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-4">
              {t("productsHeader")}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/products/runnova-flow"
                  className="text-charcoal-muted hover:text-brand transition-colors flex items-center gap-1"
                >
                  <span>Runnova Flow</span>
                  <span className="text-[10px] bg-brand-soft text-brand px-1.5 py-0.5 rounded font-mono">
                    Ready
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/runnova-cortex"
                  className="text-charcoal-muted hover:text-brand transition-colors flex items-center gap-1"
                >
                  <span>Runnova Cortex</span>
                  <span className="text-[10px] bg-brand-soft text-brand px-1.5 py-0.5 rounded font-mono">
                    Enterprise
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-charcoal-muted hover:text-brand transition-colors text-xs font-semibold"
                >
                  {isAr ? "جميع المنتجات الجاهزة ←" : "All Products →"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Legal Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-4">
              {t("contactHeader")}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-charcoal-muted hover:text-brand transition-colors font-mono font-semibold flex items-center gap-1.5"
                >
                  <Phone className="h-3.5 w-3.5 text-emerald-600" />
                  <span dir="ltr">{siteConfig.displayPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={isAr ? siteConfig.whatsappUrl : siteConfig.whatsappUrlEn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal-muted hover:text-brand transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                  <span>{isAr ? "واتساب للأعمال" : "WhatsApp Business"}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal-muted hover:text-brand transition-colors flex items-center gap-1.5"
                >
                  <Calendar className="h-3.5 w-3.5 text-brand" />
                  <span>{isAr ? "حجز جلسة استشارية" : "Book Video Call"}</span>
                </a>
              </li>
              <li className="pt-2 border-t border-charcoal-border">
                <Link href="/privacy" className="text-xs text-charcoal-muted hover:text-brand transition-colors">
                  {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-xs text-charcoal-muted hover:text-brand transition-colors">
                  {isAr ? "الشروط والأحكام" : "Terms of Service"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 border-t border-charcoal-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-muted">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>
              © {new Date().getFullYear()} {siteConfig.name}. {t("rights")}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-muted hover:text-brand transition-colors"
              aria-label="Runnova on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal-muted hover:text-brand transition-colors"
              aria-label="Runnova on Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <span className="text-charcoal-border">|</span>
            <span className="font-mono text-[11px] text-charcoal-muted">
              {t("builtForScale")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
