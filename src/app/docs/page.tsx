import Link from "next/link";
import { FileText, Target, Megaphone, Palette, Sparkles, ArrowRight, BookOpen } from "lucide-react";

const docs = [
  {
    title: "Research",
    description: "Market analysis, competitor landscape, and opportunity validation",
    href: "/docs/research",
    icon: BookOpen,
    gradient: "from-blue-500 to-indigo-600",
    stats: ["$4.2B market", "12% CAGR", "85 competitors analyzed"]
  },
  {
    title: "GTM Plan",
    description: "Go-to-market strategy, channels, and launch timeline",
    href: "/docs/gtm",
    icon: Target,
    gradient: "from-emerald-500 to-teal-600",
    stats: ["3 launch channels", "6-week runway", "5K target users"]
  },
  {
    title: "Marketing Plan",
    description: "Content strategy, distribution channels, and campaign copy",
    href: "/docs/marketing",
    icon: Megaphone,
    gradient: "from-amber-500 to-orange-600",
    stats: ["LinkedIn + Reddit + PH", "9 posts ready", "3 channels active"]
  },
  {
    title: "Brand Spec",
    description: "Visual identity, color palette, typography, and tone",
    href: "/docs/brand",
    icon: Palette,
    gradient: "from-rose-500 to-pink-600",
    stats: ["Dark theme", "Amber accent", "Professional tone"]
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      {/* Header */}
      <header className="border-b border-white/5 bg-[#0C0C0C]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-black" />
            </div>
            <span className="font-semibold text-lg tracking-tight">ClientShell</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-white/60 hover:text-white transition">Home</Link>
            <Link href="/docs" className="text-sm text-amber-400 font-medium">Docs</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <FileText className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-white/70">Project Documentation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            ClientShell
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Everything you need to understand the product — research, strategy, brand, and go-to-market plan.
          </p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {docs.map((doc) => {
              const Icon = doc.icon;
              return (
                <Link
                  key={doc.title}
                  href={doc.href}
                  className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300"
                >
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${doc.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${doc.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors">
                      {doc.title}
                    </h2>
                    
                    <p className="text-white/50 mb-6 leading-relaxed">
                      {doc.description}
                    </p>
                    
                    {/* Stats pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {doc.stats.map((stat) => (
                        <span
                          key={stat}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/60 border border-white/5"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-amber-400 font-medium text-sm">
                      <span>Read document</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-white/40">
          <p>© 2026 ClientShell</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/pitch" className="hover:text-white transition">Pitch Deck</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
