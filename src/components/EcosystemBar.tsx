import React from 'react';
import { Puzzle, Utensils, Sparkles } from 'lucide-react';
import { ARTICLES } from '../data/articles';

interface EcosystemBarProps {
  onPlayWordle: () => void;
  onPlayConnections: () => void;
  onPlayMini: () => void;
  onSelectArticle: (id: string) => void;
}

export const EcosystemBar: React.FC<EcosystemBarProps> = ({
  onPlayWordle,
  onPlayConnections,
  onPlayMini,
  onSelectArticle
}) => {
  return (
    <section className="w-full bg-[#f7f7f7] border-t-2 border-b-2 border-black my-8 py-6 select-none">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-5 lg:gap-6">
          {/* 1. NYT Games Showcase (5 Cols) */}
          <div className="col-span-12 lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#e2e2e2] pr-0 lg:pr-6 pb-6 lg:pb-0">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-1.5">
                <Puzzle className="w-5 h-5 text-black" />
                <h3 className="font-serif-nyt text-xl font-bold text-black">NYT Games</h3>
              </div>
              <button
                onClick={onPlayWordle}
                className="font-sans-nyt text-[11px] text-neutral-600 hover:text-black underline"
              >
                Play All Games ›
              </button>
            </div>

            {/* Bento Grid of Daily Games */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Wordle */}
              <div className="p-3 bg-white border border-[#e2e2e2] flex items-center justify-between shadow-xs">
                <div>
                  <span className="font-serif-nyt font-bold text-base text-black block">Wordle</span>
                  <span className="font-sans-nyt text-[11px] text-neutral-500">Guess 5 letters.</span>
                </div>
                <button
                  onClick={onPlayWordle}
                  className="bg-black text-white font-sans-nyt text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  PLAY
                </button>
              </div>

              {/* Connections */}
              <div className="p-3 bg-white border border-[#e2e2e2] flex items-center justify-between shadow-xs">
                <div>
                  <span className="font-serif-nyt font-bold text-base text-black block">Connections</span>
                  <span className="font-sans-nyt text-[11px] text-neutral-500">Group shared words.</span>
                </div>
                <button
                  onClick={onPlayConnections}
                  className="bg-black text-white font-sans-nyt text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  PLAY
                </button>
              </div>

              {/* The Mini */}
              <div className="p-3 bg-white border border-[#e2e2e2] flex items-center justify-between shadow-xs">
                <div>
                  <span className="font-serif-nyt font-bold text-base text-black block">The Mini</span>
                  <span className="font-sans-nyt text-[11px] text-neutral-500">Daily quick puzzle.</span>
                </div>
                <button
                  onClick={onPlayMini}
                  className="bg-black text-white font-sans-nyt text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  PLAY
                </button>
              </div>

              {/* Spelling Bee */}
              <div className="p-3 bg-white border border-[#e2e2e2] flex items-center justify-between shadow-xs">
                <div>
                  <span className="font-serif-nyt font-bold text-base text-black block">Spelling Bee</span>
                  <span className="font-sans-nyt text-[11px] text-neutral-500">7 letter hives.</span>
                </div>
                <button
                  onClick={onPlayWordle}
                  className="bg-black text-white font-sans-nyt text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  PLAY
                </button>
              </div>
            </div>
          </div>

          {/* 2. Wirecutter Product Picks (4 Cols) */}
          <div className="col-span-12 lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#e2e2e2] px-0 lg:px-6 pb-6 lg:pb-0">
            <div className="flex items-center space-x-1.5 mb-3">
              <span className="bg-black text-white font-mono text-[10px] px-1 font-bold">W</span>
              <h3 className="font-serif-nyt text-xl font-bold text-black">Wirecutter</h3>
            </div>
            <div className="space-y-2.5">
              <div
                onClick={() => onSelectArticle('wirecutter-air-purifier')}
                className="flex items-center space-x-3 p-2 bg-white border border-[#e2e2e2] hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <img
                  className="w-16 h-16 object-cover border border-[#eeeeee] flex-shrink-0"
                  alt="White cylindrical HEPA air purifier standing on hardwood floor."
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVuOGFjMcy66hovRiAkWROT6zFDczA6YBDA2oM6ldlqfYLd_7bOs_Xg07zf79Tb0FTotxeOY1CgVOf-vVCwcYJ9kKY6YHj-tI4sVe3Pp9k8ucyG17FGr4a4CmS1p1Ts6edBHhN6_gdskwqyykUyv4WqEvupjHqfOUe2jqgtypOxonCCyKb759S4xXKgWcqX-ejFliHuzVmitZ8PcPNmLeMaO2pNiwIYgczjA-Mh6W9dAR9fjzuyIgb"
                />
                <div>
                  <span className="font-sans-nyt text-[10px] uppercase font-bold text-neutral-500 block">THE BEST</span>
                  <h4 className="font-serif-nyt text-[14px] font-bold text-black leading-tight">The Best Air Purifier for 2026</h4>
                  <span className="font-sans-nyt text-[11px] text-neutral-500">Lab tested against smoke &amp; allergens</span>
                </div>
              </div>

              <div
                onClick={() => onSelectArticle('wirecutter-robot-vacuums')}
                className="flex items-center space-x-3 p-2 bg-white border border-[#e2e2e2] hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <img
                  className="w-16 h-16 object-cover border border-[#eeeeee] flex-shrink-0"
                  alt="Matte black autonomous robot vacuum cleaner charging at modern baseboard."
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXZie2k2QFOCCTX9gQSY_mBo-Ls7Qyo-lE9IxVRuItCtACMrIJSuGjmK2L6a7zYcSgrxVVQRY44SbjpdS5oAqiVuD9pXUukQwpqxHJvIHdBjsV38PrvEb1zM2U5WrEqBoiaRUzb_0asLQhK-nqX-1hyF3EXGpmKsS-fnREPg5WCQScb87gIcIy2wG900qlfhdYOxI8V_yxy4P1rJt8neasJ4ZkTaOCttKHxRak_6FkzvxamTaIN-Ab"
                />
                <div>
                  <span className="font-sans-nyt text-[10px] uppercase font-bold text-neutral-500 block">TESTED</span>
                  <h4 className="font-serif-nyt text-[14px] font-bold text-black leading-tight">Top Cordless &amp; Robot Vacuums</h4>
                  <span className="font-sans-nyt text-[11px] text-neutral-500">Navigates pet hair effortlessly</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. NYT Cooking Picks (3 Cols) */}
          <div className="col-span-12 lg:col-span-3 pl-0 lg:pl-6">
            <div className="flex items-center space-x-1.5 mb-3">
              <Utensils className="w-5 h-5 text-black" />
              <h3 className="font-serif-nyt text-xl font-bold text-black">Cooking</h3>
            </div>
            <div
              onClick={() => onSelectArticle('cooking-salmon')}
              className="p-3 bg-white border border-[#e2e2e2] cursor-pointer hover:bg-neutral-50 transition-colors"
            >
              <img
                className="w-full h-24 object-cover border border-[#eeeeee] mb-2"
                alt="Seared crispy-skinned salmon fillets in a cast iron skillet with roasted lemon slices."
                referrerPolicy="no-referrer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS6tDqRVy_ofSg3w49hFqNMwV4ycFLaTUh7-XwC8w1a_0yYoC6ujbeb7gJP29gQOCjveIB5jrUOr1dwhiy8cS4iseVbCVyJ0Zftf0ImzzIoyQuiVnIxtmE41U_2Xs86PM62K1t_98A88qQc_mMOCGmz-lRL38dL0IAZ3xH5ZniJ0S9OvU5OIR4ekXB4H-PCG8FhfCamdAilPBHQPj-zqYboO-wTNxchGK6Eo2tBIPOgLfy3X4LggXB"
              />
              <span className="font-sans-nyt text-[10px] uppercase font-bold text-[#b32400]">Editor’s Pick</span>
              <h4 className="font-serif-nyt text-[14px] font-bold text-black leading-tight mt-0.5 hover:underline">
                Easy Salmon Recipes &amp; Five Weeknight Dishes
              </h4>
              <span className="font-sans-nyt text-[11px] text-neutral-500 block mt-1">
                Dinner ideas for busy people by Emily Weinstein
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
