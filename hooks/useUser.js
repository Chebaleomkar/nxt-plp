'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
      const token = localStorage.getItem('token');
      const userEmail = localStorage.getItem('userEmail');

      if (token && userEmail) {
        setUser({ email: userEmail, token });
      }
      setLoading(false);
  }, []);

  const login = (userData) => {
    localStorage.setItem('token', userData.token);
    localStorage.setItem('userEmail', userData.email);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    setUser(null);
    router.push('/login');
  };

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  };
}; 