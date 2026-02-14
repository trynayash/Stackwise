import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, message } = body;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // specific logic to store in database or send email would go here
        // For now, we simulate a successful submission
        console.log("Contact Form Submission:", { name, email, company, message });

        return NextResponse.json(
            { success: true, message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
