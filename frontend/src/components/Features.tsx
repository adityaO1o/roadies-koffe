
import { Wifi, Users, Coffee, Clock, MapPin, Calendar } from 'lucide-react';

const FeatureItem = ({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) => (
  <div className="p-6 border border-roadies-gold/30 rounded-md bg-black/50 hover:bg-black/80 transition-colors">
    <div className="mb-4 text-roadies-gold">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="roadies-section relative px-4" 
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url('/lovable-uploads/95469739-785e-4a14-804b-dc4095bb4caa.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container mx-auto">
        <h2 className="section-heading text-center">ALL WORK, ALL PLAY!</h2>
        <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
          What makes Roadies Koffeehouz the ultimate destination for riders and hustlers alike.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         
          <FeatureItem 
            icon={<Coffee size={24} />} 
            title="Premium Coffee Selection" 
            description="Specialty-grade beans from around the world, perfectly roasted and brewed." 
          />
         
          <FeatureItem 
            icon={<Clock size={24} />} 
            title="Opens 24/7" 
            description="Burn the midnight oil or enjoy a late-night caffeine kick before your ride home." 
          />
          <FeatureItem 
            icon={<MapPin size={24} />} 
            title=" CELEBRITY-DRIVEN Brand" 
            description="Celebrity-backed café serving premium experiences inspired by the spirit of Roadies.." 
          />
          
        </div>
      </div>
    </section>
  );
};

export default Features;
