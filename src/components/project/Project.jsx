import React from "react";
import { motion } from "framer-motion";
import "./Project.css";
import Card from "../card/Card";

const projects = [
  { id: 1, title: "End Point Security (EPS)", description: "Which is used to Protect our device which is connected to the  Network its act like a security gaurd it protect from unauthrized user can not steal important information  ", img: "/assets/project1.jpg" },
  { id: 2, title: "Web Application Firewall (WAF)", description: "This is project two.", img: "/assets/project2.jpg" },
  { id: 3, title: "Health Highway", description: "This is project three.", img: "/assets/project3.png" },
];

const Project = () => {
  return (
    <motion.section
      className="project-section"
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.h1 className="heading">Projects</motion.h1>
      
      <motion.section 
        className="project-card"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
        }}
      >
        {projects.map((project) => (
          <Card key={project.id} title={project.title} description={project.description} img={project.img} />
        ))}
      </motion.section>
    </motion.section>
  );
};

export default Project;
