import type { NextApiRequest, NextApiResponse } from "next"
import { Resend } from "resend"

type ApplyFormData = {
  name: string
  age: string
  nationality: string
  position: string
  currentClub: string
  whatsapp: string
  email: string
  transfermarkt?: string
  videoLink: string
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
    const {
      name,
      age,
      nationality,
      position,
      currentClub,
      whatsapp,
      email,
      transfermarkt,
      videoLink,
      message,
      recaptchaToken
    }: ApplyFormData = req.body

    // Validation
    if (!name || !age || !nationality || !position || !currentClub || !whatsapp || !email || !videoLink || !message) {
      return res.status(400).json({ error: "All required fields must be filled" })
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
      console.log("Player Application (Email service not configured):", {
        name,
        age,
        nationality,
        position,
        currentClub,
        whatsapp,
        email,
        timestamp: new Date().toISOString()
      })
      return res.status(500).json({ error: "Email service not configured. Please contact support." })
    }

    const resend = new Resend(resendApiKey)

    await resend.emails.send({
      from: "Open Trial <noreply@opentrialfootball.com>",
      to: adminEmail,
      replyTo: email,
      subject: `New Player Application: ${name} - ${position}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00FF41;">⚽ New Player Application</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Player Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 40%;">Name:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Age:</td>
                <td style="padding: 8px 0;">${age}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Nationality:</td>
                <td style="padding: 8px 0;">${nationality}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Position:</td>
                <td style="padding: 8px 0;"><strong style="color: #00FF41;">${position}</strong></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Current Club:</td>
                <td style="padding: 8px 0;">${currentClub}</td>
              </tr>
            </table>
          </div>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 40%;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #00FF41;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">WhatsApp:</td>
                <td style="padding: 8px 0;"><a href="https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}" style="color: #00FF41;">${whatsapp}</a></td>
              </tr>
              ${transfermarkt ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Transfermarkt:</td>
                <td style="padding: 8px 0;"><a href="${transfermarkt}" style="color: #00FF41;" target="_blank">View Profile</a></td>
              </tr>
              ` : ''}
            </table>
          </div>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">🎥 Video Highlights</h3>
            <p><a href="${videoLink}" style="color: #00FF41; font-weight: bold; font-size: 16px;" target="_blank">Watch Player Video →</a></p>
          </div>

          <div style="background: #fff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Player Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          <div style="background: #00FF41; color: #000; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <strong>Quick Actions:</strong><br/>
            <a href="mailto:${email}" style="color: #000; text-decoration: none; margin: 0 10px;">✉️ Email Player</a> | 
            <a href="https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}" style="color: #000; text-decoration: none; margin: 0 10px;">💬 WhatsApp</a> | 
            <a href="${videoLink}" style="color: #000; text-decoration: none; margin: 0 10px;" target="_blank">🎥 View Video</a>
          </div>

          <p style="color: #888; font-size: 12px; margin-top: 20px;">
            Application submitted: ${new Date().toLocaleString()}<br/>
            Application ID: ${Date.now().toString(36).toUpperCase()}
          </p>
        </div>
      `
    })

    console.log("Player application email sent successfully:", {
      name,
      position,
      email,
      timestamp: new Date().toISOString()
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error("Application form error:", error)
    return res.status(500).json({ error: "Failed to submit application. Please try again later." })
  }
}