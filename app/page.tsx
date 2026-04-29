import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Pricing from "@/components/Pricing";
import Consult from "@/components/Consult";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Pricing />
        <Consult />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
