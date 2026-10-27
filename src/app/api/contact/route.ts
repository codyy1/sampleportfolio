import { NextResponse } from "next/server";

// Simple in-memory rate limiter: max 5 requests per minute per IP
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 5;

  // Periodic cleanup
  if (rateLimitMap.size > 1000) {
    rateLimitMap.forEach((record, key) => {
      if (now > record.resetAt) {
        rateLimitMap.delete(key);
      }
    });
  }

  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(request: Request) {
  // Extract client IP (from standard proxy headers or fallback)
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute before sending another message." },
      {
        status: 429,
        headers: { "Retry-After": "60" },
      }
    );
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload in request body." },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { error: "Request payload must be a JSON object." },
      { status: 400 }
    );
  }

  const { name, email, message, website_hp } = body;

  // Bot detection: honeypot field must be empty
  if (website_hp && typeof website_hp === "string" && website_hp.trim().length > 0) {
    // Silently drop spam submission with 200 OK
    return NextResponse.json(
      { success: true, message: "Your message has been processed." },
      { status: 200 }
    );
  }

  // Validate name
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json(
      { error: "Name is required." },
      { status: 400 }
    );
  }

  if (name.trim().length > 100) {
    return NextResponse.json(
      { error: "Name must be under 100 characters." },
      { status: 400 }
    );
  }

  // Validate email
  if (
    !email ||
    typeof email !== "string" ||
    email.trim().length > 120 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return NextResponse.json(
      { error: "A valid email address is required (max 120 characters)." },
      { status: 400 }
    );
  }

  // Validate message
  if (!message || typeof message !== "string" || message.trim().length < 5) {
    return NextResponse.json(
      { error: "Message must be at least 5 characters long." },
      { status: 400 }
    );
  }

  if (message.trim().length > 3000) {
    return NextResponse.json(
      { error: "Message must be under 3000 characters." },
      { status: 400 }
    );
  }

  // Log clean sanitized payload
  console.log("[Contact Submission Received]", {
    ip,
    name: name.trim(),
    email: email.trim(),
    messageLength: message.trim().length,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json(
    {
      success: true,
      message: "Your message has been transmitted successfully. I'll get back to you soon!",
    },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json(
    { error: "Method Not Allowed. Use POST to submit messages." },
    { status: 405, headers: { Allow: "POST" } }
  );
}
