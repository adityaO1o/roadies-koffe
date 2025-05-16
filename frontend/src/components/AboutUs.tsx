
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
        <h2 className="section-heading text-center"> ABOUT ROADIES KOFFEHOUZ</h2>

        <div className="max-w-4xl mx-auto mb-10">
          <h3 className="text-white mb-10 text-center">
            INDIA'S #1 YOUTH BRAND IN AN
            ALL NEW KOFFEE SHOP FORMAT.
          </h3>

          <p className="text-white/80 mb-6 text-center">
            Presenting a truly kick-ass, lifestyle dining experience With
            strong focus on food, music, events and communities.<br></br>
            Currently serving in Mohali, Chandigarh, Zirakpur, Mumbai,
            Delhi, Ahmedabad, Jalandhar, Ludhiana, Sangrur,
            Nawanshahr, with more locations coming soon! 🚀
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

        {/* Franchise CTA Section */}
        <div className="max-w-4xl mx-auto mb-16 bg-black/70 border border-roadies-gold/30 rounded-lg p-8">
          <h3 className="text-3xl font-display text-white mb-4 text-center">BECOME PART OF THE ROADIES JOURNEY</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-white/90 mb-4">
                Looking to start your own business venture with a proven brand? Roadies Koffeehouz is expanding across India and looking for passionate entrepreneurs to join our family.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="text-white/80 flex items-start">
                  <span className="text-roadies-gold mr-2">✓</span>
                  <span>Proven business model with strong ROI</span>
                </li>
                <li className="text-white/80 flex items-start">
                  <span className="text-roadies-gold mr-2">✓</span>
                  <span>Comprehensive training and ongoing support</span>
                </li>
                <li className="text-white/80 flex items-start">
                  <span className="text-roadies-gold mr-2">✓</span>
                  <span>Exclusive territory rights</span>
                </li>
                <li className="text-white/80 flex items-start">
                  <span className="text-roadies-gold mr-2">✓</span>
                  <span>Marketing and promotional assistance</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/50 p-6 rounded-lg border border-roadies-gold/20">
              <h4 className="text-2xl font-display text-white mb-4 text-center">FRANCHISE INQUIRY</h4>
              <p className="text-white/90 mb-6 text-center">
                Ready to fuel your entrepreneurial journey? Contact us today to learn more about franchise opportunities.
              </p>

              <div className="flex flex-col space-y-4">
                <a
                  href="mailto:franchise@roadieskoffeehouz.com"
                  className="roadies-btn flex items-center justify-center"
                >
                  Email Us About Franchising
                </a>
                <a
                  href="tel:+917717278888"
                  className="roadies-btn flex items-center justify-center"
                >
                  Call: +91-7717278888
                </a>
              </div>
            </div>
          </div>
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
