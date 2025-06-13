import { useEffect, lazy, Suspense } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  FileText,
  Code,
  Server,
  Database,
} from "lucide-react";

// Dynamically import components for code splitting
const GradientText = lazy(() => import("./GradientText"));
const RotatingText = lazy(() => import("./RotatingText"));

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Anshmodi03",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/ansh-modi-",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:modiaastha01@gmail.com",
      label: "Email",
    },
  ];

  const skills = [
    { icon: <Code className="w-6 h-6" />, label: "Frontend" },
    { icon: <Server className="w-6 h-6" />, label: "Backend" },
    { icon: <Database className="w-6 h-6" />, label: "Database" },
  ];

  return (
    <section className="relative h-screen overflow-hidden bg-transparent snap-start">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#FA4D56] to-[#8A3FFC]" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/80 to-[#0a0a0a]/80 backdrop-blur-[1px]" />

      {/* Subtle Animated Particles */}
      <div className="absolute inset-0 z hers-10">
        <div className="relative w-full h-full">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] blur-[0.7px]"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: Math.random(),
              }}
              animate={{
                y: ["-10%", "110%"],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-full">
        <motion.div
          className="w-full flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          {/* Content Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 w-full md:w-2/3 md:mt-16">
            {/* Name and Title */}
            <div className="space-y-3">
              <motion.h1
                className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Hi, I'm{" "}
                <Suspense fallback={<span>Ansh Modi</span>}>
                  <GradientText
                    colors={[
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                    ]}
                    className="font-sans inline-block font-semibold"
                  >
                    Ansh Modi
                  </GradientText>
                </Suspense>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-xl text-gray-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                I develop Full Stack Web Applications using{" "}
                <Suspense fallback={<span>MERN Stack</span>}>
                  <GradientText className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold mt-2 tracking-tight">
                    MERN Stack
                  </GradientText>
                </Suspense>
              </motion.p>

              {/* Rotating Text */}
              <motion.div
                className="py-1 mx-auto text-center flex flex-wrap justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.2 }}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <RotatingText
                    texts={[
                      "Innovative Digital Solutions",
                      "Modern Web Experiences",
                      "Seamless User Interfaces",
                    ]}
                    mainClassName="text-sm sm:text-base md:text-lg text-gray-200 font-light tracking-wide inline-block px-2 rounded"
                    staggerFrom="first"
                    initial={{ y: "100%", opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1.1 }}
                    exit={{ y: "-120%", opacity: 0, scale: 0.8 }}
                    whileInView={{ scale: [1, 1, 1] }}
                    staggerDuration={0.05}
                    splitLevelClassName="inline-block"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={3000}
                  />
                </Suspense>
              </motion.div>
            </div>

            {/* Skills */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-400 mt-1 hover:text-white transition-colors duration-300">
                    {skill.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.8 },
                },
              }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 shadow-lg flex items-center gap-2 cursor-pointer group"
                  variants={{
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: { scale: 1, opacity: 1 },
                  }}
                  whileHover={{
                    scale: 1.05,
                    background: "rgba(255, 255, 255, 0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="group-hover:text-white transition-colors duration-300">
                    {link.icon}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image and Resume */}
          <motion.div
            className="flex flex-col items-center w-full md:w-1/3 mt-4 md:mt-0 space-y-6 xl:space-y-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative ml-4 w-32 h-32 sm:w-40 sm:h-40 md:w-[300px] md:h-[300px]">
              <svg
                viewBox="0 0 337.5 337.5"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "scale(1.2)", transformOrigin: "center" }}
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#FA4D56" stopOpacity="1" />
                    <stop offset="100%" stopColor="#8A3FFC" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path
                  d="M168.75,328.20885575711145C195.9024285065292,326.1953723984041,218.90194375722277,310.0693176278276,242.53046891353733,296.5415207645028C266.2374411530437,282.9688113982216,291.4994985806141,271.00895674048445,307.4255509309577,248.8143666600081C324.11788364560863,225.55188616963034,336.73596208312273,197.2717955383524,334.2291415290674,168.75C331.7722366359505,140.79612874850696,310.37822763912374,119.22742904951694,294.03129222352726,96.4188122103224C279.0744364813247,75.54975124752443,263.2487779845603,56.10520465439367,242.57976540066016,40.87309521516591C220.06249072671923,24.278901819890528,196.72122917216836,4.019806107826999,168.75000000000003,4.0922752705227925C140.78755123624396,4.164721684527698,119.32174922910062,27.212850594068016,95.14077766398263,41.255087008383974C71.02269660785488,55.26080200365441,39.68978565939304,62.05094274059895,26.56645813930309,86.66029383239211C13.46741205327194,111.22411147736315,26.842401777684042,140.91350885527362,27.152089376613723,168.74999999999997C27.45785140777632,196.23363868061602,17.31813027984997,224.6314136804596,28.381335984767254,249.7918859549826C39.78810218740238,275.73369996787795,63.62931987292501,294.15226699225957,88.36938586864555,307.9733076190946C112.908259829159,321.6819522930299,140.71854595014133,330.287523093854,168.75,328.20885575711145"
                  fill="url(#gradient)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-[260px] md:h-[260px] rounded-full bg-gray-500 overflow-hidden shadow-2xl">
                  <img
                    src="/profile.png"
                    alt="Ansh Modi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <motion.a
              href="/Ansh-Modi-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2 px-4 sm:px-6 rounded-full transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-full p-2"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
              <span className="text-xs sm:text-sm">View Resume</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer hover:cursor-pointer bottom-10 md:bottom-1"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: [0.5, 1, 0.5], y: [0, -5, 0] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/70" />
      </motion.div>
    </section>
  );
};

export default Hero;
