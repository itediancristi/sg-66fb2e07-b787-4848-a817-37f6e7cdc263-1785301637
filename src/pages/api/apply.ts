import type { NextApiRequest, NextApiResponse } from "next"

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

    // Log the application submission
    console.log("Player Application Submission:", {
      name,
      age,
      nationality,
      position,
      currentClub,
      whatsapp,
      email,
      transfermarkt: transfermarkt || "Not provided",
      videoLink,
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
    //   subject: `New Player Application: ${name} - ${position}`,
    //   html: `
    //     <h2>New Player Application</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Age:</strong> ${age}</p>
    //     <p><strong>Nationality:</strong> ${nationality}</p>
    //     <p><strong>Position:</strong> ${position}</p>
    //     <p><strong>Current Club:</strong> ${currentClub}</p>
    //     <p><strong>WhatsApp:</strong> ${whatsapp}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     ${transfermarkt ? `<p><strong>Transfermarkt:</strong> <a href="${transfermarkt}">${transfermarkt}</a></p>` : ''}
    //     <p><strong>Video:</strong> <a href="${videoLink}">${videoLink}</a></p>
    //     <p><strong>Message:</strong><br>${message}</p>
    //   `
    // })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error("Application form error:", error)
    return res.status(500).json({ error: "Failed to submit application" })
  }
}