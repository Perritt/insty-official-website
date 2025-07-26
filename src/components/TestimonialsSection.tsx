import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const TestimonialsSection = () => {
  const testimonials = [{
    name: "MakeupByJenna",
    role: "Beauty Creator",
    followers: "8k followers",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=60&h=60&fit=crop&crop=face",
    quote: "From $0 to $3,200/month with 8k followers! Insty's AI found products my beauty audience actually wants.",
    highlight: "23% conversion rate",
    earnings: "$3,200/month"
  }, {
    name: "GadgetGeek",
    role: "Tech Creator",
    followers: "15k followers",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    quote: "Left Linktree for Insty - commissions tripled instantly. The automated product matching is witchcraft!",
    highlight: "Tech Creator",
    earnings: "$4,800/month"
  }, {
    name: "WatercolorJoy",
    role: "Artist",
    followers: "5.4k followers",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    quote: "As a small artist, I now earn passive income from print sales without inventory. Life-changing.",
    highlight: "5,400 followers",
    earnings: "$1,850/month"
  }, {
    name: "FitnessGuru",
    role: "Fitness Coach",
    followers: "25k followers",
    avatar: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop&crop=face",
    quote: "My supplement recommendations now earn me more than my online courses. Insty's AI knows my audience better than I do!",
    highlight: "45% click rate",
    earnings: "$6,200/month"
  }, {
    name: "TravelWithSara",
    role: "Travel Blogger",
    followers: "12k followers",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
    quote: "Travel gear recommendations are paying for my actual travels now. The passive income is incredible!",
    highlight: "Travel Creator",
    earnings: "$2,900/month"
  }, {
    name: "FoodieBlogger",
    role: "Food Influencer",
    followers: "30k followers",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=60&h=60&fit=crop&crop=face",
    quote: "Kitchen gadgets and cookbook sales through Insty doubled my income. The AI suggestions are spot-on!",
    highlight: "35% conversion",
    earnings: "$5,600/month"
  }, {
    name: "StyleByAlex",
    role: "Fashion Creator",
    followers: "18k followers",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
    quote: "Fashion finds that my followers actually buy - Insty's AI beat every manual selection I've tried.",
    highlight: "Fashion Creator",
    earnings: "$4,100/month"
  }, {
    name: "PetLoverMike",
    role: "Pet Content Creator",
    followers: "9k followers",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    quote: "Pet product recommendations are now my main income stream. Who knew dog toys could pay rent!",
    highlight: "Pet Creator",
    earnings: "$2,400/month"
  }, {
    name: "BookwormBeth",
    role: "Book Reviewer",
    followers: "7k followers",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
    quote: "Book and reading accessory sales are funding my book buying habit and then some!",
    highlight: "Book Creator",
    earnings: "$1,600/month"
  }];
  return <section className="py-20 px-4 bg-gradient-to-b from-transparent to-orange-50/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Join 10K+ Creators Earning with Insty</h2>
          <p className="text-lg text-muted-foreground">
            See what real creators are saying about their success with Insty.cc
          </p>
        </div>

        {/* Auto-scrolling testimonials carousel */}
        <div className="relative overflow-hidden py-4">
          <div className="flex animate-scroll space-x-6">
            {[...testimonials, ...testimonials].map((testimonial, index) => <div key={`${testimonial.name}-${index}`} className="p-6 rounded-2xl hover:scale-105 transition-all duration-300 flex-shrink-0 w-80 bg-white/80 backdrop-blur-sm border-2 border-white/60 shadow-md">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 border-2 border-pink-300 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="p-0">
                      <img src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${testimonial.name}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`} alt={`Generated avatar for ${testimonial.name}`} className="w-full h-full object-cover" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">@{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                </div>

                <blockquote className="text-sm mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex justify-between items-center">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {testimonial.highlight}
                  </span>
                  <span className="text-sm font-bold text-green-600">
                    {testimonial.earnings}
                  </span>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;