'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-10 mb-4 bg-white bg-opacity-10 backdrop-blur-md border-b border-white border-opacity-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-orange-500 text-shadow">GiveApp</h1>
        </Link>
        <nav>
          <ul className="flex items-center space-x-4">
            {user ? (
              <>
                <li>
                  <Link href="/profile">
                    <img
                      src={user.profilePicture || 'https://placehold.co/40x40?text=User'}
                      alt="Profile"
                      className="w-10 h-10 rounded-full border-2 border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                    />
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="text-orange-500 hover:text-orange-400 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login" className="text-blue-100 hover:text-orange-500 transition-colors duration-200">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="text-blue-100 hover:text-orange-500 transition-colors duration-200">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;