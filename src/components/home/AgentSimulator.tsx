"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Bot, Check, ArrowRight, ShieldCheck, Play, RefreshCw } from "lucide-react";

interface AgentStep {
  time: string;
  type: "thought" | "tool" | "output";
  message: string;
  status: "completed" | "running" | "waiting";
}

export const AgentSimulator: React.FC<{ locale?: string }> = ({ locale = "en" }) => {
  const isAr = locale === "ar";
  const [currentStepIndex, setCurrentStepIndex] = useState(2);

  const stepsEn: AgentStep[] = [
    {
      time: "00:00.12",
      type: "thought",
      message: "Inbound VIP WhatsApp inquiry received. Extracting client intent: 'Book private tour for Villa 42 tomorrow'.",
      status: "completed",
    },
    {
      time: "00:00.28",
      type: "tool",
      message: "Calling `crm.lookupClient(phone='+97150...')` & checking calendar availability for Senior Broker.",
      status: "completed",
    },
    {
      time: "00:00.41",
      type: "output",
      message: "Confirmed 4:00 PM slot. Created calendar invite, sent Google Maps pin, & updated Salesforce deal stage.",
      status: "completed",
    },
  ];

  const stepsAr: AgentStep[] = [
    {
      time: "00:00.12",
      type: "thought",
      message: "استقبال طلب VIP عبر واتساب. تصنيف النية: 'حجز موعد لمعاينة فيلا 42 غداً عصراً'.",
      status: "completed",
    },
    {
      time: "00:00.28",
      type: "tool",
      message: "استدعاء دالة `crm.lookupClient` وفحص أوقات المبيعات الشاغرة لدى المستشار العقاري.",
      status: "completed",
    },
    {
      time: "00:00.41",
      type: "output",
      message: "تثبيت موعد 4:00 عصراً، وتوليد تذكرة التقويم وإرسال الموقع للعميل، وتحديث صفقة Salesforce.",
      status: "completed",
    },
  ];

  const steps = isAr ? stepsAr : stepsEn;

  return (
    <div className="w-full rounded-2xl border border-charcoal-border bg-[#0B132B] text-slate-100 p-5 md:p-6 shadow-xl font-mono text-xs overflow-hidden">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-500/80"></span>
            <span className="h-3 w-3 rounded-full bg-amber-500/80"></span>
            <span className="h-3 w-3 rounded-full bg-emerald-500/80"></span>
          </div>
          <span className="ms-3 text-[11px] text-slate-400 font-sans font-medium flex items-center gap-1.5">
            <Bot className="h-3.5 w-3.5 text-brand-300" />
            Runnova Agent Core • v3.8 Autonomous
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{isAr ? "استجابة فورية: 410ms" : "Execution: 410ms"}</span>
        </div>
      </div>

      {/* Terminal Execution Body */}
      <div className="space-y-3 font-mono leading-relaxed">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg border transition-all duration-300 ${
              step.type === "output"
                ? "bg-brand-900/30 border-brand-500/40 text-brand-200"
                : step.type === "tool"
                ? "bg-slate-900/80 border-slate-800 text-slate-300"
                : "bg-slate-950/60 border-slate-800/60 text-slate-400"
            }`}
          >
            <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
              <span className="font-bold uppercase tracking-wider text-slate-400">
                {step.type === "thought"
                  ? isAr ? "تحليل النوايا (Chain of Thought)" : "Agent Reasoning"
                  : step.type === "tool"
                  ? isAr ? "استدعاء الأدوات (Tool Calling)" : "Tool Execution"
                  : isAr ? "النتيجة النهائية (Automated Result)" : "Deterministic Outcome"}
              </span>
              <span>{step.time}</span>
            </div>
            <p className="text-xs sm:text-sm font-sans">{step.message}</p>
          </div>
        ))}
      </div>

      {/* Terminal Footer */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5 font-sans">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          {isAr ? "ضوابط أمان قطعية بدون أي هلوسة" : "Strict deterministic guardrails verified"}
        </span>
        <span className="font-mono text-emerald-400">status: 200 OK</span>
      </div>
    </div>
  );
};
