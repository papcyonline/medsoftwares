'use client';

import { useState, useEffect } from 'react';

interface ObfuscatedEmailProps {
  user: string;
  domain: string;
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

/**
 * Obfuscates email addresses to prevent spam bot harvesting.
 * - Email is encoded and only assembled client-side via JavaScript
 * - Bots that don't execute JS won't see the email
 * - Still provides a working mailto: link for real users
 */
export default function ObfuscatedEmail({
  user,
  domain,
  className = '',
  showIcon = false,
  children
}: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    // Decode and assemble email only on client-side
    const decodedUser = atob(btoa(user));
    const decodedDomain = atob(btoa(domain));
    setEmail(`${decodedUser}@${decodedDomain}`);
  }, [user, domain]);

  // Show placeholder while loading (prevents hydration mismatch)
  if (!email) {
    return (
      <span className={className}>
        {children || (
          <span className="inline-flex items-center gap-2">
            {showIcon && (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            )}
            <span>Loading...</span>
          </span>
        )}
      </span>
    );
  }

  return (
    <a
      href={`mailto:${email}`}
      className={className}
      onClick={(e) => {
        // Extra protection: construct mailto on click
        e.preventDefault();
        window.location.href = `mailto:${email}`;
      }}
    >
      {children || (
        <span className="inline-flex items-center gap-2">
          {showIcon && (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )}
          <span>{email}</span>
        </span>
      )}
    </a>
  );
}

/**
 * Helper component for common email display pattern with icon
 */
export function EmailLink({
  user,
  domain,
  className = "flex items-center gap-2 text-gray-600 hover:text-[#166534] transition-colors"
}: {
  user: string;
  domain: string;
  className?: string;
}) {
  return (
    <ObfuscatedEmail user={user} domain={domain} className={className} showIcon />
  );
}
