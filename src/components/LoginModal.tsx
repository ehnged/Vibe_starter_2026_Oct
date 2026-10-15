import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoggedIn: (email: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSuccess(true);
    setTimeout(() => {
      onLoggedIn(email);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-md bg-white border border-[#121212] shadow-2xl p-6 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-[#e2e2e2]">
          <h2 className="font-serif-nyt text-2xl font-bold tracking-tight text-neutral-900">
            Log in to The Times
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-[#f1f1f1] text-neutral-600 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center space-y-2">
            <div className="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-5 h-5" />
            </div>
            <p className="font-serif-nyt font-bold text-lg">Logged in successfully</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="py-4 space-y-4">
            <div>
              <label className="block font-sans-nyt text-xs font-bold text-neutral-800 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-neutral-400 p-2.5 font-sans-nyt text-sm focus:border-black outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 font-sans-nyt font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              Continue
            </button>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setEmail('reader@nytimes.com');
                  setIsSuccess(true);
                  setTimeout(() => {
                    onLoggedIn('reader@nytimes.com');
                    onClose();
                  }, 800);
                }}
                className="text-xs font-sans-nyt text-neutral-500 hover:text-black underline"
              >
                Or sign in with Demo Times Account
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
