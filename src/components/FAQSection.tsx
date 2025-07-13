import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is Insty really free forever?",
      answer: "Yes! Unlike other bio link tools, Insty is 100% free forever with no hidden fees. We earn when you earn through our affiliate partnerships, so our success is tied to your success."
    },
    {
      question: "What's the minimum follower count to start earning?",
      answer: "There's no minimum! Our AI works for creators of any size. Even with 100 followers, if you have engaged audience, you can start earning. The AI optimizes for your specific audience regardless of size."
    },
    {
      question: "How often are payouts?",
      answer: "Twice monthly when you reach $50. Most creators receive funds within 3 business days via PayPal or direct deposit."
    },
    {
      question: "How does the AI product selection work?",
      answer: "Our AI analyzes your content niche, audience demographics, and current trends to recommend products that are most likely to convert and have the highest commission rates. The more you use Insty, the smarter our recommendations become."
    },
    {
      question: "Can I use Insty on multiple platforms?",
      answer: "Absolutely! Your Insty bio link works on all platforms - Instagram, TikTok, YouTube, Twitter, Twitch, and more. One link to rule them all!"
    },
    {
      question: "Can I use existing affiliate links with Insty?",
      answer: "Yes! Insty enhances existing links with smart tracking and automatically adds high-commission options to maximize your earnings from every click."
    },
    {
      question: "What commission rates can I expect?",
      answer: "Our platform offers some of the highest commission rates in the industry, ranging from 10% to 30% depending on the product category. Amazon products typically offer 8-10%, while our premium DTC partnerships offer 15-30%."
    },
    {
      question: "Do I need technical skills to set up my storefront?",
      answer: "Not at all! Our drag-and-drop builder makes it incredibly easy. Most creators have their storefront ready in under 60 seconds. No coding or design experience required."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Your Questions, Answered
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Insty.cc
          </p>
        </div>

        <div className="glass-card rounded-3xl p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/20">
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:support@insty.cc" 
            className="text-primary hover:text-primary/80 font-medium"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;