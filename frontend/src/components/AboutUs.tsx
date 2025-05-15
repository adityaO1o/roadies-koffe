
import { useState } from 'react';
import { Instagram, Heart, Link } from 'lucide-react';
import { Button } from "@/components/ui/button";

const InstagramPost = ({ imageUrl, likes, caption }: { imageUrl: string; likes: number; caption: string }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="bg-black/50 border border-roadies-gold/20 rounded-lg overflow-hidden">
      <div className="relative group">
        <img src={imageUrl} alt="Instagram post" className="w-full h-60 object-cover" />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={handleLike}
            className="p-2 bg-black/40 rounded-full hover:bg-black/60 transition-colors"
          >
            <Heart 
              className={`${liked ? 'text-red-500 fill-red-500' : 'text-white'} transition-colors`} 
              size={24} 
            />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <Heart className={`${liked ? 'text-red-500 fill-red-500' : 'text-white/80'} mr-2`} size={18} />
          <span className="text-white/80 text-sm">{liked ? likes + 1 : likes} likes</span>
        </div>
        <p className="text-white/80 text-sm line-clamp-2">{caption}</p>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const instagramPosts = [
    {
      imageUrl: "/lovable-uploads/gal1.jpg",
      likes: 245,
      caption: "Our signature Mocha Crusher - the perfect fuel for your journey. #RoadiesKoffeehouz #CoffeeLover",
    },
    {
      imageUrl: "/lovable-uploads/post1.jpg",
      likes: 312,
      caption: "Weekend hangouts with the crew. Perfect spot for bikers and hustlers. #RoadiesKoffeehouz #WeekendVibes"
    },
    {
      imageUrl: "/lovable-uploads/gal3.jpg",
      likes: 178,
      caption: "Morning vibes at Roadies. Come fuel up before your ride! #RoadiesKoffeehouz #MorningRitual",
    }
  ];

  return (
    <section id="about" className="roadies-section bg-black px-4">
      <div className="container mx-auto">
        <h2 className="section-heading text-center"> ABOUT US</h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-white/80 mb-6 text-center">
            Born from the spirit of the open road, Roadies Koffeehouz is not just a café — it's a culture.
            We are the ultimate pitstop for bikers, creators, hustlers, and dreamers who live life in the fast lane but need a moment to refuel, reconnect, and recharge.
          </p>
          
          <p className="text-white/80 mb-6 text-center">
            Nestled in Sector 82, Roadies Koffeehouz blends the rugged charm of vintage biker hangouts with the buzz of modern co-working culture. 
            Whether you're rolling in on two wheels or walking in with a laptop bag, you'll find your tribe here — over strong coffee, good food, and even better conversations.
          </p>
          
          <div className="my-8 py-6 border-y border-roadies-gold/20">
            <h3 className="text-xl font-display text-center text-roadies-gold mb-4">Why We Exist:</h3>
            <ul className="space-y-2">
              <li className="text-white/80 flex items-center justify-center">
                <span className="text-roadies-gold mr-2">✓</span>
                <span>To serve handcrafted coffee that's as bold as your journey.</span>
              </li>
              <li className="text-white/80 flex items-center justify-center">
                <span className="text-roadies-gold mr-2">✓</span>
                <span>To create a space where work meets wanderlust.</span>
              </li>
              <li className="text-white/80 flex items-center justify-center">
                <span className="text-roadies-gold mr-2">✓</span>
                <span>To bring together a community that rides hard, works smart, and lives free.</span>
              </li>
            </ul>
          </div>
          
          <p className="text-roadies-gold italic text-center text-xl mb-10">
            "So park your bike, plug in your charger, and pour yourself into the vibe — you're home now."
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <Instagram className="text-roadies-gold mr-2" size={24} />
            <h3 className="text-2xl font-display text-white">INSTAGRAM FEED</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {instagramPosts.map((post, index) => (
              <InstagramPost 
                key={index}
                imageUrl={post.imageUrl}
                likes={post.likes}
                caption={post.caption}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <a 
              href="https://www.instagram.com/roadieskoffeehouz.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 border border-white text-white px-4 py-2 bg-transparent transition-all duration-300 hover:bg-white hover:text-black transition-all"
            >
              <Instagram size={20} />
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
