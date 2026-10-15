import React, { useState } from 'react';
import { X, Shuffle, RotateCcw } from 'lucide-react';

interface ConnectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Group {
  category: string;
  words: string[];
  color: string;
  bgColor: string;
}

const GROUPS: Group[] = [
  {
    category: 'PARTS OF A NEWSPAPER',
    words: ['MASTHEAD', 'BYLINE', 'HEADLINE', 'EDITORIAL'],
    color: '#000000',
    bgColor: '#f9df6d'
  },
  {
    category: 'TYPES OF SHIRTS',
    words: ['FLANNEL', 'OXFORD', 'POLO', 'HENLEY'],
    color: '#000000',
    bgColor: '#a0c35a'
  },
  {
    category: 'COMPUTER COMPONENTS',
    words: ['MEMORY', 'MONITOR', 'KEYBOARD', 'CHIP'],
    color: '#000000',
    bgColor: '#b0c4ef'
  },
  {
    category: 'THINGS WITH LEGS',
    words: ['TABLE', 'TRIPOD', 'COMPASS', 'JOURNEY'],
    color: '#ffffff',
    bgColor: '#ba81c5'
  }
];

export const ConnectionsModal: React.FC<ConnectionsModalProps> = ({ isOpen, onClose }) => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [solvedGroups, setSolvedGroups] = useState<Group[]>([]);
  const [remainingWords, setRemainingWords] = useState<string[]>(() => {
    const all = GROUPS.flatMap((g) => g.words);
    return all.sort(() => Math.random() - 0.5);
  });
  const [mistakes, setMistakes] = useState<number>(4);
  const [message, setMessage] = useState<string>('');

  if (!isOpen) return null;

  const handleWordClick = (word: string) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter((w) => w !== word));
    } else {
      if (selectedWords.length < 4) {
        setSelectedWords([...selectedWords, word]);
      }
    }
  };

  const handleShuffle = () => {
    setRemainingWords([...remainingWords].sort(() => Math.random() - 0.5));
  };

  const handleDeselectAll = () => {
    setSelectedWords([]);
  };

  const handleSubmit = () => {
    if (selectedWords.length !== 4) return;

    // Check if selectedWords match any group
    const matchedGroup = GROUPS.find((group) => {
      return group.words.every((w) => selectedWords.includes(w));
    });

    if (matchedGroup) {
      setSolvedGroups([...solvedGroups, matchedGroup]);
      setRemainingWords(remainingWords.filter((w) => !matchedGroup.words.includes(w)));
      setSelectedWords([]);
      setMessage(`Found: ${matchedGroup.category}!`);
      setTimeout(() => setMessage(''), 2500);
    } else {
      const newMistakes = mistakes - 1;
      setMistakes(newMistakes);
      setMessage('Next time!');
      setTimeout(() => setMessage(''), 2000);
      if (newMistakes <= 0) {
        setMessage('Game Over! Better luck tomorrow.');
      }
    }
  };

  const handleReset = () => {
    const all = GROUPS.flatMap((g) => g.words);
    setRemainingWords(all.sort(() => Math.random() - 0.5));
    setSolvedGroups([]);
    setSelectedWords([]);
    setMistakes(4);
    setMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-lg bg-white border border-[#121212] shadow-2xl p-5 flex flex-col">
        {/* Header */}
        <div className="w-full flex items-center justify-between pb-3 border-b border-[#e2e2e2]">
          <span className="font-sans-nyt text-xs font-bold uppercase tracking-widest text-[#727272]">NYT Games</span>
          <h2 className="font-serif-nyt text-2xl font-bold tracking-tight text-center">Connections</h2>
          <div className="flex items-center space-x-2">
            <button onClick={handleReset} className="p-1 hover:bg-[#f1f1f1] text-neutral-600 rounded" title="Reset">
              <RotateCcw className="w-4 h-4" />
            </button>
            <button onClick={onClose} className="p-1 hover:bg-[#f1f1f1] text-neutral-600 rounded" title="Close">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <p className="font-sans-nyt text-xs text-center text-neutral-600 my-2">
          Create four groups of four!
        </p>

        {message && (
          <div className="text-center py-1.5 px-3 mb-2 bg-black text-white font-sans-nyt text-xs font-bold uppercase tracking-wider rounded mx-auto">
            {message}
          </div>
        )}

        {/* Solved Groups Banners */}
        <div className="space-y-1.5 mb-2">
          {solvedGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-3 text-center rounded font-sans-nyt animate-fade-in"
              style={{ backgroundColor: group.bgColor, color: group.color }}
            >
              <div className="font-bold text-xs uppercase tracking-wide">{group.category}</div>
              <div className="text-[11px] font-medium mt-0.5">{group.words.join(', ')}</div>
            </div>
          ))}
        </div>

        {/* Remaining Words Grid */}
        {remainingWords.length > 0 ? (
          <div className="grid grid-cols-4 gap-2 my-2">
            {remainingWords.map((word) => {
              const isSelected = selectedWords.includes(word);
              return (
                <button
                  key={word}
                  onClick={() => handleWordClick(word)}
                  className={`h-16 p-1 text-center flex items-center justify-center font-sans-nyt text-xs font-bold tracking-tight rounded border transition-all ${
                    isSelected
                      ? 'bg-[#5a594e] text-white border-[#5a594e]'
                      : 'bg-[#efefe6] hover:bg-[#e6e6dc] text-black border-transparent'
                  }`}
                >
                  {word}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-6 font-serif-nyt text-lg font-bold">
            Splendid! You solved all categories.
          </div>
        )}

        {/* Mistakes remaining */}
        <div className="flex items-center justify-center space-x-1.5 my-3 text-xs font-sans-nyt text-neutral-600">
          <span>Mistakes remaining:</span>
          <div className="flex space-x-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${i < mistakes ? 'bg-[#5a594e]' : 'bg-neutral-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-center space-x-3 pt-2">
          <button
            onClick={handleShuffle}
            disabled={remainingWords.length === 0}
            className="flex items-center space-x-1 border border-neutral-400 px-3 py-1.5 text-xs font-bold font-sans-nyt uppercase rounded-full hover:bg-neutral-100 disabled:opacity-40"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Shuffle</span>
          </button>
          <button
            onClick={handleDeselectAll}
            disabled={selectedWords.length === 0}
            className="border border-neutral-400 px-3 py-1.5 text-xs font-bold font-sans-nyt uppercase rounded-full hover:bg-neutral-100 disabled:opacity-40"
          >
            Deselect All
          </button>
          <button
            onClick={handleSubmit}
            disabled={selectedWords.length !== 4 || mistakes <= 0}
            className="bg-black text-white border border-black px-4 py-1.5 text-xs font-bold font-sans-nyt uppercase rounded-full hover:bg-neutral-800 disabled:opacity-40"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
