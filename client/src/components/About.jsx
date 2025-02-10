import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineData = [
  {
    date: "2023 - Present",
    title: "Computer Science Engineering Student",
    company: "Career Point University, Kota, India",
    description:
      "Started in 2023 and currently pursuing a degree in Computer Science Engineering.",
    logo: "/career-point-university.png", // Update the path as needed
  },
  {
    date: "2024 - 2025",
    title: "Full Stack Learning Program",
    company: "Upgrad Education",
    description: "Joined Upgrad Education to learn Full Stack development.",
    logo: "/upgrad.png", // Update the path as needed
  },
  {
    date: "2024 - Present",
    title: "Full Stack Intern",
    company: "T5 TFI Company",
    description:
      "Currently undertaking a full stack internship at T5 TFI Company.",
    logo: "/T5.png", // Update the path as needed
  },
];

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center snap-start bg-gradient-to-r from-teal-900 via-blue-900 to-indigo-900 relative z-10">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Merged icon with heading */}
          <motion.h2
            className="text-4xl text-white font-bold mb-8 flex items-center justify-center space-x-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <User size={48} className="text-white" />
            <span>About Me</span>
          </motion.h2>
          <p className="text-xl mb-8 text-gray-300 text-center">
            I'm Ansh Modi—a passionate full stack Web developer dedicated to
            transforming ideas into engaging digital experiences. With hands-on
            expertise in Html, CSS, JavaScript, React, Node.js, Express.js,
            MongoDB and sleek UI design powered by Tailwind CSS, I build
            scalable, user-centric web applications that stand out. I’m
            continuously evolving, and eager to collaborate on innovative
            projects that push the boundaries of technology. Explore my
            portfolio to see how I bring concepts to life.
          </p>
        </motion.div>
        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={item.date}
              contentStyle={{
                background: "black",
                color: "#fff",
                opacity: "0.8",
              }}
              contentArrowStyle={{ borderRight: "7px solid black" }}
              icon={
                <img
                  src={item.logo}
                  alt={`${item.company} logo`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%", // Ensures the image is circular
                  }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold">
                {item.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-lg">
                {item.company}
              </h4>
              <p className="mt-2">{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default About;
