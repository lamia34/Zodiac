import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Instagram from "../../components/Instagram";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Header />
      <section id="contact">
        <div className="container-contact">
          <div className="row">
            <div className="col-6 contact">
              <div className="contact-info">
                <h2>Contact info</h2>
                <h4>
                  <i className="fa-solid fa-location-dot" /> Adress{" "}
                </h4>
                <p>Azerbaijan State Oil and Industry University</p>
                <h4>
                  <i className="fa-solid fa-phone" /> Phone number{" "}
                </h4>
                <p>+994(50)588-84-13</p>
                <div className="contact-sm">
                  <h4>
                    <i className="fa-solid fa-headphones" /> Contact
                  </h4>
                  <p>
                    {" "}
                    <FaInstagram className="insta-icon" /> @lowwaste.aze
                  </p>
                  <p>
                    {" "}
                    <FaTwitter className="insta-icon" /> @lowwaste4147
                  </p>
                </div>
              </div>
              <div className="send-message">
                <h2>Send a message</h2>
                <form action="">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="text" placeholder="Website" />
                  <input type="text" placeholder="Message" />
                  <input
                    type="submit"
                    className="submit-btn-send"
                    placeholder="Göndər"
                  />
                </form>
              </div>
            </div>
            <div className="col-6">
              <div>
                <iframe
                  title="ASOIU Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13742.401803664223!2d49.8471536394337!3d40.37850090095196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da7c3a641cf%3A0x53a5c1e7cc11c36f!2z0JDQt9C10YDQsdCw0LnQtNC20LDQvdGB0LrQuNC5INCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQo9C90LjQstC10YDRgdC40YLQtdGCINCd0LXRhNGC0Lgg0Jgg0J_RgNC-0LzRi9GI0LvQtdC90L3QvtGB0YLQuA!5e1!3m2!1sru!2saz!4v1731071583537!5m2!1sru!2saz"
                  width="100%"
                  height="680px"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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

export default Contact;
