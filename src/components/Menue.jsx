import React from "react";

function Menue() {
  const menuLeft = [
    {
      img: "./src/assets/images/images/menu-1.png",
      title: "Chicken Biryani",
      desc: "Aromatic basmati rice cooked with spiced chicken, saffron, and herbs for a royal flavor.",
      price: "Rs 550",
      badge: "SPECIAL",
    },
    {
      img: "./src/assets/images/images/menu-3.png",
      title: "Chicken Karahi",
      desc: "Tender chicken cooked in tomato-based gravy with green chilies, garlic, and fresh coriander.",
      price: "Rs 850",
    },
    {
      img: "./src/assets/images/images/menu-5.png",
      title: "Seekh Kebabs",
      desc: "Juicy minced meat skewers grilled with spices, served with chutney and salad.",
      price: "Rs 450",
    },
  ];

  const menuRight = [
    {
      img: "./src/assets/images/images/menu-2.png",
      title: "Beef Nihari",
      desc: "Slow-cooked beef in rich, spicy gravy served with naan and garnished with ginger & lemon.",
      price: "Rs 700",
    },
    {
      img: "./src/assets/images/images/menu-4.png",
      title: "Haleem",
      desc: "A hearty mix of lentils, wheat, and slow-cooked meat topped with fried onions & lemon.",
      price: "Rs 500",
      badge: "NEW",
    },
    {
      img: "./src/assets/images/images/menu-6.png",
      title: "Fish Fry",
      desc: "Crispy fried fish marinated in traditional masala, served hot with raita and lemon.",
      price: "Rs 900",
    },
  ];

  return (
    <section className="relative bg-[#121212] text-white py-30 px-6 font-[DM_Sans] overflow-hidden">
      <div className="absolute inset-0 bg-[url('./src/assets/images/images/pattern-dark.png')] bg-cover opacity-5"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#E4C590] tracking-widest text-sm font-semibold uppercase">
            Special Selection
          </p>
          <div className="flex justify-center items-center gap-2 my-2">
            <div className="w-8 h-[1px] bg-[#E4C590]"></div>
            <div className="w-2 h-2 rounded-full bg-[#E4C590]"></div>
            <div className="w-8 h-[1px] bg-[#E4C590]"></div>
          </div>
          <h2 className="text-5xl font-[Forum] text-white">Delicious Menu</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          <div className="space-y-10">
            {menuLeft.map((item, i) => (
              <div key={i} className="flex items-start gap-5 group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="flex-1 border-b border-gray-700 pb-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-[Forum] text-white">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      {item.badge && (
                        <span className="text-[10px] bg-[#E4C590] text-black px-2 py-[2px] rounded-sm font-semibold">
                          {item.badge}
                        </span>
                      )}
                      <span className="text-[#E4C590] font-[Forum] text-base">
                        {item.price}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-10">
            {menuRight.map((item, i) => (
              <div key={i} className="flex items-start gap-5 group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="flex-1 border-b border-gray-700 pb-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-[Forum] text-white">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      {item.badge && (
                        <span className="text-[10px] bg-[#E4C590] text-black px-2 py-[2px] rounded-sm font-semibold">
                          {item.badge}
                        </span>
                      )}
                      <span className="text-[#E4C590] font-[Forum] text-base">
                        {item.price}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300">
            During winter daily from{" "}
            <span className="text-[#E4C590] font-semibold">7:00 pm</span> to{" "}
            <span className="text-[#E4C590] font-semibold">9:00 pm</span>
          </p>
          <a
            href="#"
            className="inline-block mt-6 border border-[#E4C590] text-[#E4C590] px-8 py-3 font-semibold hover:bg-[#E4C590] hover:text-black transition-all duration-300"
          >
            View All Menu
          </a>
        </div>
      </div>
    </section>
  );
}

export default Menue;
