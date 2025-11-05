import React from 'react';

const faqs = [
  {
    q: 'What is a Gacha Yield Box NFT?',
    a: 'A digital mystery box NFT that reveals a rarity tier on mint and can be staked to earn yield. Higher rarity means a higher multiplier on rewards.',
  },
  {
    q: 'How are spins randomized?',
    a: 'This demo simulates odds locally. A production deployment would use a verifiable random function (VRF) to guarantee provable fairness on-chain.',
  },
  {
    q: 'Do I need a wallet to try the demo?',
    a: 'No wallet needed for the demo. The on-chain version will support popular wallets and networks for minting and staking.',
  },
  {
    q: 'Can boxes be traded?',
    a: 'Yes. Boxes are standard NFTs and can be listed, transferred, or held to keep farming rewards.',
  },
];

const FAQ = () => {
  return (
    <section id="how" className="bg-black py-16 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-2xl font-semibold sm:text-3xl">FAQ</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          {faqs.map((f, i) => (
            <details key={i} className="group p-5 open:bg-white/5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-medium">
                {f.q}
                <span className="ml-4 select-none text-violet-300 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
