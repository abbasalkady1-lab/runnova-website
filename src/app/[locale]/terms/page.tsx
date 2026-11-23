import React from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { FileText } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const isAr = locale === "ar";
  const url = `${siteConfig.url}${isAr ? "/ar" : ""}/terms`;

  return {
    title: t("termsTitle"),
    description: "Runnova's Terms of Service and Enterprise Service Level Agreement terms.",
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}/terms`,
        ar: `${siteConfig.url}/ar/terms`,
        "x-default": `${siteConfig.url}/terms`,
      },
    },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-charcoal-border pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-charcoal text-xs font-semibold mb-3">
            <FileText className="h-3.5 w-3.5 text-brand" />
            <span>{isAr ? "الشروط القانونية والتعاقدية" : "Service Agreement"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-charcoal font-display">
            {isAr ? "شروط الخدمة والاتفاقيات المؤسسية" : "Terms of Service & Master Service Agreement"}
          </h1>
          <p className="text-xs text-charcoal-muted mt-2 font-mono">
            {isAr ? "آخر تحديث: نوفمبر 2026" : "Last Updated: November 2026"}
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
          <div className="p-5 rounded-2xl bg-charcoal-surface border border-charcoal-border">
            <h2 className="text-sm sm:text-base font-bold text-charcoal mb-2">
              {isAr ? "1. نطاق الخدمات والدمج المؤسسي" : "1. Enterprise Scope of Services"}
            </h2>
            <p>
              {isAr
                ? "تقدم Runnova خدمات استشارية، وهندسة برمجيات تكاملية مخصصة، ومنتجات ذكاء اصطناعي جاهزة وفق الشروط والمواصفات المحددة في بيان العمل (SOW) المبرم مع كل عميل."
                : "Runnova delivers bespoke AI engineering services, workflow automation pipelines, and ready-to-deploy software products pursuant to the precise statements of work (SOW) executed with our enterprise clients."}
            </p>
          </div>

          <div>
            <h2 className="text-sm sm:text-base font-bold text-charcoal mb-2">
              {isAr ? "2. حقوق الملكية الفكرية (Intellectual Property)" : "2. Intellectual Property & Ownership"}
            </h2>
            <p>
              {isAr
                ? "في مسار الحلول المخصصة (Custom Integration)، تنتقل كامل حقوق ملكية الشفرة البرمجية والمحولات المخصصة المنشأة خصيصاً للعميل إليه فور سداد الرسوم المتفق عليها، مع احتفاظ Runnova بملكية بنيتها المعمارية الأساسية العامة."
                : "Under bespoke integration tracks, client owns all custom integration adapters, workflow definitions, and bespoke scripts created exclusively for their organization upon final settlement of milestones, while Runnova retains rights to its underlying core modules."}
            </p>
          </div>

          <div>
            <h2 className="text-sm sm:text-base font-bold text-charcoal mb-2">
              {isAr ? "3. اتفاقيات مستوى الخدمة (SLAs)" : "3. Service Level Agreements (SLAs)"}
            </h2>
            <p>
              {isAr
                ? "تلتزم Runnova بنسبة جاهزية تشغيلية لا تقل عن 99.9% لأنظمة الأتمتة السحابية المدارة، مع توفير دعم فني هندسي على مدار الساعة للمشروعات المؤسسية الكبرى."
                : "Runnova guarantees minimum 99.9% uptime availability for its managed automation and proxy cloud pipelines, backed by 24/7 dedicated engineering support for tier-1 enterprise partners."}
            </p>
          </div>

          <div>
            <h2 className="text-sm sm:text-base font-bold text-charcoal mb-2">
              {isAr ? "4. القانون الواجب التطبيق" : "4. Governing Jurisdiction"}
            </h2>
            <p>
              {isAr
                ? `تخضع هذه الشروط وكافة الاتفاقيات المنبثقة عنها للقوانين واللوائح المعمول بها دولياً أو وفق الاختصاص القضائي المحدد في العقد المباشر.`
                : `These terms and associated enterprise agreements are governed by applicable enterprise commercial regulations or the designated jurisdiction agreed within the Master Services Agreement.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
