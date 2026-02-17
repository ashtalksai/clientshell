import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Clock,
  Eye,
  Users,
  FileText,
  ArrowRight,
  Check,
  Building2,
  Briefcase,
  Scale,
  Megaphone,
  Calculator,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">ClientShell</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
              Pricing
            </Link>
            <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition">
              Login
            </Link>
          </nav>
          <Link href="/signup">
            <Button>Start Free Trial</Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Setup in under 30 minutes
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Look enterprise in{" "}
            <span className="text-[#1E3A5F]">under 30 minutes</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your clients deserve a portal, not a Google Drive link. White-label
            client communication that makes your 10-person firm look like a 100-person operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Browser Mockup */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="border rounded-xl shadow-2xl overflow-hidden bg-white">
            <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white rounded-md px-4 py-1 text-sm text-muted-foreground font-mono border">
                  portal.smithcpa.com
                </div>
              </div>
            </div>
            <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1E3A5F] rounded-lg" />
                <span className="font-semibold text-lg">Smith & Associates</span>
              </div>
              <p className="text-muted-foreground mb-4">Welcome back, Sarah</p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Q4 Tax Filing</span>
                    <Badge className="bg-blue-100 text-blue-700">In Progress</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">3 documents · 1 unread</p>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">2024 Audit Prep</span>
                    <Badge variant="outline">Not Started</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">1 document</p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span>Setup in &lt;30 min</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span>Custom subdomain</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span>Your logo + colors</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span>No coding required</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to look professional
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stop losing deals because your document handoff looks homemade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6">
              <Shield className="w-10 h-10 text-[#1E3A5F] mb-4" />
              <h3 className="font-semibold text-lg mb-2">White-Label Branding</h3>
              <p className="text-muted-foreground text-sm">
                Your logo, your colors, your subdomain. Clients never see &quot;ClientShell&quot; anywhere.
              </p>
            </Card>

            <Card className="p-6">
              <Clock className="w-10 h-10 text-[#1E3A5F] mb-4" />
              <h3 className="font-semibold text-lg mb-2">30-Minute Setup</h3>
              <p className="text-muted-foreground text-sm">
                Step-by-step branding wizard. Upload logo, pick colors, choose template. Done.
              </p>
            </Card>

            <Card className="p-6">
              <Eye className="w-10 h-10 text-[#1E3A5F] mb-4" />
              <h3 className="font-semibold text-lg mb-2">Activity Tracking</h3>
              <p className="text-muted-foreground text-sm">
                Know when your client reads your proposal. Close deals faster with engagement insights.
              </p>
            </Card>

            <Card className="p-6">
              <FileText className="w-10 h-10 text-[#1E3A5F] mb-4" />
              <h3 className="font-semibold text-lg mb-2">Secure Documents</h3>
              <p className="text-muted-foreground text-sm">
                Upload PDFs, set expiry dates, track downloads. Built for compliance-conscious firms.
              </p>
            </Card>

            <Card className="p-6">
              <Users className="w-10 h-10 text-[#1E3A5F] mb-4" />
              <h3 className="font-semibold text-lg mb-2">Client Invites</h3>
              <p className="text-muted-foreground text-sm">
                One-click magic link invites. No awkward &quot;create an account&quot; friction for clients.
              </p>
            </Card>

            <Card className="p-6">
              <Briefcase className="w-10 h-10 text-[#1E3A5F] mb-4" />
              <h3 className="font-semibold text-lg mb-2">Project Tracking</h3>
              <p className="text-muted-foreground text-sm">
                Kanban-style project status. Clients always know where things stand.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for your industry
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pre-configured templates with industry-specific terminology and workflows.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Shield, label: "Security", term: "Engagements" },
              { icon: Calculator, label: "Accounting", term: "Projects" },
              { icon: Scale, label: "Legal", term: "Matters" },
              { icon: Megaphone, label: "Marketing", term: "Campaigns" },
              { icon: Briefcase, label: "Consulting", term: "Projects" },
            ].map(({ icon: Icon, label, term }) => (
              <Card key={label} className="p-4 text-center hover:shadow-md transition cursor-pointer">
                <Icon className="w-8 h-8 mx-auto mb-2 text-[#1E3A5F]" />
                <p className="font-medium">{label}</p>
                <p className="text-xs text-muted-foreground">{term}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-muted-foreground">
              Start free, upgrade when you&apos;re ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="mb-4">
                <h3 className="font-bold text-lg">Starter</h3>
                <div className="text-3xl font-bold mt-2">
                  $49<span className="text-base font-normal text-muted-foreground">/mo</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" /> Up to 10 clients
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" /> 1 firm user
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" /> Custom subdomain
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" /> Document sharing
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </Card>

            <Card className="p-6 border-[#1E3A5F] border-2 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1E3A5F]">
                Most Popular
              </Badge>
              <div className="mb-4">
                <h3 className="font-bold text-lg">Pro</h3>
                <div className="text-3xl font-bold mt-2">
                  $99<span className="text-base font-normal text-muted-foreground">/mo</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" /> Up to 50 clients
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" /> 5 firm users
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" /> Custom domain
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" /> Activity tracking
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" /> Priority support
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </Card>

            <Card className="p-6">
              <div className="mb-4">
                <h3 className="font-bold text-lg">Agency</h3>
                <div className="text-3xl font-bold mt-2">
                  $199<span className="text-base font-normal text-muted-foreground">/mo</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" /> Unlimited clients
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" /> Unlimited users
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" /> White-glove onboarding
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" /> API access
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to look enterprise?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Start your 14-day free trial. No credit card required.
          </p>
          <Link href="/signup">
            <Button size="lg" className="gap-2">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#1E3A5F] rounded flex items-center justify-center">
                <Building2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">ClientShell</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-foreground transition">
                Contact
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ClientShell
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
