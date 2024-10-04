'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-orange-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">GiveApp</span>
        </Link>
        <nav>
          {user ? (
            <div className="flex items-center space-x-4">
              <span>{user.username}</span>
              {user.profilePicture && (
                <img
                  src={user.profilePicture}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              )}
              <button
                onClick={logout}
                className="bg-orange-600 px-4 py-2 rounded hover:bg-orange-700 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-x-4">
              <Link href="/login">
                <span className="bg-orange-600 px-4 py-2 rounded hover:bg-orange-700 transition-colors cursor-pointer">
                  Login
                </span>
              </Link>
              <Link href="/register">
                <span className="bg-orange-600 px-4 py-2 rounded hover:bg-orange-700 transition-colors cursor-pointer">
                  Register
                </span>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;