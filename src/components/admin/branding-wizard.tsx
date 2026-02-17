"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LogoUploader } from "@/components/shared/logo-uploader";
import { ColorPicker } from "@/components/shared/color-picker";
import { TEMPLATES, type BrandingData } from "@/types";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Shield,
  Calculator,
  Scale,
  Megaphone,
  Briefcase,
  Building2,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

const TEMPLATE_ICONS = {
  security: Shield,
  accounting: Calculator,
  legal: Scale,
  marketing: Megaphone,
  consulting: Briefcase,
};

interface BrandingWizardProps {
  onComplete: (data: BrandingData) => void;
  initialData?: Partial<BrandingData>;
}

export function BrandingWizard({ onComplete, initialData }: BrandingWizardProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BrandingData>({
    name: initialData?.name || "",
    logoUrl: initialData?.logoUrl || null,
    primaryColor: initialData?.primaryColor || "#1E3A5F",
    subdomain: initialData?.subdomain || "",
    template: initialData?.template || "consulting",
  });
  const [subdomainAvailable, setSubdomainAvailable] = useState<boolean | null>(null);
  const [checkingSubdomain, setCheckingSubdomain] = useState(false);

  const totalSteps = 4;

  const updateData = (updates: Partial<BrandingData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  const checkSubdomainAvailability = async (subdomain: string) => {
    if (!subdomain || subdomain.length < 3) {
      setSubdomainAvailable(null);
      return;
    }
    setCheckingSubdomain(true);
    // Simulate API check
    await new Promise((resolve) => setTimeout(resolve, 500));
    // In production: const res = await fetch(`/api/check-subdomain?s=${subdomain}`);
    setSubdomainAvailable(!["test", "demo", "admin"].includes(subdomain.toLowerCase()));
    setCheckingSubdomain(false);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return data.name.trim().length >= 2;
      case 2:
        return true; // Logo is optional
      case 3:
        return data.subdomain.length >= 3 && subdomainAvailable === true;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onComplete(data);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <div className="text-sm font-medium">Setup Your Portal</div>
            <div className="text-sm text-muted-foreground">
              Step {step} of {totalSteps}
            </div>
          </div>
          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  i + 1 <= step ? "bg-[#1E3A5F]" : "bg-slate-200"
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-xl mx-auto">
          {/* Step 1: Firm Name */}
          {step === 1 && (
            <div className="animate-in space-y-6">
              <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  What&apos;s your firm called?
                </h1>
                <p className="text-muted-foreground">
                  This will appear in your portal header and client invites.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Firm Name</label>
                <Input
                  type="text"
                  value={data.name}
                  onChange={(e) => updateData({ name: e.target.value })}
                  placeholder="Smith & Associates"
                  className="text-lg"
                  autoFocus
                />
              </div>
            </div>
          )}

          {/* Step 2: Logo & Color */}
          {step === 2 && (
            <div className="animate-in space-y-6">
              <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  Make it yours
                </h1>
                <p className="text-muted-foreground">
                  Upload your logo and choose your brand color.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Logo</label>
                <LogoUploader
                  value={data.logoUrl}
                  onChange={(logoUrl) => updateData({ logoUrl })}
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Optional. We&apos;ll use your firm name if no logo is provided.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Brand Color</label>
                <ColorPicker
                  value={data.primaryColor}
                  onChange={(primaryColor) => updateData({ primaryColor })}
                />
              </div>
              {/* Live preview */}
              <div className="pt-4 border-t">
                <label className="block text-sm font-medium mb-3">Preview</label>
                <div
                  className="rounded-lg border p-4"
                  style={{ borderColor: data.primaryColor }}
                >
                  <div className="flex items-center gap-3">
                    {data.logoUrl ? (
                      <img
                        src={data.logoUrl}
                        alt="Logo"
                        className="h-10 w-10 object-contain"
                      />
                    ) : (
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: data.primaryColor }}
                      >
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                    )}
                    <span
                      className="font-semibold"
                      style={{ color: data.primaryColor }}
                    >
                      {data.name || "Your Firm"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Welcome back, Client
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Subdomain */}
          {step === 3 && (
            <div className="animate-in space-y-6">
              <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  Choose your portal address
                </h1>
                <p className="text-muted-foreground">
                  Where clients will access your portal.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subdomain</label>
                <div className="flex items-center">
                  <Input
                    type="text"
                    value={data.subdomain}
                    onChange={(e) => {
                      const val = e.target.value
                        .toLowerCase()
                        .replace(/[^a-z0-9-]/g, "");
                      updateData({ subdomain: val });
                      checkSubdomainAvailability(val);
                    }}
                    placeholder="smithcpa"
                    className="rounded-r-none font-mono"
                  />
                  <div className="px-4 py-2 bg-muted border border-l-0 rounded-r-md text-sm text-muted-foreground">
                    .ashketing.com
                  </div>
                </div>
                {data.subdomain.length >= 3 && (
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    {checkingSubdomain ? (
                      <span className="text-muted-foreground">Checking...</span>
                    ) : subdomainAvailable ? (
                      <>
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-green-600">Available!</span>
                      </>
                    ) : (
                      <span className="text-red-600">
                        This subdomain is taken. Try another.
                      </span>
                    )}
                  </div>
                )}
                {data.subdomain && subdomainAvailable && (
                  <p className="mt-3 text-sm text-muted-foreground flex items-center gap-1">
                    Your portal will be at{" "}
                    <span className="font-mono font-medium text-foreground">
                      {data.subdomain}.ashketing.com
                    </span>
                    <ExternalLink className="w-3 h-3" />
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Step 4: Template */}
          {step === 4 && (
            <div className="animate-in space-y-6">
              <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  Choose your industry
                </h1>
                <p className="text-muted-foreground">
                  We&apos;ll customize terminology and defaults for your vertical.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TEMPLATES.map((template) => {
                  const Icon =
                    TEMPLATE_ICONS[template.value as keyof typeof TEMPLATE_ICONS];
                  return (
                    <Card
                      key={template.value}
                      className={cn(
                        "p-4 cursor-pointer transition-all hover:shadow-md",
                        data.template === template.value
                          ? "ring-2 ring-[#1E3A5F] bg-slate-50"
                          : "hover:bg-slate-50/50"
                      )}
                      onClick={() =>
                        updateData({
                          template: template.value as BrandingData["template"],
                        })
                      }
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center",
                            data.template === template.value
                              ? "bg-[#1E3A5F] text-white"
                              : "bg-slate-100 text-slate-600"
                          )}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium">{template.label}</p>
                          <p className="text-xs text-muted-foreground">
                            Uses &quot;{template.projectLabel}&quot;
                          </p>
                        </div>
                        {data.template === template.value && (
                          <Check className="w-5 h-5 text-[#1E3A5F] ml-auto" />
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-xl mx-auto flex justify-end">
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="gap-2"
            >
              {step === totalSteps ? (
                <>
                  Launch Portal <Check className="w-4 h-4" />
                </>
              ) : (
                <>
                  Next Step <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
