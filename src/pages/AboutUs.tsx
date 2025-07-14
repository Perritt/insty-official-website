import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              About Insty.cc
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Empowering creators to turn their passion into sustainable income through AI-powered monetization
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                It all started with two creators, <strong>Sarah</strong> and <strong>Mike</strong>. Sarah had built a loyal following of 50,000 beauty enthusiasts on Instagram, while Mike's tech reviews on YouTube reached hundreds of thousands of viewers. Despite their success in creating engaging content, they both faced the same frustrating challenge: <em>how to monetize their influence without compromising their authenticity</em>.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Sarah tried promoting random products for quick commissions, but her audience noticed the disconnect. Mike spent countless hours researching products to recommend, but the manual process was exhausting and inconsistent. Both creators realized they needed a solution that could automatically match their content with high-quality, relevant products that their audience would genuinely love.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                That's when the idea for <strong>Insty.cc</strong> was born. We envisioned an AI-powered platform that could understand a creator's niche, analyze their audience's preferences, and automatically curate high-commission products that felt natural and authentic to promote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We believe every creator deserves to earn sustainable income from their passion. Insty.cc combines the power of artificial intelligence with deep e-commerce integration to automatically identify and promote products that resonate with your audience.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our platform doesn't just create bio links – it creates intelligent, revenue-generating experiences that grow with your audience and adapt to market trends in real-time.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-center">What We've Achieved</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Creators Served</span>
                  <span className="text-2xl font-bold text-orange-400">100,000+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Revenue Generated</span>
                  <span className="text-2xl font-bold text-orange-400">$50M+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">AI Recommendations</span>
                  <span className="text-2xl font-bold text-orange-400">1M+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Success Rate</span>
                  <span className="text-2xl font-bold text-orange-400">94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Authenticity</h3>
              <p className="text-gray-300">We help creators maintain their authentic voice while maximizing revenue potential.</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-300">Cutting-edge AI technology that stays ahead of market trends and consumer behavior.</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Empowerment</h3>
              <p className="text-gray-300">Every creator should have the tools to build a sustainable business from their content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="glass-card p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Join Our Creator Community</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to transform your content into a revenue-generating machine? Join over 100,000 creators who trust Insty.cc to power their success.
            </p>
            <button className="gradient-button text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;