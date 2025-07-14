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
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Main Headlines */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-bold mb-6 pb-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">Free Bio Link. Smart Storefront.
Real Income.</h1>
              <div className="text-lg md:text-xl text-muted-foreground mb-4 animate-slide-up">
                <p className="font-semibold text-red-600 mb-2">No offer&earning? No problem!</p>
                <p>
                  Insty's AI-powered bio links help creators of ANY size earn money. 
                  Share amazon products your audience will love and earn up to 
                  <span className="text-primary font-bold"> 30% commissions</span> - completely free.
                </p>
              </div>
            </div>

            {/* Advantages Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 mb-8 animate-fade-in">
              {advantages.map((advantage, index) => <div key={index} className="glass-card p-3 rounded-xl hover:scale-105 transition-transform">
                  <advantage.icon className={`w-5 h-5 ${advantage.color} mx-auto lg:mx-0 mb-2`} />
                  <p className="text-xs font-medium">{advantage.text}</p>
                </div>)}
            </div>

            {/* URL Input */}
            <div className="max-w-sm mx-auto lg:mx-0 mb-8 animate-slide-up">
              <div className="flex items-center glass-card rounded-full p-2 gap-2">
                <span className="text-muted-foreground px-3 shrink-0 text-sm">insty.cc/</span>
                <Input value={username} onChange={e => {
                setUsername(e.target.value);
                setIsTyping(false);
              }} placeholder={username ? "" : typewriterText} className="border-0 bg-transparent text-center flex-1 min-w-0 typewriter text-sm" />
                <Button className="gradient-button rounded-full px-4 shrink-0 text-sm">
                  Start
                </Button>
              </div>
            </div>

            {/* Trust Elements */}
            <div className="grid grid-cols-3 gap-4 mb-8 animate-fade-in">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">100,000+</div>
                <div className="text-muted-foreground text-sm">Active Creators</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">5,045,727</div>
                <div className="text-muted-foreground text-sm">Links Created</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">$1M+</div>
                <div className="text-muted-foreground text-sm">Total Earnings</div>
              </div>
            </div>

            {/* Earnings Ticker */}
            <div className="overflow-hidden whitespace-nowrap bg-white/5 rounded-full py-2 mb-8">
              <div className="inline-block animate-[scroll_20s_linear_infinite]">
                {earnings.map((earning, index) => <span key={index} className="text-sm text-muted-foreground mx-6">
                    💰 {earning}
                  </span>)}
                {/* Duplicate for seamless loop */}
                {earnings.map((earning, index) => <span key={`duplicate-${index}`} className="text-sm text-muted-foreground mx-6">
                    💰 {earning}
                  </span>)}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <img src="/lovable-uploads/0a1af142-81ea-48cb-83b1-3faf570661cd.png" alt="Bio link storefront example" className="w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300" />
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;