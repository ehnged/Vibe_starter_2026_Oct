import React, { useState, useEffect } from 'react';
import { X, RotateCcw, Award } from 'lucide-react';

interface WordleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TARGET_WORDS = ['TIMES', 'PRESS', 'AGENT', 'BROAD', 'PRINT', 'STORY', 'MEDIA'];
const SOLUTION = 'TIMES';
const MAX_GUESSES = 6;
const WORD_LENGTH = 5;

export const WordleModal: React.FC<WordleModalProps> = ({ isOpen, onClose }) => {
  const [solution] = useState(SOLUTION);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [gameStatus, setGameStatus] = useState<'IN_PROGRESS' | 'WON' | 'LOST'>('IN_PROGRESS');
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameStatus !== 'IN_PROGRESS') return;

      if (e.key === 'Enter') {
        handleEnter();
      } else if (e.key === 'Backspace') {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (/^[a-zA-Z]$/.test(e.key) && currentGuess.length < WORD_LENGTH) {
        setCurrentGuess((prev) => (prev + e.key.toUpperCase()).slice(0, WORD_LENGTH));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentGuess, gameStatus, guesses]);

  const handleEnter = () => {
    if (currentGuess.length !== WORD_LENGTH) {
      showMessage('Not enough letters');
      return;
    }

    const nextGuesses = [...guesses, currentGuess];
    setGuesses(nextGuesses);
    setCurrentGuess('');

    if (currentGuess === solution) {
      setGameStatus('WON');
      showMessage('Magnificent!');
    } else if (nextGuesses.length >= MAX_GUESSES) {
      setGameStatus('LOST');
      showMessage(`The word was ${solution}`);
    }
  };

  const handleKeyClick = (char: string) => {
    if (gameStatus !== 'IN_PROGRESS') return;

    if (char === 'ENTER') {
      handleEnter();
    } else if (char === 'DEL') {
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else if (currentGuess.length < WORD_LENGTH) {
      setCurrentGuess((prev) => (prev + char).slice(0, WORD_LENGTH));
    }
  };

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  const resetGame = () => {
    setGuesses([]);
    setCurrentGuess('');
    setGameStatus('IN_PROGRESS');
    setMessage('');
  };

  if (!isOpen) return null;

  // Keyboard status
  const keyStatus: Record<string, 'correct' | 'present' | 'absent'> = {};
  guesses.forEach((guess) => {
    guess.split('').forEach((letter, i) => {
      if (solution[i] === letter) {
        keyStatus[letter] = 'correct';
      } else if (solution.includes(letter) && keyStatus[letter] !== 'correct') {
        keyStatus[letter] = 'present';
      } else if (!solution.includes(letter)) {
        keyStatus[letter] = 'absent';
      }
    });
  });

  const getTileColor = (letter: string, index: number, isSubmitted: boolean) => {
    if (!isSubmitted) return 'border-[#d3d6da] bg-white text-black';
    if (solution[index] === letter) return 'bg-[#6aaa64] border-[#6aaa64] text-white';
    if (solution.includes(letter)) return 'bg-[#c9b458] border-[#c9b458] text-white';
    return 'bg-[#787c7e] border-[#787c7e] text-white';
  };

  const getKeyBg = (char: string) => {
    const status = keyStatus[char];
    if (status === 'correct') return 'bg-[#6aaa64] text-white';
    if (status === 'present') return 'bg-[#c9b458] text-white';
    if (status === 'absent') return 'bg-[#787c7e] text-white';
    return 'bg-[#d3d6da] text-[#121212] hover:bg-[#c2c5c9]';
  };

  const keyboardRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-md bg-white border border-[#121212] shadow-2xl p-5 flex flex-col items-center">
        {/* Header */}
        <div className="w-full flex items-center justify-between pb-3 border-b border-[#e2e2e2]">
          <div className="flex items-center space-x-2">
            <span className="font-sans-nyt text-xs font-bold uppercase tracking-widest text-[#727272]">NYT Games</span>
          </div>
          <h2 className="font-serif-nyt text-2xl font-bold tracking-tight text-center">Wordle</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={resetGame}
              className="p-1 hover:bg-[#f1f1f1] transition-colors rounded text-neutral-600"
              title="Reset Puzzle"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:bg-[#f1f1f1] transition-colors rounded text-neutral-600"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toast Message */}
        {message && (
          <div className="absolute top-16 z-20 bg-black text-white px-4 py-2 font-sans-nyt text-xs font-bold uppercase tracking-wider rounded shadow-lg animate-bounce">
            {message}
          </div>
        )}

        {/* Wordle Grid */}
        <div className="grid grid-rows-6 gap-1.5 my-4">
          {Array.from({ length: MAX_GUESSES }).map((_, rowIndex) => {
            const isCurrentRow = rowIndex === guesses.length;
            const isSubmitted = rowIndex < guesses.length;
            const guess = isSubmitted ? guesses[rowIndex] : isCurrentRow ? currentGuess : '';

            return (
              <div key={rowIndex} className="grid grid-cols-5 gap-1.5">
                {Array.from({ length: WORD_LENGTH }).map((_, colIndex) => {
                  const letter = guess[colIndex] || '';
                  const colorClass = getTileColor(letter, colIndex, isSubmitted);

                  return (
                    <div
                      key={colIndex}
                      className={`w-12 h-12 border-2 flex items-center justify-center font-sans-nyt text-2xl font-bold uppercase select-none transition-all duration-300 ${colorClass}`}
                    >
                      {letter}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Success or Failure Announcement */}
        {gameStatus !== 'IN_PROGRESS' && (
          <div className="mb-3 text-center p-3 bg-[#f7f7f7] border border-[#e2e2e2] w-full">
            <div className="flex items-center justify-center space-x-1.5 text-sm font-bold font-sans-nyt">
              <Award className="w-4 h-4 text-[#6aaa64]" />
              <span>{gameStatus === 'WON' ? `Genius! Solved in ${guesses.length}/6 tries` : `Game Over! The word was ${solution}`}</span>
            </div>
            <button
              onClick={resetGame}
              className="mt-2 bg-black text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 hover:bg-neutral-800 transition-colors"
            >
              Play Again
            </button>
          </div>
        )}

        {/* Virtual Keyboard */}
        <div className="w-full max-w-sm space-y-1.5 select-none pt-1">
          {keyboardRows.map((row, rIndex) => (
            <div key={rIndex} className="flex justify-center space-x-1">
              {row.map((char) => (
                <button
                  key={char}
                  onClick={() => handleKeyClick(char)}
                  className={`h-11 ${
                    char === 'ENTER' || char === 'DEL' ? 'px-2.5 text-[11px]' : 'w-8 text-sm'
                  } font-bold font-sans-nyt rounded-xs uppercase transition-colors active:scale-95 ${getKeyBg(char)}`}
                >
                  {char}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
