import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Read credentials from environment variable (works on Vercel!)
    const credentialsJson = process.env.CREDENTIALS || '{"credentials":[]}';
    const { credentials } = JSON.parse(credentialsJson);

    // Find matching credential
    const credential = credentials.find(
      (c: any) => c.username === username && c.password === password
    );

    if (credential) {
      // Return user data (without password)
      return NextResponse.json({
        success: true,
        user: {
          username: credential.username,
          role: credential.role,
          level: credential.level,
          test: credential.test,
          testId: credential.testId
        }
      });
    } else {
      // Invalid credentials
      return NextResponse.json(
        { error: 'Invalid username or password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

