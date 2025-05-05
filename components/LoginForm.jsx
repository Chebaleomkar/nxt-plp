"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser } from '../hooks/useUser';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const { login } = useUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch('/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Login failed');
            }

            login(data);
            router.push('/');
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-xl p-8">
                <div>
                    <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
                        Welcome back
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Don&apos;t have an account?{' '}
                        <Link
                            href="/signup"
                            className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>

                <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none rounded-lg w-full pl-12 pr-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-150 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none rounded-lg w-full pl-12 pr-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-150 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm text-center">{error}</div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <ArrowRight size="20" className="text-white group-hover:text-indigo-200 transition" />
                            </span>
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default LoginForm
