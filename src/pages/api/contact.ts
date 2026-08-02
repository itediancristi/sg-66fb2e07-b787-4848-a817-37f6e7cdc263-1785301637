import type { NextApiRequest, NextApiResponse } from "next"

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
    
    // Check if verification was successful and score is above threshold (0.5)
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

    // In a production environment, you would integrate with an email service here
    // For now, we'll log the contact form submission
    console.log("Contact Form Submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      destination: "info@opentrialfootball.com",
      recaptchaVerified: true
    })

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // Example with SendGrid:
    // await sendEmail({
    //   to: "info@opentrialfootball.com",
    //   from: "noreply@opentrialfootball.com",
    //   replyTo: email,
    //   subject: `Contact Form: ${subject}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    // })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return res.status(500).json({ error: "Failed to send message" })
  }
}