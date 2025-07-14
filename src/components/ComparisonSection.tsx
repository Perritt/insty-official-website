import { Check, X } from "lucide-react";
const ComparisonSection = () => {
  const features = [{
    feature: "Pricing",
    insty: "🚫 Free Forever",
    competitors: "Paid Plans",
    instyHas: true,
    competitorsHave: false
  }, {
    feature: "Product Catalog",
    insty: "🛒 20,000+ High-Commission Items",
    competitors: "Limited Selections",
    instyHas: true,
    competitorsHave: false
  }, {
    feature: "Setup Time",
    insty: "⚡ 1-Click AI Storefront",
    competitors: "Manual Curation",
    instyHas: true,
    competitorsHave: false
  }, {
    feature: "Smart Matching",
    insty: "🤖 AI Recommends Best Products",
    competitors: "Generic Links",
    instyHas: true,
    competitorsHave: false
  }, {
    feature: "Earnings",
    insty: "💸 Up to 30% Commissions",
    competitors: "5-10% Typical",
    instyHas: true,
    competitorsHave: false
  }];
  return <section className="py-20 px-4 bg-gradient-to-b from-red-50/30 to-transparent">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Why Insty Outperforms Other Bio Link Tools
          </h2>
          <p className="text-lg text-muted-foreground">Discover how Insty helps creators maximize their earnings with our AI-powered platform</p>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-orange-500 to-red-500">
                <tr>
                  <th className="text-left p-6 text-white font-semibold">Feature</th>
                  <th className="text-center p-6 text-white font-semibold">Insty</th>
                  <th className="text-center p-6 text-white font-semibold">Competitors</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => <tr key={index} className={`border-b border-white/10 ${index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}`}>
                    <td className="p-6 font-medium">{item.feature}</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-sm">{item.insty}</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-sm text-muted-foreground">{item.competitors}</span>
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 text-center">
            <p className="text-lg font-semibold text-green-700 mb-2">
              🏆 The Clear Winner for Creator Monetization
            </p>
            <p className="text-sm text-green-600">
              Join thousands of creators who switched to Insty and 3x their bio link earnings
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ComparisonSection;