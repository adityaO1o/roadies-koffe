
const Gallery = () => {
  const images = [
    { 
      src: "/lovable-uploads/gal1.jpg", 
      alt: "Biker with vintage motorcycle", 
      caption: "Classic rides, classic vibes" 
    },
    { 
      src:"/lovable-uploads/gal2.jpg", 
      alt: "Bikers enjoying coffee outside", 
      caption: "Brotherhood & brews" 
    },
    { 
      src:"/lovable-uploads/gal3.jpg", 
      alt: "Vintage cafe with motorcycle", 
      caption: "Our roadside inspiration" 
    },
    { 
      src:"/lovable-uploads/gal4.jpg", 
      alt: "Experience logo", 
      caption: "The Roadies Experience" 
    },
    { 
      src:"/lovable-uploads/gal5.jpg", 
      alt: "Motorcycle on scenic road", 
      caption: "Roadies Koffe Houz" 
    },
    { 
      src:"/lovable-uploads/gal6.jpg", 
      alt: "Motorcycle on scenic road", 
      caption: "Roadies Koffe Houz" 
    }
  ];

  return (
    <section id="gallery" className="roadies-section bg-black px-4">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">THE ROADIES LIFE</h2>
        <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
          Capturing moments from the saddle and beyond - where bikers, coffee, and culture collide.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden group h-64 md:h-80"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
