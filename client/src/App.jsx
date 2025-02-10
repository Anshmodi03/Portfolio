import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
const App = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [showShine, setShowShine] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Flag to prevent multiple scroll triggers while animating
    let isScrolling = false;

    // Get all section elements within the scrollable container
    const sections = container.querySelectorAll("section");

    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;

      isScrolling = true;

      // Trigger the shine effect by setting state to true
      setShowShine(true);
      // Remove the shine effect after the animation duration (1 second)
      setTimeout(() => {
        setShowShine(false);
      }, 1000);

      // Determine scroll direction (1 for down, -1 for up)
      const direction = e.deltaY > 0 ? 1 : -1;

      // Calculate the current section index
      const currentIndex = Math.round(
        container.scrollTop / container.clientHeight
      );

      // Compute the target index based on direction
      let targetIndex = currentIndex + direction;
      if (targetIndex < 0) targetIndex = 0;
      if (targetIndex >= sections.length) targetIndex = sections.length - 1;

      // Calculate the target scroll position (each section is the height of the viewport)
      const targetScrollTop = targetIndex * container.clientHeight;

      // Scroll to the target section with smooth behavior
      container.scrollTo({
        top: targetScrollTop,
        behavior: "smooth",
      });

      // Allow the next scroll after the animation finishes (adjust timing as needed)
      setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="bg-transparent text-white relative">
      {/* Navbar remains unchanged */}
      <Navbar />

      {/* Fixed progress bar with gradient background */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-500 dark:from-red-300 dark:via-yellow-300 dark:via-green-300 dark:via-blue-300 dark:to-purple-400 origin-left z-50"
        style={{ scaleX }}
      >
        {showShine && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none shine-overlay" />
        )}
      </motion.div>

      {/* Scrollable content container */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory"
      >
        <section id="home" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-start">
          <About />
        </section>
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
