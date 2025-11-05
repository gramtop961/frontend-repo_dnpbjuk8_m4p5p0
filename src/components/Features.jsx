import React from 'react';
import { Shield, Coins, Gift, Box } from 'lucide-react';

const items = [
  {
    icon: <Box className="h-5 w-5 text-violet-300" />,
    title: 'Mystery Boxes',
    desc: 'Each spin mints a randomized rarity box with dynamic yield multipliers.',
  },
  {
    icon: <Coins className="h-5 w-5 text-violet-300" />,
    title: 'On-chain Yields',
    desc: 'Stake your boxes to earn protocol rewards that scale with rarity.',
  },
  {
    icon: <Shield className="h-5 w-5 text-violet-300" />,
    title: 'Provable Fairness',
    desc: 'VRF-powered randomness keeps drops transparent and tamper-proof.',
  },
  {
    icon: <Gift className="h-5 w-5 text-violet-300" />,
    title: 'Seasonal Events',
    desc: 'Limited-time pools, boosters, and collab drops keep it fresh.',
  },
];

const Features = () => {
  return (
    <section className="relative bg-black py-16 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">Built for crypto-native fun</h2>
          <p className="mt-2 text-white/70">Fast, fair, and designed for yield enthusiasts.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {items.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-violet-400/30 hover:bg-white/10"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-violet-500/10 p-2">
                {f.icon}
              </div>
              <h3 className="text-base font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
