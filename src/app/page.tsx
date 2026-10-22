import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#fff' }}>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Testimonial />
      <Footer />
    </main>
  );
}
