"use client";

import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';

export default function AnalyticsProvider() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check consent status
    const consent = localStorage.getItem("vercel-analytics-consent");
    setHasConsent(consent === "accepted");

    // Listen for consent changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "vercel-analytics-consent") {
        setHasConsent(e.newValue === "accepted");
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Only render Analytics if user has consented
  return hasConsent ? <Analytics /> : null;
} 