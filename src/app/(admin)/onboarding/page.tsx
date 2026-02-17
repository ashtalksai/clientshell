"use client";

import { useRouter } from "next/navigation";
import { BrandingWizard } from "@/components/admin/branding-wizard";
import type { BrandingData } from "@/types";

export default function OnboardingPage() {
  const router = useRouter();

  const handleComplete = async (data: BrandingData) => {
    // In production: POST to /api/firms/setup
    console.log("Firm setup complete:", data);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirect to dashboard
    router.push("/dashboard");
  };

  return <BrandingWizard onComplete={handleComplete} />;
}
