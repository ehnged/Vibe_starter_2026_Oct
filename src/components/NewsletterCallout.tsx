import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const NewsletterCallout: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 mb-10 select-none">
      <div className="p-6 bg-[#f7f7f7] border border-[#e2e2e2] flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="max-w-xl">
          <span className="font-sans-nyt text-[11px] uppercase text-neutral-600 font-bold tracking-widest block mb-1">
            THE MORNING NEWSLETTER
          </span>
          <h3 className="font-serif-nyt text-2xl md:text-3xl font-bold text-black mt-1 leading-tight">
            Make sense of the day’s biggest news and ideas.
          </h3>
          <p className="font-serif-nyt text-xs md:text-sm text-neutral-600 mt-1">
            Delivered every weekday morning to your inbox. Written by Times journalists with zero sponsored bias.
          </p>
        </div>

        <div className="w-full md:w-auto flex-shrink-0">
          {subscribed ? (
            <div className="flex items-center space-x-2 bg-white border border-emerald-600 px-4 py-2.5 text-xs font-sans-nyt text-emerald-800 font-bold">
              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>You’re subscribed to The Morning!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-center space-x-2 w-full md:w-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-black bg-white px-3 py-2 font-sans-nyt text-xs text-black placeholder-neutral-500 w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-black"
              />
              <button
                type="submit"
                className="bg-black text-white px-5 py-2 font-sans-nyt text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors whitespace-nowrap"
              >
                SIGN UP
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
