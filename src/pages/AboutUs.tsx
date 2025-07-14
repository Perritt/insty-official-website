import Header from "@/components/Header";
import Footer from "@/components/Footer";
const AboutUs = () => {
  return <div className="min-h-screen bg-background relative">
      {/* Particle background - same as homepage */}
      <div className="particles-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 via-transparent to-red-50/20"></div>
      </div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-relaxed pb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">About Insty</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering creators to turn their passion into sustainable income through AI-powered monetization
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-card border border-border rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-8 md:p-12 text-center border-b border-border">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
                The Bio Link That Pays You Back
              </h2>
            </div>
            
            {/* Content */}
            <div className="p-8 md:p-12 space-y-12">
              {/* Origin Story */}
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  It started with a simple frustration. <strong className="text-foreground">Sarah</strong>, a beauty creator with 8,000 followers, was spending hours researching products to recommend to her audience, only to earn pennies from traditional affiliate programs. Meanwhile, her friend <strong className="text-foreground">Mike</strong>, a tech reviewer, watched his carefully curated product lists get buried in cluttered link-in-bio tools that looked more like spam than recommendations.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  That's when we realized: <em className="text-accent font-semibold">creators needed more than just another bio link tool—they needed a smart partner.</em>
                </p>
              </div>

              {/* Mission */}
              <div className="bg-gradient-to-r from-orange-50/50 to-red-50/50 dark:from-orange-950/20 dark:to-red-950/20 p-8 rounded-2xl border border-orange-200/50 dark:border-orange-800/50">
                <h3 className="text-2xl font-bold text-foreground mb-4">Why Insty Exists</h3>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  In 2024, we set out to solve this problem by combining AI intelligence with creator monetization. Our mission was simple: help creators of <strong className="text-foreground">ANY size</strong> turn their passion into sustainable income—without the complexity of managing inventory, negotiating deals, or hunting for the right products.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  While tools like Linktree charged monthly fees (often putting them out of reach for smaller creators), we built <strong className="text-primary">Insty.cc</strong> to be completely free while actually helping you earn money.
                </p>
              </div>

              {/* How It Works */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">How Insty Changes the Game</h3>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Unlike traditional bio links, Insty doesn't just display your content—it optimizes it for earnings. Our AI scans thousands of high-commission products from Amazon and top brands, then handpicks the best matches for your specific audience.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🔹</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">No fees, no limits</h4>
                      <p className="text-muted-foreground">Free forever (while competitors charge $5-$24/month)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🔹</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">AI does the heavy lifting</h4>
                      <p className="text-muted-foreground">Learns your audience and auto-curates converting products</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🔹</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Earn from day one</h4>
                      <p className="text-muted-foreground">Nano-influencers like Sarah now make $500+/month</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🔹</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Grows with you</h4>
                      <p className="text-muted-foreground">The more you use Insty, the smarter it gets</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Stories */}
              <div className="bg-gradient-to-r from-green-50/50 to-blue-50/50 dark:from-green-950/20 dark:to-blue-950/20 p-8 rounded-2xl border border-green-200/50 dark:border-green-800/50">
                <h3 className="text-2xl font-bold text-foreground mb-6">From Side Hustle to Serious Income</h3>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Today, Insty powers <strong className="text-foreground">100K+ creators worldwide</strong>, from 1K-follower artists to 500K lifestyle influencers.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-muted-foreground">Beauty creators earn 30% commissions on viral makeup</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-muted-foreground">Tech reviewers like Mike tripled earnings with AI-matched gadgets</span>
                    </li>
                  </ul>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span className="text-muted-foreground">Travel bloggers monetize gear recommendations passively</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-muted-foreground">Even small artists generate sales without inventory</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We're a remote-first team of engineers, data scientists, and creator economy veterans obsessed with one mission: <strong className="text-foreground">democratizing monetization so every creator—not just the top 1%—can profit from their influence.</strong>
                </p>
              </div>

              {/* Testimonial */}
              <div className="bg-card border-2 border-primary/20 p-8 rounded-2xl text-center">
                <blockquote className="text-xl italic text-muted-foreground mb-4">
                  "Insty turned my 8K following into $3,200/month. The AI knows my audience better than I do!"
                </blockquote>
                <cite className="text-primary font-semibold">— Sarah, @BeautyBySarah</cite>
              </div>

              {/* Final CTA */}
              <div className="text-center">
                <p className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Join the free bio link revolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We believe every creator deserves to earn sustainable income from their passion. Insty.cc combines the power of artificial intelligence with deep e-commerce integration to automatically identify and promote products that resonate with your audience.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our platform doesn't just create bio links – it creates intelligent, revenue-generating experiences that grow with your audience and adapt to market trends in real-time.
              </p>
            </div>
            
            <div className="bg-card border border-border p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-center text-foreground">What We've Achieved</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Creators Served</span>
                  <span className="text-2xl font-bold text-primary">100,000+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Revenue Generated</span>
                  <span className="text-2xl font-bold text-primary">$50M+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">AI Recommendations</span>
                  <span className="text-2xl font-bold text-primary">1M+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="text-2xl font-bold text-primary">94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 gradient-button rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Authenticity</h3>
              <p className="text-muted-foreground">We help creators maintain their authentic voice while maximizing revenue potential.</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 gradient-button rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Innovation</h3>
              <p className="text-muted-foreground">Cutting-edge AI technology that stays ahead of market trends and consumer behavior.</p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 gradient-button rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Empowerment</h3>
              <p className="text-muted-foreground">Every creator should have the tools to build a sustainable business from their content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-card border border-border p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Join Our Creator Community</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your content into a revenue-generating machine? Join over 100,000 creators who trust Insty.cc to power their success.
            </p>
            <button className="gradient-button text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default AboutUs;