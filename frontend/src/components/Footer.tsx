
const Footer = () => {
  return (
    <footer className="bg-black py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <a href="#">
                <img
                  src="/lovable-uploads/Logo.webp"
                  alt="Roadies Koffeehouz Logo"
                  className="h-20 w-auto object-contain"
                />
              </a>
            </div>
            <p className="text-white/70 mb-6">
              "Brewed for the Ride. Built for the Hustle."
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/roadieskoffeehouz.in/" className="text-white hover:text-roadies-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/roadieskoffeehouz.in" className="text-white hover:text-roadies-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.linkedin.com/company/roadies-koffeehouz-india/" className="text-white hover:text-roadies-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-roadies-gold transition-colors">Home</a></li>
              <li><a href="#menu" className="text-white/70 hover:text-roadies-gold transition-colors">Menu</a></li>
              <li><a href="#gallery" className="text-white/70 hover:text-roadies-gold transition-colors">Gallery</a></li>
              <li><a href="#events" className="text-white/70 hover:text-roadies-gold transition-colors">Events</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-roadies-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Hours</h4>
            <ul className="space-y-2">
              <li className="text-white/70">Opens 24/7</li>
           
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Roadies Koffeehouz. All rights reserved.
          </p>
          <div className="flex items-center text-white/50 text-sm">
            <span>A Venture of leapster restaurants pvt ltd.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
