import React from 'react';

interface FooterProps {
  onGoHome: () => void;
  onSelectSection: (sec: string) => void;
  onOpenSubscribe: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onGoHome, onSelectSection, onOpenSubscribe }) => {
  return (
    <footer className="w-full bg-white border-t-2 border-black pt-8 pb-12 select-none">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Footer Top Wordmark & Home Link */}
        <div className="pb-4 border-b border-[#e2e2e2] flex items-center justify-between">
          <button onClick={onGoHome} className="font-masthead text-2xl text-black font-bold tracking-tight">
            The New York Times
          </button>
          <button
            onClick={onGoHome}
            className="font-sans-nyt text-[11px] text-neutral-600 hover:text-black uppercase tracking-wider"
          >
            Go to Home Page ›
          </button>
        </div>

        {/* 6 Columns Newsroom Index */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 py-8 border-b border-[#e2e2e2] text-xs font-sans-nyt">
          {/* News */}
          <div>
            <h4 className="font-serif-nyt text-sm font-bold text-black mb-2.5">NEWS</h4>
            <ul className="space-y-1.5 text-neutral-600">
              <li><button onClick={onGoHome} className="hover:underline">Home Page</button></li>
              <li><button onClick={() => onSelectSection('U.S.')} className="hover:underline">U.S.</button></li>
              <li><button onClick={() => onSelectSection('World')} className="hover:underline">World</button></li>
              <li><button onClick={() => onSelectSection('Politics')} className="hover:underline">Politics</button></li>
              <li><button onClick={() => onSelectSection('New York')} className="hover:underline">New York</button></li>
              <li><button onClick={() => onSelectSection('Education')} className="hover:underline">Education</button></li>
              <li><button onClick={() => onSelectSection('Climate')} className="hover:underline">Climate</button></li>
            </ul>
          </div>

          {/* Opinion */}
          <div>
            <h4 className="font-serif-nyt text-sm font-bold text-black mb-2.5">OPINION</h4>
            <ul className="space-y-1.5 text-neutral-600">
              <li><button onClick={() => onSelectSection('Opinion')} className="hover:underline">Today's Opinion</button></li>
              <li><button onClick={() => onSelectSection('Opinion')} className="hover:underline">Columnists</button></li>
              <li><button onClick={() => onSelectSection('Opinion')} className="hover:underline">Editorials</button></li>
              <li><button onClick={() => onSelectSection('Opinion')} className="hover:underline">Guest Essays</button></li>
              <li><button onClick={() => onSelectSection('Opinion')} className="hover:underline">Letters</button></li>
              <li><button onClick={() => onSelectSection('Opinion')} className="hover:underline">Op-Docs</button></li>
              <li><button onClick={() => onSelectSection('Opinion')} className="hover:underline">Videos</button></li>
            </ul>
          </div>

          {/* Arts */}
          <div>
            <h4 className="font-serif-nyt text-sm font-bold text-black mb-2.5">ARTS</h4>
            <ul className="space-y-1.5 text-neutral-600">
              <li><button onClick={() => onSelectSection('Arts')} className="hover:underline">Today's Arts</button></li>
              <li><button onClick={() => onSelectSection('Books')} className="hover:underline">Book Review</button></li>
              <li><button onClick={() => onSelectSection('Books')} className="hover:underline">Best Sellers</button></li>
              <li><button onClick={() => onSelectSection('Arts')} className="hover:underline">Movies</button></li>
              <li><button onClick={() => onSelectSection('Arts')} className="hover:underline">Music</button></li>
              <li><button onClick={() => onSelectSection('Arts')} className="hover:underline">Television</button></li>
              <li><button onClick={() => onSelectSection('Arts')} className="hover:underline">Theater</button></li>
            </ul>
          </div>

          {/* Living */}
          <div>
            <h4 className="font-serif-nyt text-sm font-bold text-black mb-2.5">LIVING</h4>
            <ul className="space-y-1.5 text-neutral-600">
              <li><button onClick={() => onSelectSection('Style')} className="hover:underline">Style</button></li>
              <li><button onClick={() => onSelectSection('Food')} className="hover:underline">Food &amp; Wine</button></li>
              <li><button onClick={() => onSelectSection('Travel')} className="hover:underline">Travel</button></li>
              <li><button onClick={() => onSelectSection('Style')} className="hover:underline">Love</button></li>
              <li><button onClick={() => onSelectSection('Style')} className="hover:underline">Real Estate</button></li>
              <li><button onClick={() => onSelectSection('Health')} className="hover:underline">Health &amp; Well</button></li>
              <li><button onClick={() => onSelectSection('Magazine')} className="hover:underline">T Magazine</button></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-serif-nyt text-sm font-bold text-black mb-2.5">MORE</h4>
            <ul className="space-y-1.5 text-neutral-600">
              <li><button onClick={() => onSelectSection('Games')} className="hover:underline">Games</button></li>
              <li><button onClick={() => onSelectSection('Cooking')} className="hover:underline">Cooking</button></li>
              <li><button onClick={() => onSelectSection('Wirecutter')} className="hover:underline">Wirecutter</button></li>
              <li><button onClick={() => onSelectSection('The Athletic')} className="hover:underline">The Athletic</button></li>
              <li><button onClick={() => onSelectSection('Magazine')} className="hover:underline">Podcasts</button></li>
              <li><button onClick={() => onSelectSection('Magazine')} className="hover:underline">Video</button></li>
              <li><button onClick={onGoHome} className="hover:underline">TimesMachine</button></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-serif-nyt text-sm font-bold text-black mb-2.5">SUBSCRIBE</h4>
            <ul className="space-y-1.5 text-neutral-600">
              <li><button onClick={onOpenSubscribe} className="font-bold text-black hover:underline">Home Delivery</button></li>
              <li><button onClick={onOpenSubscribe} className="font-bold text-black hover:underline">Digital Subscriptions</button></li>
              <li><button onClick={() => onSelectSection('Games')} className="hover:underline">Games</button></li>
              <li><button onClick={() => onSelectSection('Cooking')} className="hover:underline">Cooking</button></li>
              <li><button onClick={onOpenSubscribe} className="hover:underline">Gift Subscriptions</button></li>
              <li><button onClick={onOpenSubscribe} className="hover:underline">Group Subscriptions</button></li>
              <li><button onClick={onOpenSubscribe} className="hover:underline">Education Rate</button></li>
            </ul>
          </div>
        </div>

        {/* Legal Policies & Copyright Row */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs font-sans-nyt text-neutral-500">
          <p className="mb-3 md:mb-0">
            © 2026 The New York Times Company. All rights reserved.
          </p>
          <nav aria-label="Footer Legal Links" className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[11px]">
            <a className="text-neutral-500 hover:underline" href="#">NYTCo</a>
            <span className="text-neutral-300">•</span>
            <a className="text-neutral-500 hover:underline" href="#">Contact Us</a>
            <span className="text-neutral-300">•</span>
            <a className="text-neutral-500 hover:underline" href="#">Accessibility</a>
            <span className="text-neutral-300">•</span>
            <a className="text-neutral-500 hover:underline" href="#">Work with us</a>
            <span className="text-neutral-300">•</span>
            <a className="text-neutral-500 hover:underline" href="#">Advertise</a>
            <span className="text-neutral-300">•</span>
            <a className="text-neutral-500 hover:underline" href="#">T Brand Studio</a>
            <span className="text-neutral-300">•</span>
            <a className="text-neutral-500 hover:underline" href="#">Your Ad Choices</a>
            <span className="text-neutral-300">•</span>
            <a className="text-neutral-500 hover:underline" href="#">Privacy Policy</a>
            <span className="text-neutral-300">•</span>
            <a className="text-neutral-500 hover:underline" href="#">Terms of Service</a>
            <span className="text-neutral-300">•</span>
            <a className="text-neutral-500 hover:underline" href="#">Terms of Sale</a>
            <span className="text-neutral-300">•</span>
            <a className="text-neutral-500 hover:underline" href="#">Site Map</a>
            <span className="text-neutral-300">•</span>
            <a className="text-neutral-500 hover:underline" href="#">Help</a>
            <span className="text-neutral-300">•</span>
            <button onClick={onOpenSubscribe} className="text-neutral-700 hover:underline font-semibold">Subscriptions</button>
          </nav>
        </div>
      </div>
    </footer>
  );
};
