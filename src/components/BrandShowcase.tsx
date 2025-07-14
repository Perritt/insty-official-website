const BrandShowcase = () => {
  const brands = [
    {
      name: "Ulike",
      logo: "/lovable-uploads/7ebdba90-25b7-45c1-8069-26fe467a65c3.png"
    },
    {
      name: "Bedsure",
      logo: "/lovable-uploads/55226dff-1140-4e79-88da-8c9d1845b201.png"
    },
    {
      name: "Lovehoney",
      logo: "/lovable-uploads/a9381e95-a719-4705-8e4d-0bcb9f07066c.png"
    },
    {
      name: "Gochifix",
      logo: "/lovable-uploads/13be0c64-7f7c-4835-8672-db9e77904401.png"
    },
    {
      name: "Goli Nutrition",
      logo: "/lovable-uploads/743ea6d2-3fa9-4831-97e9-597dc7ad2ecd.png"
    },
    {
      name: "MiraGoods",
      logo: "/lovable-uploads/bf81d54c-0768-4c5b-b4f0-fe597df63a25.png"
    },
    {
      name: "Auraglow",
      logo: "/lovable-uploads/2f909d54-ba11-4ddd-bcbf-b05f22f7f063.png"
    },
    {
      name: "Aquasonic",
      logo: "/lovable-uploads/a0f89544-afc5-48b5-ab21-8156927c12f2.png"
    },
    {
      name: "Sleek Socket",
      logo: "/lovable-uploads/5ed25aaa-6541-4418-bf6f-264ae94e48ec.png"
    }
  ];

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-red-50/30 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 pb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Work With The Brands You Know And Love
          </h2>
        </div>

        {/* Auto-scrolling brand carousel */}
        <div className="relative">
          <div className="flex animate-[scroll_30s_linear_infinite] gap-8">
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`}
                className="glass-card p-6 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform group flex-shrink-0 w-32 h-32"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="w-20 h-20 object-contain group-hover:scale-110 transition-transform"
                />
              </div>
            ))}
          </div>
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