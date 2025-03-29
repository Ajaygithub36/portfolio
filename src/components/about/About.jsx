import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  // Section animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  // Heading animation
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } },
  };

  // Image animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.6 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } }, // Subtle hover effect
  };

  // Text animation
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.8 } },
  };

  return (
    <motion.section
      id="about"
      className="about-section"
      initial="hidden"
      animate="show"
      variants={sectionVariants}
    >
      {/* Heading Animation */}
      <motion.h1 className="heading" variants={headingVariants}>
        About
      </motion.h1>

      <motion.section className="about-section-content">
        {/* Image Animation with Hover Effect */}
        <motion.div className="about-img" variants={imageVariants} whileHover="hover">
          <motion.img alt="Profile" src="/portfolio/assets/dev3-min.png" />
        </motion.div>

        {/* Text Content Animation */}
        <motion.p className="about-content" variants={textVariants}>
          I'm a passionate web developer with a strong foundation in modern front-end and back-end
          technologies. I specialize in creating interactive, user-friendly, and performance-optimized
          applications.  
          With expertise in <span>React, Next.js, Node.js, C++, SQL, NoSQL Database, and JavaScript </span>   
           I love transforming ideas into seamless digital experiences.  
          <br /><br />
          Beyond coding, I stay updated with the latest tech trends, continuously enhancing my skills to
          deliver innovative solutions. Let’s build something amazing together!
        </motion.p>
      </motion.section>
    </motion.section>
  );
};

export default About;
