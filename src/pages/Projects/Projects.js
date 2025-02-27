import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import download from "../../assets/docs/download.png";
import ecom from "../../assets/docs/ecom.png";
import downloadexpense from "../../assets/docs/downloadexpense.png";

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <h2 className="col-12 mt-3 mb-1 text-center">
          BlogPage
        </h2>
        <ul className="" >
          <li>
          User Authentication: Users can sign up, log in, and manage their posts.
          </li>
          <li>
          Post Management: Users can create and delete their own blog posts.
          </li>
          <li>
          Real-Time Chat: Users can chat with others, possibly using Socket.IO for real-time messaging.
          </li>
          <li>
          Database Storage: Posts and messages are stored in MongoDB.
          </li>
          <li>
          Frontend Framework: Likely using React with Tailwind CSS for styling.
          </li>
        </ul>
        {/* <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p> */}
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                  src={download}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      BlogPage Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://blog-app-frontend-five-rho.vercel.app/login"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src={ecom}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">ECommerce Website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://om-frontend.vercel.app/login"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src={downloadexpense}
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Expense Tracker</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
