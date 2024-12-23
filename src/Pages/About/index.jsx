import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Instagram from "../../components/Instagram";

import "./style.css";

import tahir from "../../assets/img/Tahir.png";
import fidan from "../../assets/img/Fidan.png";
import vugar from "../../assets/img/Vuqar.jpeg";
import aysel from "../../assets/img/Aysel.jpg";
import ibrahim from "../../assets/img/Ibrahim.png";

import { FaLightbulb, FaUsers, FaSeedling } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Header />
      <section className="about-us-sec">
        <div className="about-us-content">
          <h3>Together, We Make a Difference</h3>
          <p>
            When you join the LowWaste movement, you’re not just reducing waste;
            you’re creating opportunities for others to live more sustainably.
            Our tools and resources empower you to plan smarter, shop mindfully,
            and make the most out of every meal. We believe that sustainability
            should be simple, accessible, and rewarding. Whether it’s portion
            planning, repurposing leftovers, or connecting with like-minded
            individuals, every small step adds up to a significant change.
            <p>Because at LowWaste, we don’t just save food—we celebrate it.</p>
          </p>
          <button>
            {" "}
            <Link to="/contact">Contact us</Link>{" "}
          </button>
        </div>
        <div className="about-us-img">
          <img
            src="https://static.wixstatic.com/media/cc8baf_52452afa4a724906aa7cef3e22e635aa~mv2.png/v1/fill/w_980,h_551,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/cc8baf_52452afa4a724906aa7cef3e22e635aa~mv2.png"
            alt=""
          />
        </div>
      </section>
      <section className="why-choose-us-sec">
        <h2>Why Choose Us?</h2>
        <div className="wcu-container">
          <div>
            <div>
              <FaSeedling className="icon" />
            </div>
            <h4>Sustainability</h4>
            <p>
              We are committed to building a sustainable future by reducing food
              waste, conserving resources. Every step we take is designed to
              minimize environmental impact.
            </p>
          </div>
          <div>
            <div>
              <FaLightbulb className="icon" />
            </div>
            <h4>Innovation</h4>
            <p>
              We believe in creative solutions to everyday problems. We strive
              to bring innovative ideas that empower individuals and communities
              to live more sustainably.
            </p>
          </div>
          <div>
            <div>
              <FaUsers className="icon" />
            </div>
            <h4>Community</h4>
            <p>
              Collaboration is at the heart of everything we do. We value the
              power of teamwork and shared goals, believing that together we can
              create a significant impact.
            </p>
          </div>
        </div>
      </section>
      <section className="team-sec">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={tahir} />
            <div className="team-member-info">
              <h5>Tahir Novruzov</h5>
              <p>Web-developer</p>
              <div>
                <p>
                  <FaInstagram className="sm" /> @tahir.novruzlu{" "}
                </p>
                <p>
                  <FaLinkedin className="sm" />
                  Novruzlu Tahir
                </p>
              </div>
            </div>
          </div>
          <div className="team-member">
            <img src={fidan} alt="" />
            <div className="team-member-info">
              <h5>Fidan Shamilova</h5>
              <p>HR manager</p>
              <div>
                <p>
                  <FaInstagram className="sm" /> @fidan.shamilova
                </p>
                <p>
                  <FaLinkedin className="sm" />
                  Şamilova Fidan
                </p>
              </div>
            </div>
          </div>
          <div className="team-member">
            <img src={vugar} alt="" />
            <div className="team-member-info">
              <h5>Vugar Mammadov</h5>
              <p>Training Coordinator</p>
              <div>
                <p>
                  <FaInstagram className="sm" /> @vugar.mammadov{" "}
                </p>
                <p>
                  <FaLinkedin className="sm" />
                  Məmmədov Vüqar
                </p>
              </div>
            </div>
          </div>
          <div className="team-member">
            <img src={aysel} />
            <div className="team-member-info">
              <h5>Aysel Hasanova</h5>
              <p>Work with volunteers</p>
              <div>
                <p>
                  <FaInstagram className="sm" /> @aysel.hasanova
                </p>
                <p>
                  <FaLinkedin className="sm" />
                  Həsənova Aysel
                </p>
              </div>
            </div>
          </div>
          <div className="team-member">
            <img src={ibrahim} />
            <div className="team-member-info">
              <h5>Ibrahim Muradli</h5>
              <p>Financial Manager</p>
              <div>
                <p>
                  <FaInstagram className="sm" /> @ibrahim.muradli
                </p>
                <p>
                  <FaLinkedin className="sm" />
                  Muradlı İbrahim
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Instagram />
      <Footer />
    </>
  );
};

export default About;
