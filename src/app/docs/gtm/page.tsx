import Link from "next/link";
import { ArrowLeft, Target, Sparkles, Rocket, Users, Calendar, DollarSign, CheckCircle2, TrendingUp, Megaphone } from "lucide-react";

export default function GTMPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <Target className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">GTM Strategy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Go-To-Market Plan
          </h1>
          <p className="text-xl text-white/50">
            Launch strategy, distribution channels, and growth playbook for ClientShell.
          </p>
        </div>

        {/* Target Audience */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold">Target Audience</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Primary",
                segment: "Independent Consultants",
                desc: "Solo or 2-3 person consulting practices billing $150-300/hr. Currently using Google Drive.",
                color: "amber"
              },
              {
                title: "Secondary",
                segment: "Small Accounting Firms",
                desc: "5-15 employee CPA firms sharing tax documents and financial reports with clients.",
                color: "emerald"
              },
              {
                title: "Tertiary",
                segment: "Security Advisors",
                desc: "Boutique security consulting firms delivering compliance reports and assessments.",
                color: "blue"
              }
            ].map((audience) => (
              <div key={audience.title} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
                <span className={`text-xs font-semibold px-2 py-1 rounded bg-${audience.color}-500/20 text-${audience.color}-400`}>
                  {audience.title}
                </span>
                <h3 className="font-semibold text-white mt-4 mb-2">{audience.segment}</h3>
                <p className="text-sm text-white/60">{audience.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Distribution Channels */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
              <Megaphone className="w-5 h-5 text-violet-400" />
            </div>
            <h2 className="text-2xl font-bold">Distribution Channels</h2>
          </div>
          
          <div className="space-y-4">
            {/* Channel 1: LinkedIn */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white text-lg">LinkedIn Organic</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">Priority 1</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white/60 text-sm mb-3">Target: Accountants, lawyers, security consultants at 5-20 person firms.</p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>3 posts/week cadence</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Pain → solution → proof format</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>9 AM CET posting time</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-white/5 text-sm">
                  <p className="text-white/50 mb-2">Expected reach:</p>
                  <p className="text-2xl font-bold text-white">2K-8K</p>
                  <p className="text-white/40">impressions/post</p>
                </div>
              </div>
            </div>

            {/* Channel 2: Reddit */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white text-lg">Reddit Communities</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-400">Priority 2</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white/60 text-sm mb-3">Target subreddits with high professional services presence.</p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>r/consulting (850K members)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>r/Accounting (420K members)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>r/smallbusiness (1.2M members)</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-white/5 text-sm">
                  <p className="text-white/50 mb-2">Expected reach:</p>
                  <p className="text-2xl font-bold text-white">500-5K</p>
                  <p className="text-white/40">views/post</p>
                </div>
              </div>
            </div>

            {/* Channel 3: Product Hunt */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white text-lg">Product Hunt Launch</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-rose-500/20 text-rose-400">Launch Day</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white/60 text-sm mb-3">Spike launch for initial traction and social proof.</p>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Tuesday launch (best B2B day)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Maker story with founder narrative</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Feature screenshots + demo GIF</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-white/5 text-sm">
                  <p className="text-white/50 mb-2">Target upvotes:</p>
                  <p className="text-2xl font-bold text-white">100-500</p>
                  <p className="text-white/40">day-one upvotes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Launch Timeline */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold">Launch Timeline</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
            
            <div className="space-y-8">
              {[
                { week: "Week 1", title: "Pre-Launch Prep", items: ["Finalize landing page", "Create PH assets", "Schedule LinkedIn posts"] },
                { week: "Week 2", title: "Soft Launch", items: ["Start LinkedIn content", "Engage in Reddit threads", "Collect early feedback"] },
                { week: "Week 3", title: "Product Hunt Day", items: ["Launch on PH Tuesday", "Reddit announcement posts", "Email to beta list"] },
                { week: "Week 4-6", title: "Growth Mode", items: ["Double down on winning channel", "Onboard first 50 users", "Collect testimonials"] },
              ].map((phase, i) => (
                <div key={phase.week} className="relative pl-10">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white/60">
                    {i + 1}
                  </div>
                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs text-cyan-400 font-medium">{phase.week}</span>
                    <h3 className="font-semibold text-white mt-1 mb-3">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold">Success Metrics</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { metric: "Signups (Month 1)", target: "200+", current: "—", status: "target" },
              { metric: "Paid Conversions", target: "15%", current: "—", status: "target" },
              { metric: "MRR (Month 3)", target: "$3K", current: "—", status: "target" },
            ].map((kpi) => (
              <div key={kpi.metric} className="p-5 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                <p className="text-sm text-white/50 mb-2">{kpi.metric}</p>
                <p className="text-3xl font-bold text-emerald-400">{kpi.target}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Strategy */}
        <section className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold">Pricing Strategy</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-black/20 text-center">
              <p className="text-sm text-white/50 mb-1">Starter</p>
              <p className="text-2xl font-bold text-white">$49<span className="text-sm font-normal text-white/40">/mo</span></p>
              <p className="text-xs text-white/40 mt-2">10 clients, 1 team member</p>
            </div>
            <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center">
              <p className="text-sm text-amber-400 mb-1">Pro (Featured)</p>
              <p className="text-2xl font-bold text-white">$99<span className="text-sm font-normal text-white/40">/mo</span></p>
              <p className="text-xs text-white/40 mt-2">50 clients, custom domain</p>
            </div>
            <div className="p-5 rounded-xl bg-black/20 text-center">
              <p className="text-sm text-white/50 mb-1">Agency</p>
              <p className="text-2xl font-bold text-white">$199<span className="text-sm font-normal text-white/40">/mo</span></p>
              <p className="text-xs text-white/40 mt-2">Unlimited, white-glove</p>
            </div>
          </div>
          
          <p className="text-center text-white/50 text-sm mt-6">
            14-day free trial on all plans. No credit card required.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-white/40">
          <Link href="/docs/research" className="hover:text-white transition">← Research</Link>
          <Link href="/docs/marketing" className="hover:text-white transition">Marketing Plan →</Link>
        </div>
      </footer>
    </div>
  );
}
