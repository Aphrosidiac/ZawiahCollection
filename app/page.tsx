import { readBags } from "@/lib/bagsStore";
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

export const dynamic = "force-dynamic";

export default function Home() {
  const allBags = readBags().filter((b) => !b.hidden);
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedPicks bags={allBags} />
      <HowItWorks />
      <Collections bags={allBags} />
      <About />
      <Testimonials />
      <ContactCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
