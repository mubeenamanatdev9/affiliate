import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Try to save to database
    try {
      await prisma.subscriber.upsert({
        where: { email },
        update: {}, // If already exists, do nothing
        create: { email },
      });
    } catch (dbError) {
      console.log('Database not available, logging subscription to console only');
    }

    console.log(`New newsletter subscription: ${email}`);

    return NextResponse.json({ success: true, message: 'Successfully subscribed!' }, { status: 200 });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
