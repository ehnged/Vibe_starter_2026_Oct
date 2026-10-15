import React, { useState } from 'react';
import { X, RotateCcw, Shuffle, Delete, Award, Check } from 'lucide-react';

interface SpellingBeeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CENTER_LETTER = 'T';
const OUTER_LETTERS = ['A', 'C', 'I', 'O', 'N', 'P'];
const ALL_LETTERS = [CENTER_LETTER, ...OUTER_LETTERS];

const VALID_WORDS: Record<string, number> = {
  ACTION: 6,
  CAPTAIN: 7,
  COMPACT: 7,
  CONTACT: 7,
  OPINION: 7,
  PATIO: 5,
  PAINT: 5,
  PATIENT: 7,
  POTION: 6,
  POINT: 5,
  TOPIC: 5,
  PINT: 4,
  TACT: 4,
  COAT: 4,
  COOT: 4,
  TITAN: 5,
  ATTIC: 5,
  POTATO: 6,
  TAPIR: 5,
  CITATION: 8,
  CANTO: 5,
  TACTIC: 6
};

const RANKS = [
  { name: 'Beginner', threshold: 0 },
  { name: 'Good', threshold: 10 },
  { name: 'Moving Up', threshold: 20 },
  { name: 'Solid', threshold: 35 },
  { name: 'Great', threshold: 50 },
  { name: 'Amazing', threshold: 75 },
  { name: 'Genius', threshold: 100 }
];

export const SpellingBeeModal: React.FC<SpellingBeeModalProps> = ({ isOpen, onClose }) => {
  const [currentWord, setCurrentWord] = useState('');
  const [foundWords, setFoundWords] = useState<string[]>(['ACTION', 'TOPIC']);
  const [score, setScore] = useState(11);
  const [message, setMessage] = useState('');
  const [outerLetters, setOuterLetters] = useState(OUTER_LETTERS);

  if (!isOpen) return null;

  const currentRank = [...RANKS].reverse().find((r) => score >= r.threshold) || RANKS[0];

  const handleLetterClick = (letter: string) => {
    if (currentWord.length < 16) {
      setCurrentWord((prev) => prev + letter);
    }
  };

  const handleDelete = () => {
    setCurrentWord((prev) => prev.slice(0, -1));
  };

  const handleShuffle = () => {
    setOuterLetters([...outerLetters].sort(() => Math.random() - 0.5));
  };

  const handleEnter = () => {
    if (currentWord.length < 4) {
      flashMessage('Too short');
      return;
    }

    if (!currentWord.includes(CENTER_LETTER)) {
      flashMessage(`Missing center letter (${CENTER_LETTER})`);
      return;
    }

    if (foundWords.includes(currentWord)) {
      flashMessage('Already found');
      return;
    }

    const points = VALID_WORDS[currentWord];
    if (points) {
      const isPangram = ALL_LETTERS.every((l) => currentWord.includes(l));
      const bonus = isPangram ? 7 : 0;
      const totalPoints = points + bonus;

      setFoundWords([currentWord, ...foundWords]);
      setScore((prev) => prev + totalPoints);
      setCurrentWord('');

      if (isPangram) {
        flashMessage('Pangram! +7 Bonus Points');
      } else {
        flashMessage(`Nice! +${totalPoints} points`);
      }
    } else {
      flashMessage('Not in word list');
    }
  };

  const flashMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-lg bg-white border border-[#121212] shadow-2xl p-6 flex flex-col items-center">
        {/* Header */}
        <div className="w-full flex items-center justify-between pb-3 border-b border-[#e2e2e2]">
          <span className="font-sans-nyt text-xs font-bold uppercase tracking-widest text-neutral-500">NYT Games</span>
          <h2 className="font-serif-nyt text-2xl font-bold tracking-tight text-center">Spelling Bee</h2>
          <button onClick={onClose} className="p-1 hover:bg-[#f1f1f1] text-neutral-600 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Rank Progress Bar */}
        <div className="w-full mt-3 mb-2 font-sans-nyt">
          <div className="flex justify-between items-center text-xs font-bold mb-1">
            <span className="text-amber-800">{currentRank.name}</span>
            <span className="text-neutral-500 tabular-nums">{score} points</span>
          </div>
          <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden flex">
            <div
              className="bg-amber-400 h-full transition-all duration-300"
              style={{ width: `${Math.min(100, (score / 100) * 100)}%` }}
            />
          </div>
        </div>

        {/* Word Display with message banner */}
        <div className="h-12 flex items-center justify-center font-sans-nyt text-2xl font-bold tracking-widest uppercase my-2">
          {message ? (
            <span className="bg-black text-white text-xs px-3 py-1.5 rounded uppercase font-bold tracking-wider animate-fade-in">
              {message}
            </span>
          ) : (
            <div className="flex items-center">
              {currentWord ? (
                currentWord.split('').map((char, i) => (
                  <span
                    key={i}
                    className={char === CENTER_LETTER ? 'text-amber-500 font-extrabold' : 'text-neutral-900'}
                  >
                    {char}
                  </span>
                ))
              ) : (
                <span className="text-neutral-300 text-lg font-normal tracking-normal">Type or click letters</span>
              )}
            </div>
          )}
        </div>

        {/* Honeycomb Hex Cells */}
        <div className="relative w-56 h-56 my-2 select-none">
          {/* Center Hex Letter */}
          <button
            onClick={() => handleLetterClick(CENTER_LETTER)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-amber-400 hover:bg-amber-500 text-black font-sans-nyt font-extrabold text-2xl rounded-full flex items-center justify-center shadow transition-transform active:scale-90"
          >
            {CENTER_LETTER}
          </button>

          {/* Outer Letters arranged in circle */}
          {outerLetters.map((letter, index) => {
            const angle = (index * 60 * Math.PI) / 180;
            const radius = 64; // distance from center
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <button
                key={letter}
                onClick={() => handleLetterClick(letter)}
                style={{
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                }}
                className="absolute top-1/2 left-1/2 w-14 h-14 bg-[#e6e6e6] hover:bg-[#d8d8d8] text-black font-sans-nyt font-bold text-xl rounded-full flex items-center justify-center shadow-xs transition-transform active:scale-90"
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Controls: Delete, Shuffle, Enter */}
        <div className="flex items-center space-x-3 mt-4 mb-3 font-sans-nyt">
          <button
            onClick={handleDelete}
            className="px-4 py-2 border border-neutral-300 rounded-full text-xs font-bold uppercase hover:bg-neutral-100 transition-colors"
          >
            Delete
          </button>
          <button
            onClick={handleShuffle}
            className="p-2 border border-neutral-300 rounded-full text-neutral-700 hover:bg-neutral-100 transition-colors"
            title="Shuffle letters"
          >
            <Shuffle className="w-4 h-4" />
          </button>
          <button
            onClick={handleEnter}
            className="px-5 py-2 bg-black text-white rounded-full text-xs font-bold uppercase hover:bg-neutral-800 transition-colors"
          >
            Enter
          </button>
        </div>

        {/* Words Found Accordion */}
        <div className="w-full mt-2 pt-3 border-t border-[#e2e2e2] text-xs font-sans-nyt">
          <div className="flex justify-between items-center text-neutral-500 mb-1.5 font-bold">
            <span>You have found {foundWords.length} words</span>
            <span>Center: {CENTER_LETTER}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 max-h-20 overflow-y-auto">
            {foundWords.map((word) => (
              <span key={word} className="bg-neutral-100 px-2 py-0.5 rounded text-[11px] font-medium text-neutral-800">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
