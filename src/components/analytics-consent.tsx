"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Shield, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AnalyticsConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Refs to store timeout IDs for cleanup
  const showTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    
    const checkConsent = () => {
      try {
        // Check if user has already made a choice
        const consent = localStorage.getItem("vercel-analytics-consent");
        if (!consent && isMountedRef.current) {
          // Show banner after a short delay for better UX
          showTimeoutRef.current = setTimeout(() => {
            if (isMountedRef.current) {
              setShowBanner(true);
              setIsVisible(true);
            }
          }, 2000);
        }
      } catch (error) {
        // Handle localStorage access errors (e.g., in incognito mode)
        console.warn("Failed to access localStorage for analytics consent:", error);
      }
    };

    checkConsent();

    // Cleanup function
    return () => {
      isMountedRef.current = false;
      
      // Clear any pending timeouts
      if (showTimeoutRef.current) {
        clearTimeout(showTimeoutRef.current);
        showTimeoutRef.current = null;
      }
      
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
    };
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("vercel-analytics-consent", "accepted");
      localStorage.setItem("vercel-analytics-consent-date", new Date().toISOString());
      
      // Enable Vercel Analytics with error handling
      if (typeof window !== "undefined" && window.va && typeof window.va === "function") {
        try {
          window.va("event", "consent_given");
        } catch (error) {
          console.warn("Failed to send analytics event:", error);
        }
      }
    } catch (error) {
      console.warn("Failed to save analytics consent:", error);
    }
    
    closeBanner();
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("vercel-analytics-consent", "declined");
      localStorage.setItem("vercel-analytics-consent-date", new Date().toISOString());
      
      // Disable Vercel Analytics safely
      if (typeof window !== "undefined" && window.va) {
        try {
          window.va = () => {}; // No-op function
        } catch (error) {
          console.warn("Failed to disable analytics:", error);
        }
      }
    } catch (error) {
      console.warn("Failed to save analytics consent:", error);
    }
    
    closeBanner();
  };

  const closeBanner = () => {
    if (!isMountedRef.current) return;
    
    setIsVisible(false);
    
    // Clear any existing hide timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    
    hideTimeoutRef.current = setTimeout(() => {
      if (isMountedRef.current) {
        setShowBanner(false);
      }
      hideTimeoutRef.current = null;
    }, 300);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 pointer-events-none">
      <Card
        className={cn(
          "w-full max-w-md transition-all duration-300 ease-out pointer-events-auto",
          isVisible 
            ? "translate-y-0 opacity-100" 
            : "translate-y-full opacity-0"
        )}
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Analytics & Privacy</h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Shield className="w-3 h-3" />
                  <span>GDPR Compliant</span>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 -mt-1 -mr-1"
              onClick={handleDecline}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-3">
                I use <strong>Vercel Analytics</strong> to understand how visitors interact with my portfolio and improve your experience.
              </p>
              
              <div className="bg-muted/50 rounded-lg p-3 mb-3">
                <h4 className="font-medium text-foreground text-xs mb-2">What data is collected:</h4>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Page views and navigation patterns</li>
                  <li>• Device type and browser information</li>
                  <li>• Geographic location (country/region)</li>
                  <li>• No personal information or cookies</li>
                </ul>
              </div>

              <p className="text-xs">
                This data helps me understand which projects and content are most valuable to visitors like you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={handleAccept}
                className="flex-1 text-sm"
                size="sm"
              >
                Accept Analytics
              </Button>
              <Button
                onClick={handleDecline}
                variant="outline"
                className="flex-1 text-sm"
                size="sm"
              >
                Decline
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              You can change your preference anytime in your browser settings.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 