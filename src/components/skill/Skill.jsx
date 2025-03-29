import React from "react";
import { motion } from "framer-motion";
import "./Skill.css";

const skills = [
  { id: 1, name: "JavaScript", icon: "⚡" },
  { id: 2, name: "React", icon: "⚛️" },
  { id: 3, name: "Next.js", icon: "🚀" },
  { id: 4, name: "Node.js", icon: "🌿" },
  { id: 5, name: "C++", icon: "🔷" },
  { id: 6, name: "SQL & NoSQL", icon: "💾" },
  { id: 7, name: "Express.js", icon: "🖥️" },
  { id: 8, name: "Kafka", icon: "📡" },
  { id: 9, name: "Framer Motion", icon: "🎭" },
  { id: 11, name: "Bootstrap", icon: "🟪" } 

];

const Skill = () => {
  return (
    <motion.section 
      className="skill-section"
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h1>

      <motion.div 
        className="skill-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
        }}
      >
        {skills.map((skill) => (
          <motion.div 
            key={skill.id} 
            className="skill-card"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skill;
