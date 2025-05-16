import { useState } from "react";
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';

const Franchise = () => {
  const { toast } = useToast();

  const [showModal, setShowModal] = useState(false); // for modal toggle
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/send-email`,
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (res.data.success) {
        toast({
          title: "Franchise Request Sent!",
          description: "We’ll get in touch with you soon.",
        });
        setFormData({ name: '', phone: '', location: '', message: '' });
        setShowModal(false);
      } else {
        throw new Error(res.data.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    }

    setLoading(false);
  };

  return (

    <section id="franchise" className="roadies-section px-4 bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/loyal.png')",
      }}
    >

      <div className="container mx-auto mb-4 " >
        <h2 className="section-heading text-center">
          Bring Roadies Koffeehouz to Your City
        </h2>

        <div className="max-w-4xl mx-auto mb-9">
          <p className="text-white/80 mb-6 text-center">
            India’s boldest biker café + co-working concept is expanding — and you can be a part of it.

            With handcrafted coffee, high-energy vibes, and serious brand appeal, RKH isn’t just a café — it’s a movement.          </p>

          <div className="my-8 py-6 border-y border-roadies-gold/20">
            <h3 className="text-xl font-display text-center text-roadies-gold mb-4">Why Partner with Us?</h3>
            <ul className="space-y-2 text-white/80 text-center">
              <li><span className="text-roadies-gold mr-2">✓</span> Unique biker + co-working café concept</li>
              <li><span className="text-roadies-gold mr-2">✓</span> Complete setup, training & marketing support</li>
              <li><span className="text-roadies-gold mr-2">✓</span>Loved by Gen Z & millennials</li>
              <li><span className="text-roadies-gold mr-2">✓</span>Backed by solid logistics & IT systems</li>
              <li><span className="text-roadies-gold mr-2">✓</span>100+ stores planned in 5 years</li>
            </ul>
          </div>

          <p className="text-roadies-gold italic text-center text-xl mb-5">Join the tribe. Lead the change.</p>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 border border-white text-white px-4 py-2 bg-transparent transition-all duration-300 hover:bg-white hover:text-black"
          >
            Apply for Franchise
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
          <div className="bg-black p-6 rounded-lg w-full max-w-lg relative border border-white/20">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-white text-2xl hover:text-roadies-gold"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4 text-center text-roadies-gold">Franchise Application</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-white block mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/70 border border-white/30 text-white rounded-md focus:border-roadies-gold focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-white block mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/70 border border-white/30 text-white rounded-md focus:border-roadies-gold focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="location" className="text-white block mb-2">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/70 border border-white/30 text-white rounded-md focus:border-roadies-gold focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-white block mb-2">Message (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-black/70 border border-white/30 text-white rounded-md focus:border-roadies-gold focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 bg-roadies-gold text-black font-bold rounded hover:bg-white transition"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>

  );
};


export default Franchise;
