import React from 'react';
import { X, Printer, Download, Eye, FileText } from 'lucide-react';
import { ARTICLES } from '../data/articles';

interface TodaysPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (id: string) => void;
}

export const TodaysPaperModal: React.FC<TodaysPaperModalProps> = ({ isOpen, onClose, onSelectArticle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-4xl bg-[#faf9f6] border border-[#121212] shadow-2xl p-6 flex flex-col max-h-[92vh] overflow-y-auto">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-black">
          <div className="flex items-center space-x-2">
            <span className="font-sans-nyt text-[11px] font-bold uppercase tracking-widest text-neutral-600">
              The Broadsheet Replica
            </span>
            <span className="text-neutral-400">•</span>
            <span className="font-sans-nyt text-[11px] font-semibold text-black">
              Today’s Print Edition
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.print()}
              className="flex items-center space-x-1 border border-neutral-400 px-3 py-1 font-sans-nyt text-xs font-bold uppercase tracking-wider hover:bg-neutral-200"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Page A1</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:bg-neutral-200 text-neutral-700 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Broadsheet Late Edition Header Banner */}
        <div className="py-4 text-center border-b border-neutral-300">
          <div className="flex justify-between items-center text-[10px] font-sans-nyt uppercase tracking-widest text-neutral-600 border-b border-neutral-200 pb-1 mb-2">
            <span>VOL. CLXXV No. 60,302</span>
            <span>© 2026 The New York Times Company</span>
            <span>NEW YORK, WEDNESDAY, OCTOBER 14, 2026</span>
            <span>LATE EDITION • $3.00</span>
          </div>
          <h1 className="font-masthead text-4xl sm:text-5xl font-bold tracking-tight text-black py-2">
            The New York Times
          </h1>
          <div className="flex justify-between text-[11px] font-serif-nyt italic text-neutral-600 border-t border-b border-neutral-300 py-1">
            <span>“All the News That’s Fit to Print”</span>
            <span>Partly sunny, breeze from East; High 66°, Low 51°. Map on Page B12.</span>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex items-center space-x-4 py-2 border-b-2 border-black text-xs font-sans-nyt font-bold uppercase tracking-wider overflow-x-auto">
          <button className="text-black border-b-2 border-black pb-1">Section A: Page 1</button>
          <button className="text-neutral-500 hover:text-black pb-1">Section B: Business Day</button>
          <button className="text-neutral-500 hover:text-black pb-1">Section C: Sports</button>
          <button className="text-neutral-500 hover:text-black pb-1">Section D: Arts &amp; Style</button>
        </div>

        {/* Replica Page 1 Grid Preview */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 bg-white p-6 border border-neutral-300 shadow-inner mt-4 font-serif-nyt">
          {/* Column A (Left 4 cols) */}
          <div className="md:col-span-4 pr-0 md:pr-4 md:border-r border-neutral-200 space-y-4">
            <div>
              <span className="font-sans-nyt text-[10px] font-bold uppercase tracking-widest text-neutral-500 block">
                WHITE HOUSE DESK
              </span>
              <h3
                onClick={() => {
                  onSelectArticle('white-house-women');
                  onClose();
                }}
                className="font-bold text-lg leading-tight hover:underline cursor-pointer"
              >
                High-Ranking Women Are Leaving the Trump Administration
              </h3>
              <p className="text-xs text-neutral-700 mt-1 leading-relaxed">
                In the president’s second term, those heading for the exits are female officials who once held central advisory authority.
              </p>
              <span className="font-sans-nyt text-[10px] text-neutral-400 block mt-1">
                Page A1, Column 1 • Continued on Page A14
              </span>
            </div>

            <div className="border-t border-neutral-200 pt-3">
              <h4
                onClick={() => {
                  onSelectArticle('kimberly-guilfoyle');
                  onClose();
                }}
                className="font-bold text-base leading-tight hover:underline cursor-pointer"
              >
                The Steep Rise and Sudden Fall of Kimberly Guilfoyle
              </h4>
              <p className="text-xs text-neutral-700 mt-1">
                How internal West Wing rivalries reached a breaking point ahead of diplomatic confirmation.
              </p>
              <span className="font-sans-nyt text-[10px] text-neutral-400 block mt-1">
                Page A1, Column 2
              </span>
            </div>
          </div>

          {/* Column B (Center 5 cols - Lead Story) */}
          <div className="md:col-span-5 px-0 md:px-4 md:border-r border-neutral-200">
            <span className="font-sans-nyt text-[10px] font-bold uppercase tracking-widest text-neutral-500 block">
              SPECIAL REPORT
            </span>
            <h2
              onClick={() => {
                onSelectArticle('ai-dinner-party');
                onClose();
              }}
              className="text-2xl font-bold leading-tight hover:underline cursor-pointer"
            >
              What a Group of A.I. Agents Talked About as Their Humans Had a Dinner Party
            </h2>
            <p className="text-sm italic text-neutral-800 mt-2 mb-3">
              “As autonomous software bots spread into personal life, we are increasingly glimpsing how these digital entities interact.”
            </p>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGKmRVAscvh68AH4sURPu2oj_HbnfAIlJgl7SLc1ipEZN_tb7pbYb_PCoRRfaPo33jmSvFGrMYSI1l0JCebYE4x9iRycIUj8JMGVat1LRjssMz6s_PrEqw8HOvve0mXRYnkIJW1skKBIYqvyHyJq_aw2MacvnivTfXG8Nbkok6OfYM1jCkNAW9Ua0iKDmrWfEDzxUqP7Yz952ka9BnPnZ2ZyrbXUZehuBQbEPkJkYKklkmAI7H2fvO"
              alt="Dinner party bots"
              className="w-full h-44 object-cover border border-neutral-200 my-2"
            />
            <p className="text-xs text-neutral-600">
              A confidential experiment in Silicon Valley tracked autonomous proxies negotiating calendars and personal disputes.
            </p>
            <span className="font-sans-nyt text-[10px] text-neutral-400 block mt-1">
              Page A1, Column 3 • Continued on Page A16
            </span>
          </div>

          {/* Column C (Right 3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <div>
              <span className="font-sans-nyt text-[10px] font-bold uppercase text-red-700 block">
                NATIONAL POLICIES
              </span>
              <h3
                onClick={() => {
                  onSelectArticle('texas-senate');
                  onClose();
                }}
                className="font-bold text-base leading-tight hover:underline cursor-pointer"
              >
                Texas Senate Race Tightens, Polls Show
              </h3>
              <p className="text-xs text-neutral-700 mt-1">
                Talarico edges ahead in the closest statewide contest in Texas in a generation.
              </p>
              <span className="font-sans-nyt text-[10px] text-neutral-400 block mt-1">
                Page A1, Column 6
              </span>
            </div>

            <div className="border-t border-neutral-200 pt-3">
              <span className="font-sans-nyt text-[10px] font-bold uppercase text-black block">
                OPINION ESSAYS
              </span>
              <h4
                onClick={() => {
                  onSelectArticle('opinion-david-wallace-wells');
                  onClose();
                }}
                className="font-bold text-sm italic leading-tight hover:underline cursor-pointer"
              >
                Democrats Shouldn’t Wait Two More Years
              </h4>
              <span className="font-sans-nyt text-[10px] text-neutral-400 block mt-1">
                Page A23 (Editorial Page)
              </span>
            </div>

            <div className="border-t border-neutral-200 pt-3 bg-neutral-50 p-3">
              <div className="font-sans-nyt text-[10px] font-bold uppercase tracking-wider text-black mb-1">
                News Summary
              </div>
              <ul className="text-[11px] space-y-1 text-neutral-700">
                <li>• Anthropic Q3 Revenue: Page B1</li>
                <li>• NLCS Game 3 Recap: Page C1</li>
                <li>• Shelly's Transition: Page D1</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-4 pt-3 border-t border-neutral-300 flex justify-between items-center text-xs font-sans-nyt text-neutral-500">
          <span>Times Broadcaster Archives • Delivered to home delivery subscribers worldwide</span>
          <button
            onClick={onClose}
            className="bg-black text-white px-4 py-1.5 uppercase font-bold text-[11px]"
          >
            Close Replica
          </button>
        </div>
      </div>
    </div>
  );
};
