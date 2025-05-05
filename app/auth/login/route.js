import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import User from '../../../models/User';


export async function POST(req) {
  try {
    await connectDB();
    
    const { email, password } = await req.json();

    // Check if user exists
    const user = await User.findOne({ email }).select('+password');
    
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Check if password matches
    const isMatch = await user.matchPass
    word(password);

    if (!isMatch) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Create response without password
    const userResponse = {
      id: user._id,
      email: user.email
    };

    return NextResponse.json(userResponse);
    
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 