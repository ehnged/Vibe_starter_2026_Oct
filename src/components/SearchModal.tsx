import React, { useState } from 'react';
import { X, Search, Clock, ArrowRight } from 'lucide-react';
import { ARTICLES, Article } from '../data/articles';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (articleId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectArticle }) => {
  const [query, setQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState('All');

  if (!isOpen) return null;

  const sections = ['All', 'Politics', 'Tech', 'Opinion', 'World', 'Business', 'Arts'];

  const results = Object.values(ARTICLES).filter((article) => {
    const matchesQuery =
      query.trim() === '' ||
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.deck.toLowerCase().includes(query.toLowerCase()) ||
      (article.byline && article.byline.toLowerCase().includes(query.toLowerCase()));

    const matchesSection = selectedSection === 'All' || article.section.toLowerCase() === selectedSection.toLowerCase();

    return matchesQuery && matchesSection;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-16 px-4 pb-4">
      <div className="relative w-full max-w-3xl bg-white border border-[#121212] shadow-2xl p-6 flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <div className="flex items-center space-x-3 pb-4 border-b border-[#121212]">
          <Search className="w-5 h-5 text-neutral-500" />
          <input
            type="text"
            placeholder="Search all Times journalism, columnists, and sections..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full text-lg font-serif-nyt border-none outline-none placeholder-neutral-400"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-xs font-sans-nyt text-neutral-500 hover:text-black">
              Clear
            </button>
          )}
          <button onClick={onClose} className="p-1 hover:bg-[#f1f1f1] text-neutral-600 rounded">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Section Filters */}
        <div className="flex items-center space-x-2 py-3 border-b border-[#e2e2e2] overflow-x-auto text-xs font-sans-nyt">
          <span className="text-neutral-400 font-bold uppercase text-[10px] tracking-wider mr-1">Section:</span>
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => setSelectedSection(sec)}
              className={`px-3 py-1 font-medium transition-colors whitespace-nowrap ${
                selectedSection === sec
                  ? 'bg-black text-white font-bold'
                  : 'text-neutral-600 hover:text-black bg-neutral-100'
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto divide-y divide-[#e2e2e2] py-2">
          {results.length > 0 ? (
            results.map((art) => (
              <div
                key={art.id}
                onClick={() => {
                  onSelectArticle(art.id);
                  onClose();
                }}
                className="py-3 px-2 hover:bg-neutral-50 cursor-pointer transition-colors group"
              >
                <div className="flex items-center space-x-2 text-[10px] font-sans-nyt uppercase tracking-wider text-neutral-500 mb-0.5">
                  <span className="font-bold text-neutral-800">{art.section}</span>
                  <span>•</span>
                  <span>{art.publishedAt}</span>
                </div>
                <h3 className="font-serif-nyt text-lg font-bold group-hover:underline text-neutral-900 leading-snug">
                  {art.title}
                </h3>
                <p className="font-serif-nyt text-xs text-neutral-600 line-clamp-2 mt-1">
                  {art.deck}
                </p>
                {art.byline && (
                  <div className="text-[11px] font-sans-nyt text-neutral-400 mt-1">
                    {art.byline}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="py-12 text-center font-serif-nyt text-neutral-500">
              No articles found matching “{query}”. Try another keyword or section.
            </div>
          )}
        </div>

        {/* Popular Searches footer */}
        <div className="pt-3 border-t border-[#e2e2e2] flex items-center justify-between text-xs font-sans-nyt text-neutral-500">
          <div className="flex items-center space-x-2">
            <span className="font-bold uppercase text-[10px]">Trending Searches:</span>
            <button onClick={() => setQuery('Trump')} className="hover:underline">Trump</button>
            <span>•</span>
            <button onClick={() => setQuery('AI')} className="hover:underline">Artificial Intelligence</button>
            <span>•</span>
            <button onClick={() => setQuery('Midterms')} className="hover:underline">Midterm Elections</button>
          </div>
          <span>{results.length} result{results.length !== 1 ? 's' : ''}</span>
        </div>
      </div>
    </div>
  );
};
