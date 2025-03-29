import React from "react";
import { motion } from "framer-motion";
import "./Card.css";

const Card = ({ title, description, img }) => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.img src={img} alt={title} className="card-img" />
      <motion.h2>{title}</motion.h2>
      <motion.p>{description}</motion.p>
    </motion.div>
  );
};

export default Card;
