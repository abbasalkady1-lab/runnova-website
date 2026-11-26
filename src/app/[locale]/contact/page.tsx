import React from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  Calendar,
  MessageCircle,
  Mail,
  Phone,
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const isAr = locale === "ar";
  const url = `${siteConfig.url}${isAr ? "/ar" : ""}/contact`;

  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}/contact`,
        ar: `${siteConfig.url}/ar/contact`,
        "x-default": `${siteConfig.url}/contact`,
      },
    },
    openGraph: {
      images: [siteConfig.ogImage],
      title: t("contactTitle"),
      description: t("contactDescription"),
      url,
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const t = await getTranslations({ locale, namespace: "contact" });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isAr ? "الرئيسية" : "Home",
        item: `${siteConfig.url}${isAr ? "/ar" : ""}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isAr ? "طرق التواصل" : "Contact",
        item: `${siteConfig.url}${isAr ? "/ar" : ""}/contact`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="pt-16 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft text-brand text-xs font-semibold mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t("badge")}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight font-display mb-4">
              {t("heroTitle")}
            </h1>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              {t("heroSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Direct Channels (Phone, WhatsApp, Calendar) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Phone Card */}
              <div className="p-7 rounded-3xl bg-slate-900 text-white shadow-md">
                <div className="flex items-center gap-2 text-brand-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <span>{t("phoneHeading")}</span>
                </div>
                <h2 className="text-2xl font-black font-mono tracking-wider mb-2 text-white" dir="ltr">
                  {siteConfig.displayPhone}
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {t("phoneDesc")}
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs sm:text-sm transition-colors shadow-sm"
                >
                  <Phone className="h-4 w-4" />
                  <span>{t("phoneBtn")}</span>
                </a>
              </div>

              {/* WhatsApp Quick Action Card */}
              <div className="p-7 rounded-3xl bg-emerald-50/70 border border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  <span>{t("whatsappHeading")}</span>
                </div>
                <h2 className="text-lg font-bold text-charcoal mb-2">
                  {isAr ? "محادثة فورية عبر واتساب للأعمال" : "Instant WhatsApp Business Chat"}
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-6">
                  {t("whatsappDesc")}
                </p>
                <a
                  href={isAr ? siteConfig.whatsappUrl : siteConfig.whatsappUrlEn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{t("whatsappBtn")}</span>
                </a>
              </div>

              {/* Booking Calendar Card */}
              <div className="p-7 rounded-3xl bg-charcoal-surface border border-charcoal-border">
                <div className="flex items-center gap-2 text-brand text-xs font-bold uppercase tracking-wider mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{t("bookingHeading")}</span>
                </div>
                <h2 className="text-lg font-bold text-charcoal mb-2">
                  {isAr ? "جلسة استشارية مرئية لمدة 30 دقيقة" : "30-Minute Video Consultation"}
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-6">
                  {t("bookingDesc")}
                </p>
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-brand hover:bg-brand-hover text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
                >
                  <Calendar className="h-4 w-4" />
                  <span>{t("bookingBtn")}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* Direct Email & Trust Box */}
              <div className="p-6 rounded-2xl bg-white border border-charcoal-border text-xs text-charcoal-muted space-y-3">
                <div className="flex items-center gap-2 text-charcoal font-semibold">
                  <Mail className="h-4 w-4 text-brand" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-brand">
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-emerald-600" />
                  <span>{isAr ? "متوسط سرعة الرد: أقل من ساعتين خلال أيام العمل" : "Average response time: under 2 hours"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand" />
                  <span>{isAr ? "اتفاقية عدم إفصاح (NDA) وسرية تامة لبيانات المشروعات" : "Mutual NDA available upon request"}</span>
                </div>
              </div>
            </div>

            {/* B2B Inquiry Form */}
            <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-charcoal-border shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-2 font-display">
                {t("formHeading")}
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-muted mb-6">
                {isAr
                  ? "املأ البيانات أدناه وسيتواصل معك مهندس أنظمة ذكاء اصطناعي لمناقشة متطلبات التخصيص."
                  : "Fill in the parameters below and a senior AI systems architect will reply shortly to discuss customization."}
              </p>

              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
