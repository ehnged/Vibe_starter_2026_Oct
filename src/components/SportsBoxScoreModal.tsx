import React from 'react';
import { X, Award } from 'lucide-react';

interface SportsBoxScoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SportsBoxScoreModal: React.FC<SportsBoxScoreModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-xl bg-white border border-[#121212] shadow-2xl p-6 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#e2e2e2]">
          <div className="flex items-center space-x-2">
            <span className="font-sans-nyt text-xs font-bold uppercase tracking-widest text-[#1a5f7a]">
              The Athletic • Postseason
            </span>
            <span className="text-neutral-300">|</span>
            <span className="font-sans-nyt text-xs font-bold text-red-600 uppercase">Final</span>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-[#f1f1f1] text-neutral-600 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Game Title */}
        <div className="py-3 border-b border-[#e2e2e2]">
          <h3 className="font-serif-nyt text-2xl font-bold text-black">
            National League Championship Series — Game 3
          </h3>
          <p className="font-sans-nyt text-xs text-neutral-600 mt-0.5">
            Milwaukee Brewers take a commanding 3-0 series lead over Los Angeles Dodgers
          </p>
        </div>

        {/* Live Scoreboard Table */}
        <div className="py-4 overflow-x-auto">
          <table className="w-full text-center font-sans-nyt text-xs border border-neutral-300">
            <thead className="bg-neutral-100 border-b border-neutral-300 text-neutral-600">
              <tr>
                <th className="py-2 px-3 text-left font-bold text-black">Team</th>
                {Array.from({ length: 9 }).map((_, i) => (
                  <th key={i} className="py-2 px-2 font-medium">{i + 1}</th>
                ))}
                <th className="py-2 px-3 font-bold bg-neutral-200 text-black">R</th>
                <th className="py-2 px-2 font-medium">H</th>
                <th className="py-2 px-2 font-medium">E</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              <tr className="font-medium">
                <td className="py-2.5 px-3 text-left font-bold text-black flex items-center space-x-1.5">
                  <span className="w-3 h-3 bg-amber-500 rounded-full inline-block"></span>
                  <span>Brewers (MIL)</span>
                </td>
                <td className="py-2 px-2">1</td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-2">2</td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-2">1</td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-3 font-bold bg-neutral-100 text-black text-sm">4</td>
                <td className="py-2 px-2 font-semibold">7</td>
                <td className="py-2 px-2">0</td>
              </tr>
              <tr className="font-medium">
                <td className="py-2.5 px-3 text-left font-bold text-black flex items-center space-x-1.5">
                  <span className="w-3 h-3 bg-blue-600 rounded-full inline-block"></span>
                  <span>Dodgers (LAD)</span>
                </td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-2">1</td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-2">1</td>
                <td className="py-2 px-2">0</td>
                <td className="py-2 px-3 font-bold bg-neutral-100 text-black text-sm">2</td>
                <td className="py-2 px-2 font-semibold">6</td>
                <td className="py-2 px-2">1</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pitching & Key Moments */}
        <div className="grid grid-cols-2 gap-4 py-2 font-sans-nyt text-xs">
          <div className="p-3 bg-neutral-50 border border-neutral-200">
            <span className="font-bold uppercase text-[10px] text-neutral-500 block mb-1">Winning Pitcher</span>
            <div className="font-bold text-black">Freddy Peralta (1-0, 1.80 ERA)</div>
            <div className="text-[11px] text-neutral-600 mt-0.5">6.1 IP, 4 H, 1 ER, 8 K, 1 BB</div>
          </div>
          <div className="p-3 bg-neutral-50 border border-neutral-200">
            <span className="font-bold uppercase text-[10px] text-neutral-500 block mb-1">Key Play</span>
            <div className="font-bold text-black">Jackson Chourio leadoff HR (412 ft)</div>
            <div className="text-[11px] text-neutral-600 mt-0.5">Exit velocity: 108.4 mph off Glasnow</div>
          </div>
        </div>

        {/* Shohei Ohtani Note */}
        <div className="p-3 bg-[#f7f7f7] border-l-2 border-[#1a5f7a] font-serif-nyt text-xs text-neutral-700 mt-2">
          <span className="font-sans-nyt font-bold text-xs uppercase text-[#1a5f7a] block mb-0.5">
            Dodgers Dugout Reaction
          </span>
          Shohei Ohtani, held hitless with two intentional walks, told reporters: “The momentum can turn with one swing. We are not done.”
        </div>

        <div className="pt-3 mt-3 border-t border-[#e2e2e2] flex justify-end">
          <button
            onClick={onClose}
            className="bg-black text-white px-4 py-1.5 font-sans-nyt uppercase font-bold text-[11px]"
          >
            Close Box Score
          </button>
        </div>
      </div>
    </div>
  );
};
