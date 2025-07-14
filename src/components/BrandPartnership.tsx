const BrandPartnership = () => {
  const brands = [
    {
      name: "Ulike",
      logo: "/lovable-uploads/0a1af142-81ea-48cb-83b1-3faf570661cd.png"
    },
    {
      name: "Bedsure", 
      logo: "/lovable-uploads/13be0c64-7f7c-4835-8672-db9e77904401.png"
    },
    {
      name: "Lovehoney",
      logo: "/lovable-uploads/144cce7c-5cf5-4f74-bc20-e904c873c359.png"
    },
    {
      name: "Gochifix",
      logo: "/lovable-uploads/2f909d54-ba11-4ddd-bcbf-b05f22f7f063.png"
    },
    {
      name: "Goli Nutrition",
      logo: "/lovable-uploads/55226dff-1140-4e79-88da-8c9d1845b201.png"
    },
    {
      name: "MiraHandCrafts",
      logo: "/lovable-uploads/5ed25aaa-6541-4418-bf6f-264ae94e48ec.png"
    },
    {
      name: "Auraglow",
      logo: "/lovable-uploads/743ea6d2-3fa9-4831-97e9-597dc7ad2ecd.png"
    },
    {
      name: "Aquasonic",
      logo: "/lovable-uploads/7ebdba90-25b7-45c1-8069-26fe467a65c3.png"
    },
    {
      name: "Sleek Socket", 
      logo: "/lovable-uploads/a0f89544-afc5-48b5-ab21-8156927c12f2.png"
    }
  ];

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];
  return <section className="py-20 px-4 bg-gradient-to-b from-transparent to-red-50/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 pb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Work With The Brands You Know And Love
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with world-leading brands and start earning commissions from products you already trust and recommend
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {duplicatedBrands.map((brand, index) => (
              <div key={index} className="flex-shrink-0 group cursor-pointer">
                <div className="w-32 h-32 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center p-6 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <img src={brand.logo} alt={`${brand.name} logo`} className="w-full h-full object-contain" />
                </div>
                <p className="text-center mt-3 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">And 500+ more premium brands in our catalog</p>
        </div>
      </div>
    </section>;
};
export default BrandPartnership;