"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, ArrowRight, Zap, Database, CheckCircle2, ShieldCheck } from "lucide-react";

export const PipelineVisual: React.FC<{ locale?: string }> = ({ locale = "en" }) => {
  const isAr = locale === "ar";
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev % 4) + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      num: 1,
      title: isAr ? "استشعار الحدث (Trigger)" : "Webhook Ingestion",
      desc: isAr ? "وصول رسالة طلب أو فاتورة جديدة عبر واتساب/المتجر" : "Incoming WhatsApp payload or payment webhook",
      badge: "0ms",
    },
    {
      num: 2,
      title: isAr ? "التحليل الذكي (AI Parse)" : "Deterministic AI Parse",
      desc: isAr ? "استخراج بنود الطلب والعميل وتدقيقها محاسبياً" : "Extract line items, customer ID & validate schemas",
      badge: "120ms",
    },
    {
      num: 3,
      title: isAr ? "التنفيذ المتزامن (API Sync)" : "Multi-System Execution",
      desc: isAr ? "تحديث المخزون وإصدار الفاتورة بالـ ERP تلقائياً" : "Update ERP stock & generate signed fiscal invoice",
      badge: "240ms",
    },
    {
      num: 4,
      title: isAr ? "التأكيد والمراقبة (SLA Log)" : "Telemetry & Delivery",
      desc: isAr ? "إشعار العميل وتحديث لوحة التحكم التنفيذية" : "Send customer tracking link & stream ROI metrics",
      badge: "360ms",
    },
  ];

  return (
    <div className="w-full rounded-2xl border border-charcoal-border bg-[#0B132B] text-slate-100 p-6 md:p-8 shadow-xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
        <span className="text-xs font-mono font-bold text-brand-300 flex items-center gap-2">
          <Zap className="h-4 w-4 text-brand" />
          {isAr ? "محاكي خط الأنابيب التفاعلي" : "Active Event-Driven Pipeline"}
        </span>
        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded">
          {isAr ? "زمن المعالجة الإجمالي: 360ms" : "End-to-End Latency: 360ms"}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((st) => {
          const isActive = activeStep === st.num;
          return (
            <div
              key={st.num}
              className={`p-4 rounded-xl border transition-all duration-300 ${
                isActive
                  ? "bg-brand-900/40 border-brand-400 ring-2 ring-brand-400/20 shadow-lg shadow-brand/10"
                  : "bg-slate-900/60 border-slate-800"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isActive ? "bg-brand text-white" : "bg-slate-800 text-slate-400"
                  }`}
                >
                  Step 0{st.num}
                </span>
                <span className="text-[10px] font-mono text-slate-500">{st.badge}</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">{st.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
