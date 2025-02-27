import React from "react";
import { motion } from "framer-motion";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";

const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="col-12 mt-3 mb-1 text-center text-uppercase"
        >
          Technologies Stack
        </motion.h2>
        <hr />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pb-3 text-center"
        >
          👉 including programming languages, frameworks, databases, front-end
          and back-end tools, and APIs
        </motion.p>

        {/* Tech Stack Grid */}
        <div className="row">
          {TechstackList.map((tech, index) => (
            <motion.div
              key={tech._id}
              className="col-md-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
