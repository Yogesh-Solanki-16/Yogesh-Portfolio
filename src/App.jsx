import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
