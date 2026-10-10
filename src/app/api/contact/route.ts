import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // In production, integrate with CRM / SendGrid / Resend / Webhook
    // In local/demo mode, log safely and return success
    console.log('New Concierge Inquiry Received:', {
      name,
      email,
      phone: phone || 'N/A',
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been successfully submitted to the Jasmine Aroma Concierge.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { message: 'Server error processing your inquiry. Please contact us via WhatsApp.' },
      { status: 500 }
    );
  }
}
