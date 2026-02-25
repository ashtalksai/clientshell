import Link from "next/link";
import { ArrowLeft, Palette, Sparkles, Type, Square, Sun, Moon, CheckCircle2 } from "lucide-react";

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      {/* Header */}
      <header className="border-b border-white/5 bg-[#0C0C0C]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/docs" className="flex items-center gap-2 text-white/60 hover:text-white transition">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Docs</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-black" />
            </div>
            <span className="font-semibold">ClientShell</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4">
            <Palette className="w-4 h-4 text-rose-400" />
            <span className="text-sm text-rose-400 font-medium">Brand Specification</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Brand Guidelines
          </h1>
          <p className="text-xl text-white/50">
            Visual identity, color palette, typography, and tone for ClientShell.
          </p>
        </div>

        {/* Logo */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold">Logo</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl bg-[#0C0C0C] border border-white/10 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                <Sparkles className="w-9 h-9 text-black" />
              </div>
              <p className="text-sm text-white/40">Primary — Dark Background</p>
            </div>
            <div className="p-8 rounded-xl bg-white flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                <Sparkles className="w-9 h-9 text-black" />
              </div>
              <p className="text-sm text-neutral-500">Primary — Light Background</p>
            </div>
          </div>
          
          <div className="mt-6 p-5 rounded-xl bg-white/[0.02] border border-white/5">
            <h3 className="font-semibold text-white mb-3">Logo Usage</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Minimum size: 32px for digital, 10mm for print</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Clear space: 50% of logo width on all sides</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Never rotate, stretch, or apply effects to the logo</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Colors */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
              <Square className="w-5 h-5 text-violet-400" />
            </div>
            <h2 className="text-2xl font-bold">Color Palette</h2>
          </div>
          
          {/* Primary Colors */}
          <div className="mb-8">
            <h3 className="text-sm text-white/50 uppercase tracking-wider mb-4">Primary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Amber 400", hex: "#FBBF24", class: "bg-amber-400" },
                { name: "Amber 500", hex: "#F59E0B", class: "bg-amber-500" },
                { name: "Orange 500", hex: "#F97316", class: "bg-orange-500" },
                { name: "Orange 600", hex: "#EA580C", class: "bg-orange-600" },
              ].map((color) => (
                <div key={color.hex} className="text-center">
                  <div className={`h-20 rounded-xl ${color.class} mb-3`} />
                  <p className="text-sm font-medium text-white">{color.name}</p>
                  <p className="text-xs text-white/40 font-mono">{color.hex}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Background Colors */}
          <div className="mb-8">
            <h3 className="text-sm text-white/50 uppercase tracking-wider mb-4">Backgrounds</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Background", hex: "#0C0C0C", class: "bg-[#0C0C0C] border border-white/10" },
                { name: "Surface", hex: "#111111", class: "bg-[#111111] border border-white/10" },
                { name: "Elevated", hex: "#1A1A1A", class: "bg-[#1A1A1A] border border-white/10" },
                { name: "White/5", hex: "rgba(255,255,255,0.05)", class: "bg-white/5 border border-white/10" },
              ].map((color) => (
                <div key={color.name} className="text-center">
                  <div className={`h-20 rounded-xl ${color.class} mb-3`} />
                  <p className="text-sm font-medium text-white">{color.name}</p>
                  <p className="text-xs text-white/40 font-mono">{color.hex}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Semantic Colors */}
          <div>
            <h3 className="text-sm text-white/50 uppercase tracking-wider mb-4">Semantic</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Success", hex: "#10B981", class: "bg-emerald-500" },
                { name: "Warning", hex: "#F59E0B", class: "bg-amber-500" },
                { name: "Error", hex: "#EF4444", class: "bg-red-500" },
                { name: "Info", hex: "#3B82F6", class: "bg-blue-500" },
              ].map((color) => (
                <div key={color.hex} className="text-center">
                  <div className={`h-20 rounded-xl ${color.class} mb-3`} />
                  <p className="text-sm font-medium text-white">{color.name}</p>
                  <p className="text-xs text-white/40 font-mono">{color.hex}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
              <Type className="w-5 h-5 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold">Typography</h2>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-white/50">Primary Font</span>
                <span className="text-xs px-2 py-1 rounded bg-white/5 text-white/60 font-mono">Geist Sans</span>
              </div>
              <p className="text-4xl font-bold tracking-tight">The quick brown fox jumps</p>
              <p className="text-lg text-white/60 mt-2">Used for all UI text, headings, and body copy.</p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-white/50">Monospace</span>
                <span className="text-xs px-2 py-1 rounded bg-white/5 text-white/60 font-mono">Geist Mono</span>
              </div>
              <p className="text-2xl font-mono">portal.yourfirm.com</p>
              <p className="text-lg text-white/60 mt-2">Used for URLs, code, and technical content.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-5xl font-bold mb-2">Aa</p>
                <p className="text-sm text-white/50">Display — 48-72px, Bold</p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-2xl font-semibold mb-2">Heading</p>
                <p className="text-sm text-white/50">Heading — 24-32px, Semibold</p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-base mb-2">Body text for readability</p>
                <p className="text-sm text-white/50">Body — 16px, Regular</p>
              </div>
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-sm text-white/60 mb-2">Caption and labels</p>
                <p className="text-sm text-white/50">Caption — 12-14px, Medium</p>
              </div>
            </div>
          </div>
        </section>

        {/* Theme Modes */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
              <Moon className="w-5 h-5 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold">Theme Mode</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#0C0C0C] border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Moon className="w-5 h-5 text-white/60" />
                <span className="font-medium text-white">Dark Mode (Default)</span>
              </div>
              <p className="text-sm text-white/50">Primary mode for ClientShell. Deep blacks with amber/orange accents convey professionalism and modern enterprise aesthetics.</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-neutral-200">
              <div className="flex items-center gap-2 mb-4">
                <Sun className="w-5 h-5 text-neutral-600" />
                <span className="font-medium text-neutral-900">Light Mode (Client Portal)</span>
              </div>
              <p className="text-sm text-neutral-500">Used in white-labeled client portals. Adapts to the firm&apos;s brand colors with light backgrounds for document-focused interfaces.</p>
            </div>
          </div>
        </section>

        {/* Voice & Tone */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <Type className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold">Voice & Tone</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h3 className="font-semibold text-white mb-4">We Are</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span><strong className="text-white">Professional</strong> — We respect our users&apos; time</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span><strong className="text-white">Direct</strong> — No fluff or jargon</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span><strong className="text-white">Empathetic</strong> — We understand small firm struggles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span><strong className="text-white">Confident</strong> — We know our product works</span>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h3 className="font-semibold text-white mb-4">We Are Not</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-red-400/50" />
                  <span><strong className="text-white/50">Cute</strong> — No puns, emojis in UI copy</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-red-400/50" />
                  <span><strong className="text-white/50">Pushy</strong> — No dark patterns or urgency tactics</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-red-400/50" />
                  <span><strong className="text-white/50">Casual</strong> — No slang or overly friendly tone</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-red-400/50" />
                  <span><strong className="text-white/50">Enterprise-y</strong> — No &quot;leverage synergies&quot;</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <p className="text-amber-300 italic">
              &quot;Write like you&apos;re explaining to a smart friend who runs their own consulting practice. 
              They don&apos;t have time for fluff, but they appreciate when you understand their problems.&quot;
            </p>
          </div>
        </section>

        {/* CSS Variables */}
        <section className="p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/5 border border-violet-500/20">
          <h2 className="text-2xl font-bold mb-6">CSS Variables Reference</h2>
          <div className="bg-black/30 rounded-xl p-5 overflow-x-auto">
            <pre className="text-sm text-white/80 font-mono">
{`:root {
  /* Brand - White-label overridable */
  --brand-primary: #1E3A5F;
  --brand-accent: #3B82F6;
  
  /* Core palette */
  --background: #0C0C0C;
  --foreground: #FFFFFF;
  --surface: #111111;
  --border: rgba(255, 255, 255, 0.05);
  
  /* Accent gradient */
  --accent-amber: #FBBF24;
  --accent-orange: #F97316;
}`}
            </pre>
          </div>
          <p className="text-sm text-white/50 mt-4">
            The <code className="bg-white/5 px-1.5 py-0.5 rounded">--brand-primary</code> and <code className="bg-white/5 px-1.5 py-0.5 rounded">--brand-accent</code> 
            variables are dynamically overridden per firm in the client portal.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-white/40">
          <Link href="/docs/marketing" className="hover:text-white transition">← Marketing Plan</Link>
          <Link href="/docs" className="hover:text-white transition">Back to Docs Index</Link>
        </div>
      </footer>
    </div>
  );
}
