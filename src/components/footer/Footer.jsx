import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="footer-content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.h2 whileHover={{ scale: 1.1 }}>Let's Connect!</motion.h2>
        
        <motion.div className="social-icons">
          <motion.a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaLinkedin />
          </motion.a>

          <motion.a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -10 }}
          >
            <FaGithub />
          </motion.a>

          <motion.a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaTwitter />
          </motion.a>

          <motion.a href="mailto:your.email@example.com"
            whileHover={{ scale: 1.2, rotate: -10 }}
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>

        <p>© {new Date().getFullYear()} Ajay Kumar. All Rights Reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
