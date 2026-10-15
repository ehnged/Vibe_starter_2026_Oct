import React, { useState } from 'react';
import { X, TrendingUp, Info } from 'lucide-react';

interface PollsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PollsModal: React.FC<PollsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'senate' | 'house' | 'gov' | 'approval'>('senate');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-2xl bg-white border border-[#121212] shadow-2xl p-6 flex flex-col max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#e2e2e2]">
          <div>
            <span className="font-sans-nyt text-[11px] font-bold uppercase tracking-widest text-neutral-500">
              The New York Times / Siena College Polls
            </span>
            <h2 className="font-serif-nyt text-2xl font-bold tracking-tight text-neutral-900">
              2026 Midterm & Executive Trackers
            </h2>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-[#f1f1f1] text-neutral-600 rounded" title="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center space-x-2 border-b border-[#e2e2e2] pt-3 pb-2 text-xs font-sans-nyt font-bold">
          <button
            onClick={() => setActiveTab('senate')}
            className={`px-3 py-1.5 uppercase tracking-wide transition-colors ${
              activeTab === 'senate' ? 'bg-black text-white' : 'text-neutral-600 hover:text-black bg-neutral-100'
            }`}
          >
            Senate (51 D - 49 R)
          </button>
          <button
            onClick={() => setActiveTab('house')}
            className={`px-3 py-1.5 uppercase tracking-wide transition-colors ${
              activeTab === 'house' ? 'bg-black text-white' : 'text-neutral-600 hover:text-black bg-neutral-100'
            }`}
          >
            House (218 Tossup)
          </button>
          <button
            onClick={() => setActiveTab('gov')}
            className={`px-3 py-1.5 uppercase tracking-wide transition-colors ${
              activeTab === 'gov' ? 'bg-black text-white' : 'text-neutral-600 hover:text-black bg-neutral-100'
            }`}
          >
            Governors (26 R - 24 D)
          </button>
          <button
            onClick={() => setActiveTab('approval')}
            className={`px-3 py-1.5 uppercase tracking-wide transition-colors ${
              activeTab === 'approval' ? 'bg-black text-white' : 'text-neutral-600 hover:text-black bg-neutral-100'
            }`}
          >
            Approval (42%)
          </button>
        </div>

        {/* Tab Content */}
        <div className="py-4 space-y-4">
          {activeTab === 'senate' && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif-nyt font-bold text-lg">Battleground Senate Contests</span>
                <span className="font-sans-nyt text-xs text-neutral-500">Margin of error: ±3.4%</span>
              </div>
              <div className="space-y-3 font-sans-nyt text-xs">
                <div className="p-3 bg-neutral-50 border border-neutral-200">
                  <div className="flex justify-between font-bold text-neutral-800">
                    <span>Texas: James Talarico (D) vs. Incumbent (R)</span>
                    <span className="text-emerald-700">D +2</span>
                  </div>
                  <div className="w-full bg-neutral-200 h-2 mt-1.5 flex">
                    <div className="bg-blue-600 h-full w-[49%]"></div>
                    <div className="bg-red-600 h-full w-[47%]"></div>
                  </div>
                  <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                    <span>49% Talarico</span>
                    <span>47% Incumbent</span>
                  </div>
                </div>

                <div className="p-3 bg-neutral-50 border border-neutral-200">
                  <div className="flex justify-between font-bold text-neutral-800">
                    <span>Ohio: General Election Poll</span>
                    <span className="text-neutral-600">Even (48% - 48%)</span>
                  </div>
                  <div className="w-full bg-neutral-200 h-2 mt-1.5 flex">
                    <div className="bg-blue-600 h-full w-[48%]"></div>
                    <div className="bg-red-600 h-full w-[48%]"></div>
                  </div>
                </div>

                <div className="p-3 bg-neutral-50 border border-neutral-200">
                  <div className="flex justify-between font-bold text-neutral-800">
                    <span>Georgia: Democratic Defense</span>
                    <span className="text-emerald-700">D +3</span>
                  </div>
                  <div className="w-full bg-neutral-200 h-2 mt-1.5 flex">
                    <div className="bg-blue-600 h-full w-[50%]"></div>
                    <div className="bg-red-600 h-full w-[47%]"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'house' && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif-nyt font-bold text-lg">House Majority Battlegrounds</span>
                <span className="font-sans-nyt text-xs text-neutral-500">218 Needed for Majority</span>
              </div>
              <p className="font-serif-nyt text-sm text-neutral-700 mb-3">
                Over 28 competitive congressional districts across California, New York, Pennsylvania, and Michigan are currently polling within two percentage points.
              </p>
              <div className="grid grid-cols-3 gap-2 text-center font-sans-nyt text-xs">
                <div className="p-3 bg-blue-50 border border-blue-200">
                  <div className="text-neutral-500 uppercase text-[10px] font-bold">Likely / Lean Dem</div>
                  <div className="font-bold text-xl text-blue-900 mt-1">204</div>
                </div>
                <div className="p-3 bg-amber-50 border border-amber-200">
                  <div className="text-neutral-500 uppercase text-[10px] font-bold">Pure Tossups</div>
                  <div className="font-bold text-xl text-amber-900 mt-1">24</div>
                </div>
                <div className="p-3 bg-red-50 border border-red-200">
                  <div className="text-neutral-500 uppercase text-[10px] font-bold">Likely / Lean Rep</div>
                  <div className="font-bold text-xl text-red-900 mt-1">207</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gov' && (
            <div>
              <span className="font-serif-nyt font-bold text-lg block mb-2">State Gubernatorial Landscape</span>
              <p className="font-serif-nyt text-sm text-neutral-700 mb-3">
                Republicans currently defend 16 executive mansions; Democrats defend 18 seats in this cycle. Key races include North Carolina, New Hampshire, and Arizona.
              </p>
              <div className="w-full bg-neutral-200 h-3 flex mb-2">
                <div className="bg-red-600 h-full w-[52%]"></div>
                <div className="bg-blue-600 h-full w-[48%]"></div>
              </div>
              <div className="flex justify-between font-sans-nyt text-xs text-neutral-600">
                <span>26 Republican Governors</span>
                <span>24 Democratic Governors</span>
              </div>
            </div>
          )}

          {activeTab === 'approval' && (
            <div>
              <span className="font-serif-nyt font-bold text-lg block mb-2">Presidential Job Approval</span>
              <div className="flex items-center space-x-4 p-4 bg-neutral-50 border border-neutral-200">
                <div className="text-center pr-4 border-r border-neutral-300">
                  <div className="text-3xl font-bold font-serif-nyt text-neutral-900">42%</div>
                  <div className="text-xs font-sans-nyt font-bold text-emerald-700 uppercase">Approve</div>
                </div>
                <div className="text-center pr-4 border-r border-neutral-300">
                  <div className="text-3xl font-bold font-serif-nyt text-neutral-900">54%</div>
                  <div className="text-xs font-sans-nyt font-bold text-red-700 uppercase">Disapprove</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold font-serif-nyt text-neutral-500">4%</div>
                  <div className="text-xs font-sans-nyt font-bold text-neutral-500 uppercase">Unsure</div>
                </div>
              </div>
              <p className="font-sans-nyt text-xs text-neutral-500 mt-2 flex items-center gap-1">
                <Info className="w-3.5 h-3.5 inline" /> Sample of 1,280 registered voters nationwide, weighted for census demographic benchmarks.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-[#e2e2e2] flex justify-between items-center text-xs font-sans-nyt text-neutral-500">
          <span>Source: Times/Siena College Research</span>
          <button onClick={onClose} className="bg-black text-white px-4 py-1.5 uppercase font-bold text-[11px]">
            Close Tracker
          </button>
        </div>
      </div>
    </div>
  );
};
