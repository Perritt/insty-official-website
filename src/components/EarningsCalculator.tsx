import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, MousePointer, ShoppingCart, TrendingUp } from "lucide-react";

const EarningsCalculator = () => {
  const [followers, setFollowers] = useState([50000]);
  const [clickRate, setClickRate] = useState([3]);
  const [orderValue, setOrderValue] = useState([50]);

  const monthlyClicks = Math.round((followers[0] * clickRate[0]) / 100);
  const monthlySales = Math.round(monthlyClicks * 0.1); // 10% conversion rate
  const revenueGenerated = monthlySales * orderValue[0];
  const estimatedEarnings = Math.round(revenueGenerated * 0.1); // 10% commission

  return (
    <section id="calculator" className="py-20 px-4 bg-gradient-to-b from-transparent to-red-50/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Calculate Your Potential Earnings
          </h2>
          <p className="text-lg text-muted-foreground">
            See how much you could earn with your current following
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Controls */}
          <Card className="glass-card border-white/20">
            <CardHeader>
              <CardTitle className="text-center">Your Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Followers Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-medium">Number of Followers</label>
                  <span className="text-primary font-bold">{followers[0].toLocaleString()}</span>
                </div>
                <Slider
                  value={followers}
                  onValueChange={setFollowers}
                  max={1000000}
                  min={1000}
                  step={1000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1K</span>
                  <span>1M</span>
                </div>
              </div>

              {/* Click Rate Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-medium">Average Click Rate (%)</label>
                  <span className="text-primary font-bold">{clickRate[0]}%</span>
                </div>
                <Slider
                  value={clickRate}
                  onValueChange={setClickRate}
                  max={10}
                  min={1}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1%</span>
                  <span>10%</span>
                </div>
              </div>

              {/* Order Value Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-medium">Average Order Value ($)</label>
                  <span className="text-primary font-bold">${orderValue[0]}</span>
                </div>
                <Slider
                  value={orderValue}
                  onValueChange={setOrderValue}
                  max={200}
                  min={10}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>$10</span>
                  <span>$200</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            <Card className="glass-card border-white/20 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-green-600 mr-2" />
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Estimated Monthly Earnings</div>
                    <div className="text-3xl font-bold text-green-600">
                      ${estimatedEarnings.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      (Based on 10% Amazon commission rate)
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              <Card className="glass-card border-white/20">
                <CardContent className="p-4 text-center">
                  <MousePointer className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-blue-600">
                    {monthlyClicks.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">Monthly Clicks</div>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/20">
                <CardContent className="p-4 text-center">
                  <ShoppingCart className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-purple-600">
                    {monthlySales.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">Monthly Sales</div>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/20">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-orange-600">
                    ${revenueGenerated.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">Revenue Generated</div>
                </CardContent>
              </Card>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center">
              <p className="text-sm text-muted-foreground mb-2">
                💡 With Insty's AI optimization, creators typically see
              </p>
              <p className="text-lg font-bold text-primary">
                2-3x higher earnings compared to standard bio links
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningsCalculator;