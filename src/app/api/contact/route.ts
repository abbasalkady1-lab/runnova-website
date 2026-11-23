import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)." },
        { status: 400 }
      );
    }

    // In a production environment, send notification via Resend, SendGrid, or Slack webhook.
    console.log("[Runnova Lead Ingested]:", {
      timestamp: new Date().toISOString(),
      name,
      email,
      company,
      service,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry successfully recorded. A senior architect will follow up.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error processing inquiry." },
      { status: 500 }
    );
  }
}
