"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Calculator, ArrowRight, TrendingUp, Clock, DollarSign, Sparkles } from "lucide-react";

export const RoiCalculator: React.FC = () => {
  const t = useTranslations("roiCalculator");
  const locale = useLocale();
  const isAr = locale === "ar";

  const [teamSize, setTeamSize] = useState<number>(6);
  const [dailyTasks, setDailyTasks] = useState<number>(50);
  const [monthlyCost, setMonthlyCost] = useState<number>(3500);

  // Benchmarked savings formulas:
  // Avg minutes per routine inquiry/task: 4.5 mins. Automation rate: 80%. Working days/year: 240.
  const hoursSavedPerYear = Math.round(
    teamSize * (dailyTasks * 4.5 / 60) * 240 * 0.8
  );

  // Net annual cost reduction from eliminating operational friction & routine overhead: ~40%
  const annualCostSaved = Math.round(teamSize * monthlyCost * 12 * 0.42);

  return (
    <div className="w-full rounded-3xl border border-charcoal-border bg-white p-6 sm:p-10 shadow-sm">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft text-brand text-xs font-semibold mb-4">
          <Calculator className="h-3.5 w-3.5" />
          {t("badge")}
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight font-display mb-4">
          {t("title")}
        </h2>
        <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6 bg-charcoal-surface p-6 sm:p-8 rounded-2xl border border-charcoal-border">
          {/* Slider 1: Team Size */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="team-size-slider" className="text-xs sm:text-sm font-semibold text-charcoal">
                {t("teamSize")}
              </label>
              <span className="text-sm font-bold text-brand bg-white px-3 py-1 rounded-md border border-charcoal-border shadow-2xs">
                {teamSize} {isAr ? "موظف" : "members"}
              </span>
            </div>
            <input
              id="team-size-slider"
              type="range"
              min={1}
              max={50}
              step={1}
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-charcoal-border rounded-lg appearance-none cursor-pointer accent-brand"
            />
            <div className="flex justify-between text-[11px] text-charcoal-muted mt-1">
              <span>1</span>
              <span>25</span>
              <span>50+</span>
            </div>
          </div>

          {/* Slider 2: Daily Tasks */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="daily-tasks-slider" className="text-xs sm:text-sm font-semibold text-charcoal">
                {t("dailyTasks")}
              </label>
              <span className="text-sm font-bold text-brand bg-white px-3 py-1 rounded-md border border-charcoal-border shadow-2xs">
                {dailyTasks} {isAr ? "مهمة / استفسار" : "tasks / day"}
              </span>
            </div>
            <input
              id="daily-tasks-slider"
              type="range"
              min={10}
              max={250}
              step={5}
              value={dailyTasks}
              onChange={(e) => setDailyTasks(Number(e.target.value))}
              className="w-full h-2 bg-charcoal-border rounded-lg appearance-none cursor-pointer accent-brand"
            />
            <div className="flex justify-between text-[11px] text-charcoal-muted mt-1">
              <span>10</span>
              <span>125</span>
              <span>250+</span>
            </div>
          </div>

          {/* Slider 3: Monthly Cost */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="monthly-cost-slider" className="text-xs sm:text-sm font-semibold text-charcoal">
                {t("monthlyCost")}
              </label>
              <span className="text-sm font-bold text-brand bg-white px-3 py-1 rounded-md border border-charcoal-border shadow-2xs">
                ${monthlyCost.toLocaleString()}
              </span>
            </div>
            <input
              id="monthly-cost-slider"
              type="range"
              min={1000}
              max={15000}
              step={250}
              value={monthlyCost}
              onChange={(e) => setMonthlyCost(Number(e.target.value))}
              className="w-full h-2 bg-charcoal-border rounded-lg appearance-none cursor-pointer accent-brand"
            />
            <div className="flex justify-between text-[11px] text-charcoal-muted mt-1">
              <span>$1,000</span>
              <span>$7,500</span>
              <span>$15,000+</span>
            </div>
          </div>
        </div>

        {/* Results Metrics Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-700/80 mb-6">
              <span className="text-xs font-semibold text-brand-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                {isAr ? "العائد السنوي المتوقع" : "Projected Annual Return"}
              </span>
              <span className="text-xs font-mono bg-brand px-2 py-0.5 rounded text-white font-bold">
                ROI 4.2x
              </span>
            </div>

            {/* Metric 1: Cost Saved */}
            <div className="mb-6">
              <span className="text-xs text-slate-400 block mb-1">
                {t("costSavedYear")}
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display flex items-baseline gap-1">
                <span>${annualCostSaved.toLocaleString()}</span>
                <span className="text-xs font-normal text-slate-400">/ {isAr ? "سنوياً" : "year"}</span>
              </div>
            </div>

            {/* Metric 2: Hours Saved */}
            <div className="mb-6">
              <span className="text-xs text-slate-400 block mb-1">
                {t("hoursSavedYear")}
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight font-display flex items-baseline gap-1">
                <span>{hoursSavedPerYear.toLocaleString()}</span>
                <span className="text-xs font-normal text-slate-400">{isAr ? "ساعة عمل إدارية" : "hours"}</span>
              </div>
            </div>
          </div>

          <div>
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-brand hover:bg-brand-hover text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-brand/25"
            >
              <span>{t("cta")}</span>
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
            <p className="text-[10px] text-slate-400 text-center mt-3 leading-normal">
              {t("disclaimer")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
