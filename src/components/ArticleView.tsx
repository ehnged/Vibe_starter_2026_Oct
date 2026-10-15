import React, { useState, useEffect, useRef } from 'react';
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
  Type,
  Gift,
  Printer,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Coffee,
  X
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
  const [audioProgress, setAudioProgress] = useState(25);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [theme, setTheme] = useState<'light' | 'sepia' | 'dark'>('light');
  const [comments, setComments] = useState<Comment[]>(article.initialComments || []);
  const [newCommentText, setNewCommentText] = useState('');
  const [newCommentAuthor, setNewCommentAuthor] = useState('');
  const [newCommentCity, setNewCommentCity] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  const [giftCopied, setGiftCopied] = useState(false);
  const [commentFilter, setCommentFilter] = useState<'all' | 'picks'>('all');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Audio timer simulation
  useEffect(() => {
    let interval: any;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 1000 / playbackSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio, playbackSpeed]);

  // Scroll depth tracking
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScrollProgress((window.scrollY / total) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation: Escape to go back
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBack]);

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

  // Article navigation adjacent ids
  const articleList = Object.values(ARTICLES);
  const currentIndex = articleList.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? articleList[currentIndex - 1] : null;
  const nextArticle = currentIndex < articleList.length - 1 ? articleList[currentIndex + 1] : null;

  const themeClasses = {
    light: 'bg-white text-[#121212]',
    sepia: 'bg-[#f8f5ee] text-[#2c2621]',
    dark: 'bg-[#181818] text-[#e0e0e0]'
  }[theme];

  const headerTheme = {
    light: 'bg-white/95 border-[#e2e2e2]',
    sepia: 'bg-[#f4efe5]/95 border-[#e2dacf]',
    dark: 'bg-[#141414]/95 border-[#2c2c2c] text-white'
  }[theme];

  const fontSizeClass = {
    sm: 'text-[16px] leading-[26px]',
    md: 'text-[18px] leading-[32px]',
    lg: 'text-[21px] leading-[36px]'
  }[fontSize];

  const displayedComments = commentFilter === 'picks'
    ? comments.filter((c) => c.isTimesPick)
    : comments;

  return (
    <div className={`min-h-screen ${themeClasses} selection:bg-[#c8c6c5] transition-colors duration-200`}>
      {/* Scroll Depth Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent">
        <div
          className="h-full bg-black transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Top Reader Navigation Bar */}
      <nav className={`sticky top-0 z-40 backdrop-blur-sm border-b px-4 md:px-8 py-2.5 flex items-center justify-between ${headerTheme}`}>
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="flex items-center space-x-1 text-xs font-sans-nyt font-bold uppercase tracking-wider hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Front Page</span>
          </button>
          <span className="text-neutral-400">|</span>
          <span className="hidden sm:inline font-sans-nyt text-[11px] font-bold uppercase tracking-widest opacity-70">
            {article.section}
          </span>
        </div>

        {/* Center Masthead Wordmark */}
        <div className="text-center cursor-pointer" onClick={onBack}>
          <span className="font-masthead text-xl font-bold tracking-tight select-none">
            The New York Times
          </span>
        </div>

        {/* Right Tools & Preferences */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Theme Switcher */}
          <div className="flex items-center border border-neutral-300 dark:border-neutral-700 rounded px-1 py-0.5">
            <button
              onClick={() => setTheme('light')}
              className={`p-1 rounded ${theme === 'light' ? 'bg-neutral-200 text-black' : 'text-neutral-400'}`}
              title="White broadsheet theme"
            >
              <Sun className="w-3 h-3" />
            </button>
            <button
              onClick={() => setTheme('sepia')}
              className={`p-1 rounded ${theme === 'sepia' ? 'bg-[#e7dfd1] text-amber-950 font-bold' : 'text-neutral-400'}`}
              title="Warm paper theme"
            >
              <Coffee className="w-3 h-3" />
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`p-1 rounded ${theme === 'dark' ? 'bg-neutral-800 text-white' : 'text-neutral-400'}`}
              title="Dark broadsheet theme"
            >
              <Moon className="w-3 h-3" />
            </button>
          </div>

          {/* Font Resizer */}
          <div className="hidden sm:flex items-center space-x-1 border border-neutral-300 dark:border-neutral-700 rounded px-1.5 py-0.5 text-xs font-sans-nyt">
            <button
              onClick={() => setFontSize('sm')}
              className={`px-1 font-bold ${fontSize === 'sm' ? 'underline' : 'opacity-50'}`}
              title="Small text"
            >
              A-
            </button>
            <button
              onClick={() => setFontSize('md')}
              className={`px-1 font-bold ${fontSize === 'md' ? 'underline' : 'opacity-50'}`}
              title="Standard text"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('lg')}
              className={`px-1 font-bold ${fontSize === 'lg' ? 'underline' : 'opacity-50'}`}
              title="Large text"
            >
              A+
            </button>
          </div>

          {/* Gift Article Button */}
          <button
            onClick={() => setIsGiftModalOpen(true)}
            className="hidden md:flex items-center space-x-1 px-2 py-1 text-xs font-sans-nyt font-semibold border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
            title="Give this article to friends"
          >
            <Gift className="w-3.5 h-3.5 text-amber-600" />
            <span>Gift Article</span>
          </button>

          {/* Bookmark Button */}
          <button
            onClick={() => onToggleBookmark(article.id)}
            className={`p-1.5 rounded transition-colors ${
              isBookmarked ? 'bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white' : 'hover:opacity-75'
            }`}
            title={isBookmarked ? 'Saved to Bookmarks' : 'Save article'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="p-1.5 hover:opacity-75 rounded transition-colors relative"
            title="Share article link"
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>

          {/* Comment Count Jump */}
          <a
            href="#comments-section"
            className="flex items-center space-x-1 text-xs font-sans-nyt font-medium hover:opacity-80"
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
          <div className="font-sans-nyt text-[11px] font-bold uppercase tracking-widest opacity-70 mb-2">
            {article.kicker}
          </div>
        )}

        {/* Headline */}
        <h1 className="font-serif-nyt text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
          {article.title}
        </h1>

        {/* Deck */}
        <p className="font-serif-nyt text-lg sm:text-xl opacity-90 leading-snug italic mb-6">
          {article.deck}
        </p>

        {/* Author / Date Meta Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-y border-neutral-300 dark:border-neutral-700 py-3 my-6 gap-3">
          <div className="font-sans-nyt text-xs">
            {article.byline && <span className="font-bold block sm:inline">{article.byline}</span>}
            <span className="hidden sm:inline mx-2 opacity-40">•</span>
            <span className="opacity-80">{article.publishedAt}</span>
            {article.readTime && (
              <>
                <span className="mx-2 opacity-40">•</span>
                <span className="opacity-80">{article.readTime}</span>
              </>
            )}
          </div>

          {/* Audio Listen Simulation Bar */}
          <div className="flex items-center space-x-3 bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 px-3 py-1.5 rounded-full self-start sm:self-auto font-sans-nyt text-xs">
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className="flex items-center space-x-1.5 font-bold hover:opacity-80"
            >
              {isPlayingAudio ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pause (1:42 / 6:10)</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Listen to Story</span>
                </>
              )}
            </button>

            {/* Audio waveform visualization */}
            {isPlayingAudio && (
              <div className="flex items-center space-x-0.5 h-3">
                <span className="w-0.5 bg-black dark:bg-white h-full animate-bounce"></span>
                <span className="w-0.5 bg-black dark:bg-white h-2 animate-bounce delay-75"></span>
                <span className="w-0.5 bg-black dark:bg-white h-3.5 animate-bounce delay-150"></span>
                <span className="w-0.5 bg-black dark:bg-white h-2 animate-bounce delay-100"></span>
              </div>
            )}

            <button
              onClick={() => setPlaybackSpeed((s) => (s === 1 ? 1.25 : s === 1.25 ? 1.5 : 1))}
              className="px-1.5 py-0.5 text-[10px] font-bold bg-neutral-200 dark:bg-neutral-700 rounded"
              title="Playback Speed"
            >
              {playbackSpeed}x
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
              className="w-full h-auto max-h-[500px] object-cover border border-neutral-300 dark:border-neutral-700"
            />
            <figcaption className="mt-2 text-xs font-sans-nyt opacity-80 flex flex-col sm:flex-row sm:justify-between">
              <span>{article.caption || article.title}</span>
              {article.photographer && (
                <span className="text-[10px] opacity-60 mt-0.5 sm:mt-0 font-medium">
                  {article.photographer}
                </span>
              )}
            </figcaption>
          </figure>
        )}

        {/* Live Bullet Updates if any */}
        {article.bulletUpdates && article.bulletUpdates.length > 0 && (
          <div className="my-6 p-4 bg-red-50 dark:bg-red-950/20 border-l-2 border-red-600 space-y-2">
            <div className="font-sans-nyt text-xs font-extrabold uppercase tracking-wider text-red-600 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span>Live Updates &amp; Key Developments</span>
            </div>
            <ul className="space-y-1.5 font-sans-nyt text-xs">
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
        <div className={`space-y-6 font-serif-nyt ${fontSizeClass}`}>
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
                  <blockquote className="my-8 py-4 border-y border-neutral-400 dark:border-neutral-600 text-xl sm:text-2xl font-serif-nyt italic text-center leading-snug px-6">
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

        {/* End of article rule */}
        <div className="my-10 text-center">
          <span className="inline-block w-8 h-[2px] bg-neutral-400 dark:bg-neutral-600"></span>
        </div>

        {/* Prev / Next Article Navigation Bar */}
        <div className="my-8 py-4 border-y border-neutral-300 dark:border-neutral-700 flex justify-between items-center text-xs font-sans-nyt">
          {prevArticle ? (
            <button
              onClick={() => onSelectArticle(prevArticle.id)}
              className="flex items-center space-x-1.5 hover:underline text-left max-w-[45%]"
            >
              <ChevronLeft className="w-4 h-4 flex-shrink-0" />
              <div className="truncate">
                <span className="text-[10px] uppercase opacity-60 block">Previous Story</span>
                <span className="font-bold font-serif-nyt text-sm truncate block">{prevArticle.title}</span>
              </div>
            </button>
          ) : <div />}

          {nextArticle && (
            <button
              onClick={() => onSelectArticle(nextArticle.id)}
              className="flex items-center space-x-1.5 hover:underline text-right max-w-[45%]"
            >
              <div className="truncate">
                <span className="text-[10px] uppercase opacity-60 block">Next Story</span>
                <span className="font-bold font-serif-nyt text-sm truncate block">{nextArticle.title}</span>
              </div>
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
            </button>
          )}
        </div>

        {/* Interactive Reader Discussion / Comments Section */}
        <section id="comments-section" className="mt-12 pt-8 border-t border-neutral-300 dark:border-neutral-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif-nyt text-2xl font-bold">
              Comments ({comments.length})
            </h3>
            <div className="flex items-center space-x-2 text-xs font-sans-nyt font-bold">
              <button
                onClick={() => setCommentFilter('all')}
                className={`px-3 py-1 uppercase tracking-wider ${
                  commentFilter === 'all'
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300'
                }`}
              >
                All Comments
              </button>
              <button
                onClick={() => setCommentFilter('picks')}
                className={`px-3 py-1 uppercase tracking-wider ${
                  commentFilter === 'picks'
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300'
                }`}
              >
                Times Picks
              </button>
            </div>
          </div>

          {/* New Comment Submission Box */}
          <form onSubmit={handleAddComment} className="p-4 bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-300 dark:border-neutral-700 mb-6 space-y-3">
            <div className="font-sans-nyt text-xs font-bold uppercase tracking-wider opacity-80">
              Join the Conversation
            </div>
            <textarea
              rows={3}
              required
              placeholder="What are your thoughts on this story? The Times moderates comments to foster civilized discourse."
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              className="w-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 p-2.5 text-xs font-serif-nyt focus:outline-none"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Your Name (e.g. Jane Doe)"
                value={newCommentAuthor}
                onChange={(e) => setNewCommentAuthor(e.target.value)}
                className="bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 p-2 text-xs font-sans-nyt focus:outline-none"
              />
              <input
                type="text"
                placeholder="Your City, State (e.g. Chicago, IL)"
                value={newCommentCity}
                onChange={(e) => setNewCommentCity(e.target.value)}
                className="bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 p-2 text-xs font-sans-nyt focus:outline-none"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 font-sans-nyt text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Submit Comment
              </button>
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-4 divide-y divide-neutral-200 dark:divide-neutral-800">
            {displayedComments.length > 0 ? (
              displayedComments.map((c) => (
                <div key={c.id} className="pt-4 first:pt-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-sans-nyt font-bold text-xs">
                        {c.author}
                      </span>
                      <span className="opacity-40 text-xs">•</span>
                      <span className="font-sans-nyt text-[11px] opacity-70">
                        {c.location}
                      </span>
                      {c.isTimesPick && (
                        <span className="bg-black dark:bg-white text-white dark:text-black font-sans-nyt font-bold text-[9px] uppercase px-1.5 py-0.5 tracking-wider">
                          NYT Pick
                        </span>
                      )}
                    </div>
                    <span className="font-sans-nyt text-[11px] opacity-50">
                      {c.timeAgo}
                    </span>
                  </div>
                  <p className="font-serif-nyt text-sm leading-relaxed mt-1 opacity-90">
                    {c.content}
                  </p>
                  <div className="flex items-center space-x-4 mt-2 font-sans-nyt text-xs opacity-70">
                    <button
                      onClick={() => handleLikeComment(c.id)}
                      className="flex items-center space-x-1 hover:opacity-100 transition-opacity"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{c.likes}</span>
                    </button>
                    <button className="hover:opacity-100 transition-opacity">Reply</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-6 text-center text-xs font-sans-nyt opacity-60">
                No comments in this view.
              </div>
            )}
          </div>
        </section>
      </article>

      {/* Gift Article Modal */}
      {isGiftModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-md bg-white text-black border border-black p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-sans-nyt text-[10px] uppercase font-bold text-neutral-500">
                  Subscriber Benefit
                </span>
                <h3 className="font-serif-nyt text-2xl font-bold">Gift This Article</h3>
              </div>
              <button onClick={() => setIsGiftModalOpen(false)}>
                <X className="w-5 h-5 text-neutral-500" />
              </button>
            </div>
            <p className="font-serif-nyt text-xs text-neutral-600 leading-relaxed">
              Anyone you send this link to can read this full Times story for free, even without an active subscription.
            </p>
            <div className="p-3 bg-neutral-100 border border-neutral-300 font-mono text-xs text-neutral-700 truncate">
              {window.location.href}?gift=nyt_{article.id}
            </div>
            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(`${window.location.href}?gift=nyt_${article.id}`);
                  setGiftCopied(true);
                  setTimeout(() => setGiftCopied(false), 2000);
                }
              }}
              className="w-full bg-black text-white py-2 font-sans-nyt text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 flex items-center justify-center space-x-1"
            >
              {giftCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Gift className="w-4 h-4" />}
              <span>{giftCopied ? 'Gift Link Copied!' : 'Copy Gift Link'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
