import React from 'react';
import { X, Check, AlertCircle, Award, ExternalLink, ShieldCheck } from 'lucide-react';

interface WirecutterModalProps {
  isOpen: boolean;
  onClose: () => void;
  productType: 'air-purifier' | 'robot-vacuum';
}

export const WirecutterModal: React.FC<WirecutterModalProps> = ({ isOpen, onClose, productType }) => {
  if (!isOpen) return null;

  const isAirPurifier = productType === 'air-purifier';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-2xl bg-white border border-[#121212] shadow-2xl p-6 flex flex-col max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#e2e2e2]">
          <div className="flex items-center space-x-2">
            <span className="bg-black text-white font-mono text-xs px-1.5 py-0.5 font-bold">W</span>
            <span className="font-sans-nyt text-xs font-bold uppercase tracking-widest text-neutral-800">
              Wirecutter • Independent Lab Testing
            </span>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-[#f1f1f1] text-neutral-600 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        {isAirPurifier ? (
          <div className="py-4 space-y-4 font-serif-nyt">
            <div>
              <span className="font-sans-nyt text-[10px] uppercase font-bold text-neutral-500 block mb-1">
                UPDATED OCTOBER 2026 • 800+ HOURS TESTED
              </span>
              <h2 className="text-3xl font-bold text-black tracking-tight leading-tight">
                The Best Air Purifier for 2026
              </h2>
              <p className="text-sm text-neutral-600 mt-1 font-sans-nyt">
                By Tim Heffernan • Lab tested in our Long Island City testing facility
              </p>
            </div>

            {/* Featured Product Box */}
            <div className="p-4 bg-neutral-50 border border-neutral-300">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVuOGFjMcy66hovRiAkWROT6zFDczA6YBDA2oM6ldlqfYLd_7bOs_Xg07zf79Tb0FTotxeOY1CgVOf-vVCwcYJ9kKY6YHj-tI4sVe3Pp9k8ucyG17FGr4a4CmS1p1Ts6edBHhN6_gdskwqyykUyv4WqEvupjHqfOUe2jqgtypOxonCCyKb759S4xXKgWcqX-ejFliHuzVmitZ8PcPNmLeMaO2pNiwIYgczjA-Mh6W9dAR9fjzuyIgb"
                  alt="Coway Airmega Pro"
                  className="w-36 h-36 object-cover border border-neutral-200"
                />
                <div>
                  <div className="flex items-center space-x-1.5 text-xs font-sans-nyt font-bold text-amber-800 uppercase tracking-wider mb-1">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span>Top Pick: Coway Airmega Pro 250</span>
                  </div>
                  <h3 className="text-xl font-bold text-black">Whisper-quiet, powerhouse allergen filtration</h3>
                  <p className="text-xs text-neutral-700 mt-1">
                    The Coway removed 99.97% of smoke and PM2.5 particulates in a 400-sq-ft room in just 17 minutes, faster than any other model in its class.
                  </p>
                  <div className="flex items-center space-x-3 mt-3 font-sans-nyt text-xs">
                    <span className="font-bold text-lg text-black">$389</span>
                    <span className="text-neutral-500">Filters: $65/year</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lab Test Scorecard */}
            <div className="pt-2">
              <h4 className="font-sans-nyt text-xs font-bold uppercase tracking-widest text-black mb-2">
                Wirecutter Lab Test Results
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-sans-nyt text-xs">
                <div className="p-2.5 bg-neutral-100 border border-neutral-200">
                  <div className="text-[10px] uppercase text-neutral-500 font-bold">CADR (Smoke)</div>
                  <div className="text-lg font-bold text-black mt-0.5">260 CFM</div>
                </div>
                <div className="p-2.5 bg-neutral-100 border border-neutral-200">
                  <div className="text-[10px] uppercase text-neutral-500 font-bold">Sleep Noise</div>
                  <div className="text-lg font-bold text-black mt-0.5">22 dB (Silent)</div>
                </div>
                <div className="p-2.5 bg-neutral-100 border border-neutral-200">
                  <div className="text-[10px] uppercase text-neutral-500 font-bold">Energy Draw</div>
                  <div className="text-lg font-bold text-black mt-0.5">5.2 Watts</div>
                </div>
                <div className="p-2.5 bg-neutral-100 border border-neutral-200">
                  <div className="text-[10px] uppercase text-neutral-500 font-bold">Coverage</div>
                  <div className="text-lg font-bold text-black mt-0.5">930 sq ft</div>
                </div>
              </div>
            </div>

            {/* Pros and Cons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-sans-nyt text-xs">
              <div className="p-3 bg-emerald-50 border border-emerald-200">
                <span className="font-bold uppercase text-emerald-900 block mb-1">What We Liked</span>
                <ul className="space-y-1 text-emerald-950">
                  <li className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                    <span>Real-time color particulate air monitor</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                    <span>Washable permanent pre-filter saves money</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                    <span>Compact footprint fits flat against wall</span>
                  </li>
                </ul>
              </div>

              <div className="p-3 bg-neutral-50 border border-neutral-200">
                <span className="font-bold uppercase text-neutral-700 block mb-1">Flaws But Not Dealbreakers</span>
                <ul className="space-y-1 text-neutral-600">
                  <li className="flex items-start space-x-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-neutral-400 mt-0.5 flex-shrink-0" />
                    <span>Top turbo setting is noticeably loud (54 dB)</span>
                  </li>
                  <li className="flex items-start space-x-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-neutral-400 mt-0.5 flex-shrink-0" />
                    <span>No mobile companion app (physical buttons only)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-4 space-y-4 font-serif-nyt">
            <div>
              <span className="font-sans-nyt text-[10px] uppercase font-bold text-neutral-500 block mb-1">
                UPDATED FALL 2026 • 120 OBSTACLE RUNS
              </span>
              <h2 className="text-3xl font-bold text-black tracking-tight leading-tight">
                Top Cordless &amp; Robot Vacuums
              </h2>
              <p className="text-sm text-neutral-600 mt-1 font-sans-nyt">
                By Liam McCabe • Evaluated against heavy pet hair, rug fringes, and dropped cords
              </p>
            </div>

            <div className="p-4 bg-neutral-50 border border-neutral-300 flex flex-col sm:flex-row gap-4 items-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXZie2k2QFOCCTX9gQSY_mBo-Ls7Qyo-lE9IxVRuItCtACMrIJSuGjmK2L6a7zYcSgrxVVQRY44SbjpdS5oAqiVuD9pXUukQwpqxHJvIHdBjsV38PrvEb1zM2U5WrEqBoiaRUzb_0asLQhK-nqX-1hyF3EXGpmKsS-fnREPg5WCQScb87gIcIy2wG900qlfhdYOxI8V_yxy4P1rJt8neasJ4ZkTaOCttKHxRak_6FkzvxamTaIN-Ab"
                alt="Robot Vacuum"
                className="w-36 h-36 object-cover border border-neutral-200"
              />
              <div>
                <div className="flex items-center space-x-1.5 text-xs font-sans-nyt font-bold text-amber-800 uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Top Pick: Roborock S8 MaxV Ultra</span>
                </div>
                <h3 className="text-xl font-bold text-black">Flawless navigation with heated mop auto-washing</h3>
                <p className="text-xs text-neutral-700 mt-1">
                  AI camera obstacle avoidance dodged 100% of fake pet-waste and phone cables in our test labyrinth.
                </p>
                <div className="flex items-center space-x-3 mt-3 font-sans-nyt text-xs">
                  <span className="font-bold text-lg text-black">$899</span>
                  <span className="text-emerald-700 font-bold">Best In Class</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="pt-3 border-t border-[#e2e2e2] flex justify-between items-center text-xs font-sans-nyt text-neutral-500">
          <div className="flex items-center space-x-1">
            <ShieldCheck className="w-4 h-4 text-neutral-700" />
            <span>Wirecutter is 100% reader-supported. We never accept paid placement.</span>
          </div>
          <button
            onClick={onClose}
            className="bg-black text-white px-4 py-1.5 uppercase font-bold text-[11px]"
          >
            Close Review
          </button>
        </div>
      </div>
    </div>
  );
};
