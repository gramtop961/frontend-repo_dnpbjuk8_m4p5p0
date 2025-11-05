import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import GachaSimulator from './components/GachaSimulator';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Features />
      <GachaSimulator />
      <FAQ />
      <footer className="border-t border-white/10 bg-black/60 py-10 text-center text-sm text-white/60">
        Built for the crypto future • Gacha Yield Box NFT demo
      </footer>
    </div>
  );
}

export default App;
