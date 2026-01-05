import { NextRequest, NextResponse } from 'next/server';

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

    // Log the submission (you can see this in Vercel logs)
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      subject,
      message,
      formType,
      timestamp: new Date().toISOString(),
    });

    // For now, just return success
    // You can integrate an email service later
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
