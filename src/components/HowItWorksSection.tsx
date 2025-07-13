import { UserPlus, Palette, Plus, Share2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Sign Up Free",
      description: "Create your account in 30 seconds. No credit card required",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02", 
      icon: Palette,
      title: "Build Your Page",
      description: "Design your bio link page with drag & drop editor.",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      icon: Plus,
      title: "Add Products",
      description: "Select from AI recommendations or browse catalog.",
      color: "from-green-500 to-green-600"
    },
    {
      number: "04",
      icon: Share2,
      title: "Share & Earn",
      description: "Add your Insty link to all social bios and earn commissions.",
      color: "from-orange-500 to-red-500"
    }
  ];

  // Sample earnings growth data
  const earningsData = [
    { month: 'Month 1', earnings: 0 },
    { month: 'Month 2', earnings: 280 },
    { month: 'Month 3', earnings: 750 },
    { month: 'Month 4', earnings: 1200 },
    { month: 'Month 5', earnings: 1850 },
    { month: 'Month 6', earnings: 2400 }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-orange-50/30 to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Start earning in 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-110 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-primary transition-colors">
                  <span className="text-sm font-bold text-gray-600 group-hover:text-primary">
                    {step.number}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Earnings Growth Chart */}
        <div className="glass-card p-8 rounded-3xl max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Real Earnings Growth</h3>
            <p className="text-muted-foreground">Average creator earnings over 6 months</p>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={earningsData}>
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#666' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#666' }}
                  tickFormatter={(value) => `$${value}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="earnings" 
                  stroke="url(#colorGradient)" 
                  strokeWidth={3}
                  dot={{ fill: '#f97316', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, fill: '#ea580c' }}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              📈 Average monthly growth: <span className="font-bold text-green-600">+65%</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;