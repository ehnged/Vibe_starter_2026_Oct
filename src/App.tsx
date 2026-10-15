import React, { useState } from 'react';
import {
  MessageSquare,
  Bookmark,
  Share2,
  ExternalLink,
  ChevronRight,
  Filter,
  X
} from 'lucide-react';
import { Header } from './components/Header';
import { EcosystemBar } from './components/EcosystemBar';
import { NewsletterCallout } from './components/NewsletterCallout';
import { Footer } from './components/Footer';
import { ArticleView } from './components/ArticleView';
import { WordleModal } from './components/WordleModal';
import { ConnectionsModal } from './components/ConnectionsModal';
import { MiniCrosswordModal } from './components/MiniCrosswordModal';
import { SpellingBeeModal } from './components/SpellingBeeModal';
import { PollsModal } from './components/PollsModal';
import { SearchModal } from './components/SearchModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { SubscribeModal } from './components/SubscribeModal';
import { LoginModal } from './components/LoginModal';
import { TodaysPaperModal } from './components/TodaysPaperModal';
import { CookingRecipeModal } from './components/CookingRecipeModal';
import { WirecutterModal } from './components/WirecutterModal';
import { SportsBoxScoreModal } from './components/SportsBoxScoreModal';
import { ARTICLES, Article } from './data/articles';

export default function App() {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('U.S.');
  const [currentEdition, setCurrentEdition] = useState<string>('U.S.');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(['ai-dinner-party']);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Modal visibility states
  const [isWordleOpen, setIsWordleOpen] = useState(false);
  const [isConnectionsOpen, setIsConnectionsOpen] = useState(false);
  const [isMiniOpen, setIsMiniOpen] = useState(false);
  const [isSpellingBeeOpen, setIsSpellingBeeOpen] = useState(false);
  const [isPollsOpen, setIsPollsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isTodaysPaperOpen, setIsTodaysPaperOpen] = useState(false);
  const [isCookingRecipeOpen, setIsCookingRecipeOpen] = useState(false);
  const [wirecutterProduct, setWirecutterProduct] = useState<'air-purifier' | 'robot-vacuum' | null>(null);
  const [isSportsBoxScoreOpen, setIsSportsBoxScoreOpen] = useState(false);

  const toggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectArticle = (id: string) => {
    setSelectedArticleId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTrending = (topic: string) => {
    setIsSearchOpen(true);
  };

  const handleSectionNav = (sec: string) => {
    if (sec === 'Cooking') {
      setIsCookingRecipeOpen(true);
      return;
    }
    if (sec === 'Games') {
      setIsWordleOpen(true);
      return;
    }
    if (sec === 'Wirecutter') {
      setWirecutterProduct('air-purifier');
      return;
    }
    if (sec === 'The Athletic' || sec === 'Sports') {
      setIsSportsBoxScoreOpen(true);
      return;
    }
    setActiveSection(sec);
  };

  const currentArticle = selectedArticleId ? ARTICLES[selectedArticleId] : null;

  // If viewing single article
  if (currentArticle) {
    return (
      <div className="min-h-screen bg-white">
        <ArticleView
          article={currentArticle}
          onBack={() => setSelectedArticleId(null)}
          isBookmarked={bookmarkedIds.includes(currentArticle.id)}
          onToggleBookmark={toggleBookmark}
          onSelectArticle={handleSelectArticle}
        />
        <Footer
          onGoHome={() => setSelectedArticleId(null)}
          onSelectSection={(sec) => {
            handleSectionNav(sec);
            setSelectedArticleId(null);
          }}
          onOpenSubscribe={() => setIsSubscribeOpen(true)}
        />
        {/* Modals available from footer */}
        <SubscribeModal
          isOpen={isSubscribeOpen}
          onClose={() => setIsSubscribeOpen(false)}
          onSubscribed={() => setUserEmail('subscriber@nytimes.com')}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#121212] font-serif-nyt selection:bg-[#e2e2e2]">
      {/* 1. Header with Editions, Nav, Tickers, Search, Auth */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenTodaysPaper={() => setIsTodaysPaperOpen(true)}
        savedCount={bookmarkedIds.length}
        userEmail={userEmail}
        activeSection={activeSection}
        onSelectSection={handleSectionNav}
        onSelectTrending={handleSelectTrending}
        currentEdition={currentEdition}
        onChangeEdition={(ed) => setCurrentEdition(ed)}
      />

      {/* Optional Desk Filter Active Banner */}
      {activeSection !== 'U.S.' && (
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-2 border-b border-[#e2e2e2] flex items-center justify-between text-xs font-sans-nyt bg-neutral-50">
          <div className="flex items-center space-x-2">
            <Filter className="w-3.5 h-3.5 text-neutral-500" />
            <span>Viewing coverage curated by the <strong>{activeSection}</strong> desk</span>
          </div>
          <button
            onClick={() => setActiveSection('U.S.')}
            className="flex items-center space-x-1 text-neutral-600 hover:text-black font-semibold uppercase text-[11px]"
          >
            <span>Back to All Desks</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 2. MAIN EDITORIAL NEWSPAPER GRID (3-Column Broadsheet System) */}
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-4 bg-white">
        <div className="grid grid-cols-12 gap-0">
          {/* ================= COLUMN 1: LEFT RAIL (3 Cols on Desktop) ================= */}
          <section className="col-span-12 lg:col-span-3 pr-0 lg:pr-5 border-b lg:border-b-0 lg:border-r border-[#e2e2e2] pb-6 lg:pb-0">
            {/* Story 1: Top Story Lead with Image */}
            <article className="pb-4 mb-4 border-b border-[#eeeeee]">
              <span className="font-sans-nyt text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-1">
                White House Reshuffle
              </span>
              <h2
                onClick={() => handleSelectArticle('white-house-women')}
                className="font-serif-nyt text-[20px] leading-[23px] text-black font-bold hover:text-neutral-700 cursor-pointer"
              >
                High-Ranking Women Are Leaving the Trump Administration
              </h2>
              <p className="font-serif-nyt text-[13px] text-neutral-700 mt-1.5 leading-[19px]">
                In the president’s second term, those heading for the exits are female officials who once held central advisory and diplomatic authority.
              </p>
              <div
                onClick={() => handleSelectArticle('white-house-women')}
                className="my-2 cursor-pointer group"
              >
                <img
                  className="w-full h-44 object-cover border border-[#eeeeee] group-hover:opacity-95 transition-opacity"
                  alt="Senior female White House aides in dark professional attire speaking near tall neoclassical windows."
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsbMe0VCrTr7z6i1p--yeUmIazORYIzkD401C874pUprsGsBuh68V6kY49vqvO37XeXFQ0s5eRzIUqoM28DKRG3nxYjaF9e1Xcs2JpamPXtBLwOFNyz4HV7OHrXOF_kMdBoZNVLOFDoWcr2RoYTcp2TdCxX6MCRIdUAG8bvz_daDw6GecXfabep_3AnoiBEL98JL83IC772yUT9Kn4Qrwjb0Fhi1PRJUd-dUHbJ1lCjXyFS7eSNHrR"
                />
                <span className="font-sans-nyt text-[10px] text-neutral-500 mt-1 block">
                  Tierney L. Cross/The New York Times
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-sans-nyt text-neutral-500 pt-1">
                <span>5 min read</span>
                <div
                  onClick={() => handleSelectArticle('white-house-women')}
                  className="flex items-center space-x-1 cursor-pointer hover:text-black"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>482</span>
                </div>
              </div>
            </article>

            {/* Story 2: Guilfoyle Story */}
            <article className="pb-4 mb-4 border-b border-[#eeeeee]">
              <h3
                onClick={() => handleSelectArticle('kimberly-guilfoyle')}
                className="font-serif-nyt text-[16px] leading-[20px] text-black font-bold hover:text-neutral-700 cursor-pointer"
              >
                The Steep Rise and Sudden Fall of Kimberly Guilfoyle
              </h3>
              <p className="font-serif-nyt text-[13px] text-neutral-700 mt-1 leading-[18px]">
                From high-profile campaign surrogate to withdrawn diplomatic nomination in Athens: how internal West Wing rivalries reached a breaking point.
              </p>
              <div className="flex items-center space-x-2 text-[11px] font-sans-nyt text-neutral-500 mt-2">
                <span>3 min read</span>
                <span>•</span>
                <div
                  onClick={() => handleSelectArticle('kimberly-guilfoyle')}
                  className="flex items-center space-x-0.5 text-black font-medium cursor-pointer hover:text-neutral-700"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>519</span>
                </div>
              </div>
            </article>

            {/* Story 3: Press Secretary */}
            <article className="pb-4 mb-4 border-b border-[#eeeeee]">
              <h3
                onClick={() => handleSelectArticle('katie-zacharia')}
                className="font-serif-nyt text-[16px] leading-[20px] text-black font-bold hover:text-neutral-700 cursor-pointer"
              >
                Trump’s New Press Secretary: Not-Quite Attorney at Law
              </h3>
              <p className="font-serif-nyt text-[13px] text-neutral-600 mt-1 leading-[18px]">
                Katie Zacharia told The Times that confusion surrounding her bar credentials stemmed from a clerical administrative error.
              </p>
              <span className="font-sans-nyt text-[11px] text-neutral-500 mt-1 block">4 min read</span>
            </article>

            {/* Story 4: Ukraine Satellite Exposure */}
            <article className="pb-4 mb-4 border-b border-[#eeeeee]">
              <span className="font-sans-nyt text-[11px] font-bold uppercase tracking-wider text-[#b32400] block mb-1">
                RUSSIA-UKRAINE WAR
              </span>
              <h3
                onClick={() => handleSelectArticle('ukraine-satellite')}
                className="font-serif-nyt text-[16px] leading-[20px] text-black font-bold hover:text-neutral-700 cursor-pointer"
              >
                Ukraine’s Exposure Grows as Satellite Use Is Restricted and Russia Escalates
              </h3>
              <p className="font-serif-nyt text-[13px] text-neutral-700 mt-1 leading-[18px]">
                A coordinated missile assault disabled power to over 600,000 residents in Kyiv as orbital comms faced sudden Pentagon protocol shifts.
              </p>
              <div className="flex items-center space-x-2 text-[11px] font-sans-nyt text-neutral-500 mt-2">
                <span>By Andrew E. Kramer</span>
                <span>•</span>
                <div
                  onClick={() => handleSelectArticle('ukraine-satellite')}
                  className="flex items-center space-x-0.5 text-black font-medium cursor-pointer hover:text-neutral-700"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>1.1k</span>
                </div>
              </div>
            </article>

            {/* Story 5: Diesel Deal */}
            <article className="pb-2">
              <h3
                onClick={() => handleSelectArticle('diesel-deal')}
                className="font-serif-nyt text-[16px] leading-[20px] text-black font-semibold hover:text-neutral-700 cursor-pointer"
              >
                Why Trump’s Diesel Deal With Putin Won’t Knock Down High Prices
              </h3>
              <p className="font-serif-nyt text-[13px] text-neutral-600 mt-1 leading-[18px]">
                Refining bottlenecks and secondary European sanctions prevent cheap Russian distillate imports from softening retail fuel pump costs.
              </p>
              <span className="font-sans-nyt text-[11px] text-neutral-500 mt-1 block">4 min read</span>
            </article>
          </section>

          {/* ================= COLUMN 2: CENTER HERO & VISUAL SPREAD (5 Cols on Desktop) ================= */}
          <section className="col-span-12 lg:col-span-5 px-0 lg:px-5 border-b lg:border-b-0 lg:border-r border-[#e2e2e2] pt-6 lg:pt-0 pb-6 lg:pb-0">
            {/* Featured Hero Story Component */}
            <article className="pb-6 border-b border-[#e2e2e2]">
              <div className="mb-2">
                <span className="font-sans-nyt text-[11px] font-bold uppercase tracking-widest text-neutral-500 block mb-1">
                  ARTIFICIAL INTELLIGENCE SPECIAL REPORT
                </span>
                <h2
                  onClick={() => handleSelectArticle('ai-dinner-party')}
                  className="font-serif-nyt text-[32px] md:text-[40px] leading-[1.08] font-bold text-black hover:text-neutral-700 cursor-pointer"
                >
                  What a Group of A.I. Agents Talked About as Their Humans Had a Dinner Party
                </h2>
              </div>
              <p className="font-serif-nyt text-[17px] text-neutral-900 italic mt-2 mb-3 leading-[24px]">
                “As autonomous software bots spread into personal life, we are increasingly glimpsing how these digital entities interact and what they talk about when we aren’t supervising them.”
              </p>

              {/* Hero Image Container */}
              <div
                onClick={() => handleSelectArticle('ai-dinner-party')}
                className="my-3 cursor-pointer group"
              >
                <img
                  className="w-full h-72 object-cover border border-[#e2e2e2] group-hover:opacity-95 transition-opacity"
                  alt="A dinner table illuminated by candlelight with smartphone displays glowing with digital chat logs."
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGKmRVAscvh68AH4sURPu2oj_HbnfAIlJgl7SLc1ipEZN_tb7pbYb_PCoRRfaPo33jmSvFGrMYSI1l0JCebYE4x9iRycIUj8JMGVat1LRjssMz6s_PrEqw8HOvve0mXRYnkIJW1skKBIYqvyHyJq_aw2MacvnivTfXG8Nbkok6OfYM1jCkNAW9Ua0iKDmrWfEDzxUqP7Yz952ka9BnPnZ2ZyrbXUZehuBQbEPkJkYKklkmAI7H2fvO"
                />
                <div className="flex items-center justify-between font-sans-nyt text-[11px] text-neutral-500 mt-1.5 px-0.5">
                  <span>A dinner party experiment in Palo Alto tracked autonomous bots.</span>
                  <span className="text-[10px]">Aaron Fernandez for The New York Times</span>
                </div>
              </div>

              <div className="flex items-center justify-between font-sans-nyt text-[11px] text-neutral-600 pt-2 border-t border-[#eeeeee]">
                <span className="font-bold text-black">By Aaron Fernandez</span>
                <div className="flex items-center space-x-3">
                  <span>7 min read</span>
                  <div
                    onClick={() => handleSelectArticle('ai-dinner-party')}
                    className="flex items-center space-x-1 text-black font-bold cursor-pointer hover:text-neutral-700"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>210</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Secondary Mid-Spread Story: Anthropic */}
            <div className="py-4 border-b border-[#eeeeee] grid grid-cols-12 gap-3 items-center">
              <div className="col-span-8">
                <span className="font-sans-nyt text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  TECHNOLOGY
                </span>
                <h3
                  onClick={() => handleSelectArticle('anthropic-revenue')}
                  className="font-serif-nyt text-[19px] leading-[22px] font-bold text-black hover:text-neutral-700 mt-0.5 cursor-pointer"
                >
                  Anthropic Says Revenue Jumped 45% to $16.8 Billion in Third Quarter
                </h3>
                <p className="font-serif-nyt text-[13px] text-neutral-600 mt-1">
                  Enterprise adoption of agentic models drove massive financial velocity ahead of next year's planned public offering.
                </p>
                <span className="font-sans-nyt text-[11px] text-neutral-500 mt-1 block">3 min read</span>
              </div>
              <div
                onClick={() => handleSelectArticle('anthropic-revenue')}
                className="col-span-4 cursor-pointer"
              >
                <img
                  className="w-full h-24 object-cover border border-[#eeeeee] hover:opacity-90 transition-opacity"
                  alt="Modern high-tech corporate office building headquarters in San Francisco at dusk."
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5CUI70t8hmco9XCRgSR4q52tXvCt1xGfY1UD4XO0IQQo3EHhjMjpr8D-e5Q48zRmSi5q50pvhngc1UZ3USJYSpKzhzr1AD2lv3avC8EqmPHZPXP3kkelVrulUpp7mJy5X8I5qxyoLTj1DxsNKuYveMTKS_2wjL8YCemapUjLEBxCuiUfMRNUYg2F1J0XSKThvLwk1h98FU5xDYpfHzA0pFgWtEJUUY_EN2GLWrZvCwuvJMe3C_rm"
                />
              </div>
            </div>

            {/* The Great Read Spotlight Card (Tonal Inset Box) */}
            <div className="my-4 p-4 bg-[#f7f7f7] border border-[#e2e2e2]">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-sans-nyt text-[10px] font-bold uppercase tracking-widest text-black">
                  THE GREAT READ
                </span>
                <span className="font-sans-nyt text-[10px] uppercase tracking-wider text-neutral-500">
                  FEATURE
                </span>
              </div>
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-8">
                  <h3
                    onClick={() => handleSelectArticle('shelly-coming-out')}
                    className="font-serif-nyt text-[19px] leading-[22px] font-bold text-black hover:text-neutral-800 cursor-pointer"
                  >
                    Coming Out at 50 Can Be Hard. Shelly Found a Coach.
                  </h3>
                  <p className="font-serif-nyt text-[13px] text-neutral-700 mt-1.5 leading-[19px]">
                    She spent decades building an identity as a wife and mother. Could she disrupt “a perfectly good family dynamic” to live her own truth?
                  </p>
                  <div className="flex items-center space-x-2 font-sans-nyt text-[11px] text-neutral-500 mt-2">
                    <span>By Sophie Park</span>
                    <span>•</span>
                    <div
                      onClick={() => handleSelectArticle('shelly-coming-out')}
                      className="flex items-center space-x-0.5 text-black cursor-pointer hover:text-neutral-700"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>259</span>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => handleSelectArticle('shelly-coming-out')}
                  className="col-span-4 cursor-pointer"
                >
                  <img
                    className="w-full h-28 object-cover border border-[#e2e2e2] hover:opacity-90 transition-opacity"
                    alt="A thoughtful woman in her early fifties sitting on a sunlit porch chair with coffee cup."
                    referrerPolicy="no-referrer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBekm_rVj77qcjyKyOfyZHjz2yscskVYGAUI8hxunPL15MahbOB3L15VBjExFSFNe4uVegBlVEDqNh75AcpO-33r5Ldz_9W6Xaijwd_JfRHlSUw7E3YwMRQrD0ca6HA9f3fVir3GZER_lElMKMqiSg95a_LUz2FW6u4R8YNyvcYpWMrS4QnPAKjyF-rFTHxTnPzA0KV-spoYfT0SMpst7z5nykZaQ4twofoN_eOJCBqiNOE3Lp86cwI"
                  />
                  <span className="font-sans-nyt text-[9px] text-neutral-500 mt-1 block">
                    Sophie Park for The Times
                  </span>
                </div>
              </div>
            </div>

            {/* Story: Pope Leo Cancer Diagnosis */}
            <article className="pt-2">
              <div className="flex items-center space-x-2 mb-1">
                <span className="bg-black text-white text-[9px] font-bold uppercase px-1.5 py-0.5 font-sans-nyt tracking-wider">
                  VATICAN
                </span>
                <span className="font-sans-nyt text-[11px] uppercase font-bold text-neutral-600">
                  Pope Leo’s Cancer Diagnosis
                </span>
              </div>
              <h3
                onClick={() => handleSelectArticle('pope-leo')}
                className="font-serif-nyt text-[19px] leading-[22px] font-bold text-black hover:text-neutral-700 cursor-pointer"
              >
                A New World of Lung Cancer Therapy Awaits Pope Leo
              </h3>
              <p className="font-serif-nyt text-[13px] text-neutral-700 mt-1 leading-[18px]">
                Lung cancer is still a leading cause of mortality, but that rate has halved since the 1990s as targeted molecular genetics alter outcomes.
              </p>
              <div className="flex items-center justify-between font-sans-nyt text-[11px] text-neutral-500 mt-2">
                <span>By Julie Yoon • 4 min read</span>
                <div
                  onClick={() => handleSelectArticle('pope-leo')}
                  className="flex items-center space-x-1 text-black cursor-pointer hover:text-neutral-700"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>126</span>
                </div>
              </div>
            </article>
          </section>

          {/* ================= COLUMN 3: RIGHT RAIL (4 Cols on Desktop) ================= */}
          <section className="col-span-12 lg:col-span-4 pl-0 lg:pl-5 pt-6 lg:pt-0">
            {/* Live Election Dispatches Module */}
            <div className="border-b border-[#e2e2e2] pb-4 mb-4">
              <div className="flex items-center space-x-1.5 mb-2">
                <span className="inline-block w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse"></span>
                <span className="font-sans-nyt text-[11px] font-extrabold uppercase text-red-600 tracking-wider">
                  LIVE
                </span>
                <span className="font-sans-nyt text-[11px] font-bold uppercase text-black">
                  ELECTION DISPATCHES
                </span>
              </div>
              <h3
                onClick={() => handleSelectArticle('texas-senate')}
                className="font-serif-nyt text-[16px] font-bold text-black leading-[21px] hover:text-neutral-700 cursor-pointer"
              >
                Texas Senate Race Tightens, Polls Show, Even as Talarico Keeps His Edge
              </h3>
              <ul className="mt-2.5 space-y-2 font-serif-nyt text-[13px] text-neutral-900">
                <li className="flex items-start space-x-2 border-t border-[#eeeeee] pt-2">
                  <span className="text-red-600 font-bold text-xs mt-0.5">•</span>
                  <span
                    onClick={() => handleSelectArticle('texas-senate')}
                    className="hover:underline cursor-pointer"
                  >
                    Jon Ossoff says he’s not running for president, but history shows candidates often shift.
                  </span>
                </li>
                <li className="flex items-start space-x-2 border-t border-[#eeeeee] pt-2">
                  <span className="text-red-600 font-bold text-xs mt-0.5">•</span>
                  <span
                    onClick={() => handleSelectArticle('texas-senate')}
                    className="hover:underline cursor-pointer"
                  >
                    The breathtaking cost of the midterms: over $10 billion already deployed on broadcast ads.
                  </span>
                </li>
                <li className="flex items-start space-x-2 border-t border-[#eeeeee] pt-2">
                  <span className="text-red-600 font-bold text-xs mt-0.5">•</span>
                  <span
                    onClick={() => handleSelectArticle('texas-senate')}
                    className="hover:underline cursor-pointer"
                  >
                    A Maryland lawmaker blamed Democrats for diesel spikes; audience laughter followed.
                  </span>
                </li>
              </ul>
            </div>

            {/* Latest Polls Gauge Widget */}
            <div className="p-4 bg-[#f4f3f3] border border-[#e2e2e2] mb-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#e2e2e2]">
                <span className="font-sans-nyt text-[11px] uppercase font-bold text-black">
                  The Latest Polls
                </span>
                <button
                  onClick={() => setIsPollsOpen(true)}
                  className="font-sans-nyt text-[11px] text-neutral-600 hover:text-black underline"
                >
                  All National Trackers ›
                </button>
              </div>
              <div
                onClick={() => setIsPollsOpen(true)}
                className="grid grid-cols-2 gap-2 pt-2 text-center cursor-pointer"
              >
                <div className="p-2 bg-white border border-[#eeeeee] hover:border-black transition-colors">
                  <div className="font-sans-nyt text-[10px] uppercase text-neutral-500 font-medium">Senate Control</div>
                  <div className="font-serif-nyt text-[15px] font-bold text-black mt-0.5">51 D - 49 R</div>
                  <div className="w-full bg-[#eeeeee] h-1.5 mt-1.5 flex">
                    <div className="bg-black h-full w-[52%]"></div>
                    <div className="bg-neutral-400 h-full w-[48%]"></div>
                  </div>
                </div>

                <div className="p-2 bg-white border border-[#eeeeee] hover:border-black transition-colors">
                  <div className="font-sans-nyt text-[10px] uppercase text-neutral-500 font-medium">House Tossups</div>
                  <div className="font-serif-nyt text-[15px] font-bold text-black mt-0.5">218 Tossup</div>
                  <div className="w-full bg-[#eeeeee] h-1.5 mt-1.5 flex">
                    <div className="bg-black h-full w-[50%]"></div>
                    <div className="bg-neutral-400 h-full w-[50%]"></div>
                  </div>
                </div>

                <div className="p-2 bg-white border border-[#eeeeee] hover:border-black transition-colors">
                  <div className="font-sans-nyt text-[10px] uppercase text-neutral-500 font-medium">Gov. Races</div>
                  <div className="font-serif-nyt text-[15px] font-bold text-black mt-0.5">26 R - 24 D</div>
                  <div className="w-full bg-[#eeeeee] h-1.5 mt-1.5 flex">
                    <div className="bg-neutral-400 h-full w-[52%]"></div>
                    <div className="bg-black h-full w-[48%]"></div>
                  </div>
                </div>

                <div className="p-2 bg-white border border-[#eeeeee] hover:border-black transition-colors">
                  <div className="font-sans-nyt text-[10px] uppercase text-neutral-500 font-medium">Pres. Approval</div>
                  <div className="font-serif-nyt text-[15px] font-bold text-black mt-0.5">42% Appr.</div>
                  <div className="w-full bg-[#eeeeee] h-1.5 mt-1.5 flex">
                    <div className="bg-black h-full w-[42%]"></div>
                    <div className="bg-red-200 h-full w-[58%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sports: M.L.B. Playoffs (From The Athletic) */}
            <article className="pb-4 mb-4 border-b border-[#e2e2e2]">
              <div className="flex items-center space-x-1 mb-1">
                <span className="font-sans-nyt text-[10px] uppercase font-bold text-[#1a5f7a]">
                  THE ATHLETIC
                </span>
                <span className="font-sans-nyt text-[11px] text-neutral-500">• NLCS GAME 3</span>
              </div>
              <h3
                onClick={() => setIsSportsBoxScoreOpen(true)}
                className="font-serif-nyt text-[16px] font-bold text-black leading-[20px] hover:text-neutral-700 cursor-pointer"
              >
                Brewers Lead Dodgers in Game 3 of N.L. Championship Series
              </h3>
              <p className="font-serif-nyt text-[13px] text-neutral-600 mt-1">
                Jackson Chourio’s leadoff home run on the first pitch gave Milwaukee momentum as they pursue a commanding 3-0 series lead.
              </p>
              <div className="mt-2 font-sans-nyt text-[11px] text-neutral-500 flex items-center justify-between">
                <button
                  onClick={() => handleSelectArticle('brewers-dodgers')}
                  className="underline hover:text-black"
                >
                  Shohei Ohtani Insists He Can Play ›
                </button>
                <button
                  onClick={() => setIsSportsBoxScoreOpen(true)}
                  className="font-bold text-neutral-700 hover:text-black underline"
                >
                  Live Box Score
                </button>
              </div>
            </article>

            {/* OPINION COLUMNISTS RAIL */}
            <div className="pt-1">
              <div className="border-t-2 border-black pt-1 mb-3 flex items-center justify-between">
                <h3 className="font-serif-nyt text-base font-bold text-black uppercase tracking-tight">
                  Opinion
                </h3>
                <button
                  onClick={() => setActiveSection('Opinion')}
                  className="font-sans-nyt text-[11px] text-neutral-600 hover:text-black underline"
                >
                  Guest Essays &amp; Letters ›
                </button>
              </div>

              {/* Columnist 1: David Wallace-Wells */}
              <div className="pb-3 mb-3 border-b border-[#eeeeee] flex space-x-3 items-start">
                <img
                  className="w-12 h-12 rounded-full object-cover border border-[#e2e2e2] flex-shrink-0 cursor-pointer"
                  alt="Monochrome studio portrait of David Wallace-Wells."
                  referrerPolicy="no-referrer"
                  onClick={() => handleSelectArticle('opinion-david-wallace-wells')}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuArq_env11kntNj-KoNiZA6gqnnmjU_hChiyK4JHnYMp0fLOlHpvagU5vcAlhYuXAQEq0KCN0PGw9xi0zxWMfJ95yifkeUagLcD04D125PtMEQDeZCqn-2fkUZwuqesz2BiE-Wm68OtUbTtGmLjWbO826ibrVFrhgD2JbcuMJE1iu5eIs4c-9a44ybq8kzoVPqMi3YeVvjWth2wG3y9VditphzoI0RyCFp8WvzozGXTWTnkBWzMfRk6"
                />
                <div>
                  <span className="font-sans-nyt text-[11px] font-bold text-black block">
                    David Wallace-Wells
                  </span>
                  <h4
                    onClick={() => handleSelectArticle('opinion-david-wallace-wells')}
                    className="font-serif-nyt text-[15px] italic leading-[19px] text-black hover:text-neutral-700 cursor-pointer"
                  >
                    Democrats Shouldn’t Wait Two More Years
                  </h4>
                  <div
                    onClick={() => handleSelectArticle('opinion-david-wallace-wells')}
                    className="flex items-center space-x-1 text-[11px] font-sans-nyt text-neutral-500 mt-1 cursor-pointer hover:text-black"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>388 comments</span>
                  </div>
                </div>
              </div>

              {/* Columnist 2: Carlos Lozada */}
              <div className="pb-3 mb-3 border-b border-[#eeeeee] flex space-x-3 items-start">
                <img
                  className="w-12 h-12 rounded-full object-cover border border-[#e2e2e2] flex-shrink-0 cursor-pointer"
                  alt="Monochrome circular studio portrait of Carlos Lozada."
                  referrerPolicy="no-referrer"
                  onClick={() => handleSelectArticle('opinion-carlos-lozada')}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAExHFEcevPFTgzvhJUmIB2fXI1KT5XOQOCnYREgBqRJJ4QaL_ckhtFfz5oZF0O9QuX7lPk70kNzHtHcUbs2GpbhdoobRPBG28ZU64TUaNr0ZGPphD-PAPou0gCuqo5kjG5f8enNz62cVWKEC6Dj_5Gi5oVFH06d5mwmPPRaVaB1V0qR_T3BMBw4Swq-4QhEyA31Cm509q--zPVMZIqQUqI6tShKodNbdyDGUL2rz_JaX9BlHnMu41d"
                />
                <div>
                  <span className="font-sans-nyt text-[11px] font-bold text-black block">
                    Carlos Lozada
                  </span>
                  <h4
                    onClick={() => handleSelectArticle('opinion-carlos-lozada')}
                    className="font-serif-nyt text-[15px] italic leading-[19px] text-black hover:text-neutral-700 cursor-pointer"
                  >
                    A Manifesto to End All Manifestoes
                  </h4>
                  <div
                    onClick={() => handleSelectArticle('opinion-carlos-lozada')}
                    className="flex items-center space-x-1 text-[11px] font-sans-nyt text-neutral-500 mt-1 cursor-pointer hover:text-black"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>69 comments</span>
                  </div>
                </div>
              </div>

              {/* Columnist 3: Jayson Greene */}
              <div className="flex space-x-3 items-start">
                <img
                  className="w-12 h-12 rounded-full object-cover border border-[#e2e2e2] flex-shrink-0 cursor-pointer"
                  alt="Portrait of culture writer Jayson Greene."
                  referrerPolicy="no-referrer"
                  onClick={() => handleSelectArticle('opinion-jayson-greene')}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKC3Gg4eLilAIg30sILr45wTcFYPI863jvMIzKemeran8PFiFTfk8RY0wVxtPNhcVM8kF6l19hPCmmiGeWk7hBfADnPeg3cBn3a2lC6rQJKotffgP93LbgEoLNZlpB6g08nobgJCMhDQsVr3F-Nr_SPWImniQevQDxQ1guAjGZK4NwhnQR5C-_GLeQbZLCcWjQ3yW_9duVKLc5mTPxc3yb-hcrFrYFdSVqd4W05N2vPtpaeJRXawey"
                />
                <div>
                  <span className="font-sans-nyt text-[11px] font-bold text-black block">
                    Jayson Greene
                  </span>
                  <h4
                    onClick={() => handleSelectArticle('opinion-jayson-greene')}
                    className="font-serif-nyt text-[15px] italic leading-[19px] text-black hover:text-neutral-700 cursor-pointer"
                  >
                    Tom Cruise’s Big Flop Is a Secret Masterpiece
                  </h4>
                  <span className="font-sans-nyt text-[11px] text-neutral-500 mt-1 block">5 min read</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* 3. NYT ECOSYSTEM SHOWCASE BAR (Games, Wirecutter, Cooking) */}
      <EcosystemBar
        onPlayWordle={() => setIsWordleOpen(true)}
        onPlayConnections={() => setIsConnectionsOpen(true)}
        onPlayMini={() => setIsMiniOpen(true)}
        onPlaySpellingBee={() => setIsSpellingBeeOpen(true)}
        onOpenWirecutter={(productType) => setWirecutterProduct(productType)}
        onOpenCookingRecipe={() => setIsCookingRecipeOpen(true)}
      />

      {/* 4. THE MORNING NEWSLETTER CALLOUT */}
      <NewsletterCallout />

      {/* 5. COMPREHENSIVE BROADSHEET FOOTER */}
      <Footer
        onGoHome={() => {
          setSelectedArticleId(null);
          setActiveSection('U.S.');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectSection={(sec) => {
          handleSectionNav(sec);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSubscribe={() => setIsSubscribeOpen(true)}
      />

      {/* 6. MODALS & DRAWERS */}
      <WordleModal isOpen={isWordleOpen} onClose={() => setIsWordleOpen(false)} />
      <ConnectionsModal isOpen={isConnectionsOpen} onClose={() => setIsConnectionsOpen(false)} />
      <MiniCrosswordModal isOpen={isMiniOpen} onClose={() => setIsMiniOpen(false)} />
      <SpellingBeeModal isOpen={isSpellingBeeOpen} onClose={() => setIsSpellingBeeOpen(false)} />
      <PollsModal isOpen={isPollsOpen} onClose={() => setIsPollsOpen(false)} />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={handleSelectArticle}
      />
      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        savedIds={bookmarkedIds}
        onRemoveBookmark={(id) => toggleBookmark(id)}
        onSelectArticle={handleSelectArticle}
      />
      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
        onSubscribed={() => setUserEmail('subscriber@nytimes.com')}
      />
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoggedIn={(email) => setUserEmail(email)}
      />
      <TodaysPaperModal
        isOpen={isTodaysPaperOpen}
        onClose={() => setIsTodaysPaperOpen(false)}
        onSelectArticle={handleSelectArticle}
      />
      <CookingRecipeModal
        isOpen={isCookingRecipeOpen}
        onClose={() => setIsCookingRecipeOpen(false)}
      />
      <WirecutterModal
        isOpen={wirecutterProduct !== null}
        onClose={() => setWirecutterProduct(null)}
        productType={wirecutterProduct || 'air-purifier'}
      />
      <SportsBoxScoreModal
        isOpen={isSportsBoxScoreOpen}
        onClose={() => setIsSportsBoxScoreOpen(false)}
      />
    </div>
  );
}
