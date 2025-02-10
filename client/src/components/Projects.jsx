"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  FaTimes,
  FaGithub,
  FaGlobe,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaProjectDiagram, // <-- New Projects icon import
} from "react-icons/fa";

// Updated project data structure with liveLink, githubLink, and languages
const projects = [
  {
    title: "ParkNest",
    description:
      "ParkNest is a smart parking solution offering real-time spot availability.",
    image: "/Projects/parknest.png",
    liveLink: "https://parknest.vercel.app",
    githubLink: "https://github.com/Anshmodi03/ParkNest",
    languages: [
      "React",
      "JavaScript",
      "CSS",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
  },
  {
    title: "Connectify",
    description:
      "Connectify is a full-stack MERN social media platform for connecting, posting, and interacting.",
    image: "/Projects/connectify.png",
    liveLink: "https://mern-social-media-rho.vercel.app/home",
    githubLink: "https://github.com/Anshmodi03/MERN-social-media",
    languages: [
      "React",
      "JavaScript",
      "CSS",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
  },
  {
    title: "IMDB Clone",
    description:
      "A React app that mimics IMDb using the TMDB API to showcase trending movies and TV shows.",
    image: "/Projects/imdb.png",
    liveLink: "https://anshmodi03-imdb-clone.vercel.app",
    githubLink: "https://github.com/Anshmodi03/imdb-clone",
    languages: ["React", "CSS", "JavaScript"],
  },
  {
    title: "Fitness-tracker",
    description:
      "A React fitness tracker that logs activities and visualizes progress toward personal goals.",
    image: "/Projects/fitness.png",
    liveLink: "https://fitness-tracker-brown.vercel.app",
    githubLink: "https://github.com/Anshmodi03/fitness-tracker",
    languages: ["React", "Tailwind CSS", "CSS", "JavaScript"],
  },
  {
    title: "Expense-tracker",
    description:
      "A lightweight expense tracker built with React for managing personal finances.",
    image: "/Projects/expense.png",
    liveLink: "https://anshmodi-expense-tracker.vercel.app",
    githubLink: "https://github.com/Anshmodi03/expense-tracker",
    languages: ["React", "CSS", "JavaScript"],
  },
  {
    title: "Meal Recommendation",
    description:
      "A React microservice that recommends the top 10 healthy recipes based on your chosen cuisine and city.",
    image: "/Projects/meal.png",
    liveLink: "https://ansh-meal-recomandation.vercel.app",
    githubLink: "https://github.com/Anshmodi03/meal-recomandation",
    languages: ["React", "CSS", "JavaScript", "Tailwind CSS"],
  },
];

const ProjectCard = ({ project, onClick, delay, isMobile }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <motion.div
      style={isMobile ? {} : { x, y, rotateX, rotateY, z: 100 }}
      drag={isMobile}
      dragElastic={0.16}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ cursor: "grabbing" }}
      className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg ${
        !isMobile && "hover:shadow-2xl"
      } transition-all duration-300 cursor-grab ${
        isMobile ? "h-full" : "h-[400px]"
      } w-[350px] flex flex-col`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
    >
      <img
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 line-clamp-1">
        {project.title}
      </h3>
      <p className="text-sm mb-4 line-clamp-2 flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.languages.slice(0, 6).map((lang, index) => (
          <motion.span
            key={index}
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-2 py-0.5 rounded-full text-[11px] font-semibold text-white shadow-md"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
          >
            {lang}
          </motion.span>
        ))}
        {project.languages.length > 6 && (
          <span className="text-[11px] text-gray-300 px-2 py-0.5">
            +{project.languages.length - 6} more
          </span>
        )}
      </div>
      <div className="flex gap-3 mt-auto">
        <motion.a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-white text-sm bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-3 py-1.5 hover:from-green-500 hover:to-blue-600 transition-all duration-300 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
        >
          <FaGlobe className="text-base" />
          <span>Live Demo</span>
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
          >
            <FaExternalLinkAlt className="text-xs" />
          </motion.span>
        </motion.a>
        <motion.a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-white text-sm bg-gradient-to-r from-gray-600 to-gray-800 rounded-full px-3 py-1.5 hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
        >
          <FaGithub className="text-base" />
          <span>GitHub</span>
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
          >
            <FaExternalLinkAlt className="text-xs" />
          </motion.span>
        </motion.a>
      </div>
    </motion.div>
  );
};

const Modal = ({ project, onClose }) => (
  <AnimatePresence>
    {project && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-70"
          onClick={onClose}
        ></div>
        <motion.div
          className="relative bg-gradient-to-r from-teal-900 via-blue-900 to-indigo-900 text-white rounded-lg p-8 max-w-lg mx-auto z-50"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-xl focus:outline-none"
          >
            <FaTimes />
          </button>
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
          <p className="mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.languages.map((lang, index) => (
              <motion.span
                key={index}
                className="bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-md"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >
                {lang}
              </motion.span>
            ))}
          </div>
          <div className="flex gap-4">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-4 py-2 hover:from-green-500 hover:to-blue-600 transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGlobe className="text-lg" />
              <span>Live Demo</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >
                <FaExternalLinkAlt className="text-xs" />
              </motion.span>
            </motion.a>
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-full px-4 py-2 hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-lg" />
              <span>GitHub</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
              >
                <FaExternalLinkAlt className="text-xs" />
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  // currentIndex now represents the starting index for the visible sliding window
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // In a 3-card visible window, maximum starting index is (total projects - 3)
  const maxIndex = projects.length - 3;
  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Constants for card dimensions and spacing (in pixels)
  const cardWidth = 350;
  const gap = 32;
  const extraGap = 32;

  // Calculate offset in pixels for a given starting index
  const getOffset = (index) => {
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += cardWidth + gap;
      if ((i + 1) % 3 === 0) {
        offset += extraGap;
      }
    }
    return offset;
  };

  return (
    <section className="min-h-screen pt-16 bg-gradient-to-r from-teal-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-8">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaProjectDiagram className="inline-block" /> Projects
        </motion.h2>
        {isMobile ? (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                delay={index * 0.15}
                onClick={() => setSelectedProject(project)}
                isMobile={true}
              />
            ))}
          </div>
        ) : (
          // The desktop slider shows a sliding window of 3 cards
          <div className="relative mx-auto" style={{ width: "1146px" }}>
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: -getOffset(currentIndex) }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    // Add an extra right margin after every 3rd card
                    style={{
                      marginRight:
                        (index + 1) % 3 === 0 ? `${extraGap}px` : `${gap}px`,
                    }}
                  >
                    <ProjectCard
                      project={project}
                      delay={index * 0.15}
                      onClick={() => setSelectedProject(project)}
                      isMobile={false}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
            {/* Previous Button */}
            <motion.button
              disabled={currentIndex === 0}
              style={{
                opacity: currentIndex === 0 ? 0.5 : 1,
                pointerEvents: currentIndex === 0 ? "none" : "auto",
                position: "absolute",
                top: "50%",
                left: "-40px",
                transform: "translateY(-50%)",
              }}
              onClick={prevSlide}
              whileHover={currentIndex === 0 ? {} : { scale: 1.1 }}
              whileTap={currentIndex === 0 ? {} : { scale: 0.9 }}
            >
              <FaChevronLeft className="text-white text-2xl" />
            </motion.button>
            {/* Next Button */}
            <motion.button
              disabled={currentIndex === maxIndex}
              style={{
                opacity: currentIndex === maxIndex ? 0.5 : 1,
                pointerEvents: currentIndex === maxIndex ? "none" : "auto",
                position: "absolute",
                top: "50%",
                right: "-40px",
                transform: "translateY(-50%)",
              }}
              onClick={nextSlide}
              whileHover={currentIndex === maxIndex ? {} : { scale: 1.1 }}
              whileTap={currentIndex === maxIndex ? {} : { scale: 0.9 }}
            >
              <FaChevronRight className="text-white text-2xl" />
            </motion.button>
          </div>
        )}
        {/* View All Projects Link */}
        <div className="mt-5 text-center">
          <a
            href="https://github.com/Anshmodi03?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <FaGithub className="text-lg" />
            View All Projects on GitHub
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
      <Modal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
