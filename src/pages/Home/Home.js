import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";
import Resume from "../../assets/docs/Resume.pdf";

const Home = () => {
  const [theme, setTheme] = useTheme();

  // Handle theme switch
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        {/* Theme Toggle Button with Animation */}
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="theme-btn"
          onClick={handleTheme}
        >
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </motion.div>

        <div className="container home-content">
          {/* Heading Animation */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Hi 👋 I'm Siddharth Singh
          </motion.h2>

          {/* Typewriter Animation */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Typewriter
              options={{
                strings: ["Full-Stack Developer!", "MERN Stack Developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.h1>

          {/* Buttons Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="home-buttons"
          >
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=7394090894"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>
            <a className="btn btn-cv" href={Resume} download="Resume.pdf">
              My Resume
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
