import React, { useState } from 'react';
import {
  ArrowLeft,
  Bookmark,
  Share2,
  Volume2,
  Pause,
  Play,
  MessageSquare,
  ThumbsUp,
  Check,
  Type
} from 'lucide-react';
import { Article, Comment, ARTICLES } from '../data/articles';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onSelectArticle: (id: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onBack,
  isBookmarked,
  onToggleBookmark,
  onSelectArticle
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [comments, setComments] = useState<Comment[]>(article.initialComments || []);
  const [newCommentText, setNewCommentText] = useState('');
  const [newCommentAuthor, setNewCommentAuthor] = useState('');
  const [newCommentCity, setNewCommentCity] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [commentFilter, setCommentFilter] = useState<'all' | 'picks'>('all');

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: Comment = {
      id: `user-${Date.now()}`,
      author: newCommentAuthor.trim() || 'Reader',
      location: newCommentCity.trim() || 'New York, NY',
      timeAgo: 'Just now',
      content: newCommentText.trim(),
      likes: 1
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
    setNewCommentAuthor('');
    setNewCommentCity('');
  };

  const handleLikeComment = (commentId: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === commentId ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  const fontSizeClass = {
    sm: 'text-[16px] leading-[26px]',
    md: 'text-[18px] leading-[30px]',
    lg: 'text-[21px] leading-[34px]'
  }[fontSize];

  // Related articles
  const related = Object.values(ARTICLES)
    .filter((a) => a.id !== article.id && a.section === article.section)
    .slice(0, 3);

  const displayedComments = commentFilter === 'picks'
    ? comments.filter((c) => c.isTimesPick)
    : comments;

  return (
    <div className="min-h-screen bg-white text-[#121212] selection:bg-[#e2e2e2]">
      {/* Sticky Reader Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#e2e2e2] px-4 md:px-8 py-2.5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="flex items-center space-x-1 text-xs font-sans-nyt font-bold uppercase tracking-wider text-neutral-800 hover:text-black hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Front Page</span>
          </button>
          <span className="text-neutral-300">|</span>
          <span className="hidden sm:inline font-sans-nyt text-[11px] font-bold uppercase tracking-widest text-neutral-500">
            {article.section}
          </span>
        </div>

        {/* Center Masthead Wordmark */}
        <div className="text-center cursor-pointer" onClick={onBack}>
          <span className="font-masthead text-xl font-bold tracking-tight text-black select-none">
            The New York Times
          </span>
        </div>

        {/* Right Tools */}
        <div className="flex items-center space-x-3">
          {/* Font resizer */}
          <div className="hidden sm:flex items-center space-x-1 border border-neutral-300 rounded px-1.5 py-0.5 text-xs font-sans-nyt">
            <Type className="w-3.5 h-3.5 text-neutral-500 mr-0.5" />
            <button
              onClick={() => setFontSize('sm')}
              className={`px-1 font-bold ${fontSize === 'sm' ? 'text-black underline' : 'text-neutral-400'}`}
              title="Small text"
            >
              A-
            </button>
            <button
              onClick={() => setFontSize('md')}
              className={`px-1 font-bold ${fontSize === 'md' ? 'text-black underline' : 'text-neutral-400'}`}
              title="Standard text"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('lg')}
              className={`px-1 font-bold ${fontSize === 'lg' ? 'text-black underline' : 'text-neutral-400'}`}
              title="Large text"
            >
              A+
            </button>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={() => onToggleBookmark(article.id)}
            className={`p-1.5 rounded transition-colors ${
              isBookmarked
                ? 'text-neutral-900 bg-neutral-100'
                : 'text-neutral-600 hover:text-black hover:bg-neutral-100'
            }`}
            title={isBookmarked ? 'Saved to Bookmarks' : 'Save article'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-black' : ''}`} />
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="p-1.5 text-neutral-600 hover:text-black hover:bg-neutral-100 rounded transition-colors relative"
            title="Share article link"
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>

          {/* Comment Count Jump */}
          <a
            href="#comments-section"
            className="flex items-center space-x-1 text-xs font-sans-nyt font-medium text-neutral-600 hover:text-black"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{comments.length}</span>
          </a>
        </div>
      </nav>

      {/* Main Article Content Container */}
      <article className="max-w-[780px] mx-auto px-4 sm:px-6 pt-8 pb-16">
        {/* Section Kicker */}
        {article.kicker && (
          <div className="font-sans-nyt text-[11px] font-bold uppercase tracking-widest text-neutral-600 mb-2">
            {article.kicker}
          </div>
        )}

        {/* Headline */}
        <h1 className="font-serif-nyt text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 leading-[1.1] mb-4">
          {article.title}
        </h1>

        {/* Deck */}
        <p className="font-serif-nyt text-lg sm:text-xl text-neutral-700 leading-snug italic mb-6">
          {article.deck}
        </p>

        {/* Author / Date Meta Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-y border-[#e2e2e2] py-3 my-6 gap-3">
          <div className="font-sans-nyt text-xs text-neutral-600">
            {article.byline && <span className="font-bold text-neutral-900 block sm:inline">{article.byline}</span>}
            <span className="hidden sm:inline mx-2 text-neutral-300">•</span>
            <span>{article.publishedAt}</span>
            {article.readTime && (
              <>
                <span className="mx-2 text-neutral-300">•</span>
                <span>{article.readTime}</span>
              </>
            )}
          </div>

          {/* Audio Listen Simulation Bar */}
          <div className="flex items-center space-x-2 bg-[#f7f7f7] border border-[#e2e2e2] px-3 py-1.5 rounded-full self-start sm:self-auto">
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className="flex items-center space-x-1.5 font-sans-nyt text-[11px] font-bold text-neutral-800 hover:text-black"
            >
              {isPlayingAudio ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-black" />
                  <span>Pause (1:45 / 5:20)</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Listen to this article</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Hero Image & Journalistic Caption */}
        {article.imageUrl && (
          <figure className="my-8">
            <img
              src={article.imageUrl}
              alt={article.imageAlt || article.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[500px] object-cover border border-[#e2e2e2]"
            />
            <figcaption className="mt-2 text-xs font-sans-nyt text-neutral-600 flex flex-col sm:flex-row sm:justify-between">
              <span>{article.caption || article.title}</span>
              {article.photographer && (
                <span className="text-[10px] text-neutral-400 mt-0.5 sm:mt-0 font-medium">
                  {article.photographer}
                </span>
              )}
            </figcaption>
          </figure>
        )}

        {/* Live Bullet Updates if any */}
        {article.bulletUpdates && article.bulletUpdates.length > 0 && (
          <div className="my-6 p-4 bg-neutral-50 border-l-2 border-red-600 space-y-2">
            <div className="font-sans-nyt text-xs font-extrabold uppercase tracking-wider text-red-600 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span>Key Developing Points</span>
            </div>
            <ul className="space-y-1.5 font-sans-nyt text-xs text-neutral-800">
              {article.bulletUpdates.map((bullet, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Body Paragraphs with authentic Drop Cap */}
        <div className={`space-y-6 font-serif-nyt text-neutral-900 ${fontSizeClass}`}>
          {article.paragraphs.map((p, i) => {
            if (i === 0) {
              return (
                <p key={i} className="drop-cap leading-relaxed">
                  {p}
                </p>
              );
            }

            if (i === 2 && article.pullQuote) {
              return (
                <React.Fragment key={i}>
                  <blockquote className="my-8 py-4 border-y border-[#121212] text-xl sm:text-2xl font-serif-nyt italic text-neutral-900 text-center leading-snug px-6">
                    {article.pullQuote}
                  </blockquote>
                  <p className="leading-relaxed">{p}</p>
                </React.Fragment>
              );
            }

            return (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            );
          })}
        </div>

        {/* End of article marker */}
        <div className="my-10 text-center">
          <span className="inline-block w-8 h-[2px] bg-black"></span>
        </div>

        {/* Related Stories Bar */}
        {related.length > 0 && (
          <div className="my-12 pt-6 border-t-2 border-black">
            <h3 className="font-sans-nyt text-xs font-bold uppercase tracking-widest text-neutral-700 mb-4">
              More in {article.section}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectArticle(rel.id)}
                  className="p-3 bg-neutral-50 border border-neutral-200 cursor-pointer hover:bg-neutral-100 transition-colors"
                >
                  <span className="font-sans-nyt text-[10px] font-bold text-neutral-500 uppercase block mb-1">
                    {rel.readTime || '4 min read'}
                  </span>
                  <h4 className="font-serif-nyt font-bold text-sm leading-snug hover:underline text-neutral-900">
                    {rel.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interactive Reader Discussion / Comments Section */}
        <section id="comments-section" className="mt-12 pt-8 border-t border-[#e2e2e2]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif-nyt text-2xl font-bold text-neutral-900">
              Comments ({comments.length})
            </h3>
            <div className="flex items-center space-x-2 text-xs font-sans-nyt font-bold">
              <button
                onClick={() => setCommentFilter('all')}
                className={`px-3 py-1 uppercase tracking-wider ${
                  commentFilter === 'all'
                    ? 'bg-black text-white'
                    : 'text-neutral-600 hover:text-black bg-neutral-100'
                }`}
              >
                All Comments
              </button>
              <button
                onClick={() => setCommentFilter('picks')}
                className={`px-3 py-1 uppercase tracking-wider ${
                  commentFilter === 'picks'
                    ? 'bg-black text-white'
                    : 'text-neutral-600 hover:text-black bg-neutral-100'
                }`}
              >
                Times Picks
              </button>
            </div>
          </div>

          {/* New Comment Submission Box */}
          <form onSubmit={handleAddComment} className="p-4 bg-[#f7f7f7] border border-[#e2e2e2] mb-6 space-y-3">
            <div className="font-sans-nyt text-xs font-bold uppercase tracking-wider text-neutral-700">
              Join the Discussion
            </div>
            <textarea
              rows={3}
              required
              placeholder="What are your thoughts on this story? The Times moderates comments to foster civilized discourse."
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              className="w-full bg-white border border-neutral-300 p-2.5 text-xs font-serif-nyt text-neutral-900 focus:border-black outline-none"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Your Name (e.g. Jane Doe)"
                value={newCommentAuthor}
                onChange={(e) => setNewCommentAuthor(e.target.value)}
                className="bg-white border border-neutral-300 p-2 text-xs font-sans-nyt focus:border-black outline-none"
              />
              <input
                type="text"
                placeholder="Your City, State (e.g. Chicago, IL)"
                value={newCommentCity}
                onChange={(e) => setNewCommentCity(e.target.value)}
                className="bg-white border border-neutral-300 p-2 text-xs font-sans-nyt focus:border-black outline-none"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-black text-white px-5 py-2 font-sans-nyt text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
              >
                Submit Comment
              </button>
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-4 divide-y divide-[#e2e2e2]">
            {displayedComments.length > 0 ? (
              displayedComments.map((c) => (
                <div key={c.id} className="pt-4 first:pt-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-sans-nyt font-bold text-xs text-neutral-900">
                        {c.author}
                      </span>
                      <span className="text-neutral-400 text-xs">•</span>
                      <span className="font-sans-nyt text-[11px] text-neutral-500">
                        {c.location}
                      </span>
                      {c.isTimesPick && (
                        <span className="bg-neutral-900 text-white font-sans-nyt font-bold text-[9px] uppercase px-1.5 py-0.5 tracking-wider">
                          NYT Pick
                        </span>
                      )}
                    </div>
                    <span className="font-sans-nyt text-[11px] text-neutral-400">
                      {c.timeAgo}
                    </span>
                  </div>
                  <p className="font-serif-nyt text-sm text-neutral-800 leading-relaxed mt-1">
                    {c.content}
                  </p>
                  <div className="flex items-center space-x-4 mt-2 font-sans-nyt text-xs text-neutral-500">
                    <button
                      onClick={() => handleLikeComment(c.id)}
                      className="flex items-center space-x-1 hover:text-black transition-colors"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{c.likes}</span>
                    </button>
                    <button className="hover:text-black transition-colors">Reply</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-6 text-center text-xs font-sans-nyt text-neutral-500">
                No comments in this view.
              </div>
            )}
          </div>
        </section>
      </article>
    </div>
  );
};
