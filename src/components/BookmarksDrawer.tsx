import React from 'react';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedIds: string[];
  onRemoveBookmark: (id: string) => void;
  onSelectArticle: (id: string) => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  savedIds,
  onRemoveBookmark,
  onSelectArticle
}) => {
  if (!isOpen) return null;

  const savedArticles = savedIds.map((id) => ARTICLES[id]).filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60">
      <div className="relative w-full max-w-md bg-white border-l border-[#121212] shadow-2xl h-full flex flex-col p-6 overflow-hidden animate-slide-left">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#121212]">
          <div className="flex items-center space-x-2">
            <Bookmark className="w-5 h-5 text-neutral-900 fill-black" />
            <h2 className="font-serif-nyt text-xl font-bold">Saved Stories</h2>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-[#f1f1f1] text-neutral-600 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto divide-y divide-[#e2e2e2] py-2">
          {savedArticles.length > 0 ? (
            savedArticles.map((art) => (
              <div key={art.id} className="py-4 group">
                <div className="flex items-center justify-between text-[10px] font-sans-nyt uppercase tracking-wider text-neutral-500 mb-1">
                  <span className="font-bold text-neutral-800">{art.section}</span>
                  <button
                    onClick={() => onRemoveBookmark(art.id)}
                    className="text-neutral-400 hover:text-red-600 transition-colors"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <h3
                  onClick={() => {
                    onSelectArticle(art.id);
                    onClose();
                  }}
                  className="font-serif-nyt font-bold text-base text-neutral-900 hover:underline cursor-pointer leading-snug"
                >
                  {art.title}
                </h3>
                <p className="font-serif-nyt text-xs text-neutral-600 line-clamp-2 mt-1">
                  {art.deck}
                </p>
                <div className="flex items-center justify-between mt-2 pt-1 text-[11px] font-sans-nyt text-neutral-400">
                  <span>{art.readTime || '4 min read'}</span>
                  <button
                    onClick={() => {
                      onSelectArticle(art.id);
                      onClose();
                    }}
                    className="flex items-center space-x-1 text-black font-bold uppercase hover:underline"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center">
              <Bookmark className="w-8 h-8 text-neutral-300 mx-auto mb-2" />
              <p className="font-serif-nyt text-base font-semibold text-neutral-700">No saved stories yet</p>
              <p className="font-sans-nyt text-xs text-neutral-500 mt-1 max-w-xs mx-auto">
                Click the bookmark icon on any article across the front page to save it for reading later.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#e2e2e2] text-xs font-sans-nyt text-neutral-500 flex justify-between items-center">
          <span>{savedArticles.length} saved article{savedArticles.length !== 1 ? 's' : ''}</span>
          <button
            onClick={onClose}
            className="bg-black text-white px-4 py-1.5 font-bold uppercase text-[11px] hover:bg-neutral-800"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
