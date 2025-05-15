
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallery";
import Features from "../components/Features";
import Events from "../components/Events";
import Testimonials from "../components/Testimonials";
import Loyalty from "../components/Loyalty";
import Franchise from "../components/Franchise";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="bg-roadies-dark min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <AboutUs />
      <Gallery />
      <Features />
      <Events />
      <Testimonials />
      <Loyalty />
      <Franchise />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
