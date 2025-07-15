const BrandPartnership = () => {
  const brands = [
    { name: "Ulike", logo: "/lovable-uploads/e5d1e55e-104e-460e-aaa4-912dda27ac48.png" },
    { name: "Bedsure", logo: "/lovable-uploads/a6ed07b4-b23d-45a9-a652-c5966ffa5520.png" },
    { name: "Lovehoney", logo: "/lovable-uploads/226aa9d6-48ff-498c-936f-e4ff3f20edba.png" },
    { name: "Gochifix", logo: "/lovable-uploads/ea495264-f258-4024-afb1-85aa41d28730.png" },
    { name: "Goli Nutrition", logo: "/lovable-uploads/be311546-0b8a-458f-af71-d0d2b75075b0.png" },
    { name: "MiraHandCrafts", logo: "/lovable-uploads/516ad7a5-3ddc-4101-b062-db9b7fee5a80.png" },
    { name: "Auraglow", logo: "/lovable-uploads/7245346b-1841-4b3c-9c45-6253f6bbfe26.png" },
    { name: "Sleek socket", logo: "/lovable-uploads/7782406e-dee2-440f-87b0-bd1013e29844.png" },
    { name: "Aquasonic", logo: "/lovable-uploads/dbbf9ebe-c49b-43e6-b35a-d6c3081d720d.png" }
  ];
  
  // Duplicate brands for seamless scrolling
  const duplicatedBrands = [...brands, ...brands];
  return <section className="py-20 px-4 bg-gradient-to-b from-transparent to-red-50/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Work With The Brands You Know And Love
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with world-leading brands and start earning commissions from products you already trust and recommend
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedBrands.map((brand, index) => (
              <div key={index} className="flex-shrink-0 mx-4 group cursor-pointer">
                <div className="w-32 h-32 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center p-4 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 overflow-hidden">
                  <img src={brand.logo} alt={`${brand.name} logo`} className="w-full h-full object-cover rounded-full" />
                </div>
                <p className="text-center mt-3 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">1000+ more global brands waiting for you</p>
        </div>
      </div>
    </section>;
};
export default BrandPartnership;