import React, { useState } from 'react';
import {
  Search,
  Bell,
  Bookmark,
  CloudSun,
  TrendingUp,
  UserCheck,
  ChevronDown,
  Globe,
  FileText
} from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenSubscribe: () => void;
  onOpenLogin: () => void;
  onOpenBookmarks: () => void;
  onOpenTodaysPaper: () => void;
  savedCount: number;
  userEmail: string | null;
  activeSection: string;
  onSelectSection: (section: string) => void;
  onSelectTrending: (topic: string) => void;
  currentEdition: string;
  onChangeEdition: (edition: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenSubscribe,
  onOpenLogin,
  onOpenBookmarks,
  onOpenTodaysPaper,
  savedCount,
  userEmail,
  activeSection,
  onSelectSection,
  onSelectTrending,
  currentEdition,
  onChangeEdition
}) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [weatherMenuOpen, setWeatherMenuOpen] = useState(false);
  const [marketsMenuOpen, setMarketsMenuOpen] = useState(false);

  const editions = ['U.S.', 'International', 'Canada', 'Español', '中文'];
  const primaryNav = [
    'U.S.',
    'World',
    'Politics',
    'Business',
    'Opinion',
    'Tech',
    'Science',
    'Health',
    'Sports',
    'Arts',
    'Books',
    'Style',
    'Food',
    'Travel',
    'Magazine'
  ];
  const ecosystemNav = ['Wirecutter', 'Cooking', 'Games', 'The Athletic'];
  const trendingTopics = [
    'Russia-Ukraine War',
    'Midterm Elections',
    'Artificial Intelligence',
    'Pope Leo',
    'M.L.B. Playoffs',
    'Supreme Court'
  ];

  return (
    <header className="w-full bg-white select-none">
      {/* 1. TOP UTILITY BAR */}
      <div className="w-full border-b border-[#e2e2e2] bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-1.5 flex items-center justify-between text-[11px] font-sans-nyt">
          {/* Left: Editions & Today's Paper */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1.5 text-neutral-800">
              {editions.map((edition, idx) => (
                <React.Fragment key={edition}>
                  <button
                    onClick={() => onChangeEdition(edition)}
                    className={`transition-colors ${
                      currentEdition === edition
                        ? 'font-bold text-black border-b border-black'
                        : 'text-neutral-500 hover:text-black'
                    }`}
                  >
                    {edition}
                  </button>
                  {idx < editions.length - 1 && <span className="text-neutral-300">|</span>}
                </React.Fragment>
              ))}
            </div>
            <span className="text-neutral-300">|</span>
            <button
              onClick={onOpenTodaysPaper}
              className="text-neutral-600 hover:text-black underline flex items-center space-x-1"
            >
              <FileText className="w-3 h-3 inline text-neutral-400" />
              <span>Today’s Paper</span>
            </button>
          </div>

          {/* Right: Financial Mini-Ticker & Weather (Interactive) */}
          <div className="hidden lg:flex items-center space-x-3 text-neutral-600 text-[11px] font-sans-nyt">
            {/* Markets Ribbon */}
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setMarketsMenuOpen(true)}
              onMouseLeave={() => setMarketsMenuOpen(false)}
            >
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <span className="font-bold text-black">S&amp;P 500</span>
                  <span className="text-neutral-900 tabular-nums">5,815.26</span>
                  <span className="text-emerald-700 font-semibold">+0.42% ▲</span>
                </div>
                <span className="text-neutral-300">|</span>
                <div className="flex items-center space-x-1">
                  <span className="font-bold text-black">Nasdaq</span>
                  <span className="text-neutral-900 tabular-nums">18,367.19</span>
                  <span className="text-emerald-700 font-semibold">+0.68% ▲</span>
                </div>
              </div>

              {/* Markets Hover Dropdown */}
              {marketsMenuOpen && (
                <div className="absolute right-0 top-6 z-50 w-72 bg-white border border-black shadow-xl p-3 text-xs space-y-2">
                  <div className="font-bold border-b border-neutral-200 pb-1 text-black flex justify-between">
                    <span>Financial Markets</span>
                    <span className="text-emerald-700 text-[10px]">Real-Time Data</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between">
                      <span className="font-medium text-neutral-800">Dow Jones</span>
                      <span className="tabular-nums font-semibold text-emerald-700">43,065.22 (+0.31%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-neutral-800">10-Yr Treasury</span>
                      <span className="tabular-nums font-semibold text-neutral-700">4.03% (-0.02)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-neutral-800">Crude Oil (WTI)</span>
                      <span className="tabular-nums font-semibold text-red-600">$70.38 (-1.1%)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <span className="text-neutral-300">|</span>

            {/* Weather Widget */}
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setWeatherMenuOpen(true)}
              onMouseLeave={() => setWeatherMenuOpen(false)}
            >
              <div className="flex items-center space-x-1 text-neutral-700">
                <CloudSun className="w-3.5 h-3.5 text-neutral-500" />
                <span>New York, NY 64°F</span>
              </div>

              {/* Weather Hover Tooltip */}
              {weatherMenuOpen && (
                <div className="absolute right-0 top-6 z-50 w-64 bg-white border border-black shadow-xl p-3 text-xs space-y-2">
                  <div className="font-bold border-b border-neutral-200 pb-1 text-black">
                    Tri-State Weather Forecast
                  </div>
                  <div className="space-y-1 text-neutral-700">
                    <div className="flex justify-between">
                      <span>Today</span>
                      <span className="font-bold text-black">64° / 52° Partly Cloudy</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Thursday</span>
                      <span className="font-bold text-black">68° / 55° Sunny</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday</span>
                      <span className="font-bold text-black">61° / 49° Chance of Rain</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. MASTHEAD HEADER REGION */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 pt-2 pb-1 flex flex-col">
        {/* Upper Header Controls */}
        <div className="grid grid-cols-12 items-center pb-2 border-b border-[#e2e2e2]">
          {/* Left: Search & Mottos */}
          <div className="col-span-12 sm:col-span-4 flex items-center space-x-3 mb-2 sm:mb-0">
            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-1.5 text-black hover:opacity-75 transition-opacity"
              type="button"
            >
              <Search className="w-4 h-4" />
              <span className="font-sans-nyt text-[11px] uppercase tracking-wider font-bold">SEARCH</span>
            </button>
            <span className="text-neutral-300">|</span>
            <span className="hidden md:inline font-serif-nyt text-[11px] italic text-neutral-600">
              “All the News That’s Fit to Print”
            </span>
          </div>

          {/* Center: Date Line & Edition Tag */}
          <div className="col-span-12 sm:col-span-4 text-center mb-2 sm:mb-0">
            <time className="font-sans-nyt text-xs text-neutral-900 font-semibold" dateTime="2026-10-14">
              Wednesday, October 14, 2026
            </time>
            {currentEdition !== 'U.S.' && (
              <span className="ml-2 font-sans-nyt text-[10px] uppercase font-bold bg-neutral-200 px-1.5 py-0.5 rounded">
                {currentEdition} Edition
              </span>
            )}
          </div>

          {/* Right: Actions & Auth */}
          <div className="col-span-12 sm:col-span-4 flex items-center justify-end space-x-2">
            {userEmail ? (
              <div className="flex items-center space-x-1 bg-neutral-100 px-2.5 py-1 text-[11px] font-sans-nyt font-semibold">
                <UserCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span className="max-w-[100px] truncate">{userEmail}</span>
              </div>
            ) : (
              <>
                <button
                  onClick={onOpenSubscribe}
                  className="bg-black text-white font-sans-nyt px-3 py-1.5 font-bold hover:bg-neutral-800 transition-colors uppercase tracking-wider text-[10px]"
                >
                  SUBSCRIBE FOR $1/WEEK
                </button>
                <button
                  onClick={onOpenLogin}
                  className="border border-black text-black font-sans-nyt px-3 py-1.5 font-bold hover:bg-neutral-100 transition-colors uppercase tracking-wider text-[10px]"
                >
                  LOG IN
                </button>
              </>
            )}

            {/* Notifications Button */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-1 text-black hover:opacity-75 relative"
                title="Notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-600 rounded-full"></span>
              </button>
              {notificationsOpen && (
                <div className="absolute right-0 top-8 z-50 w-72 bg-white border border-black shadow-xl p-3 text-xs font-sans-nyt">
                  <div className="font-bold border-b border-neutral-200 pb-1 mb-2">Times Alerts</div>
                  <div className="text-neutral-700 space-y-2">
                    <div>
                      <p className="font-bold text-black">Live: Texas Senate Race Tightens</p>
                      <p className="text-[11px] text-neutral-500">Talarico leads incumbent by 2 points with 3 weeks remaining.</p>
                    </div>
                    <div className="border-t border-neutral-100 pt-1.5">
                      <p className="font-bold text-black">Tech Alert: Anthropic Q3 Revenue</p>
                      <p className="text-[11px] text-neutral-500">Annualized run rate hits $16.8B ahead of planned IPO.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bookmarks Button */}
            <button
              onClick={onOpenBookmarks}
              className="p-1 text-black hover:opacity-75 relative"
              title="Saved Articles"
            >
              <Bookmark className={`w-4 h-4 ${savedCount > 0 ? 'fill-black' : ''}`} />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-black text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* 3. ICONIC BLACKLETTER MASTHEAD */}
        <div className="py-3 text-center">
          <button
            onClick={() => onSelectSection('U.S.')}
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <h1 className="font-masthead text-[46px] sm:text-[58px] md:text-[68px] leading-tight text-black tracking-tight font-bold select-none">
              The New York Times
            </h1>
          </button>
        </div>

        {/* 4. PRIMARY HORIZONTAL NAVIGATION BAR */}
        <nav aria-label="Primary Navigation" className="w-full border-t border-b border-[#e2e2e2] py-1 overflow-x-auto no-scrollbar">
          <ul className="flex items-center justify-between text-[11px] font-sans-nyt min-w-[960px] tracking-wide">
            {primaryNav.map((sec) => (
              <li key={sec}>
                <button
                  onClick={() => onSelectSection(sec)}
                  className={`transition-colors pb-0.5 ${
                    activeSection === sec
                      ? 'border-b-2 border-black text-black font-bold'
                      : 'text-neutral-800 font-medium hover:text-black'
                  }`}
                >
                  {sec}
                </button>
              </li>
            ))}
            <li className="border-l border-[#e2e2e2] pl-3">
              <button
                onClick={() => onSelectSection('Wirecutter')}
                className={`font-semibold hover:text-black transition-colors ${
                  activeSection === 'Wirecutter' ? 'text-black font-bold underline' : 'text-neutral-600'
                }`}
              >
                Wirecutter
              </button>
            </li>
            {ecosystemNav.slice(1).map((sec) => (
              <li key={sec}>
                <button
                  onClick={() => onSelectSection(sec)}
                  className={`font-semibold hover:text-black transition-colors ${
                    activeSection === sec ? 'text-black font-bold underline' : 'text-neutral-600'
                  }`}
                >
                  {sec}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Broadsheet Architectural Double Rule */}
        <div className="nyt-double-rule"></div>

        {/* 5. SUB-BAR & TRENDING TOPICS */}
        <div className="flex items-center space-x-3 py-1 text-[11px] font-sans-nyt text-neutral-600 border-b border-[#eeeeee] overflow-x-auto whitespace-nowrap">
          <span className="font-bold uppercase tracking-wider text-black text-[10px]">Trending</span>
          <span className="text-neutral-300">•</span>
          {trendingTopics.map((topic, i) => (
            <React.Fragment key={topic}>
              <button
                onClick={() => onSelectTrending(topic)}
                className="hover:text-black hover:underline transition-colors"
              >
                {topic}
              </button>
              {i < trendingTopics.length - 1 && <span className="text-neutral-300">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
};
