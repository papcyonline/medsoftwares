'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Products',
      href: '/#products',
      dropdown: [
        {
          title: 'PharmaPOS',
          description: 'Pharmacy Management System',
          href: '/pharmapos',
          icon: 'pharmacy',
        },
        {
          title: 'Hospix',
          description: 'Hospital Management System',
          href: '/hospix',
          icon: 'hospital',
        },
      ],
    },
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'News', href: '/news' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Header Wrapper */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled ? 'px-0 pt-0' : 'px-2 sm:px-3 lg:px-4 pt-4'}
        `}
      >
        <nav
          className={`
            w-full
            flex items-center justify-between
            pl-2 pr-1.5 lg:pl-3 lg:pr-2 py-2
            bg-white/80 backdrop-blur-md
            border border-gray-200/50
            shadow-lg shadow-gray-900/5
            transition-all duration-300
            ${isScrolled
              ? 'bg-white/95 shadow-xl shadow-gray-900/10 rounded-none border-t-0 border-x-0 pl-4 pr-3 lg:pl-6 lg:pr-4'
              : 'rounded-[2rem]'
            }
          `}
        >
          {/* Logo Left */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.png"
              alt="MedSoftware Logo"
              width={40}
              height={40}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-heading font-extrabold text-gray-900 tracking-tight">
              MedSoftware
            </span>
          </Link>

          {/* Menu Middle - Desktop */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-1
                    px-4 py-2
                    text-sm font-medium text-gray-600
                    rounded-lg
                    transition-all duration-200
                    hover:text-gray-900 hover:bg-gray-100
                  `}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div
                    className={`
                      absolute top-full left-0 pt-2
                      transition-all duration-200
                      ${
                        activeDropdown === item.label
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                      }
                    `}
                  >
                    <div className="bg-white rounded-xl border border-gray-200 shadow-xl shadow-gray-900/10 p-2 min-w-[280px]">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-150"
                        >
                          <div
                            className={`
                              w-10 h-10 rounded-lg flex items-center justify-center
                              ${
                                dropdownItem.icon === 'pharmacy'
                                  ? 'bg-green-100 text-green-600'
                                  : 'bg-blue-100 text-blue-600'
                              }
                            `}
                          >
                            {dropdownItem.icon === 'pharmacy' ? (
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M12 4V20M4 12H20" strokeLinecap="round" />
                              </svg>
                            ) : (
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">
                              {dropdownItem.title}
                            </div>
                            <div className="text-xs text-gray-500">
                              {dropdownItem.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Book Demo Right - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="
                inline-flex items-center gap-2
                px-6 py-2.5
                bg-[#166534] text-white
                text-sm font-semibold
                rounded-full
                shadow-md shadow-green-900/20
                transition-all duration-200
                hover:bg-[#14532d] hover:shadow-lg hover:shadow-green-900/30
                hover:-translate-y-0.5
                group
              "
            >
              Book a Demo
              <ArrowOutwardIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`
                  block h-0.5 w-full bg-gray-600 rounded-full
                  transition-all duration-300 origin-center
                  ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}
                `}
              />
              <span
                className={`
                  block h-0.5 w-full bg-gray-600 rounded-full
                  transition-all duration-300
                  ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}
                `}
              />
              <span
                className={`
                  block h-0.5 w-full bg-gray-600 rounded-full
                  transition-all duration-300 origin-center
                  ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}
                `}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm z-40
          transition-opacity duration-300
          lg:hidden
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 w-[300px] max-w-[80vw]
          bg-white z-50
          transform transition-transform duration-300 ease-out
          lg:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="MedSoftware Logo"
              width={32}
              height={32}
            />
            <span className="text-lg font-heading font-extrabold text-gray-900">MedSoftware</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Items */}
        <nav className="p-4 overflow-y-auto h-[calc(100%-140px)]">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        )
                      }
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div
                      className={`
                        overflow-hidden transition-all duration-200
                        ${
                          activeDropdown === item.label
                            ? 'max-h-40 opacity-100'
                            : 'max-h-0 opacity-0'
                        }
                      `}
                    >
                      <div className="pl-4 py-2 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.title}
                            href={dropdownItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div
                              className={`
                                w-8 h-8 rounded-lg flex items-center justify-center
                                ${
                                  dropdownItem.icon === 'pharmacy'
                                    ? 'bg-green-100 text-green-600'
                                    : 'bg-blue-100 text-blue-600'
                                }
                              `}
                            >
                              {dropdownItem.icon === 'pharmacy' ? (
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path d="M12 4V20M4 12H20" strokeLinecap="round" />
                                </svg>
                              ) : (
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                                </svg>
                              )}
                            </div>
                            <span>{dropdownItem.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-white">
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="
              flex items-center justify-center gap-2
              w-full px-5 py-3
              bg-[#166534] text-white
              text-base font-semibold
              rounded-xl
              shadow-md shadow-green-900/20
              transition-all duration-200
              hover:bg-[#14532d]
            "
          >
            Book a Demo
            <ArrowOutwardIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
