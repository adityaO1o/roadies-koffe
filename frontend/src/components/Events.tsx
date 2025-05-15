import { Calendar } from 'lucide-react';

const EventCard = ({ date, title, description, image }) => (
  <div className="bg-black/80 border border-roadies-gold/20 rounded-md overflow-hidden group hover:border-roadies-gold transition-colors">
    <div className="h-48 overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute top-0 left-0 bg-roadies-gold text-black font-bold py-1 px-3">
        {date}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      <a href="#contact" className="roadies-btn inline-block text-sm">
        Join Now
      </a>
    </div>
  </div>
);

const Events = () => {
  const events = [
    {
      date: "Every Sunday",
      title: "Monthly Rider Meetups",
      description: "Join fellow riders for coffee, conversations, and community. Share stories from the road and make new friends.",
      image: "/lovable-uploads/95469739-785e-4a14-804b-dc4095bb4caa.png"
    },
    {
      date: "Every Friday",
      title: "Open Mic Nights",
      description: "Showcase your talent or enjoy performances from local artists in our cozy atmosphere with great coffee.",
      image: "/lovable-uploads/gig.avif"
    },
    {
      date: "First Saturday",
      title: "Unplugged Indie Gigs",
      description: "Experience intimate acoustic performances from indie artists while enjoying your favorite brew.",
      image: "/lovable-uploads/d9a3171a-0e12-4eec-8058-7c880c52e986.png"
    },
    {
      date: "Last Thursday",
      title: "Barista Showdowns",
      description: "Watch our skilled baristas compete in latte art and brewing techniques. Free tastings for all attendees!",
      image: "/lovable-uploads/brist.webp"
    }
  ];

  return (
    <section id="events" className="roadies-section bg-roadies-dark px-4 hidden">
      {/* The rest of your section is now hidden on all viewports */}
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Calendar className="text-roadies-gold mr-2" size={28} />
          <h2 className="section-heading text-center mb-0">UPCOMING EVENTS</h2>
        </div>
        <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
          There's always something happening at Roadies. Mark your calendar and don't miss out.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <EventCard 
              key={index}
              date={event.date}
              title={event.title}
              description={event.description}
              image={event.image}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="roadies-btn">
            Host Your Event
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
