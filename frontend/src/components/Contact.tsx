
import { useState } from 'react';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';

const ContactInfo = ({ icon, title, content }: { icon: JSX.Element; title: string; content: React.ReactNode }) => (
  <div className="flex items-start mb-6">
    <div className="text-roadies-gold mr-4 mt-1">
      {icon}
    </div>
    <div>
      <h3 className="text-white font-medium mb-1">{title}</h3>
      <div className="text-white/80">{content}</div>
    </div>
  </div>
);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  
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
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );
  
      if (res.data.success) {
        toast({
          title: "Booking Request Sent!",
          description: "We'll contact you shortly to confirm.",
        });
        setFormData({
          name: '',
          phone: '',
          location: '',
          message: '',
        });
      } else {
        throw new Error(res.data.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    }
  
    setLoading(false);
  };
  

  return (
    <section id="contact" className="roadies-section bg-roadies-dark px-4">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">RESERVE YOUR SPOT</h2>
        <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
          Apply for franchise or inquire about franchise of Roadies Koffeehouz.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-display text-white mb-6">GET IN TOUCH</h3>
            
            <ContactInfo 
              icon={<MapPin size={24} />} 
              title="Address" 
              content={
                <address className="not-italic">
                  Sco 40 , Top Floor or Third Floor<br />
                  HLP Galeria , Phase 8,<br />
                  S.A.S. NAGAR Mohali,Punjab
                </address>
              } 
            />
            
            <ContactInfo 
              icon={<Phone size={24} />} 
              title="Phone" 
              content={<a href="tel:+917717278888" className="hover:text-roadies-gold transition-colors">+91-7717278888</a>} 
            />
            
            <ContactInfo 
              icon={<Mail size={24} />} 
              title="Email" 
              content={<a href="mailto:franchise@roadieskoffeehouz.com" className="hover:text-roadies-gold transition-colors">franchise@roadieskoffeehouz.com</a>} 
            />
            
            <ContactInfo 
              icon={<Calendar size={24} />} 
              title="Hours" 
              content={
                <div>
                  <div>Opens 24/7</div>
                  
                </div>
              } 
            />
            
            <div className="mt-8">
              <h3 className="text-xl font-display text-white mb-4">FIND US HERE</h3>
              <div className="h-64 bg-gray-300 rounded-md overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.4622788878706!2d77.3932702!3d28.5563278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f5d4a7d59d%3A0x5c7498284c9f1ad3!2sSector%2082%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1683578633326!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="bg-black/50 p-6 md:p-8 rounded-md border border-roadies-gold/30">
            <h3 className="text-2xl font-display text-white mb-6">Apply for Franchise</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-white block mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/70 border border-white/30 text-white rounded-md focus:border-roadies-gold focus:outline-none"
                  required
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
                  className="w-full px-4 py-2 bg-black/70 border border-white/30 text-white rounded-md focus:border-roadies-gold focus:outline-none"
                  required
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
                  className="w-full px-4 py-2 bg-black/70 border border-white/30 text-white rounded-md focus:border-roadies-gold focus:outline-none"
                  required
                />
              </div>
              
             
              
              <div>
                <label htmlFor="message" className="text-white block mb-2">Special Requests</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-black/70 border border-white/30 text-white rounded-md focus:border-roadies-gold focus:outline-none resize-none"
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="roadies-btn w-full flex justify-center items-center"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Book Now'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
