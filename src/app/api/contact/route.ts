import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, description } = body

    // Validate required fields
    if (!fullName || !email || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <therapy@michellesmit.com>',
      to: 'therapy@michellesmit.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
Name: ${fullName}
Email: ${email}

Message:
${description}
      `.trim(),
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${fullName}</p>
<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
<h3>Message:</h3>
<p>${description.replace(/\n/g, '<br>')}</p>
      `.trim(),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
