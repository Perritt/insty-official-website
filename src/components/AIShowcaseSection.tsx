import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Clock } from "lucide-react";
import beautyBloggerAvatar from "@/assets/beauty-blogger-lisa.jpg";

const AIShowcaseSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const demoSteps = [
    "Enter your niche: Beauty",
    "AI analyzing trends...",
    "Recommending products: Korean Mascara 30% commission",
    "Generating personalized storefront..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % demoSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-orange-50/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                AI-Powered Smart Storefront
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our AI engine analyzes your content, audience, and current trends to recommend 
                products with the highest conversion rates and commission rates, effortlessly 
                boosting your income.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform">
                <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-600">+200%</div>
                <div className="text-sm text-muted-foreground">Average revenue increase</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform">
                <Target className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-600">30%+</div>
                <div className="text-sm text-muted-foreground">Highest commission rate</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform">
                <Clock className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-purple-600">60s</div>
                <div className="text-sm text-muted-foreground">Create personalized store</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="glass-card p-6 rounded-2xl">
              <p className="text-lg font-medium mb-2">
                "Beauty blogger @Lisa: Used AI selection, commission increased 200%"
              </p>
              <div className="flex items-center">
                <img 
                  src={beautyBloggerAvatar} 
                  alt="Lisa" 
                  className="w-10 h-10 rounded-full border-2 border-pink-300 mr-3"
                />
                <div>
                  <div className="font-semibold">@Lisa</div>
                  <div className="text-sm text-muted-foreground">Beauty Creator</div>
                </div>
              </div>
            </div>

            <Button className="gradient-button w-full md:w-auto group">
              Try AI-powered product selection Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Demo Animation */}
          <div className="relative">
            <div className="glass-card p-8 rounded-3xl">
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">AI Demo in Action</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="gradient-animate h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {demoSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl transition-all duration-500 ${
                      index === currentStep 
                        ? 'bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-300' 
                        : index < currentStep 
                          ? 'bg-green-50 border border-green-200' 
                          : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center text-xs font-bold ${
                        index === currentStep 
                          ? 'bg-orange-500 text-white' 
                          : index < currentStep 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-300 text-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                      <span className={`${index === currentStep ? 'font-semibold' : ''}`}>
                        {step}
                      </span>
                    </div>
                  </div>
                ))}

                {currentStep === demoSteps.length - 1 && (
                  <div className="animate-fade-in bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-green-700 mb-2">
                        🎉 Storefront Created!
                      </div>
                      <div className="text-sm text-green-600">
                        Ready to start earning with optimized product recommendations
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcaseSection;