import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AIShowcaseSection from "@/components/AIShowcaseSection";
import ProductShowcase from "@/components/ProductShowcase";
import EarningsCalculator from "@/components/EarningsCalculator";
import ComparisonSection from "@/components/ComparisonSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import BrandShowcase from "@/components/BrandShowcase";
import BrandPartnership from "@/components/BrandPartnership";
import FinalCTA from "@/components/FinalCTA";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Particle background */}
      <div className="particles-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 via-transparent to-red-50/20"></div>
      </div>
      
      <Header />
      <HeroSection />
      <div id="features">
        <AIShowcaseSection />
      </div>
      <ProductShowcase />
      <BrandPartnership />
      <div id="calculator">
        <EarningsCalculator />
      </div>
      <ComparisonSection />
      <FeaturesSection />
      <TestimonialsSection />
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <BrandShowcase />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
