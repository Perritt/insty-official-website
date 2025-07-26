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
      <section className="pt-32 pb-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-relaxed pb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">The Bio Link That Pays You Back</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              It started with a simple frustration. Sarah, a beauty creator with 8,000 followers, was spending hours researching products to recommend to her audience, only to earn pennies from traditional affiliate programs.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-lg mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Meanwhile, her friend <strong className="text-foreground">Mike</strong>, a tech reviewer, watched his carefully curated product lists get buried in cluttered link-in-bio tools that looked more like spam than recommendations.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center text-xl font-semibold text-primary">
                That's when we realized: creators needed more than just another bio link tool—they needed a smart partner.
              </p>
            </div>
          </div>

          {/* Why Insty Exists */}
          <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Why Insty Exists</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                In 2024, we set out to solve this problem by combining AI intelligence with creator monetization. Our mission was simple: help creators of <strong className="text-primary">ANY size</strong> turn their passion into sustainable income—without the complexity of managing inventory, negotiating deals, or hunting for the right products.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                While tools like Linktree charged monthly fees (often putting them out of reach for smaller creators), we built <strong className="text-primary">Insty.cc</strong> to be completely free while actually helping you earn money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">How Insty Changes the Game</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Unlike traditional bio links, Insty doesn't just display your content—it optimizes it for earnings.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our AI scans thousands of high-commission products from Amazon and top brands, then handpicks the best matches for your specific audience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background/50 p-6 rounded-xl border border-border/50">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">No fees, no limits</h4>
                    <p className="text-muted-foreground">Free forever (while competitors charge $5-$24/month)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background/50 p-6 rounded-xl border border-border/50">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">AI does the heavy lifting</h4>
                    <p className="text-muted-foreground">Learns your audience and auto-curates converting products</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background/50 p-6 rounded-xl border border-border/50">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Earn from day one</h4>
                    <p className="text-muted-foreground">Nano-influencers like Sarah now make $500+/month</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background/50 p-6 rounded-xl border border-border/50">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Grows with you</h4>
                    <p className="text-muted-foreground">The more you use Insty, the smarter it gets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">From Side Hustle to Serious Income</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center">
                Today, Insty powers <strong className="text-primary">10K+ creators</strong> worldwide, from 1K-follower artists to 500K lifestyle influencers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Beauty creators earn 30% commissions on viral makeup</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Tech reviewers like Mike tripled earnings with AI-matched gadgets</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Travel bloggers monetize gear recommendations passively</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Even small artists generate sales without inventory</span>
                </div>
              </div>
            </div>

            <div className="text-center bg-background/50 p-6 rounded-xl border border-border/50">
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                We're a remote-first team of engineers, data scientists, and creator economy veterans obsessed with one mission: <strong className="text-primary">democratizing monetization</strong> so every creator—not just the top 1%—can profit from their influence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-lg text-center">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl mb-6">💬</div>
              <blockquote className="text-2xl font-medium text-foreground mb-6 leading-relaxed">
                "Insty turned my 8K following into $3,200/month. The AI knows my audience better than I do!"
              </blockquote>
              <cite className="text-muted-foreground text-lg">
                — Sarah, <span className="text-primary">@BeautyBySarah</span>
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-card border border-border p-12 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Join the free bio link revolution.</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your content into a revenue-generating machine? Start earning today with the bio link that pays you back.
            </p>
            <button className="gradient-button text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default AboutUs;