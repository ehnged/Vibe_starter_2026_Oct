import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribed: () => void;
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose, onSubscribed }) => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSuccess(true);
    setTimeout(() => {
      onSubscribed();
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-lg bg-white border border-[#121212] shadow-2xl p-6 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start pb-4 border-b border-[#e2e2e2]">
          <div>
            <span className="font-sans-nyt text-[11px] font-bold uppercase tracking-widest text-neutral-500">
              Limited-Time Offer
            </span>
            <h2 className="font-serif-nyt text-3xl font-bold tracking-tight text-neutral-900 mt-1">
              All Access. $1 a week.
            </h2>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-[#f1f1f1] text-neutral-600 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif-nyt text-xl font-bold">Welcome to The New York Times</h3>
            <p className="font-sans-nyt text-xs text-neutral-600 max-w-xs mx-auto">
              Your unlimited All Access digital subscription is now active. Thank you for supporting independent journalism.
            </p>
          </div>
        ) : (
          <div className="py-4 space-y-4">
            <p className="font-serif-nyt text-sm text-neutral-700 leading-relaxed">
              Understand the world through the fearless reporting, incisive analysis, and deep investigations of Times journalists worldwide.
            </p>

            <ul className="space-y-2 text-xs font-sans-nyt text-neutral-800">
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-neutral-900 flex-shrink-0" />
                <span>Unlimited News, Opinion, Business, and Culture reporting</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-neutral-900 flex-shrink-0" />
                <span>NYT Games including Wordle, Spelling Bee, and Crosswords</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-neutral-900 flex-shrink-0" />
                <span>NYT Cooking: 20,000+ tested recipes and meal guides</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-neutral-900 flex-shrink-0" />
                <span>Wirecutter independent product testing and recommendations</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-neutral-900 flex-shrink-0" />
                <span>The Athletic: In-depth sports coverage and live analysis</span>
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="pt-3 border-t border-[#e2e2e2] space-y-3">
              <div>
                <label className="block font-sans-nyt text-xs font-bold text-neutral-800 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-neutral-400 p-2.5 font-sans-nyt text-sm focus:border-black outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 font-sans-nyt font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors"
              >
                Start Subscription for $1/Week
              </button>
              <p className="text-[10px] font-sans-nyt text-neutral-500 text-center">
                $4 billed every 4 weeks for the first year. Cancel anytime online.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
