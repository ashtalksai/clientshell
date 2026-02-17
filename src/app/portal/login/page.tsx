"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, Mail, Loader2, Lock, ArrowRight, Shield } from "lucide-react";

// Mock firm data - in production, fetch from subdomain
const mockFirm = {
  name: "Smith & Associates",
  logoUrl: null,
  primaryColor: "#1E3A5F",
  subdomain: "smithcpa",
  tagline: "Professional accounting services for growing businesses",
};

export default function PortalLoginPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate magic link send
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSent(true);
  };

  // Inject brand colors as CSS variables
  const brandStyles = {
    "--brand-primary": mockFirm.primaryColor,
  } as React.CSSProperties;

  // Compute lighter brand color for backgrounds
  const brandLightBg = `${mockFirm.primaryColor}10`;

  return (
    <div
      style={brandStyles}
      className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white"
    >
      {/* Branded header accent */}
      <div
        className="h-1.5 w-full"
        style={{ backgroundColor: mockFirm.primaryColor }}
      />

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and firm name */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              {mockFirm.logoUrl ? (
                <img
                  src={mockFirm.logoUrl}
                  alt={mockFirm.name}
                  className="h-16 w-16 object-contain"
                />
              ) : (
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: mockFirm.primaryColor }}
                >
                  <Building2 className="w-8 h-8 text-white" />
                </div>
              )}
            </div>
            <h1
              className="text-2xl font-bold mb-2"
              style={{ color: mockFirm.primaryColor }}
            >
              {mockFirm.name}
            </h1>
            <p className="text-muted-foreground text-sm">Client Portal</p>
          </div>

          {/* Login card */}
          <Card className="p-6 shadow-lg">
            {!isSent ? (
              <>
                <div className="text-center mb-6">
                  <h2 className="text-lg font-semibold mb-1">Welcome back</h2>
                  <p className="text-sm text-muted-foreground">
                    Enter your email to access your secure portal
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2"
                    style={{ backgroundColor: mockFirm.primaryColor }}
                    disabled={isLoading || !email}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending link...
                      </>
                    ) : (
                      <>
                        Continue with Email
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Lock className="w-3 h-3" />
                    <span>Secure passwordless login via email</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: brandLightBg }}
                >
                  <Mail
                    className="w-8 h-8"
                    style={{ color: mockFirm.primaryColor }}
                  />
                </div>
                <h2 className="text-lg font-semibold mb-2">Check your email</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  We've sent a login link to
                  <br />
                  <span className="font-medium text-foreground">{email}</span>
                </p>
                <p className="text-xs text-muted-foreground mb-6">
                  Click the link in the email to access your portal.
                  <br />
                  The link expires in 15 minutes.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsSent(false);
                    setEmail("");
                  }}
                >
                  Use a different email
                </Button>
              </div>
            )}
          </Card>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              256-bit encryption
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              Secure document sharing
            </span>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground">
            This is a secure portal operated by {mockFirm.name}.
            <br />
            <span className="opacity-70">
              Powered by{" "}
              <a href="/" className="hover:underline">
                ClientShell
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
