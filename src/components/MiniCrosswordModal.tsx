import React, { useState } from 'react';
import { X, RotateCcw, CheckCircle } from 'lucide-react';

interface MiniCrosswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 5x5 Mini Crossword Grid
// Row 0: N E W S .
// Row 1: E D I T S
// Row 2: W I R E D
// Row 3: S T A T E
// Row 4: . S E E K
const SOLUTION_GRID = [
  ['N', 'E', 'W', 'S', '#'],
  ['E', 'D', 'I', 'T', 'S'],
  ['W', 'I', 'R', 'E', 'D'],
  ['S', 'T', 'A', 'T', 'E'],
  ['#', 'S', 'E', 'E', 'K']
];

const CLUES_ACROSS = [
  { num: 1, text: 'The Times specialty' },
  { num: 5, text: 'Polishes broadsheet copy' },
  { num: 6, text: 'Tech magazine name' },
  { num: 7, text: 'Condition or Commonwealth' },
  { num: 8, text: 'Search for' }
];

const CLUES_DOWN = [
  { num: 1, text: 'Opposite of old' },
  { num: 2, text: 'Edit or write down' },
  { num: 3, text: 'Electrical strands' },
  { num: 4, text: 'Broadsheet material' },
  { num: 5, text: 'Compass point' }
];

export const MiniCrosswordModal: React.FC<MiniCrosswordModalProps> = ({ isOpen, onClose }) => {
  const [grid, setGrid] = useState<string[][]>(() =>
    SOLUTION_GRID.map((row) => row.map((cell) => (cell === '#' ? '#' : '')))
  );
  const [status, setStatus] = useState<string>('');

  if (!isOpen) return null;

  const handleCellChange = (r: number, c: number, val: string) => {
    if (SOLUTION_GRID[r][c] === '#') return;
    const char = val.slice(-1).toUpperCase();
    const newGrid = grid.map((row, ri) =>
      row.map((cell, ci) => (ri === r && ci === c ? char : cell))
    );
    setGrid(newGrid);
  };

  const handleCheck = () => {
    let allCorrect = true;
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (SOLUTION_GRID[r][c] !== '#' && grid[r][c] !== SOLUTION_GRID[r][c]) {
          allCorrect = false;
        }
      }
    }
    if (allCorrect) {
      setStatus('Congratulations! You completed The Mini!');
    } else {
      setStatus('Some letters are incorrect. Keep trying!');
      setTimeout(() => setStatus(''), 2500);
    }
  };

  const handleReset = () => {
    setGrid(SOLUTION_GRID.map((row) => row.map((cell) => (cell === '#' ? '#' : ''))));
    setStatus('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-lg bg-white border border-[#121212] shadow-2xl p-5 flex flex-col">
        {/* Header */}
        <div className="w-full flex items-center justify-between pb-3 border-b border-[#e2e2e2]">
          <span className="font-sans-nyt text-xs font-bold uppercase tracking-widest text-[#727272]">NYT Games</span>
          <h2 className="font-serif-nyt text-2xl font-bold tracking-tight text-center">The Mini Crossword</h2>
          <div className="flex items-center space-x-2">
            <button onClick={handleReset} className="p-1 hover:bg-[#f1f1f1] text-neutral-600 rounded" title="Reset">
              <RotateCcw className="w-4 h-4" />
            </button>
            <button onClick={onClose} className="p-1 hover:bg-[#f1f1f1] text-neutral-600 rounded" title="Close">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {status && (
          <div className="text-center py-2 px-3 mt-2 bg-neutral-900 text-white font-sans-nyt text-xs font-bold uppercase tracking-wider">
            {status}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-5 my-4 items-center md:items-start justify-center">
          {/* 5x5 Grid */}
          <div className="grid grid-rows-5 gap-0.5 bg-black p-0.5 border border-black shadow">
            {grid.map((row, r) => (
              <div key={r} className="grid grid-cols-5 gap-0.5">
                {row.map((cell, c) => {
                  const isBlocked = cell === '#';
                  return isBlocked ? (
                    <div key={c} className="w-10 h-10 bg-black" />
                  ) : (
                    <div key={c} className="relative w-10 h-10 bg-white">
                      <input
                        type="text"
                        maxLength={1}
                        value={cell}
                        onChange={(e) => handleCellChange(r, c, e.target.value)}
                        className="w-full h-full text-center font-sans-nyt font-bold text-lg uppercase focus:bg-amber-100 outline-none"
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Clues */}
          <div className="text-xs font-sans-nyt flex-1 space-y-3">
            <div>
              <div className="font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-300 pb-0.5 mb-1">
                Across
              </div>
              <ul className="space-y-1 text-neutral-700">
                {CLUES_ACROSS.map((c) => (
                  <li key={c.num}>
                    <span className="font-bold mr-1">{c.num}.</span> {c.text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-300 pb-0.5 mb-1">
                Down
              </div>
              <ul className="space-y-1 text-neutral-700">
                {CLUES_DOWN.map((c) => (
                  <li key={c.num}>
                    <span className="font-bold mr-1">{c.num}.</span> {c.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-3 border-t border-[#e2e2e2]">
          <button
            onClick={handleCheck}
            className="flex items-center space-x-1.5 bg-black text-white px-4 py-2 font-sans-nyt text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Check Puzzle</span>
          </button>
        </div>
      </div>
    </div>
  );
};
