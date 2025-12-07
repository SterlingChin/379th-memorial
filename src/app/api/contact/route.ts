import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, veteranName, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <contact@379th-memorial.org>',
      to: 'stories@379th-memorial.org',
      replyTo: email,
      subject: `New Contact: ${veteranName ? `Re: ${veteranName}` : 'General Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${veteranName ? `<p><strong>Veteran's Name:</strong> ${veteranName}</p>` : ''}
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br />')}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">
          Sent from the 379th Bomb Group Memorial contact form
        </p>
      `,
      text: `
New Contact Form Submission

From: ${name}
Email: ${email}
${veteranName ? `Veteran's Name: ${veteranName}` : ''}

Message:
${message}

---
Sent from the 379th Bomb Group Memorial contact form
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
