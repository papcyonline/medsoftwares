import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.SENDGRID_API_KEY || '';
  return NextResponse.json({
    hasKey: apiKey.length > 0,
    startsWithSG: apiKey.startsWith('SG.'),
    keyLength: apiKey.length,
    first10Chars: apiKey.substring(0, 10),
  });
}
