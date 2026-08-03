import type { NextApiRequest, NextApiResponse } from "next"
import { Resend } from "resend"

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
  recaptchaToken: string
}

type ResponseData = {
  success?: boolean
  error?: string
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY not configured")
    return false
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()
    
    return data.success && data.score >= 0.5
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return false
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { name, email, subject, message, recaptchaToken }: ContactFormData = req.body

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email address" })
    }

    // Verify reCAPTCHA
    if (!recaptchaToken) {
      return res.status(400).json({ error: "reCAPTCHA verification failed" })
    }

    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken)
    
    if (!isValidRecaptcha) {
      return res.status(400).json({ error: "reCAPTCHA verification failed. Please try again." })
    }

    // Send email via Resend
    const resendApiKey = process.env.RESEND_API_KEY
    const adminEmail = process.env.ADMIN_EMAIL || "info@opentrialfootball.com"

    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured - email not sent")
      console.log("Contact Form Submission (Email service not configured):", {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      })
      return res.status(500).json({ error: "Email service not configured. Please contact support." })
    }

    const resend = new Resend(resendApiKey)

    await resend.emails.send({
      from: "Open Trial <noreply@opentrialfootball.com>",
      to: adminEmail,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00FF41;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background: #fff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #888; font-size: 12px; margin-top: 20px;">
            Submitted: ${new Date().toLocaleString()}
          </p>
        </div>
      `
    })

    console.log("Contact form email sent successfully:", {
      name,
      email,
      subject,
      timestamp: new Date().toISOString()
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return res.status(500).json({ error: "Failed to send message. Please try again later." })
  }
}