import React, { useMemo, useState } from 'react';
import { Dice6, Sparkles } from 'lucide-react';

const rarities = [
  { name: 'Common', color: 'from-zinc-400 to-zinc-200', text: 'text-zinc-900', odds: 0.6, multiplier: 1 },
  { name: 'Rare', color: 'from-sky-400 to-sky-200', text: 'text-sky-950', odds: 0.25, multiplier: 2 },
  { name: 'Epic', color: 'from-violet-400 to-fuchsia-300', text: 'text-fuchsia-950', odds: 0.12, multiplier: 4 },
  { name: 'Legendary', color: 'from-amber-300 to-rose-300', text: 'text-amber-950', odds: 0.03, multiplier: 8 },
];

const GachaSimulator = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const expectedAPR = useMemo(() => {
    return rarities.reduce((acc, r) => acc + r.odds * r.multiplier, 0) * 10; // base APR 10%
  }, []);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);

    // Weighted draw
    const roll = Math.random();
    let cumulative = 0;
    let selected = rarities[0];
    for (const r of rarities) {
      cumulative += r.odds;
      if (roll <= cumulative) {
        selected = r;
        break;
      }
    }

    // Dramatic delay
    setTimeout(() => {
      setResult(selected);
      setHistory((h) => [{
        ts: Date.now(),
        name: selected.name,
        multiplier: selected.multiplier,
      }, ...h].slice(0, 8));
      setSpinning(false);
    }, 1000 + Math.random() * 600);
  };

  return (
    <section id="mint" className="relative bg-black py-16 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Gacha Spin</h2>
            <div className="text-sm text-white/60">Expected APR: ~{expectedAPR.toFixed(1)}%</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative mb-6 h-40 w-40">
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${result ? result.color : 'from-zinc-700 to-zinc-500'} p-0.5 shadow-2xl transition`}></div>
              <div className="absolute inset-0 rounded-3xl bg-black/60" />
              <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
                {result ? (
                  <div className="text-center">
                    <div className="text-sm uppercase tracking-wider text-white/70">You got</div>
                    <div className="mt-1 text-2xl font-semibold">{result.name}</div>
                    <div className="text-white/70">x{result.multiplier} Yield</div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-white/70">
                    <Sparkles className="mb-2 h-5 w-5" />
                    <span>Spin to reveal</span>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={spin}
              disabled={spinning}
              className="group inline-flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Dice6 className={`h-4 w-4 ${spinning ? 'animate-spin' : ''}`} />
              {spinning ? 'Spinning...' : 'Spin the Box'}
            </button>

            <p className="mt-3 text-xs text-white/60">
              Simulated odds for demo. In production, spins are powered by on-chain VRF.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold">Drop Rates</h3>
            <ul className="mt-4 space-y-3">
              {rarities.map((r) => (
                <li key={r.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`inline-block h-3 w-3 rounded-full bg-gradient-to-br ${r.color}`} />
                    <span>{r.name}</span>
                  </div>
                  <div className="text-white/70">{(r.odds * 100).toFixed(0)}% • x{r.multiplier}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold">Recent Spins</h3>
            {history.length === 0 ? (
              <p className="mt-3 text-sm text-white/60">No spins yet — be the first to try your luck.</p>
            ) : (
              <ul className="mt-3 space-y-2">
                {history.map((h) => (
                  <li key={h.ts} className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-3 py-2">
                    <span className="text-white/90">{h.name}</span>
                    <span className="text-white/60">x{h.multiplier}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GachaSimulator;
