"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const handleSmoothScroll = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, targetId: string) => {
    if (!isHome) {
      // Navigate to home then scroll — let the link handle it
      return;
    }
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4 md:pt-8 pb-4">
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 bg-blue-50/60 backdrop-blur-md rounded-full shadow-lg max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold">
          <span className="text-gray-800">ARK</span>
          <span className="text-blue-500">GLOBAL</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 text-gray-700 items-center">
          <a
            href={isHome ? '#hero' : '/#hero'}
            onClick={(e) => handleSmoothScroll(e, 'hero')}
            className="hover:text-blue-500 transition-colors"
          >
            Home
          </a>
          <a
            href={isHome ? '#business' : '/#business'}
            onClick={(e) => handleSmoothScroll(e, 'business')}
            className="hover:text-blue-500 transition-colors"
          >
            Business
          </a>
          <a
            href={isHome ? '#company' : '/#company'}
            onClick={(e) => handleSmoothScroll(e, 'company')}
            className="hover:text-blue-500 transition-colors"
          >
            Corporate
          </a>
          <Link
            href="/blog"
            className={`hover:text-blue-500 transition-colors ${pathname.startsWith('/blog') ? 'text-blue-500' : ''}`}
          >
            Blog
          </Link>
          <a
            href={isHome ? '#contact' : '/#contact'}
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="hover:text-blue-500 transition-colors"
          >
            Contact Us
          </a>
        </div>
        
        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 z-40">
          <div className="flex flex-col py-4">
            <a
              href={isHome ? '#hero' : '/#hero'}
              onClick={(e) => { handleSmoothScroll(e, 'hero'); setIsMenuOpen(false); }}
              className="px-6 py-3 text-gray-700 hover:text-blue-500 hover:bg-gray-50 transition-colors text-left"
            >
              Home
            </a>
            <a
              href={isHome ? '#company' : '/#company'}
              onClick={(e) => { handleSmoothScroll(e, 'company'); setIsMenuOpen(false); }}
              className="px-6 py-3 text-gray-700 hover:text-blue-500 hover:bg-gray-50 transition-colors text-left"
            >
              Corporate
            </a>
            <a
              href={isHome ? '#business' : '/#business'}
              onClick={(e) => { handleSmoothScroll(e, 'business'); setIsMenuOpen(false); }}
              className="px-6 py-3 text-gray-700 hover:text-blue-500 hover:bg-gray-50 transition-colors text-left"
            >
              Business
            </a>
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={`px-6 py-3 hover:text-blue-500 hover:bg-gray-50 transition-colors text-left font-medium ${pathname.startsWith('/blog') ? 'text-blue-500' : 'text-gray-700'}`}
            >
              Blog
            </Link>
            <a
              href={isHome ? '#contact' : '/#contact'}
              onClick={(e) => { handleSmoothScroll(e, 'contact'); setIsMenuOpen(false); }}
              className="px-6 py-3 text-gray-700 hover:text-blue-500 hover:bg-gray-50 transition-colors text-left"
            >
              Reach Us
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;