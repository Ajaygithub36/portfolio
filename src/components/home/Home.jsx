import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";

const Home = () => {
 
  return (
    <motion.section className="home-section" id="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      
      {/* Left Section */}
      <motion.div className="home-section-left" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.2, duration: 1 } } }}>
        <motion.h1 whileHover={{ scale: 1.02, textShadow: "0px 0px 10px rgba(56, 189, 248, 0.7)" }}>Hello, I'm <motion.span className="highlight" animate={{ rotate: [0, 3, -3, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>Ajay Kumar</motion.span></motion.h1>
        
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
          <TypeAnimation sequence={["Full Stack Developer", 1500, "MERN Stack Expert", 1500, "React & Node.js Enthusiast", 1500, "Building Scalable Web Apps", 1500]} speed={50} repeat={Infinity} />
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>Passionate about building modern, high-performance, and scalable web applications.</motion.p>

        <motion.div> <motion.button className="cta-button" whileHover={{ scale: 1.1, backgroundColor: "#FF8000" }} whileTap={{ scale: 0.9 }} animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>Download Resume</motion.button></motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div className="home-section-right" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
        <motion.img src="/portfolio/assets/dev2-min.png" alt="Ajay Kumar" className="profile-image" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
      </motion.div>

    </motion.section>
  );
};

export default Home;
