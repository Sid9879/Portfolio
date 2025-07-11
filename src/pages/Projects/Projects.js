import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import download from "../../assets/docs/download.png";
import ecom from "../../assets/docs/ecom.png";
import downloadexpense from "../../assets/docs/downloadexpense.png";
import sale from '../../assets/docs/sale.png'
import quickhirehub from "../../assets/docs/quickhirehub.png";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="col-12 mt-3 mb-1 text-center text-uppercase"
        >
          TOP RECENT PROJECTS
        </motion.h2>
        <hr />

        {/* BlogPage Info Animation */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="col-12 mt-3 mb-1 text-center"
        >
          BlogPage
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <li>User Authentication: Users can sign up, log in, and manage their posts.</li>
          <li>Post Management: Users can create and delete their own blog posts.</li>
          <li>Real-Time Chat: Users can chat with others, possibly using Socket.IO.</li>
          <li>Database Storage: Posts and messages are stored in MongoDB.</li>
          <li>Frontend Framework: React with Tailwind CSS for styling.</li>
        </motion.ul>

        {/* Projects Card Grid */}
        <div className="row" id="ads">
          {[ 
            { img: download, title: "BlogPage Website", link: "https://blog-app-frontend-five-rho.vercel.app/login" },
            { img: ecom, title: "ECommerce Website", link: "https://om-frontend.vercel.app/login" },
            { img: sale, title: "Sale Report", link: "https://sale-report-frontend.vercel.app/login" },
             { img:quickhirehub, title: "Freelancing Website", link: "https://quick-hire-hub.vercel.app/login" },
            { img: downloadexpense, title: "Expense Tracker", link: "https://expense-mu-beige.vercel.app/login" },
             // Update link when available
          ].map((project, index) => (
            <motion.div
              key={index}
              className="col-md-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="card rounded mb-4">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={project.img} alt={`project${index + 1}`} />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">{project.title}</h6>
                  </div>
                  <a className="ad-btn" href={project.link}>
                    View
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
