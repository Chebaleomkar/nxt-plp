'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useUser } from '../hooks/useUser';
import { User, LogOut } from 'lucide-react';

const UserProfile = () => {
  const { user, isAuthenticated, logout } = useUser();
  const [showDropdown, setShowDropdown] = useState(false);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target ;
      if (!target.closest('.user-profile-dropdown')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  if (!isAuthenticated) {
    return (
      <Link
        href="/login"
        className="flex items-center gap-2 hover:text-gray-600"
      >
        <span>Login</span>
      </Link>
    );
  }

  return (
    <div className="relative user-profile-dropdown">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowDropdown(!showDropdown);
        }}
        className="flex items-center gap-2 hover:text-gray-600 border-blue-500 border-2 rounded-md p-1"
      >
        <User size={20} />
        <span>Profile</span>
      </button>

      {showDropdown && (
        <div className="absolute border border-black right-0 mt-2 w-48 bg-white rounded-md  py-1 text-black z-50">
          <div className="px-4 py-2 text-sm border-b font-serif underline border-gray-200">
            {user?.email}
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile; 