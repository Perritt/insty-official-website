import { Star } from "lucide-react";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: "Apple Cider Vinegar",
      rating: 4.4,
      brand: "Goli Nutrition",
      image: "/lovable-uploads/d7885316-64c9-4662-986b-612b1a151ae2.png",
      link: "https://www.amazon.com/dp/B07R8GD47V",
      price: "$14.98",
      commission: "20%",
      earnings: "$2.99",
      reviews: 365464
    },
    {
      id: 2,
      title: "Bedsure Comforter Duvet Insert",
      rating: 4.7,
      brand: "Bedsure",
      image: "/lovable-uploads/2f55213d-99e6-4975-bc94-eb6cc0e4bb75.png",
      link: "https://www.amazon.com/dp/B0CV77JNTQ",
      price: "$55",
      commission: "8%",
      earnings: "$4.4",
      reviews: 71617
    },
    {
      id: 3,
      title: "HandCrafts Crochet",
      rating: 4.2,
      brand: "MiraHandCrafts",
      image: "/lovable-uploads/3e8a0797-5238-4a02-86a6-c74201cb8a69.png",
      link: "https://www.amazon.com/dp/B017OULYD0",
      price: "$21",
      commission: "28%",
      earnings: "$5.9",
      reviews: 10839
    },
    {
      id: 4,
      title: "Random Orbit Sander",
      rating: 4.9,
      brand: "Gochifix",
      image: "/lovable-uploads/9b373057-2ba7-4474-9bf0-ca003d3899ed.png",
      link: "https://www.amazon.com/dp/B09W22PLZL",
      price: "$45",
      commission: "12%",
      earnings: "$5.4",
      reviews: 11
    },
    {
      id: 5,
      title: "Series Ultra Whitening Toothbrush",
      rating: 4.6,
      brand: "Aquasonic",
      image: "/lovable-uploads/7020a6b2-5a6b-43ac-9053-b11f18cfd0ab.png",
      link: "https://www.amazon.com/dp/B072YVWBXH",
      price: "$36",
      commission: "40%",
      earnings: "$14.4",
      reviews: 123007
    },
    {
      id: 6,
      title: "Teeth Whitening Pen",
      rating: 3.9,
      brand: "Auraglow",
      image: "/lovable-uploads/e4895812-310f-4b4d-883c-fa26a71c5cde.png",
      link: "https://www.amazon.com/dp/B0C6QZRTQH",
      price: "$22",
      commission: "24%",
      earnings: "$5.2",
      reviews: 12199
    },
    {
      id: 7,
      title: "Ulike Laser Hair Removal",
      rating: 4.2,
      brand: "Ulike",
      image: "/lovable-uploads/ecf4181e-04e2-4f60-aea8-27003adfc51a.png",
      link: "https://www.amazon.com/dp/B0BXPDTJRR",
      price: "$198",
      commission: "20%",
      earnings: "$39.6",
      reviews: 2628
    },
    {
      id: 8,
      title: "Ultra-Thin Outlet Concealer",
      rating: 4.7,
      brand: "Sleek socket",
      image: "/lovable-uploads/3a7ee2ff-6e84-4682-bdc3-5d09449e2063.png",
      link: "https://www.amazon.com/dp/B0CHN6NFCQ",
      price: "$25",
      commission: "20%",
      earnings: "$5.0",
      reviews: 57577
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-orange-50/30 to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            High-Commission Product Library
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover thousands of products with the highest commission rates, 
            automatically curated for maximum earnings potential.
          </p>
        </div>

        {/* Auto-scrolling product carousel */}
        <div className="relative overflow-hidden py-4">
          <div className="flex animate-scroll space-x-4">
            {[...products, ...products].map((product, index) => (
              <a
                key={`${product.id}-${index}`}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-64 bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg p-4 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square mb-3 overflow-hidden rounded-lg">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="font-semibold text-base mb-2 line-clamp-2 text-gray-900">
                  {product.title}
                </h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-xs text-gray-600">
                    {product.rating}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {product.brand.charAt(0)}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-gray-700">{product.brand}</span>
                  </div>
                  <div className="text-xs font-bold text-green-600">
                    {product.commission}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">Price: {product.price}</span>
                  <span className="font-semibold text-green-600">Earn: {product.earnings}</span>
                </div>
              </a>
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