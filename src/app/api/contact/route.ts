import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Simple in-memory rate limiting
const rateLimit = new Map<string, number>();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes

export async function POST(request: Request) {
    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json(
            { error: 'Server configuration error: Missing Resend API Key' },
            { status: 500 }
        );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        // Get client IP
        const forwardedFor = request.headers.get('x-forwarded-for');
        const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';

        // Check rate limit
        const lastAttempt = rateLimit.get(ip);
        if (lastAttempt && Date.now() - lastAttempt < RATE_LIMIT_WINDOW) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again in 10 minutes.' },
                { status: 429 }
            );
        }

        // Update rate limit timestamp
        rateLimit.set(ip, Date.now());

        const body = await request.json();
        const { name, email, phone, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'ASUH Contact Form <no-reply@asuhonthemove.com>',
            to: ['contact@asuhonthemove.com'],
            subject: `New Contact Form Submission from ${name}`,
            replyTo: email,
            html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                        <div style="background-color: #f8f9fa; padding: 20px; border-bottom: 1px solid #e0e0e0;">
                            <h2 style="color: #333; margin: 0; font-size: 20px;">New Message from Contact Form</h2>
                            <p style="color: #666; font-size: 14px; margin-top: 5px; margin-bottom: 0;">You have received a new inquiry via Asuh On The Move.</p>
                        </div>
                        
                        <div style="padding: 24px;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding-bottom: 16px; width: 120px; color: #666; font-weight: bold;">Full Name:</td>
                                    <td style="padding-bottom: 16px; color: #333; font-weight: 500;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding-bottom: 16px; color: #666; font-weight: bold;">Email Address:</td>
                                    <td style="padding-bottom: 16px; color: #333;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding-bottom: 16px; color: #666; font-weight: bold;">Phone Number:</td>
                                    <td style="padding-bottom: 16px; color: #333;">${phone}</td>
                                </tr>
                            </table>

                            <div style="margin-top: 8px;">
                                <p style="color: #666; font-weight: bold; margin-bottom: 8px;">Message:</p>
                                <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                            </div>
                        </div>

                        <div style="background-color: #f8f9fa; padding: 16px; text-align: center; color: #9ca3af; font-size: 12px; border-top: 1px solid #e0e0e0;">
                            &copy; ${new Date().getFullYear()} Asuh On The Move. All rights reserved.
                        </div>
                    </div>
                `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
