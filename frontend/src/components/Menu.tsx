
import { useState } from 'react';
import { Coffee, Star, Heart } from 'lucide-react';

const MenuCategory = ({ title, icon, items }: { title: string; icon: JSX.Element; items: any[] }) => (
  <div className="menu-category">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="menu-category-title ml-2">{title}</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <div key={index} className="menu-item">
          <div>
            <p className="menu-item-name">{item.name}</p>
            <p className="text-white/70 text-sm">{item.description || ''}</p>
          </div>
          <p className="menu-item-price md:ml-4">₹{item.price}</p>
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
    { name: "Butter Croissant", price: "225" },
    { name: "Almond Croissant", price: "245" },
    { name: "Pain Au Chocolat", price: "245" },
    { name: "Nutella Croissant", price: "255" },
    { name: "Banana Walnut Slice", price: "205" },
    { name: "Chocolate Bomboloni", price: "225" },
    { name: "Something Bomboloni", price: "225" }
  ];

  const cheesecake = [
    { name: "Vanilla", price: "350" },
    { name: "Blue Berries", price: "350" },
    { name: "Nutella", price: "350" },
    { name: "Strawberries", price: "350" },
    { name: "Mocha", price: "350" }
  ];

  const pancakes = [
    { name: "CINNAMON MAPLE ", price: "250" },
    { name: "BANANA NUTELLA ", price: "315" },
  ];

  const coldKoffeeBlenders = [
    { name: "Classic Coffee Rider", price: "275" },
    { name: "Brownie Fudge Off Roader", price: "335" },
    { name: "Toffee Tourer", price: "335" },
    { name: "Mucho Choco Chopper", price: "335" },
    { name: "Banoffee Bobber", price: "335" }
  ];

  const shakes = [
    { name: "Caramel Popcorn Megastar", price: "375" },
    { name: "Peanut Butter Chocolate Co-Star", price: "375" },
    { name: "Strawberry Banana Pornstar", price: "375" },
    { name: "Oreo Popstar", price: "375" },
    { name: "Chocolate Filmstar", price: "375" }
  ];

  const espresso = [
    { name: "Adventure Shot (Medium Strong)", description: "Hot or Iced", price: "125/125" },
    { name: "Hustle Shot (Super Strong)", description: "Hot or Iced", price: "155/155" }
  ];

  const americano = [
    { name: "Classic Americano", description: "Hot or Iced", price: "195" },
    { name: "Yuzu Citrus Americano", description: "Iced only", price: "225" },
  ];

  const cappuccino = [
    { name: "Classic Cappuccino/Latte", description: "Hot or Iced", price: "225/225" },
    { name: "Toffee Nut Cappuccino/Latte", description: "Hot or Iced", price: "225/225" },
    { name: "French Vanilla Cappuccino/Latte", description: "Hot or Iced", price: "255/255" },
    { name: "Irish Cream Cappuccino/Latte", description: "Hot or Iced", price: "255/255" },
    { name: "Roasted Hazelnut Cappuccino/Latte", description: "Hot or Iced", price: "255/255" }
  ];

  const mocha = [
    { name: "Vintage Mocha", description: "Hot or Iced", price: "295/345" },
    { name: "Dark (70% Cocoa)", description: "Hot or Iced", price: "345" },
    { name: "Cinnamon Mocha", description: "Hot or Iced", price: "315/345" },
    { name: "Peppermint Mocha", description: "Hot or Iced", price: "315/345" },
    { name: "Salted Caramel", description: "Hot or Iced", price: "315/345" }
  ];

  const sodaPops = [
    { name: "Wild Berry", price: "275" },
    { name: "Sunset Orange", price: "275" },
    { name: "Asian Lemongrass", price: "275" },
    { name: "Tokyo Yuzu Citrus", price: "275" },
    { name: "Rio Passion Fruit", price: "275" },
    { name: "Patna Chilli Guava", price: "275" },
    { name: "Cuban Mint Mojito", price: "275" }
  ];

  const fauxCocktails = [
    { name: "Rose & Pomegranate", price: "295" },
    { name: "Mango & Peach", price: "295" },
    { name: "Fruit & Ginger", price: "295" }
  ];

  const teas = [
    { name: "Green Tea", price: "225" },
    { name: "English Breakfast", price: "225" },
    { name: "Peach Iced Tea", price: "225" },
    { name: "Classic Lemon Iced Tea", price: "225" }
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
