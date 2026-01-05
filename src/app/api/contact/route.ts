import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message, formType } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Map subject values to readable text
    const subjectMap: Record<string, string> = {
      demo: 'Request a Demo',
      pricing: 'Pricing Inquiry',
      pharmapos: 'PharmaPOS Questions',
      hospitalos: 'HospitalOS Questions',
      support: 'Technical Support',
      partnership: 'Partnership Opportunity',
      other: 'Other',
    };

    const readableSubject = subjectMap[subject] || subject || 'General Inquiry';
    const emailSubject = formType === 'demo'
      ? `New Demo Request from ${name}`
      : `New Contact Form: ${readableSubject}`;

    // Send email to your team
    await sgMail.send({
      from: 'MedSoftwares <contact@medsoftwares.com>',
      to: 'rhingndah@gmail.com',
      replyTo: email,
      subject: emailSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #166534 0%, #14532d 100%); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">
              ${formType === 'demo' ? 'New Demo Request' : 'New Contact Form Submission'}
            </h1>
          </div>

          <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 140px;">Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 500;">
                  <a href="mailto:${email}" style="color: #166534;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Phone:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 500;">
                  <a href="tel:${phone.replace(/\s/g, '')}" style="color: #166534;">${phone}</a>
                </td>
              </tr>
              ` : ''}
              ${company ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Company/Facility:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 500;">${company}</td>
              </tr>
              ` : ''}
              ${subject && formType !== 'demo' ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Subject:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 500;">${readableSubject}</td>
              </tr>
              ` : ''}
            </table>

            <div style="margin-top: 24px;">
              <p style="color: #6b7280; margin: 0 0 8px 0;">Message:</p>
              <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
                <p style="color: #111827; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                This email was sent from the MedSoftwares website contact form.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the user
    await sgMail.send({
      from: 'MedSoftwares <contact@medsoftwares.com>',
      to: email,
      subject: formType === 'demo'
        ? 'Thank you for your demo request - MedSoftwares'
        : 'Thank you for contacting MedSoftwares',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #166534 0%, #14532d 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You, ${name.split(' ')[0]}!</h1>
          </div>

          <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              ${formType === 'demo'
                ? 'Thank you for requesting a demo of our healthcare software solutions. Our team will review your request and get back to you within 24 hours to schedule a personalized demonstration.'
                : 'Thank you for reaching out to us. We have received your message and our team will get back to you within 24 hours.'
              }
            </p>

            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-top: 20px;">
              In the meantime, feel free to explore our products:
            </p>

            <div style="margin-top: 24px;">
              <a href="https://medsoftwares.com/pharmapos" style="display: inline-block; background: #166534; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-right: 12px;">PharmaPOS</a>
              <a href="https://medsoftwares.com/hospitalos" style="display: inline-block; background: #1e40af; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">HospitalOS</a>
            </div>

            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">Best regards,</p>
              <p style="color: #111827; font-size: 16px; font-weight: 600; margin: 4px 0 0 0;">The MedSoftwares Team</p>
              <p style="color: #6b7280; font-size: 14px; margin: 4px 0 0 0;">
                <a href="https://medsoftwares.com" style="color: #166534;">medsoftwares.com</a> |
                <a href="mailto:contact@medsoftwares.com" style="color: #166534;">contact@medsoftwares.com</a>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('SendGrid error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorDetails = (error as { response?: { body?: unknown } })?.response?.body;
    console.error('Error details:', JSON.stringify(errorDetails, null, 2));
    return NextResponse.json(
      { error: 'Failed to send email', details: errorMessage },
      { status: 500 }
    );
  }
}
