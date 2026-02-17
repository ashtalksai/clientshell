"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { LogoUploader } from "@/components/shared/logo-uploader";
import { ColorPicker } from "@/components/shared/color-picker";
import { Building2, Palette, Globe, CreditCard, Users, LogOut } from "lucide-react";

export default function SettingsPage() {
  const [firmName, setFirmName] = useState("Smith & Associates");
  const [subdomain, setSubdomain] = useState("smithcpa");
  const [logo, setLogo] = useState<string | null>(null);
  const [primaryColor, setPrimaryColor] = useState("#1E3A5F");

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Firm Info */}
      <Card className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="w-5 h-5 text-muted-foreground" />
          <h2 className="font-semibold">Firm Information</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1.5">Firm Name</label>
            <Input value={firmName} onChange={(e) => setFirmName(e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1.5">Logo</label>
            <LogoUploader value={logo} onChange={setLogo} />
          </div>
        </div>
      </Card>

      {/* Branding */}
      <Card className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Palette className="w-5 h-5 text-muted-foreground" />
          <h2 className="font-semibold">Branding</h2>
        </div>
        <div>
          <label className="text-sm font-medium block mb-2">Primary Color</label>
          <ColorPicker value={primaryColor} onChange={setPrimaryColor} />
        </div>
      </Card>

      {/* Domain */}
      <Card className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="w-5 h-5 text-muted-foreground" />
          <h2 className="font-semibold">Portal URL</h2>
        </div>
        <div className="flex items-center">
          <Input
            value={subdomain}
            onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))}
            className="rounded-r-none font-mono"
          />
          <div className="px-4 py-2 bg-muted border border-l-0 rounded-r-md text-sm text-muted-foreground">
            .ashketing.com
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Clients access your portal at {subdomain}.ashketing.com
        </p>
      </Card>

      {/* Plan */}
      <Card className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <CreditCard className="w-5 h-5 text-muted-foreground" />
          <h2 className="font-semibold">Plan & Billing</h2>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <p className="font-medium">Starter</p>
              <Badge variant="secondary">$49/mo</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Up to 10 clients</p>
          </div>
          <Button variant="outline">Upgrade</Button>
        </div>
      </Card>

      {/* Team */}
      <Card className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-5 h-5 text-muted-foreground" />
          <h2 className="font-semibold">Team</h2>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">1 team member</p>
            <p className="text-sm text-muted-foreground">john@smithcpa.com</p>
          </div>
          <Button variant="outline" size="sm">Invite</Button>
        </div>
      </Card>

      <div className="flex gap-4">
        <Button className="flex-1">Save Changes</Button>
        <Button variant="outline" className="gap-2 text-red-600 hover:text-red-700">
          <LogOut className="w-4 h-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
