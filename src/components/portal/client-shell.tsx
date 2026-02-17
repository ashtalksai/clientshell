"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  FileText,
  FolderKanban,
  MessageCircle,
  Building2,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface ClientPortalShellProps {
  firm: {
    name: string;
    logoUrl: string | null;
    primaryColor: string;
    accentColor?: string;
  };
  client: {
    name: string;
    email: string;
  };
  children: ReactNode;
}

const NAV_ITEMS = [
  { href: "/portal", icon: Home, label: "Home" },
  { href: "/portal/documents", icon: FileText, label: "Documents" },
  { href: "/portal/projects", icon: FolderKanban, label: "Projects" },
  { href: "/portal/messages", icon: MessageCircle, label: "Messages" },
];

export function ClientPortalShell({
  firm,
  client,
  children,
}: ClientPortalShellProps) {
  const pathname = usePathname();

  // Inject brand colors as CSS variables
  const brandStyles = {
    "--brand-primary": firm.primaryColor,
    "--brand-accent": firm.accentColor || firm.primaryColor,
  } as React.CSSProperties;

  return (
    <div style={brandStyles} className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header with branded top accent */}
      <header
        className="sticky top-0 z-50 bg-white border-b"
        style={{ borderTopWidth: "3px", borderTopColor: firm.primaryColor }}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/portal" className="flex items-center gap-3">
            {firm.logoUrl ? (
              <img
                src={firm.logoUrl}
                alt={firm.name}
                className="h-8 w-8 object-contain"
              />
            ) : (
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: firm.primaryColor }}
              >
                <Building2 className="w-5 h-5 text-white" />
              </div>
            )}
            <span
              className="font-semibold text-lg hidden sm:inline"
              style={{ color: firm.primaryColor }}
            >
              {firm.name}
            </span>
          </Link>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-6">
                <p className="text-sm text-muted-foreground px-2">
                  Signed in as {client.name}
                </p>
                <nav className="flex flex-col gap-1">
                  {NAV_ITEMS.map(({ href, icon: Icon, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                        pathname === href
                          ? "bg-slate-100 font-medium"
                          : "hover:bg-slate-50"
                      )}
                      style={
                        pathname === href
                          ? { color: firm.primaryColor }
                          : undefined
                      }
                    >
                      <Icon className="w-5 h-5" />
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop: client name */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{client.name}</span>
          </div>
        </div>
      </header>

      {/* Main content with sidebar on desktop */}
      <div className="flex-1 flex">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-64 bg-white border-r p-4">
          <nav className="space-y-1">
            {NAV_ITEMS.map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  pathname === href
                    ? "bg-slate-100 font-medium"
                    : "hover:bg-slate-50"
                )}
                style={
                  pathname === href ? { color: firm.primaryColor } : undefined
                }
              >
                <Icon className="w-5 h-5" />
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t">
            <p className="text-xs text-muted-foreground px-4">Signed in as</p>
            <p className="text-sm font-medium px-4 mt-1">{client.name}</p>
            <p className="text-xs text-muted-foreground px-4">{client.email}</p>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 pb-20 lg:pb-0">{children}</main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t safe-area-inset-bottom">
        <div className="grid grid-cols-4">
          {NAV_ITEMS.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center gap-1 py-3 text-xs transition-colors",
                pathname === href
                  ? "font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
              style={
                pathname === href ? { color: firm.primaryColor } : undefined
              }
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Footer (desktop only) */}
      <footer className="hidden lg:block border-t bg-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between text-xs text-muted-foreground">
          <p>Secure document sharing</p>
          <p>🔒 SSL encrypted</p>
        </div>
      </footer>
    </div>
  );
}
