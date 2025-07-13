import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, ShoppingCart, Zap, Brain, DollarSign } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
const HeroSection = () => {
  const [username, setUsername] = useState("");
  const realNames = ["sarah", "mike", "alex", "jenny", "david", "emma", "james", "lisa"];
  const {
    text: typewriterText,
    isTyping,
    setIsTyping
  } = useTypewriter({
    words: realNames,
    loop: true,
    delayBetweenWords: 1500,
    typeSpeed: 150,
    deleteSpeed: 100
  });
  const advantages = [{
    icon: CheckCircle,
    text: "Forever Free",
    color: "text-green-500"
  }, {
    icon: ShoppingCart,
    text: "20K+ High-Commission Products",
    color: "text-blue-500"
  }, {
    icon: Zap,
    text: "1-Click AI Storefront",
    color: "text-yellow-500"
  }, {
    icon: Brain,
    text: "Smart Product Picks",
    color: "text-purple-500"
  }, {
    icon: DollarSign,
    text: "Fast Payouts",
    color: "text-green-600"
  }];
  const earnings = ["@MiniTraveler just earned $82.40", "@TechReviewer earned $156.20", "@FoodieBlogger made $94.80", "@FitnessGuru earned $127.60", "@BeautyInfluencer made $203.50"];
  return <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-animate opacity-10"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Headlines */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
              Free Bio Link. Smart Storefront. Real Income
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up">
              <p className="font-semibold text-red-600 mb-2">No offer&earning? No problem!</p>
              <p>
                Insty's AI-powered bio links help creators of ANY size earn money. 
                Share amazon products your audience will love and earn up to 
                <span className="text-primary font-bold"> 30% commissions</span> - completely free.
              </p>
            </div>
          </div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 animate-fade-in">
            {advantages.map((advantage, index) => <div key={index} className="glass-card p-4 rounded-xl hover:scale-105 transition-transform">
                <advantage.icon className={`w-6 h-6 ${advantage.color} mx-auto mb-2`} />
                <p className="text-sm font-medium">{advantage.text}</p>
              </div>)}
          </div>

          {/* URL Input */}
          <div className="max-w-md mx-auto mb-8 animate-slide-up">
            <div className="flex items-center glass-card rounded-full p-2 gap-2">
              <span className="text-muted-foreground px-3 shrink-0">insty.cc/</span>
              <Input value={username} onChange={e => {
              setUsername(e.target.value);
              setIsTyping(false);
            }} placeholder={username ? "" : typewriterText} className="border-0 bg-transparent text-center flex-1 min-w-0 typewriter" />
              <Button className="gradient-button rounded-full px-6 shrink-0">
                Start
              </Button>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10,000+</div>
              <div className="text-muted-foreground">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5,045,727</div>
              <div className="text-muted-foreground">Links Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$1M+</div>
              <div className="text-muted-foreground">Total Earnings</div>
            </div>
          </div>

          {/* Earnings Ticker */}
          <div className="overflow-hidden whitespace-nowrap bg-white/5 rounded-full py-2 mb-8">
            <div className="inline-block animate-[scroll_20s_linear_infinite]">
              {earnings.map((earning, index) => <span key={index} className="text-sm text-muted-foreground mx-8">
                  💰 {earning}
                </span>)}
              {/* Duplicate for seamless loop */}
              {earnings.map((earning, index) => <span key={`duplicate-${index}`} className="text-sm text-muted-foreground mx-8">
                  💰 {earning}
                </span>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;