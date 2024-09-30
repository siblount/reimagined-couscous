// app/components/BottomNav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';

const navItems = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/explore', label: 'Explore', icon: '🔍' },
  { href: '/notifications', label: 'Notifications', icon: '🔔' },
  { href: '/profile', label: 'Profile', icon: '👤' },
];

const BottomNav = () => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  const memoizedNavItems = useMemo(() => navItems, []);

  useEffect(() => {
    const newIndex = memoizedNavItems.findIndex(item => item.href === pathname);
    setActiveIndex(newIndex !== -1 ? newIndex : 0);
  }, [pathname, memoizedNavItems]);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-orange-500 border-t border-orange-600">
      <div className="flex justify-around items-center h-16 relative">
        {memoizedNavItems.map((item) => (
          <Link 
            href={item.href} 
            key={item.href}
            className={`flex flex-col items-center justify-center w-full h-full z-10 ${
              pathname === item.href 
                ? 'text-white' 
                : 'text-orange-200 hover:text-white'
            }`}
          >
            <span className="text-2xl mb-1">{item.icon}</span>
            <span className={`text-xs ${pathname === item.href ? 'font-bold' : ''}`}>{item.label}</span>
          </Link>
        ))}
        <div 
          className="absolute bottom-0 h-1 bg-white rounded-full transition-all duration-300 ease-in-out"
          style={{
            width: `${100 / memoizedNavItems.length}%`,
            left: `${(activeIndex * 100) / memoizedNavItems.length}%`,
          }}
        />
      </div>
    </nav>
  );
};

export default BottomNav;