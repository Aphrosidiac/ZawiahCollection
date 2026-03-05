import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedPicks from "./components/FeaturedPicks";
import HowItWorks from "./components/HowItWorks";
import Collections from "./components/Collections";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedPicks />
      <HowItWorks />
      <Collections />
      <About />
      <Testimonials />
      <ContactCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
