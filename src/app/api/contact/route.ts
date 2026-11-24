import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

const LIMITS = { name: 120, email: 200, company: 200, service: 200, message: 5000 } as const;
type Field = keyof typeof LIMITS;

const EMAIL_PATTERN = /^[^\s@<>,;]+@[^\s@<>,;]+\.[^\s@<>,;]+$/;

const fail = (error: string, status: number) => NextResponse.json({ error }, { status });

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return fail("invalid_request", 400);
  }
  if (!body || typeof body !== "object") return fail("invalid_request", 400);

  const lead = {} as Record<Field, string>;
  for (const field of Object.keys(LIMITS) as Field[]) {
    const value = body[field];
    lead[field] = typeof value === "string" ? value.trim() : "";
    if (lead[field].length > LIMITS[field]) return fail("invalid_request", 400);
    // Only the message may span lines; the others end up in headers or single-line fields.
    if (field !== "message") lead[field] = lead[field].replace(/[\r\n]+/g, " ");
  }
  if (!lead.name || !lead.message || !EMAIL_PATTERN.test(lead.email)) {
    return fail("invalid_request", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set; message not delivered.");
    return fail("delivery_failed", 503);
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || `Runnova Website <website@${siteConfig.domain}>`,
        to: [process.env.CONTACT_TO_EMAIL || siteConfig.email],
        reply_to: lead.email,
        subject: `رسالة جديدة من الموقع — ${lead.name}`,
        text: [
          `الاسم: ${lead.name}`,
          `الإيميل: ${lead.email}`,
          `الشركة: ${lead.company || "-"}`,
          `الخدمة: ${lead.service || "-"}`,
          "",
          lead.message,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      // Status only: never log the customer's details.
      console.error(`[contact] Resend rejected the message (HTTP ${res.status}).`);
      return fail("delivery_failed", 502);
    }
  } catch (error) {
    console.error("[contact] Resend request failed:", error instanceof Error ? error.name : "unknown");
    return fail("delivery_failed", 502);
  }

  return NextResponse.json({ success: true });
}
