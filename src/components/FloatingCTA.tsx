import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [creatorCount, setCreatorCount] = useState(14329);
  const [increment, setIncrement] = useState<number | null>(null);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Animate the creator count
    const interval = setInterval(() => {
      const incrementValue = Math.floor(Math.random() * 3);
      if (incrementValue > 0) {
        setCreatorCount(prev => prev + incrementValue);
        setIncrement(incrementValue);
        setShowBubble(true);
        
        // Hide bubble after animation
        setTimeout(() => {
          setShowBubble(false);
        }, 2000);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 shadow-2xl">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3 relative">
          <span className="text-lg">🚀</span>
          <span className="font-medium relative">
            {creatorCount.toLocaleString()} creators are already earning with Insty!
            {showBubble && increment && (
              <span className="absolute -top-8 left-0 text-sm font-bold text-green-300 animate-[bubble_2s_ease-out_forwards] pointer-events-none">
                +{increment}
              </span>
            )}
          </span>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button 
            variant="secondary" 
            className="bg-white text-orange-600 hover:bg-gray-100 font-bold"
          >
            Get My Free Links - Only 30s
          </Button>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;