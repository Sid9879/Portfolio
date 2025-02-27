import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import mypic from "../../assets/docs/mypic.png";

const About = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="about"
      id="about"
    >
      <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
          <motion.img
            src={mypic}
            alt="profile_pic"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            About me
          </motion.h1>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Hi, I'm Siddharth Singh, a passionate Full-Stack MERN Developer. I specialize in building scalable web applications using MongoDB, Express.js, React, and Node.js. I love solving complex problems and creating seamless user experiences.
          </motion.p>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            I have experience in developing real-time applications, eCommerce platforms, expense management systems, and portfolio websites. My expertise includes:
            <br />
            <strong>Frontend:</strong> React.js, Redux, Tailwind CSS, Vite
            <br />
            <strong>Backend:</strong> Node.js, Express.js, MongoDB, Socket.IO
            <br />
            <strong>Authentication:</strong> JWT
            <br />
            <strong>Other Skills:</strong> REST APIs, WebSockets, Cloud Deployment (AWS, Vercel)
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
