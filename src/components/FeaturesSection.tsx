import { Link, Brain, BarChart3, CreditCard } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Link,
      title: "Drag & Drop Bio Link Hub",
      description: "Create a stunning link page in under 60 seconds with our intuitive builder. Showcase ALL your content - videos, podcasts, blogs, and products - in one beautifully designed space.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "AI-Powered Money Machine",
      description: "Our algorithm analyzes your content and audience to automatically recommend the highest-converting products from Amazon and premium DTC brands. Earn 2-3X more than standard affiliate programs.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "Real-Time Profit Dashboard",
      description: "Track exactly what's working with granular analytics: Click heatmaps, Conversion rates by product, Audience demographics, Earnings forecasts.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: CreditCard,
      title: "Zero-Friction Payments",
      description: "Get paid automatically via PayPal when your balance reaches $50. No waiting weeks for approvals.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Your All-in-One Monetization Engine
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group glass-card p-8 rounded-3xl hover:scale-105 hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.title === "Zero-Friction Payments" 
                  ? "Get paid automatically via PayPal. No waiting weeks for approvals."
                  : feature.description}
              </p>
              
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;