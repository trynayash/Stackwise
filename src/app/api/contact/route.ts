import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, budget, details } = body;

        // Validate required fields
        if (!name || !email || !details) {
            return NextResponse.json(
                { error: "Name, email, and project details are required." },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Please enter a valid email address." },
                { status: 400 }
            );
        }

        // Build the email HTML
        const emailHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NEW PROJECT INQUIRY // STACKWISE</title>
    <style>
        body { margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; background-color: #000000; color: #ffffff; -webkit-font-smoothing: antialiased; }
        .wrapper { width: 100%; table-layout: fixed; background-color: #000000; padding: 40px 20px; box-sizing: border-box; }
        .container { max-width: 650px; margin: 0 auto; background-color: #000000; border: 1px solid #333333; }
        .header { padding: 30px 40px; border-bottom: 4px solid #C8FF00; background: #0a0a0a; text-align: left; }
        .logo { font-size: 24px; font-weight: 900; letter-spacing: -1px; color: #ffffff; margin: 0 0 4px 0; text-transform: uppercase; }
        .logo span { color: #C8FF00; }
        .tagline { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace; font-size: 11px; color: #C8FF00; letter-spacing: 2px; text-transform: uppercase; margin: 0; }
        .content { padding: 40px; }
        .row { margin-bottom: 30px; border-left: 2px solid #222222; padding-left: 16px; transition: border-color 0.2s ease; }
        .row:hover { border-left-color: #C8FF00; }
        .row:last-child { margin-bottom: 0; }
        .label { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace; font-size: 11px; font-weight: 600; color: #888888; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; }
        .value { font-size: 16px; color: #ffffff; line-height: 1.6; font-weight: 400; }
        .value a { color: #C8FF00; text-decoration: none; border-bottom: 1px solid rgba(200,255,0,0.3); padding-bottom: 1px; }
        .value a:hover { border-bottom-color: #C8FF00; }
        .actions { padding: 0 40px 40px; }
        .btn { display: inline-block; padding: 16px 32px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace; font-size: 13px; font-weight: 700; text-decoration: none; text-transform: uppercase; letter-spacing: 1px; margin-right: 12px; margin-bottom: 12px; transition: all 0.2s; }
        .btn-primary { background-color: #C8FF00; color: #000000; border: 1px solid #C8FF00; }
        .btn-primary:hover { background-color: #a3d100; border-color: #a3d100; }
        .btn-secondary { background-color: transparent; color: #ffffff; border: 1px solid #444444; }
        .btn-secondary:hover { border-color: #ffffff; }
        .footer { padding: 30px 40px; background-color: #0a0a0a; border-top: 1px solid #222222; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace; font-size: 10px; color: #555555; text-transform: uppercase; letter-spacing: 1px; }
        
        @media only screen and (max-width: 600px) {
            .wrapper { padding: 20px 0; }
            .container { border-left: none; border-right: none; }
            .header, .content, .actions, .footer { padding-left: 20px; padding-right: 20px; }
            .btn { display: block; margin: 0 0 12px 0; width: 100%; box-sizing: border-box; text-align: center; }
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="container">
            <div class="header">
                <h1 class="logo">STACK<span>WISE</span></h1>
                <p class="tagline">INBOUND INQUIRY</p>
            </div>
            
            <div class="content">
                <div class="row">
                    <div class="label">CLIENT_NAME</div>
                    <div class="value">${name}</div>
                </div>
                
                <div class="row">
                    <div class="label">EMAIL_ADDRESS</div>
                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                
                ${phone ? `
                <div class="row">
                    <div class="label">PHONE_NUMBER</div>
                    <div class="value">${phone}</div>
                </div>
                ` : ''}
                
                ${budget ? `
                <div class="row">
                    <div class="label">BUDGET_ESTIMATE</div>
                    <div class="value">${budget}</div>
                </div>
                ` : ''}
                
                <div class="row">
                    <div class="label">PROJECT_SPECIFICATIONS</div>
                    <div class="value" style="white-space: pre-wrap;">${details}</div>
                </div>
            </div>
            
            <div class="actions">
                <a href="mailto:${email}" class="btn btn-primary">REPLY DIRECTLY</a>
                ${phone ? `<a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" class="btn btn-secondary">INITIATE WHATSAPP</a>` : ''}
            </div>

            <div class="footer">
                TRANSMISSION TIMESTAMP // ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'long' }).toUpperCase()}<br>
                SECURE LEAD SYSTEM
            </div>
        </div>
    </div>
</body>
</html>`;

        // Create Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Send the email
        await transporter.sendMail({
            from: `"StackWise Leads" <${process.env.GMAIL_USER}>`,
            to: "yashrsuthar90@gmail.com",
            replyTo: email,
            subject: `[INQUIRY] ${name.toUpperCase()} — StackWise`,
            html: emailHtml,
        });

        console.log(`[SYSTEM] Internal email dispatched successfully. Target: ${email}`);

        return NextResponse.json(
            { success: true, message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("❌ Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again." },
            { status: 500 }
        );
    }
}
