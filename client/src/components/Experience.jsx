import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "T5 TFI Company",
    logo: "/T5.png",
    websiteImage: "/image.png", // Replace with the actual image path
    websiteLink: "https://missiont5.vercel.app", // Replace with the actual website URL
    overview:
      "Worked as a full stack lead intern at T5 TFI Company from 2025 to 2025.",
    responsibilities: [
      "Led a team of developers in building web applications.",
      "Implemented front-end and back-end features using MERN stack.",
      "Collaborated with designers and product managers to define project requirements.",
    ],
    achievements: [
      "Successfully delivered three major projects on time.",
      "Improved application performance by 20% through optimization techniques.",
      "Received positive feedback from clients and stakeholders.",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center snap-start bg-gradient-to-r from-teal-900 via-blue-900 to-indigo-900 relative z-10"
    >
      <div className="container mx-auto px-4 py-12">
        <motion.h2
          className="text-4xl text-white font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6 justify-center">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-16 h-16 mr-4"
              />
              <h3 className="text-3xl font-semibold">{exp.company}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Text Content */}
              <div>
                <h4 className="text-xl font-bold mb-2">Overview</h4>
                <p className="mb-4">{exp.overview}</p>

                <h4 className="text-xl font-bold mb-2">Responsibilities</h4>
                <ul className="list-disc list-inside mb-4">
                  {exp.responsibilities.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>

                <h4 className="text-xl font-bold mb-2">Achievements</h4>
                <ul className="list-disc list-inside mb-4">
                  {exp.achievements.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>

                <h4 className="text-xl font-bold mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Image and Link */}
              <div className="flex flex-col items-center">
                <img
                  src={exp.websiteImage}
                  alt={`${exp.company} Website`}
                  className="w-full h-70 object-cover rounded-lg mb-4 shadow-md"
                />
                <a
                  href={exp.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ExternalLink size={20} />
                  Visit Website
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
