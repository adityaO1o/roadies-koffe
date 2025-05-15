
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* YouTube Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          className="w-full h-full object-cover scale-150"
          src="https://www.youtube.com/embed/Io-bvcHx_lA?autoplay=1&mute=1&loop=1&playlist=Io-bvcHx_lA&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1"
          title="Background video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display mb-4 text-white animate-fade-in">
            <span className="block">FUEL UP. CHILL OUT.</span>
            <span className="text-roadies-gold">RIDE ON.</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 font-serif animate-fade-in">
           Presenting a truly kick-ass, lifestyle dining experience With strong focus on food, music, events and communities.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8 md:mt-12">
            <a href="#menu" className="roadies-btn">
              Explore Menu
            </a>
            <a href="#franchise" className="roadies-btn">
              Get Franchise <ArrowRight className="inline ml-2" size={18} />
            </a>
          </div>

          <div className="mt-12 md:mt-16">
            <p className="text-white/70 font-serif italic">
              <span className="text-roadies-gold">"</span>
              Brewed for the Ride. Built for the Hustle.
              <span className="text-roadies-gold">"</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
