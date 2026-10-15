import React, { useState } from 'react';
import { X, Clock, Users, Star, Bookmark, Printer, Share2, Check } from 'lucide-react';

interface CookingRecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookingRecipeModal: React.FC<CookingRecipeModalProps> = ({ isOpen, onClose }) => {
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([]);
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const ingredients = [
    '4 skin-on center-cut salmon fillets (approx. 6 oz each)',
    '1 ½ teaspoons coarse kosher salt, plus more to taste',
    '½ teaspoon freshly cracked black pepper',
    '2 tablespoons extra-virgin olive oil',
    '3 tablespoons unsalted European-style butter',
    '4 garlic cloves, thinly sliced',
    '1 medium lemon, halved (one half sliced into rounds, the other kept for squeezing)',
    '¼ cup fresh dill fronds, roughly chopped',
    'Fleur de sel or flaky sea salt, for finishing'
  ];

  const steps = [
    {
      title: 'Dry and Season',
      instruction:
        'Pat salmon thoroughly dry on both sides with paper towels. Season generously with kosher salt and pepper. Allow the fillets to rest at room temperature for 15 minutes to ensure an even sear.'
    },
    {
      title: 'Heat the Skillet',
      instruction:
        'Set a large 12-inch cast-iron skillet over medium-high heat until a drop of water evaporates instantly. Add olive oil and swirl to coat the entire surface.'
    },
    {
      title: 'Crisp the Skin',
      instruction:
        'Carefully lay fillets skin-side down, pressing gently with a fish spatula for 10 seconds to ensure full skin contact. Cook undisturbed for 5 to 6 minutes, until the skin is deep golden and crisp and the flesh has turned opaque about two-thirds of the way up the sides.'
    },
    {
      title: 'Butter Baste and Aromatics',
      instruction:
        'Carefully flip the fillets. Immediately drop butter, sliced garlic, and lemon rounds into the pan around the salmon. Tilt the skillet slightly and use a large spoon to baste the foaming garlic-butter continuously over the salmon for 2 minutes.'
    },
    {
      title: 'Finish and Serve',
      instruction:
        'Squeeze the remaining lemon half over the sizzling fish, scatter fresh dill on top, and sprinkle with flaky sea salt. Serve immediately with warm crusty bread or steamed jasmine rice.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-2xl bg-white border border-[#121212] shadow-2xl p-6 flex flex-col max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#e2e2e2]">
          <span className="font-sans-nyt text-xs font-bold uppercase tracking-widest text-[#b32400]">
            NYT Cooking • Editor’s Pick
          </span>
          <button onClick={onClose} className="p-1 hover:bg-[#f1f1f1] text-neutral-600 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Recipe Title & Meta */}
        <div className="py-4 border-b border-[#e2e2e2]">
          <h2 className="font-serif-nyt text-3xl font-bold text-black tracking-tight leading-tight">
            Crispy Seared Salmon with Garlic, Butter, and Lemon
          </h2>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-xs font-sans-nyt text-neutral-600">
            <span className="font-bold text-black">By Emily Weinstein</span>
            <span>•</span>
            <div className="flex items-center text-amber-500 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-500 mr-1" />
              <span>4.9 (1,842 ratings)</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-neutral-400" />
              <span>25 minutes</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <Users className="w-3.5 h-3.5 mr-1 text-neutral-400" />
              <span>4 servings</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center space-x-3 mt-4">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 border text-xs font-sans-nyt font-bold uppercase tracking-wider rounded-xs transition-colors ${
                isSaved ? 'bg-black text-white border-black' : 'border-neutral-300 hover:bg-neutral-100 text-black'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
              <span>{isSaved ? 'In Recipe Box' : 'Save to Recipe Box'}</span>
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center space-x-1 px-3 py-1.5 border border-neutral-300 hover:bg-neutral-100 text-xs font-sans-nyt font-bold uppercase tracking-wider rounded-xs text-neutral-700"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="flex items-center space-x-1 px-3 py-1.5 border border-neutral-300 hover:bg-neutral-100 text-xs font-sans-nyt font-bold uppercase tracking-wider rounded-xs text-neutral-700"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Hero Food Photo */}
        <div className="my-4">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS6tDqRVy_ofSg3w49hFqNMwV4ycFLaTUh7-XwC8w1a_0yYoC6ujbeb7gJP29gQOCjveIB5jrUOr1dwhiy8cS4iseVbCVyJ0Zftf0ImzzIoyQuiVnIxtmE41U_2Xs86PM62K1t_98A88qQc_mMOCGmz-lRL38dL0IAZ3xH5ZniJ0S9OvU5OIR4ekXB4H-PCG8FhfCamdAilPBHQPj-zqYboO-wTNxchGK6Eo2tBIPOgLfy3X4LggXB"
            alt="Seared crispy salmon in cast iron skillet"
            className="w-full h-56 object-cover border border-[#e2e2e2]"
          />
          <p className="font-serif-nyt text-xs text-neutral-500 italic mt-1.5">
            The high heat of cast iron ensures ultra-crispy skin while the butter baste locks in rich moisture.
          </p>
        </div>

        {/* Ingredients & Prep */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-2">
          {/* Ingredients Column */}
          <div className="md:col-span-5 bg-neutral-50 p-4 border border-neutral-200">
            <h3 className="font-sans-nyt text-xs font-bold uppercase tracking-widest text-neutral-800 mb-2 border-b border-neutral-300 pb-1">
              Ingredients
            </h3>
            <p className="font-sans-nyt text-[11px] text-neutral-500 mb-2">Check items as you prep:</p>
            <ul className="space-y-2 text-xs font-sans-nyt text-neutral-800">
              {ingredients.map((ing, idx) => (
                <li
                  key={idx}
                  onClick={() => toggleIngredient(idx)}
                  className={`cursor-pointer flex items-start space-x-2 select-none ${
                    checkedIngredients.includes(idx) ? 'line-through text-neutral-400' : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checkedIngredients.includes(idx)}
                    onChange={() => {}}
                    className="mt-0.5 rounded text-black focus:ring-0"
                  />
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preparation Column */}
          <div className="md:col-span-7 space-y-4">
            <h3 className="font-sans-nyt text-xs font-bold uppercase tracking-widest text-neutral-800 border-b border-neutral-200 pb-1">
              Preparation
            </h3>
            <ol className="space-y-4">
              {steps.map((step, idx) => (
                <li key={idx} className="font-serif-nyt text-sm">
                  <span className="font-sans-nyt font-bold text-xs uppercase tracking-wider block text-neutral-900 mb-0.5">
                    Step {idx + 1} — {step.title}
                  </span>
                  <p className="text-neutral-800 leading-relaxed">{step.instruction}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Chef's Note */}
        <div className="mt-4 p-4 bg-[#f9f8f6] border-l-2 border-amber-500 font-serif-nyt text-xs text-neutral-700 leading-relaxed">
          <span className="font-sans-nyt font-bold text-xs uppercase text-amber-900 block mb-1">
            Chef’s Wine Pairing Note
          </span>
          A crisp, minerally dry white such as a Sancerre, Chablis, or an Oregon Pinot Gris provides the perfect acidic counterbalance to the rich pan-basted butter sauce.
        </div>
      </div>
    </div>
  );
};
