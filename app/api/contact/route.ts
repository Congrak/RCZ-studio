import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, service, message } = body;

    if (!firstName || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Option 1: Web3Forms (free, recommended — get key at web3forms.com)
    const WEB3FORMS_KEY = process.env.WEB3FORMS_KEY || "YOUR_WEB3FORMS_KEY";

    if (WEB3FORMS_KEY !== "YOUR_WEB3FORMS_KEY") {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[RCZ Capital] New inquiry — ${service}`,
          from_name: `${firstName} ${lastName}`,
          email,
          to: "info@rczcapital.com",
          company: company || "N/A",
          service,
          message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        return NextResponse.json({ success: true });
      }
    }

    // Option 2: Resend (premium email API — set RESEND_API_KEY in .env)
    const RESEND_KEY = process.env.RESEND_API_KEY;
    if (RESEND_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "RCZ Capital <onboarding@resend.dev>",
          to: ["info@rczcapital.com"],
          subject: `[RCZ Capital] New inquiry — ${service}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "N/A"}</p>
            <p><strong>Service:</strong> ${service}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
          reply_to: email,
        }),
      });
      if (res.ok) return NextResponse.json({ success: true });
    }

    // Fallback: return success so client can open mailto
    return NextResponse.json({ success: true, fallback: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
