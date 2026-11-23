import React from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { ShieldCheck } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const isAr = locale === "ar";
  const url = `${siteConfig.url}${isAr ? "/ar" : ""}/privacy`;

  return {
    title: t("privacyTitle"),
    description: "Runnova's Enterprise Data Privacy and Security Commitments.",
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}/privacy`,
        ar: `${siteConfig.url}/ar/privacy`,
        "x-default": `${siteConfig.url}/privacy`,
      },
    },
  };
}

export default async function PrivacyPage({
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>{isAr ? "سيادة وحماية البيانات" : "Data Sovereignty & Privacy"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-charcoal font-display">
            {isAr ? "سياسة الخصوصية وحماية بيانات المؤسسات" : "Enterprise Privacy & Data Protection Policy"}
          </h1>
          <p className="text-xs text-charcoal-muted mt-2 font-mono">
            {isAr ? "آخر تحديث: نوفمبر 2026" : "Last Updated: November 2026"}
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
          <div className="p-5 rounded-2xl bg-charcoal-surface border border-charcoal-border">
            <h2 className="text-sm sm:text-base font-bold text-charcoal mb-2">
              {isAr ? "1. الالتزام بعدم تدريب النماذج العامة (Zero Model Training)" : "1. Zero Model Training Guarantee"}
            </h2>
            <p>
              {isAr
                ? "تضمن Runnova عدم استخدام أي بيانات أو مستندات أو سجلات محادثات خاصة بالعملاء لتدريب أو تحسين أي نماذج ذكاء اصطناعي عامة أو تابعة لأطراف ثالثة. تظل بياناتكم ملكية حصرية لكم طوال الوقت."
                : "Runnova guarantees that no client proprietary data, customer documents, or interaction transcripts are ever used to train, fine-tune, or improve foundation or public third-party AI models. Your IP remains exclusively yours."}
            </p>
          </div>

          <div>
            <h2 className="text-sm sm:text-base font-bold text-charcoal mb-2">
              {isAr ? "2. التشفير ومعايير الأمان الفيدرالية" : "2. Encryption & Security Standards"}
            </h2>
            <p>
              {isAr
                ? "يتم تشفير كافة البيانات قيد النقل عبر بروتوكولات TLS 1.3 مع مفاتيح أمان معتمدة. وتخزن البيانات وقواعد بيانات المتجهات (Vector Databases) مشفرة بمعيار AES-256."
                : "All data in transit is encrypted using TLS 1.3 protocols with approved cryptographic ciphers. All data at rest, including vector embeddings and log indexes, is protected with AES-256 encryption."}
            </p>
          </div>

          <div>
            <h2 className="text-sm sm:text-base font-bold text-charcoal mb-2">
              {isAr ? "3. نطاق جمع البيانات واستخدامها" : "3. Scope of Data Ingestion"}
            </h2>
            <p>
              {isAr
                ? "تجمع أنظمتنا فقط البيانات الضرورية لتنفيذ سير العمل والأتمتة المحددة تعاقدياً مع العميل، مثل معرفات الطلبات، وأرقام المعاملات، ورسائل الدعم الفني."
                : "We only ingest parameters strictly required to execute contracted workflow automations and integrations, such as order identifiers, transaction status codes, and verified support transcripts."}
            </p>
          </div>

          <div>
            <h2 className="text-sm sm:text-base font-bold text-charcoal mb-2">
              {isAr ? "4. التواصل مع مسؤول حماية البيانات" : "4. Data Protection Contact"}
            </h2>
            <p>
              {isAr
                ? `لأي استفسار يخص خصوصية وأمان البيانات، يرجى التواصل مباشرة عبر البريد الرسمي: ${siteConfig.email}`
                : `For all data protection inquiries or to request mutual compliance audits, contact our security council at: ${siteConfig.email}`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
