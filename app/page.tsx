import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Appointment from "./components/Appointment";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="site-shell">
      <Header />

      <Hero />

      <About />
      
      <Services />

      <WhyUs />

      <Appointment />

      <FAQ />

      <Contact />

      <Footer />
    </main>
  );
}