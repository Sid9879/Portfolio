import React from "react";
import { motion } from "framer-motion";
import "./Menus.css";
import { Link } from "react-scroll";
import profile from "../../assets/docs/profile.png";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          {/* Profile Picture Animation */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="navbar-profile-pic"
          >
            <img src={profile} alt="profile pic" />
          </motion.div>

          {/* Sidebar Links Animation */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="nav-items"
          >
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcHome />
                  Home
                </Link>
              </div>
              <div className="nav-link">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout />
                  About
                </Link>
              </div>
              <div className="nav-link">
                <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcReadingEbook />
                  Education
                </Link>
              </div>
              <div className="nav-link">
                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBiotech />
                  Tech Stack
                </Link>
              </div>
              <div className="nav-link">
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector />
                  Projects
                </Link>
              </div>
              <div className="nav-link">
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBusinessContact />
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcHome />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcReadingEbook />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBiotech />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcPortraitMode />
                </Link>
              </div>
              <div className="nav-link">
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBusinessContact />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
