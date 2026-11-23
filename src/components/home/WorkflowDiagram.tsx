"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { MessageSquare, Database, Server, Cpu, ShieldCheck, Zap, CheckCircle2, Sparkles } from "lucide-react";

export const WorkflowDiagram: React.FC = () => {
  const t = useTranslations("workflow");
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full rounded-3xl border border-charcoal-border/80 bg-white/80 p-5 md:p-7 shadow-xl shadow-brand/5 backdrop-blur-md overflow-hidden">
      {/* Subtle Ambient Background Tint */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Telemetry Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-charcoal-border/70 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold text-charcoal tracking-wide uppercase flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-brand" />
            {t("statusActive")}
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-charcoal-muted">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-charcoal-border shadow-2xs">
            <Zap className="h-3.5 w-3.5 text-brand" />
            <span className="font-bold text-charcoal">{t("latency")}</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-charcoal-border shadow-2xs">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span className="text-charcoal font-medium">{t("encryption")}</span>
          </span>
        </div>
      </div>

      {/* 3-Column Architecture Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
        {/* Column 1: Enterprise Sources */}
        <div
          className={`rounded-2xl border p-4 transition-all duration-300 ${
            activeStep === 0
              ? "border-brand bg-gradient-to-b from-white to-blue-50/40 shadow-lg shadow-brand/10 ring-2 ring-brand/20 scale-[1.02]"
              : "border-charcoal-border bg-charcoal-surface/60"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted">
              Step 01
            </span>
            <span className="h-2 w-2 rounded-full bg-brand/40"></span>
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-charcoal mb-3">
            {t("inputCol")}
          </h4>

          <div className="space-y-2.5">
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-charcoal-border shadow-2xs text-xs text-charcoal font-semibold">
              <div className="p-1.5 rounded-lg bg-emerald-100/80 text-emerald-700">
                <MessageSquare className="h-3.5 w-3.5" />
              </div>
              <span>{t("whatsappLabel")}</span>
            </div>
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-charcoal-border shadow-2xs text-xs text-charcoal font-semibold">
              <div className="p-1.5 rounded-lg bg-blue-100/80 text-blue-700">
                <Database className="h-3.5 w-3.5" />
              </div>
              <span>{t("crmLabel")}</span>
            </div>
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-charcoal-border shadow-2xs text-xs text-charcoal font-semibold">
              <div className="p-1.5 rounded-lg bg-purple-100/80 text-purple-700">
                <Server className="h-3.5 w-3.5" />
              </div>
              <span>{t("erpLabel")}</span>
            </div>
          </div>
        </div>

        {/* Column 2: Runnova AI Layer */}
        <div
          className={`rounded-2xl border p-4 transition-all duration-300 relative ${
            activeStep === 1
              ? "border-brand bg-gradient-to-b from-brand-50 to-white shadow-xl shadow-brand/15 ring-2 ring-brand/40 scale-[1.02]"
              : "border-brand/30 bg-brand-50/20"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              Runnova Core
            </span>
            <Cpu className="h-4 w-4 text-brand animate-pulse" />
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-charcoal mb-3">
            {t("engineCol")}
          </h4>

          <div className="space-y-2.5">
            <div className="p-2.5 rounded-xl bg-white border border-brand/30 text-xs font-bold text-brand shadow-2xs">
              <div className="flex items-center justify-between">
                <span>{t("agentSwarm")}</span>
                <span className="text-[10px] bg-brand text-white px-1.5 py-0.5 rounded-md font-mono">
                  Live
                </span>
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-brand/20 text-xs font-semibold text-charcoal shadow-2xs">
              <span>{t("ragEngine")}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-brand/20 text-xs font-medium text-charcoal shadow-2xs flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>{t("securityGuard")}</span>
            </div>
          </div>
        </div>

        {/* Column 3: Automated Outcomes */}
        <div
          className={`rounded-2xl border p-4 transition-all duration-300 ${
            activeStep === 2
              ? "border-emerald-500 bg-gradient-to-b from-white to-emerald-50/50 shadow-lg shadow-emerald-500/10 ring-2 ring-emerald-500/30 scale-[1.02]"
              : "border-charcoal-border bg-charcoal-surface/60"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
              Outcome
            </span>
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-charcoal mb-3">
            {t("outputCol")}
          </h4>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-bold">
              <Zap className="h-4 w-4 text-emerald-600 flex-shrink-0" />
              <span>{t("actionExecution")}</span>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-charcoal-border shadow-2xs text-xs text-charcoal font-semibold">
              <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
              <span>{t("crmSync")}</span>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-charcoal-border shadow-2xs text-xs text-charcoal font-semibold">
              <span className="font-mono text-brand font-black text-xs">+320%</span>
              <span>{t("roiTelemetry")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Step Slider Indicator */}
      <div className="mt-6 pt-4 border-t border-charcoal-border/70 flex items-center justify-between text-xs text-charcoal-muted">
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeStep === idx ? "w-8 bg-brand" : "w-2.5 bg-charcoal-border hover:bg-brand/40"
              }`}
              aria-label={`Switch to step ${idx + 1}`}
            />
          ))}
        </div>
        <span className="font-mono text-[11px] text-charcoal-muted">
          Autonomous Telemetry v2.4 • Active
        </span>
      </div>
    </div>
  );
};
