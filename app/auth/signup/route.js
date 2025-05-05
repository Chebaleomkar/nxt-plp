import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import User from '../../../models/User';

export async function POST(req) {
  try {
    await connectDB();
    
    const { email, password } = await req.json();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Create new user
    const user = await User.create({
      email,
      password
    });

    // Create response without password
    const userResponse = {
      id: user._id,
      email: user.email
    };

    return NextResponse.json(userResponse);
    
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 