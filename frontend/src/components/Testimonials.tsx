import { Star } from "lucide-react";
import { FC } from "react";

const TestimonialCard = ({
  quote,
  author,
  rating,
}: {
  quote: string;
  author: string;
  rating: number;
}) => (
  <div className="bg-black/50 border border-roadies-gold/20 rounded-md p-6 md:p-8">
    <div className="flex mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
      ))}
    </div>
    <p className="text-white/90 italic mb-4">"{quote}"</p>
    <p className="text-roadies-gold font-medium">- {author}</p>
  </div>
);

const VideoTestimonial: FC<{ videoId: string }> = ({ videoId }) => (
  <div className="bg-black/50 border border-roadies-gold/20 rounded-xl p-3 md:p-4">
    <div className="aspect-[9/16] max-h-[400px] rounded-lg overflow-hidden">
      <iframe
        className="w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1`}
        title="YouTube video testimonial"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "It's more than coffee. It's my Monday workspace and Friday gig zone!",
      author: "@WheelsAndWords",
      rating: 5,
    },
    {
      quote: "Roadies feels like a clubhouse for bikers with better lattes.",
      author: "@GearheadChef",
      rating: 5,
    },
    {
      quote: "My favorite co-working place. Great vibes and killer brownies.",
      author: "@DigitalNomadVik",
      rating: 4,
    },
  ];

  const videoTestimonials = ["kIBWQuJBVG4", "3CMpLUWzOqc"];

  return (
    <section className="roadies-section bg-black px-4 py-12">
      <div className="container mx-auto">
        <h2 className="section-heading text-center text-roadies-gold">CUSTOMERS REVIEWS</h2>
        <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
          Don't take our word for it, here's what the community has to say.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              rating={testimonial.rating}
            />
          ))}
        </div>

        <h3 className="text-xl md:text-2xl font-display text-center text-roadies-gold mb-8">
          VIDEO TESTIMONIALS
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto px-4 md:px-0">
          {videoTestimonials.map((videoId, index) => (
            <VideoTestimonial key={index} videoId={videoId} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
