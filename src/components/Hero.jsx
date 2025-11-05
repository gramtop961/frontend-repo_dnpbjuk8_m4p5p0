import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-black">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth (don't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-violet-300" />
          <span className="text-sm text-violet-100/90">Shiny, holographic crypto vibes</span>
        </div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Gacha Yield Box NFTs
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Spin the vault, mint a mystery box, and farm dynamic on-chain yields. A futuristic
          NFT experience blending chance, strategy, and crypto-native rewards.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#mint"
            className="group inline-flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400 focus:outline-none"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            Start Spinning
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Learn how it works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
