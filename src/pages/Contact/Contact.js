import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const API_URL = process.env.REACT_APP_API_URL || "https://portfolio-backend-1r39.onrender.com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // Handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("API URL:", API_URL);

    if (!name || !email || !msg) {
      return toast.error("Please provide all fields");
    }
    try {
      const res = await axios.post(
        `${API_URL}/api/v1/portfolio/sendEmail`,
        { name, email, msg }
      );
      
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
          {/* Image Animation */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="col-md-6 col-lg-6 col-xl-6 col-sm-12"
          >
            <div className="card1">
              <div className="row border-line">
                <img
                  src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                  alt="contact"
                  className="image"
                />
              </div>
            </div>
          </motion.div>

          {/* Form Animation */}
          <motion.div
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-lg-6 col-md-6"
          >
            <div className="card2 d-flex card border-0 px-4 py-5">
              <div className="row">
                {/* Contact Links */}
                <div className="row">
                  <h6>
                    Contact With
                    <a href="https://www.linkedin.com/in/siddharth-singh-0b363b256">
                      <BsLinkedin color="blue" size={30} className="ms-2" />
                    </a>
                    <a href="https://github.com/Sid9879">
                      <BsGithub color="black" size={30} className="ms-2" />
                    </a>
                  </h6>
                </div>

                <div className="row px-3 mb-4">
                  <div className="line" />
                  <small className="or text-center">OR</small>
                  <div className="line" />
                </div>

                {/* Form Fields */}
                <div className="row px-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    className="mb-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    className="mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <textarea
                    type="text"
                    name="msg"
                    placeholder="Write your message"
                    className="mb-3"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="button"
                    onClick={handleSubmit}
                  >
                    SEND MESSAGE
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
