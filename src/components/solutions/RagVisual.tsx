"use client";

import React, { useState } from "react";
import { FileText, Database, ShieldCheck, Check, Search, ArrowRight } from "lucide-react";

export const RagVisual: React.FC<{ locale?: string }> = ({ locale = "en" }) => {
  const isAr = locale === "ar";
  const [selectedDoc, setSelectedDoc] = useState(0);

  const docs = [
    {
      title: isAr ? "عقد توريد الخدمات الفنية 2026.pdf" : "Master_Services_Agreement_2026.pdf",
      chunks: 342,
      query: isAr ? "ما هي شروط الإلغاء الجزائي في العقد؟" : "What is the penalty clause for termination?",
      answer: isAr
        ? "بموجب المادة 14 (ص 42): يلزم إشعار خطي مسبق قبل 30 يوماً مع سداد الرسوم المستحقة فقط، دون أي غرامات إضافية."
        : "Under Section 14 (p. 42): 30 days prior written notice is required with payment for prorated services rendered, with zero additional liquidated damages.",
      citation: isAr ? "المصدر: ص 42، الفقرة 3" : "Source: p. 42, Paragraph 3",
    },
    {
      title: isAr ? "دليل إجراءات العمل الداخلي SOP-402.pdf" : "Enterprise_Security_SOP_402.pdf",
      chunks: 890,
      query: isAr ? "كيف يتم التعامل مع مفاتيح التشفير السحابية؟" : "What are the rules for rotating cloud KMS keys?",
      answer: isAr
        ? "بموجب البند 4.2: يتم تدوير مفاتيح KMS تلقائياً كل 90 يوماً، وتُحظر الصلاحيات اليدوية المباشرة."
        : "Per Clause 4.2: KMS keys are rotated automatically every 90 days with direct manual export permissions strictly disabled.",
      citation: isAr ? "المصدر: ص 18، البند 4.2" : "Source: p. 18, Item 4.2",
    },
  ];

  const current = docs[selectedDoc];

  return (
    <div className="w-full rounded-2xl border border-charcoal-border bg-[#0B132B] text-slate-100 p-6 md:p-8 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800 mb-6">
        <span className="text-xs font-mono font-bold text-brand-300 flex items-center gap-2">
          <Database className="h-4 w-4 text-brand" />
          {isAr ? "محاكي الاسترجاع الدلالي (RAG Semantic Retrieval)" : "Private RAG Semantic Engine"}
        </span>
        <div className="flex items-center gap-2">
          {docs.map((doc, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDoc(idx)}
              className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                selectedDoc === idx
                  ? "bg-brand text-white font-bold"
                  : "bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              Doc 0{idx + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {/* Source File Badge */}
        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <FileText className="h-4 w-4 text-amber-400 flex-shrink-0" />
          <span>{current.title}</span>
          <span className="text-[10px] text-slate-500">({current.chunks} {isAr ? "كتلة دلالية" : "vector chunks"})</span>
        </div>

        {/* User Query Simulation */}
        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-2 text-[11px] font-bold text-brand-300 uppercase tracking-wider mb-1">
            <Search className="h-3.5 w-3.5" />
            <span>{isAr ? "استفسار المسؤول التنفيذي" : "Executive Query"}</span>
          </div>
          <p className="text-xs sm:text-sm text-white font-sans">“{current.query}”</p>
        </div>

        {/* Grounded Result with Citation */}
        <div className="p-4 rounded-xl bg-brand-950/40 border border-brand-500/30">
          <div className="flex items-center justify-between text-[11px] font-bold text-emerald-400 mb-2">
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5" />
              {isAr ? "إجابة موثقة بنسبة دقة 99.4%" : "Grounded Answer (99.4% Confidence)"}
            </span>
            <span className="text-[10px] bg-brand text-white px-2 py-0.5 rounded font-mono">
              {current.citation}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
            {current.answer}
          </p>
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5 font-sans">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          {isAr ? "بيانات معزولة تماماً بدون تدريب نماذج عامة" : "Isolated tenant • Zero public model training"}
        </span>
        <span className="font-mono text-brand-300">RBAC: Authorized</span>
      </div>
    </div>
  );
};
