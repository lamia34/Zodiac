import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaGithub  } from "react-icons/fa";

// CSS
import "./style.css";

// Logo
import logo from "../../assets/img/Logo.webp";

const Footer = () => {
  return (
    <footer>
      <div className="container-footer d-flex">
        <div className="col-4">
          <div className="footer-logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt cilisis.
          </p>
        </div>
        <div className="col-2 quick-links">
          <div className="quick-links-heading d-flex">
            <p>QUICK LINKS</p>
          </div>
          <div className="quick-links-content">
            <ul typeof="none" className="d-block">
              <li>
                {" "}
                <Link to={"/"}>About</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/"}>FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-2 account">
          <div className="account-heading d-flex">
            <p>ACCOUNT</p>
          </div>
          <div className="account-content">
            <ul typeof="none" className="d-block">
              <li>My Account</li>
              <li>Orders Tracking</li>
              <li>Checkout</li>
              <li>Wishlist</li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="newsletter-heading d-flex">
            <p>NEWSLETTER</p>
          </div>
          <div className="newsletter-content">
            <form action="#">
              <input type="text" placeholder="Email" />
              <button type="submit" className="submit-btn">
                Subscribe
              </button>
            </form>
            <div className="footer-icons d-flex">
              <div className="sm-icon">
                <Link className="link" to="https://github.com/ayselhasanova">
                <FaInstagram className="insta-icon" />
                </Link>
              </div>
              <div className="sm-icon">
                <Link className="link" to="https://github.com/ayselhasanova">
                <FaFacebook className="insta-icon" />
                </Link>
              </div>
              <div className="sm-icon">
                <Link className="link" to="https://github.com/ayselhasanova">
                <FaTwitter className="insta-icon" />
                </Link>
              </div>
              <div className="sm-icon">
                <Link className="link" to="https://github.com/ayselhasanova">
                <FaYoutube className="insta-icon" />
                </Link>
              </div>
              <div className="sm-icon">
                <Link className="link" to="https://github.com/ayselhasanova">
                <FaGithub className="insta-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyrights d-flex justify-content-center">
        Copyright © 2023 All rights reserved | This template is made with by
        developer Lamia
      </p>
    </footer>
  );
};

export default Footer;
