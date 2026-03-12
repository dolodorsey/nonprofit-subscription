import { supabase } from "@/lib/supabase";

export const revalidate = 60;

async function getTiers() {
  const { data } = await supabase.from("nonprofit_tiers").select("*").eq("is_active", true).order("sort_order");
  return data || [];
}
async function getMetrics() {
  const { data } = await supabase.from("nonprofit_impact_metrics").select("*").order("metric_name");
  return data || [];
}

export default async function Home() {
  const tiers = await getTiers();
  const metrics = await getMetrics();

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] to-[#080808]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-amber-600/5 blur-[150px]" />
        <div className="relative z-10">
          <p className="font-mono text-xs tracking-[0.4em] text-[#C87941]/70 uppercase mb-6">The Kollective Hospitality Group — Nonprofit Division</p>
          <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.85] font-light">
            Support<br/><span className="italic text-[#C87941]">The Mission</span>
          </h1>
          <p className="mt-8 font-mono text-sm text-white/35 max-w-lg mx-auto leading-relaxed">
            Every subscription directly funds youth programs, community events, and educational scholarships across 8 cities.
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase mb-12 text-center">Our Impact in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {metrics.map((m: any) => (
            <div key={m.id} className="text-center p-8 border border-white/5">
              <p className="font-display text-[clamp(2rem,5vw,4rem)] text-[#C87941] font-light">
                {m.metric_unit === 'USD' ? '$' : ''}{Number(m.metric_value).toLocaleString()}
              </p>
              <p className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mt-2">{m.metric_name}</p>
              <p className="text-xs text-white/25 mt-1">{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Tiers */}
      <section className="px-8 py-20 max-w-6xl mx-auto border-t border-white/5">
        <h2 className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase mb-4 text-center">Choose Your Level</h2>
        <p className="text-center text-white/40 text-sm mb-12">Every tier makes a measurable difference</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((tier: any, i: number) => (
            <div key={tier.id} className={`border p-8 transition-all duration-500 hover:scale-[1.02] ${i === 2 ? 'border-[#C87941]/50 bg-[#C87941]/5' : 'border-white/5 hover:border-[#C87941]/20'}`}>
              {i === 2 && <p className="font-mono text-[9px] tracking-[0.3em] text-[#C87941] uppercase mb-4">Most Popular</p>}
              <h3 className="font-display text-2xl text-white/90">{tier.name}</h3>
              <div className="mt-4 mb-6">
                <span className="font-display text-4xl text-[#C87941]">${tier.price_monthly}</span>
                <span className="font-mono text-xs text-white/30">/month</span>
              </div>
              <ul className="space-y-2 mb-8">
                {(tier.features || []).map((f: string, j: number) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-[#C87941] text-xs mt-0.5">✦</span>
                    <span className="text-xs text-white/50">{f}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 border border-white/10 hover:border-[#C87941] hover:bg-[#C87941]/10 font-mono text-xs tracking-widest uppercase transition-all">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="px-8 py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="font-mono text-[10px] text-white/20">© 2026 THE KOLLECTIVE HOSPITALITY GROUP</p>
          <p className="font-mono text-[10px] text-white/20">SOS NONPROFIT</p>
        </div>
      </footer>
    </main>
  );
}
