"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Shield, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AnalyticsConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("vercel-analytics-consent");
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => {
        setShowBanner(true);
        setIsVisible(true);
      }, 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("vercel-analytics-consent", "accepted");
    localStorage.setItem("vercel-analytics-consent-date", new Date().toISOString());
    
    // Enable Vercel Analytics
    if (typeof window !== "undefined" && window.va) {
      window.va("event", "consent_given");
    }
    
    closeBanner();
  };

  const handleDecline = () => {
    localStorage.setItem("vercel-analytics-consent", "declined");
    localStorage.setItem("vercel-analytics-consent-date", new Date().toISOString());
    
    // Disable Vercel Analytics
    if (typeof window !== "undefined" && window.va) {
      window.va = () => {}; // No-op function
    }
    
    closeBanner();
  };

  const closeBanner = () => {
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
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