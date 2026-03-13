import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
      <ThemeToggle />
    </>
  );
};

export default Index;
