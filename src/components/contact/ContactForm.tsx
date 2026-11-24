"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle2, Loader2, AlertCircle, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export const ContactForm: React.FC<{ locale?: string }> = ({ locale = "en" }) => {
  const t = useTranslations("contact");
  const isAr = locale === "ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: t("serviceOption1"),
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setErrorMessage(t(res.status === 400 ? "invalidMsg" : "errorMsg"));
        setStatus("error");
      }
    } catch {
      setErrorMessage(t("errorMsg"));
      setStatus("error");
    }
  };

  // Lets a visitor send the same message over WhatsApp when email delivery fails.
  const whatsappHref = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
    [
      `${t("nameLabel")}: ${formData.name}`,
      `${t("emailLabel")}: ${formData.email}`,
      `${t("companyLabel")}: ${formData.company}`,
      `${t("serviceLabel")}: ${formData.service}`,
      "",
      formData.message.slice(0, 1000),
    ].join("\n")
  )}`;

  if (status === "success") {
    return (
      <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
        <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
        <h3 className="text-lg font-bold text-emerald-950">
          {isAr ? "تم استلام استفسارك بنجاح!" : "Inquiry Received Successfully!"}
        </h3>
        <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
          {t("successMsg")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "error" && (
        <div
          role="alert"
          className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 space-y-3"
        >
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>{t("whatsappFallbackBtn")}</span>
          </a>
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className="block text-xs font-semibold text-charcoal mb-1.5">
          {t("nameLabel")}
        </label>
        <input
          id="contact-name"
          maxLength={120}
          required
          type="text"
          placeholder={t("namePlaceholder")}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-charcoal-border bg-charcoal-surface text-charcoal text-xs sm:text-sm focus:outline-hidden focus:border-brand focus:bg-white transition-all"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold text-charcoal mb-1.5">
            {t("emailLabel")}
          </label>
          <input
            id="contact-email"
            maxLength={200}
            required
            type="email"
            placeholder={t("emailPlaceholder")}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-charcoal-border bg-charcoal-surface text-charcoal text-xs sm:text-sm focus:outline-hidden focus:border-brand focus:bg-white transition-all"
          />
        </div>

        <div>
          <label htmlFor="contact-company" className="block text-xs font-semibold text-charcoal mb-1.5">
            {t("companyLabel")}
          </label>
          <input
            id="contact-company"
            maxLength={200}
            required
            type="text"
            placeholder={t("companyPlaceholder")}
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-charcoal-border bg-charcoal-surface text-charcoal text-xs sm:text-sm focus:outline-hidden focus:border-brand focus:bg-white transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-service" className="block text-xs font-semibold text-charcoal mb-1.5">
          {t("serviceLabel")}
        </label>
        <select
          id="contact-service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-charcoal-border bg-charcoal-surface text-charcoal text-xs sm:text-sm focus:outline-hidden focus:border-brand focus:bg-white transition-all"
        >
          <option>{t("serviceOption1")}</option>
          <option>{t("serviceOption2")}</option>
          <option>{t("serviceOption3")}</option>
          <option>{t("serviceOption4")}</option>
          <option>{t("serviceOption5")}</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-charcoal mb-1.5">
          {t("messageLabel")}
        </label>
        <textarea
          id="contact-message"
          maxLength={5000}
          required
          rows={4}
          placeholder={t("messagePlaceholder")}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-charcoal-border bg-charcoal-surface text-charcoal text-xs sm:text-sm focus:outline-hidden focus:border-brand focus:bg-white transition-all"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand hover:bg-brand-hover disabled:opacity-60 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>{t("submitting")}</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4 rtl:rotate-180" />
            <span>{t("submitBtn")}</span>
          </>
        )}
      </button>
    </form>
  );
};
