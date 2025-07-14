const BrandShowcase = () => {
  // Placeholder for brand logos - user will upload real ones later
  const brands = [
    "Amazon", "Shopify", "WooCommerce", "Etsy", "eBay", 
    "Target", "Walmart", "Best Buy", "Nike", "Adidas",
    "Apple", "Samsung", "Google", "Microsoft", "Adobe"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-red-50/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 pb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Trusted by creators and brands worldwide
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:from-orange-100 group-hover:to-red-100 transition-colors">
                <span className="text-xs font-bold text-gray-600 group-hover:text-primary transition-colors text-center">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            And 500+ more premium brands in our catalog
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;