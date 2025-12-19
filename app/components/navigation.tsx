'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/98 shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="cursor-pointer">
            <div className="text-2xl font-bold text-blue-600">NYHO</div>
            <div className="text-sm text-gray-600">NY HomeOwner Inc.</div>
          </div>
        </Link>
        <ul className="flex gap-8 items-center">
          <li>
            <Link 
              href="/" 
              className={`font-semibold transition-colors ${
                isActive('/') ? 'text-blue-600' : 'hover:text-blue-600'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/deal" 
              className={`font-semibold transition-colors ${
                isActive('/deal') ? 'text-blue-600' : 'hover:text-blue-600'
              }`}
            >
              DEAL
            </Link>
          </li>
          <li>
            <Link 
              href="/invest" 
              className={`font-semibold transition-colors ${
                isActive('/invest') ? 'text-blue-600' : 'hover:text-blue-600'
              }`}
            >
              INVEST
            </Link>
          </li>
          <li>
            <Link 
              href="/manage" 
              className={`font-semibold transition-colors ${
                isActive('/manage') ? 'text-blue-600' : 'hover:text-blue-600'
              }`}
            >
              MANAGE
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`font-semibold transition-colors ${
                isActive('/contact') ? 'text-blue-600' : 'hover:text-blue-600'
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}