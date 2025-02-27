import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import mypic from "../../assets/docs/mypic.png";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={mypic}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Hi, I'm Siddharth Singh, a passionate Full-Stack MERN Developer. I specialize in building scalable web applications using MongoDB, Express.js, React, and Node.js. I love solving complex problems and creating seamless user experiences.
              </p>
              <p>
              I have experience in developing real-time applications, eCommerce platforms, expense management systems, and portfolio websites. My expertise includes:

Frontend: React.js, Redux, Tailwind CSS, Vite
Backend: Node.js, Express.js, MongoDB, Socket.IO
Authentication: JWT,
Other Skills: REST APIs, WebSockets, Cloud Deployment (AWS, Vercel)
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
