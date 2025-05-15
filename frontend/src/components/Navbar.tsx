import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 relative flex items-center justify-between">
        {/* Left: Hamburger Menu */}
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger className="flex items-center text-white hover:text-roadies-gold">
              <Menu className="mr-2" size={24} />
              <span className="hidden md:inline text-sm font-medium">MENU</span>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-black border-r border-roadies-gold/20 w-72 md:w-80"
            >
              <div className="flex flex-col space-y-6 p-4">
                {["home", "menu", "gallery", "events", "contact"].map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="text-white hover:text-roadies-gold transition-colors duration-200 font-medium text-lg py-2 border-b border-white/10"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Center: Logo (absolutely centered) */}
        <div className="absolute left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2">
  <a href="#">
    <img
      src="/lovable-uploads/Logo.webp"
      alt="Roadies Koffeehouz Logo"
      className="h-16 w-auto object-contain"
    />
  </a>
</div>


        {/* Right: Reserve a Table Button (hidden on mobile) */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button
              variant="outline"
              className="border border-white text-white px-4 py-2 bg-transparent transition-all duration-300 hover:bg-white hover:text-black text-sm"
            >
              Apply for Franchise
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
