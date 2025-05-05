import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import User from '../../../models/User';


export async function POST(req) {
  try {
    await connectDB();
    
    const { email, password } = await req.json();

    const user = await User.findOne({ email }).select('+password');
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found .' },
        { status: 401 }
      );
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return NextResponse.json(
        { error: 'Password is incorrect.' },
        { status: 401 }
      );
    }
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