import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Header = () => {
  return <header className="fixed top-0 w-full z-50 glass-card border-b border-white/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Slogan */}
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/144cce7c-5cf5-4f74-bc20-e904c873c359.png" alt="Insty.cc Logo" className="w-10 h-10" />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold pb-1 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Insty <span className="text-xs font-normal text-muted-foreground/60">- AI-Powered Bio Links That Earn You Money</span>
              </h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#calculator" className="text-foreground hover:text-primary transition-colors">
              Calculator
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How it works
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Sign In
            </Button>
            <Button className="gradient-button">
              Start Free
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;