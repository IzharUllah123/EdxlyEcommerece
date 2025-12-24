import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Edxly Contact <onboarding@resend.dev>', // Use your verified domain here later
      to: ['ixharkhan9@gmail.com'],
      subject: `New Lead: ${name}`,
      replyTo: email,
      html: `
        <h1>New Consultation Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}