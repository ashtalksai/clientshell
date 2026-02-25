import Link from "next/link";
import { ArrowLeft, Megaphone, Sparkles, Linkedin, MessageCircle, Rocket, Copy, CheckCircle2 } from "lucide-react";

export default function MarketingPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
            <Megaphone className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-400 font-medium">Marketing Plan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Marketing Copy & Assets
          </h1>
          <p className="text-xl text-white/50">
            Ready-to-post content for LinkedIn, Reddit, and Product Hunt launch.
          </p>
        </div>

        {/* LinkedIn Posts */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <Linkedin className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold">LinkedIn Posts</h2>
          </div>
          
          <div className="space-y-6">
            {/* Post 1 */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">Day 1 — Pain Hook</span>
                <button className="text-xs text-white/40 hover:text-white flex items-center gap-1 transition">
                  <Copy className="w-3 h-3" />
                  Copy
                </button>
              </div>
              <div className="text-white/80 leading-relaxed space-y-4 text-sm font-mono bg-white/5 p-4 rounded-lg">
                <p>Your accounting firm bills $200/hr.</p>
                <p>Your client portal is a Google Drive link.</p>
                <p>That mismatch costs you 6-figure deals. Not because you can&apos;t do the work — because the client doesn&apos;t feel safe handing over a major engagement to someone who sends files like a student sharing notes.</p>
                <p>Enterprise clients expect enterprise infrastructure. They&apos;re paying for the experience of working with you — not just your talent.</p>
                <p>That&apos;s why I built ClientShell — white-label client portal, setup in under 30 minutes.</p>
                <p>Your logo. Your colors. Your domain. Not &quot;Powered by whatever.&quot;</p>
                <p>Try it free → [link]</p>
              </div>
            </div>

            {/* Post 2 */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400">Day 3 — Contrast/Proof</span>
                <button className="text-xs text-white/40 hover:text-white flex items-center gap-1 transition">
                  <Copy className="w-3 h-3" />
                  Copy
                </button>
              </div>
              <div className="text-white/80 leading-relaxed space-y-4 text-sm font-mono bg-white/5 p-4 rounded-lg">
                <p>The security firm billed $250/hr.</p>
                <p>The client chose the competitor.</p>
                <p>Reason given: &quot;They seemed more organized.&quot;</p>
                <p>The competitor had a branded client portal. A custom domain. Your proposal lived in Dropbox.</p>
                <p>ClientShell fixes this. Sub-30-min setup. White-labeled. Your branding everywhere.</p>
                <p>5 vertical templates: security, accounting, legal, consulting, marketing.</p>
                <p>→ clientshell.ashketing.com</p>
              </div>
            </div>

            {/* Post 3 */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2 py-1 rounded-full bg-violet-500/20 text-violet-400">Day 5 — Feature Demo</span>
                <button className="text-xs text-white/40 hover:text-white flex items-center gap-1 transition">
                  <Copy className="w-3 h-3" />
                  Copy
                </button>
              </div>
              <div className="text-white/80 leading-relaxed space-y-4 text-sm font-mono bg-white/5 p-4 rounded-lg">
                <p>What your clients see when you use ClientShell:</p>
                <p>✓ portal.yourfirm.com (not a generic SaaS URL)</p>
                <p>✓ Your logo + colors — feels like YOUR product</p>
                <p>✓ Secure document sharing with expiry dates</p>
                <p>✓ Project status in plain language</p>
                <p>✓ Activity log: know when clients open your proposals (close the deal)</p>
                <p>Setup: 30 minutes. Free trial, no credit card.</p>
                <p>→ clientshell.ashketing.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reddit Posts */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-orange-400" />
            </div>
            <h2 className="text-2xl font-bold">Reddit Posts</h2>
          </div>
          
          <div className="space-y-6">
            {/* r/consulting */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-400">r/consulting</span>
              </div>
              <p className="font-semibold text-white mb-3">How I stopped losing deals to competitors with shinier infrastructure</p>
              <div className="text-white/70 leading-relaxed space-y-3 text-sm">
                <p>The work was identical. The competitor won anyway.</p>
                <p>I&apos;ve talked to dozens of independent consultants and small firm owners who&apos;ve had this experience. You deliver better outcomes. You have more experience. But the client went with someone else, and the feedback was vague: &quot;we felt they were more aligned&quot; or &quot;they seemed more organized.&quot;</p>
                <p>Nine times out of ten, it&apos;s the presentation layer. The client portal. The way deliverables are handed off. A Google Drive link vs. a branded portal at portal.firmname.com with their logo and your color scheme.</p>
                <p>Perception drives decisions, especially in professional services where the client can&apos;t fully evaluate expertise upfront.</p>
                <p className="text-white/50 italic">I built something to solve exactly this — white-label client portal for small firms (5-20 people), setup in under 30 minutes. Happy to share in comments if anyone wants to check it out.</p>
              </div>
            </div>

            {/* r/Accounting */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400">r/Accounting</span>
              </div>
              <p className="font-semibold text-white mb-3">Built a white-label client portal for small accounting firms — setup in 30 min</p>
              <div className="text-white/70 leading-relaxed space-y-3 text-sm">
                <p>Hey r/Accounting,</p>
                <p>Was talking to a few CPAs who mentioned the same problem: they send deliverables via Google Drive or Dropbox, clients get confused, and it doesn&apos;t exactly scream &quot;enterprise-grade firm&quot; when you&apos;re trying to win bigger engagements.</p>
                <p>Built a tool specifically for this — ClientShell. White-label client portal, 30 min setup:</p>
                <ul className="list-disc list-inside space-y-1 text-white/60">
                  <li>Your logo + colors, custom subdomain (portal.yourfirm.com)</li>
                  <li>Secure document sharing with expiry dates (useful for compliance)</li>
                  <li>Project status tracker (clients always know where things stand)</li>
                  <li>Activity log: you see when clients open your proposals/reports</li>
                  <li>5 templates incl. accounting-specific one (uses &quot;Engagements&quot; not &quot;Projects&quot;)</li>
                </ul>
                <p className="text-white/50 italic">Free trial, no credit card. Link in comments.</p>
              </div>
            </div>

            {/* r/smallbusiness */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">r/smallbusiness</span>
              </div>
              <p className="font-semibold text-white mb-3">If your clients are getting Google Drive links, you&apos;re leaving money on the table</p>
              <div className="text-white/70 leading-relaxed space-y-3 text-sm">
                <p>Not a rant, just an observation.</p>
                <p>Small firms lose larger contracts because the infrastructure looks small. The work is the same, often better. But enterprise buyers look for signals that you can handle their complexity — and a shared folder link isn&apos;t one of them.</p>
                <p>Spent 3 months building ClientShell specifically for this gap: white-label client portal that takes 30 minutes to set up. Your logo, your colors, your subdomain. Clients get a proper portal experience, you get an activity log showing who opened what and when.</p>
                <p>Pricing is $49-199/mo (much cheaper than losing one contract over optics). Free trial available.</p>
                <p className="text-white/50 italic">Happy to answer questions — or just hear if this is actually a problem others have had.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Hunt */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-rose-400" />
            </div>
            <h2 className="text-2xl font-bold">Product Hunt Launch</h2>
          </div>
          
          <div className="space-y-6">
            {/* Tagline */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs px-2 py-1 rounded-full bg-rose-500/20 text-rose-400 mb-4 inline-block">Tagline (under 60 chars)</span>
              <p className="text-xl font-semibold text-white">
                White-label client portal for small firms — 30 min setup
              </p>
            </div>

            {/* Description */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-400 mb-4 inline-block">Description</span>
              <div className="text-white/70 leading-relaxed space-y-4 text-sm">
                <p>Small professional services firms lose 6-figure contracts not because of bad work — but because their client communication looks homemade. Security consultants billing $250/hr are sending Google Drive links.</p>
                <p><strong className="text-white">ClientShell fixes this.</strong> White-label client portal setup in under 30 minutes:</p>
                <ul className="space-y-2">
                  {[
                    "Custom subdomain (portal.yourfirm.com)",
                    "Your logo + brand colors injected dynamically — clients never see \"ClientShell\"",
                    "Secure document sharing with expiry dates (compliance-ready)",
                    "Project status tracker with 5 vertical templates (accounting, legal, security, consulting, marketing)",
                    "Activity log: know when clients open your proposals — close the deal"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>Built for firms of 5-20 people who are good at their work but losing to competitors with shinier infrastructure.</p>
                <p className="text-white/50">Pricing: Free trial → Starter $49/mo → Pro $99/mo → Agency $199/mo</p>
              </div>
            </div>

            {/* Maker Comment */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/5 border border-rose-500/20">
              <span className="text-xs px-2 py-1 rounded-full bg-rose-500/20 text-rose-400 mb-4 inline-block">First Maker Comment</span>
              <div className="text-white/80 leading-relaxed space-y-4 text-sm">
                <p>Hey PH! 👋</p>
                <p>I built ClientShell after watching a friend&apos;s security consulting firm lose a $180K engagement to a competitor. The feedback? &quot;They seemed more put-together.&quot;</p>
                <p>My friend&apos;s firm had more experience. Better case studies. The competitor had a branded client portal. That&apos;s it.</p>
                <p>Professional services buyers can&apos;t always evaluate expertise — so they fall back on signals. Infrastructure is a signal.</p>
                <p>The problem is, existing client portal tools (Clinked, SuiteDash, Copilot) are either generic or require a developer to white-label. ClientShell is built for the firm owner who needs this solved in an afternoon, not a month.</p>
                <p><strong className="text-white">Key things I&apos;m proud of:</strong></p>
                <ol className="list-decimal list-inside space-y-1 text-white/70">
                  <li>White-label via CSS custom properties — client sees zero trace of the platform name</li>
                  <li>Vertical templates — accounting firms say &quot;Engagements&quot;, legal says &quot;Matters&quot;, not the same generic &quot;Projects&quot; for everyone</li>
                  <li>Activity log is the wow moment — &quot;Your client just read your proposal&quot; closes deals</li>
                </ol>
                <p className="text-white/50 italic">Happy to answer anything. Free trial, no card required.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Assets Checklist */}
        <section className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20">
          <h2 className="text-2xl font-bold mb-6">Visual Assets Needed</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Hero image (portal dashboard)", status: "done" },
              { name: "Branding wizard screenshot", status: "done" },
              { name: "Before/after comparison", status: "done" },
              { name: "Social cards (Twitter/LinkedIn)", status: "done" },
              { name: "Demo GIF (setup flow)", status: "pending" },
              { name: "Feature screenshots (3)", status: "pending" },
            ].map((asset) => (
              <div key={asset.name} className="flex items-center gap-3 p-3 rounded-lg bg-black/20">
                {asset.status === "done" ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-white/20" />
                )}
                <span className={asset.status === "done" ? "text-white" : "text-white/50"}>
                  {asset.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-white/40">
          <Link href="/docs/gtm" className="hover:text-white transition">← GTM Plan</Link>
          <Link href="/docs/brand" className="hover:text-white transition">Brand Spec →</Link>
        </div>
      </footer>
    </div>
  );
}
