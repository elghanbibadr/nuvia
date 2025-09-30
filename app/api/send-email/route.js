import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { to, subject, text } = await request.json();

    // Validate input
    if (!to || !subject || !text) {
      return NextResponse.json(
        { error: 'Missing required fields: to, subject, text' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Free tier: use this default sender
      to: to,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333; margin-bottom: 20px;">New Waitlist Signup</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; border-left: 4px solid #0070f3;">
            ${text.split('\n').map(line => 
              line.trim() ? `<p style="margin: 8px 0; color: #666;">${line}</p>` : ''
            ).join('')}
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #999; font-size: 12px;">
            Sent from NÜVIA Waitlist Form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        messageId: data.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error.message 
      },
      { status: 500 }
    );
  }
}