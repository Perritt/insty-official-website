import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
const FinalCTA = () => {
  return <section className="py-20 px-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-bounce-subtle"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-bounce-subtle" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-bounce-subtle" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-white rounded-full animate-bounce-subtle" style={{
        animationDelay: '0.5s'
      }}></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Turn Your Influence Into Income Effortlessly</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Join creators earning 3-5X more with AI-optimized links
          </p>
          
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-2xl">
            <Rocket className="mr-2 w-6 h-6" />
            Launch My Free Storefront
          </Button>

          <div className="mt-8 space-y-2 flex flex-col items-center">
            <div className="text-left">
              <p className="text-lg opacity-90">✅ No credit card required</p>
              <p className="text-lg opacity-90">✅ Set up in under 60 seconds</p>
              <p className="text-lg opacity-90">✅ Start earning immediately</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTA;