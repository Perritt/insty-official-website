import amazonLogo from "@/assets/brands/amazon-logo.png";
import shopifyLogo from "@/assets/brands/shopify-logo.png";
import alibabaLogo from "@/assets/brands/alibaba-logo.png";
import ebayLogo from "@/assets/brands/ebay-logo.png";
import etsyLogo from "@/assets/brands/etsy-logo.png";
import walmartLogo from "@/assets/brands/walmart-logo.png";

const BrandPartnership = () => {
  const brands = [
    { name: "Amazon", logo: amazonLogo },
    { name: "Shopify", logo: shopifyLogo },
    { name: "Alibaba", logo: alibabaLogo },
    { name: "eBay", logo: ebayLogo },
    { name: "Etsy", logo: etsyLogo },
    { name: "Walmart", logo: walmartLogo },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-red-50/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 pb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Work With The Brands You Know And Love
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with world-leading brands and start earning commissions from products you already trust and recommend
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="w-32 h-32 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center p-6 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center mt-3 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {brand.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            + 1000+ more global brands waiting for you
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandPartnership;