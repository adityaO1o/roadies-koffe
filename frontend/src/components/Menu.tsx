import { useState } from 'react';
import { Coffee, Star, Heart } from 'lucide-react';

const MenuCategory = ({ title, icon, items }) => (
  <div className="menu-category">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="menu-category-title ml-2">{title}</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
      {items.map((item, index) => (
        <div key={index} className="menu-item">
          <div>
            <p className="menu-item-name">{item.name}</p>
            <p className="text-white/70 text-sm">{item.description || ''}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("bakes");

  const categories = [
    { id: "all", name: "All" },
    { id: "bakes", name: "Bakes" },
    { id: "coffee", name: "Coffee" },
    { id: "coldbrews", name: "Cold Brews" },
    { id: "shakes", name: "Shakes" },
    { id: "sodas", name: "Sodas" }
  ];

  const bakes = [
    { name: "Butter Croissant" },
    { name: "Almond Croissant" },
    { name: "Pain Au Chocolat" },
    { name: "Nutella Croissant" },
    { name: "Banana Walnut Slice" },
    { name: "Chocolate Bomboloni" },
    { name: "Something Bomboloni" }
  ];

  const cheesecake = [
    { name: "Vanilla" },
    { name: "Blue Berries" },
    { name: "Nutella" },
    { name: "Strawberries" },
    { name: "Mocha" }
  ];

  const pancakes = [
    { name: "CINNAMON MAPLE " },
    { name: "BANANA NUTELLA " },
  ];

  const coldKoffeeBlenders = [
    { name: "Classic Coffee Rider" },
    { name: "Brownie Fudge Off Roader" },
    { name: "Toffee Tourer" },
    { name: "Mucho Choco Chopper" },
    { name: "Banoffee Bobber" }
  ];

  const shakes = [
    { name: "Caramel Popcorn Megastar" },
    { name: "Peanut Butter Chocolate Co-Star" },
    { name: "Strawberry Banana Pornstar" },
    { name: "Oreo Popstar" },
    { name: "Chocolate Filmstar" }
  ];

  const espresso = [
    { name: "Adventure Shot (Medium Strong)", description: "Hot or Iced" },
    { name: "Hustle Shot (Super Strong)", description: "Hot or Iced" }
  ];

  const americano = [
    { name: "Classic Americano", description: "Hot or Iced" },
    { name: "Yuzu Citrus Americano", description: "Iced only" },
  ];

  const cappuccino = [
    { name: "Classic Cappuccino/Latte", description: "Hot or Iced" },
    { name: "Toffee Nut Cappuccino/Latte", description: "Hot or Iced" },
    { name: "French Vanilla Cappuccino/Latte", description: "Hot or Iced" },
    { name: "Irish Cream Cappuccino/Latte", description: "Hot or Iced" },
    { name: "Roasted Hazelnut Cappuccino/Latte", description: "Hot or Iced" }
  ];

  const mocha = [
    { name: "Vintage Mocha", description: "Hot or Iced" },
    { name: "Dark (70% Cocoa)", description: "Hot or Iced" },
    { name: "Cinnamon Mocha", description: "Hot or Iced" },
    { name: "Peppermint Mocha", description: "Hot or Iced" },
    { name: "Salted Caramel", description: "Hot or Iced" }
  ];

  const sodaPops = [
    { name: "Wild Berry" },
    { name: "Sunset Orange" },
    { name: "Asian Lemongrass" },
    { name: "Tokyo Yuzu Citrus" },
    { name: "Rio Passion Fruit" },
    { name: "Patna Chilli Guava" },
    { name: "Cuban Mint Mojito" }
  ];

  const fauxCocktails = [
    { name: "Rose & Pomegranate" },
    { name: "Mango & Peach" },
    { name: "Fruit & Ginger" }
  ];

  const teas = [
    { name: "Green Tea" },
    { name: "English Breakfast" },
    { name: "Peach Iced Tea" },
    { name: "Classic Lemon Iced Tea" }
  ];

  return (
    <section id="menu" className="roadies-section bg-roadies-dark px-4">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">FUEL YOUR JOURNEY</h2>
        <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
          Crafted with precision and served with attitude. Our menu is designed to keep you energized for the ride ahead.
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 border ${activeCategory === category.id
                  ? "border-roadies-gold text-roadies-gold"
                  : "border-white/30 text-white"
                } transition-colors rounded-sm`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {(activeCategory === "all" || activeCategory === "bakes") && (
            <MenuCategory
              title="BAKES"
              icon={<Heart className="text-roadies-gold" size={24} />}
              items={bakes}
            />
          )}

          {(activeCategory === "all" || activeCategory === "bakes") && (
            <MenuCategory
              title="cheesecake"
              icon={<Heart className="text-roadies-gold" size={24} />}
              items={cheesecake}
            />
          )}

          {(activeCategory === "all" || activeCategory === "bakes") && (
            <MenuCategory
              title="pancakes"
              icon={<Heart className="text-roadies-gold" size={24} />}
              items={pancakes}
            />
          )}

          {(activeCategory === "all" || activeCategory === "coldbrews") && (
            <MenuCategory
              title="COLD KOFFEE BLENDERS"
              icon={<Coffee className="text-roadies-gold" size={24} />}
              items={coldKoffeeBlenders}
            />
          )}

          {(activeCategory === "all" || activeCategory === "shakes") && (
            <MenuCategory
              title="ALL-STAR ICE CREAM SHAKES"
              icon={<Star className="text-roadies-gold" size={24} />}
              items={shakes}
            />
          )}

          {(activeCategory === "all" || activeCategory === "coffee") && (
            <MenuCategory
              title="ESPRESSO"
              icon={<Coffee className="text-roadies-gold" size={24} />}
              items={espresso}
            />
          )}

          {(activeCategory === "all" || activeCategory === "coffee") && (
            <MenuCategory
              title="AMERICANO"
              icon={<Coffee className="text-roadies-gold" size={24} />}
              items={americano}
            />
          )}

          {(activeCategory === "all" || activeCategory === "coffee") && (
            <MenuCategory
              title="CAPPUCCINO / LATTE"
              icon={<Coffee className="text-roadies-gold" size={24} />}
              items={cappuccino}
            />
          )}

          {(activeCategory === "all" || activeCategory === "coffee") && (
            <MenuCategory
              title="MOCHA"
              icon={<Coffee className="text-roadies-gold" size={24} />}
              items={mocha}
            />
          )}

          {(activeCategory === "all" || activeCategory === "sodas") && (
            <MenuCategory
              title="SODA POPS"
              icon={<Coffee className="text-roadies-gold" size={24} />}
              items={sodaPops}
            />
          )}

          {(activeCategory === "all" || activeCategory === "sodas") && (
            <MenuCategory
              title="FAUX COCKTAILS"
              icon={<Coffee className="text-roadies-gold" size={24} />}
              items={fauxCocktails}
            />
          )}

          {(activeCategory === "all" || activeCategory === "sodas") && (
            <MenuCategory
              title="THE PILLIONS (TEA SELECTION)"
              icon={<Coffee className="text-roadies-gold" size={24} />}
              items={teas}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
