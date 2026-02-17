import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Check,
  Sparkles,
  Lock,
  Eye,
  Zap,
  Users,
  FileText,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white overflow-hidden">
      {/* Grain overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-50">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"/>
        </svg>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-[#0C0C0C]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-black" />
            </div>
            <span className="font-semibold text-lg tracking-tight">ClientShell</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-white/60 hover:text-white transition">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-white/60 hover:text-white transition">
              Pricing
            </Link>
            <Link href="/login" className="text-sm text-white/60 hover:text-white transition">
              Login
            </Link>
          </nav>
          <Link href="/signup">
            <Button className="bg-white text-black hover:bg-white/90 font-medium">
              Start Free
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[128px]" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <Badge className="mb-6 bg-white/5 border-white/10 text-amber-400 hover:bg-white/10">
            <Zap className="w-3 h-3 mr-1" /> Setup in 30 minutes
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Your 10-person firm.
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              100-person presence.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop sending clients Google Drive links. Give them a branded portal 
            that makes you look like you have a whole IT department.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-semibold px-8 h-14 text-lg">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 h-14 px-8 text-lg">
                See it in action
              </Button>
            </Link>
          </div>
        </div>

        {/* Portal Preview */}
        <div className="mt-20 max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent z-10 pointer-events-none" />
          
          <div className="rounded-2xl border border-white/10 bg-[#111111] overflow-hidden shadow-2xl shadow-black/50">
            {/* Browser chrome */}
            <div className="bg-[#1A1A1A] px-4 py-3 flex items-center gap-3 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-[#0C0C0C] rounded-lg px-4 py-1.5 text-sm text-white/40 font-mono">
                  portal.acmeconsulting.com
                </div>
              </div>
            </div>
            
            {/* Portal content */}
            <div className="p-8 bg-gradient-to-br from-[#0F0F0F] to-[#141414]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl" />
                  <div>
                    <h3 className="font-semibold text-white">ACME Consulting</h3>
                    <p className="text-sm text-white/40">Welcome back, Sarah</p>
                  </div>
                </div>
                <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                  3 updates
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-5 border border-white/5 hover:border-white/10 transition group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-white">Q4 Strategy Review</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-400">In Review</span>
                  </div>
                  <p className="text-sm text-white/40 mb-3">Final recommendations deck</p>
                  <div className="flex items-center gap-2 text-xs text-white/30">
                    <FileText className="w-3.5 h-3.5" />
                    <span>3 documents</span>
                    <span className="text-amber-400">• 1 unread</span>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-5 border border-white/5 hover:border-white/10 transition group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-white">2025 Roadmap</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60">Draft</span>
                  </div>
                  <p className="text-sm text-white/40 mb-3">Initial planning phase</p>
                  <div className="flex items-center gap-2 text-xs text-white/30">
                    <FileText className="w-3.5 h-3.5" />
                    <span>1 document</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-white/40 text-sm">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Your domain, your brand</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Setup wizard included</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
        
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-amber-400 font-medium mb-4 tracking-wide uppercase text-sm">Why ClientShell</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Everything your firm needs
              <br />
              <span className="text-white/40">to look world-class</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Sparkles,
                title: "White-Label Everything",
                desc: "Your logo. Your colors. Your subdomain. Clients never see 'ClientShell' anywhere — it's YOUR portal.",
                accent: "from-amber-400 to-orange-500"
              },
              {
                icon: Zap,
                title: "30-Minute Setup",
                desc: "Our wizard walks you through branding, domain setup, and your first project. Most firms are live before lunch.",
                accent: "from-emerald-400 to-teal-500"
              },
              {
                icon: Eye,
                title: "Know When They Read It",
                desc: "Real-time activity tracking. See exactly when Sarah opened your proposal — and follow up at the perfect moment.",
                accent: "from-blue-400 to-indigo-500"
              },
              {
                icon: Lock,
                title: "Enterprise-Grade Security",
                desc: "Document expiry, download tracking, magic link auth. Built for compliance-conscious firms.",
                accent: "from-rose-400 to-pink-500"
              },
              {
                icon: Users,
                title: "Frictionless Client Access",
                desc: "One-click magic links. No 'create an account' awkwardness. Your clients just... get in.",
                accent: "from-violet-400 to-purple-500"
              },
              {
                icon: FileText,
                title: "Project Clarity",
                desc: "Kanban-style status boards. Your clients always know exactly where their project stands.",
                accent: "from-cyan-400 to-sky-500"
              },
            ].map(({ icon: Icon, title, desc, accent }) => (
              <div 
                key={title}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                <p className="text-white/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 font-medium mb-4 tracking-wide uppercase text-sm">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Start free. Scale when ready.
            </h2>
            <p className="text-white/40 text-lg">14-day trial. No credit card. Cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="font-semibold text-lg mb-1">Starter</h3>
              <div className="text-4xl font-bold mb-6">
                $49<span className="text-lg font-normal text-white/40">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 text-white/60">
                {["10 clients", "1 team member", "Custom subdomain", "Document sharing", "Email support"].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5">
                Start Trial
              </Button>
            </div>

            {/* Pro */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-amber-500/10 to-orange-500/5 border-2 border-amber-500/30 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-medium border-0">
                  Most Popular
                </Badge>
              </div>
              <h3 className="font-semibold text-lg mb-1">Pro</h3>
              <div className="text-4xl font-bold mb-6">
                $99<span className="text-lg font-normal text-white/40">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 text-white/60">
                {["50 clients", "5 team members", "Custom domain", "Activity tracking", "Priority support", "Remove branding"].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-semibold">
                Start Trial
              </Button>
            </div>

            {/* Agency */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="font-semibold text-lg mb-1">Agency</h3>
              <div className="text-4xl font-bold mb-6">
                $199<span className="text-lg font-normal text-white/40">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 text-white/60">
                {["Unlimited clients", "Unlimited team", "White-glove setup", "API access", "Dedicated support"].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent" />
        
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to look enterprise?
          </h2>
          <p className="text-xl text-white/50 mb-10">
            Join 500+ firms who stopped looking scrappy.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold px-10 h-14 text-lg">
              Start Your Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-black" />
            </div>
            <span className="font-semibold">ClientShell</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-white/40">
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
          <p className="text-sm text-white/30">© 2026 ClientShell</p>
        </div>
      </footer>
    </div>
  );
}
