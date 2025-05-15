import { Star, Coffee } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Loyalty = () => {
  const { toast } = useToast();

  return (
    <section className="roadies-section bg-black px-4 hidden">
      {/* The rest of your section is now hidden on all viewports */}
      <div className="container mx-auto">
        <div
          className="max-w-4xl mx-auto bg-black/70 p-8 rounded-lg border border-roadies-gold/20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/loyal.png')",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center">
              <a href="#">
                <img
                  src="/lovable-uploads/Logo.webp"
                  alt="Roadies Koffeehouz Logo"
                  className="h-20 w-auto object-contain"
                />
              </a>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-display text-center text-roadies-gold mb-4">
            RIDE MORE. EARN MORE.
          </h2>
          <p className="text-center text-white/80 mb-8 max-w-2xl mx-auto">
            Join our loyalty program and get exclusive access to freebies, secret menu items, member-only events, and monthly fuel packs.
          </p>

          <div className="max-w-md mx-auto mb-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center">
              <Coffee className="text-roadies-gold mr-2" size={20} />
              Member Benefits
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start justify-center">
                <span className="text-roadies-gold mr-2">✓</span>
                <span className="text-white/80">10% off all coffee drinks</span>
              </li>
              <li className="flex items-start justify-center">
                <span className="text-roadies-gold mr-2">✓</span>
                <span className="text-white/80">Free coffee on your birthday</span>
              </li>
              <li className="flex items-start justify-center">
                <span className="text-roadies-gold mr-2">✓</span>
                <span className="text-white/80">Access to limited edition seasonal drinks</span>
              </li>
              <li className="flex items-start justify-center">
                <span className="text-roadies-gold mr-2">✓</span>
                <span className="text-white/80">Priority seating during events</span>
              </li>
              <li className="flex items-start justify-center">
                <span className="text-roadies-gold mr-2">✓</span>
                <span className="text-white/80">Monthly coffee subscription discounts</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <a href="#contact" className="roadies-btn inline-block">
              Join The Rider's Club
            </a>
          </div>

          <div className="text-center text-white/60 text-xs mt-6">
            By joining our loyalty program, you agree to our Terms of Service and Privacy Policy.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loyalty;
