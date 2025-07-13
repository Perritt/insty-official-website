import { Star } from "lucide-react";

const ProductShowcase = () => {
  // Placeholder products - user will upload real ones later
  const products = [
    {
      id: 1,
      title: "Premium Wireless Earbuds",
      rating: 4.8,
      brand: "TechBrand",
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Organic Skincare Set",
      rating: 4.9,
      brand: "BeautyPro",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Smart Fitness Tracker",
      rating: 4.7,
      brand: "FitTech",
      image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=200&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Eco-Friendly Water Bottle",
      rating: 4.6,
      brand: "EcoLife",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=200&h=200&fit=crop"
    },
    {
      id: 5,
      title: "Premium Coffee Beans",
      rating: 4.9,
      brand: "BrewMaster",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200&h=200&fit=crop"
    },
    {
      id: 6,
      title: "Minimalist Desk Lamp",
      rating: 4.5,
      brand: "DesignHub",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-orange-50/30 to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            High-Commission Product Library
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover thousands of products with the highest commission rates, 
            automatically curated for maximum earnings potential.
          </p>
        </div>

        {/* Auto-scrolling product carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-bounce-subtle space-x-6">
            {[...products, ...products].map((product, index) => (
              <div 
                key={`${product.id}-${index}`}
                className="flex-shrink-0 w-64 glass-card p-6 rounded-2xl hover:scale-105 transition-transform"
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {product.title}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {product.brand.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm font-medium">{product.brand}</span>
                  </div>
                  <div className="text-sm font-bold text-green-600">
                    Up to 30%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            20,000+ products across all categories
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Beauty", "Tech", "Fashion", "Home", "Fitness", "Food", "Travel", "Books"].map((category) => (
              <span 
                key={category}
                className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm border border-white/20"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;