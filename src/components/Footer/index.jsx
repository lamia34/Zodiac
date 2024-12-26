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
          <br/>
          <p>
            Gec olmadan öz ulduzunun yolu ilə gedin.
            "Ulduzlardan ilham alan yol yoldaşınız."
          </p>
        </div>
        <div className="col-2 quick-links">
          <div className="quick-links-content">
            <ul typeof="none" className="d-block">
              <li>Keçidlər</li>
              <li>
                {" "}
                <Link to={"/"}>Haqqında</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/contact"}>Əlaqə</Link>
              </li>
              <li>
                <Link to={"/"}>FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-2 account">
          <div className="account-content">
            <ul typeof="none" className="d-block">
            <li>HESAB</li>
            <li>Hesabım</li>
            <li>Sifariş İzləmə</li>
            <li>Ödəniş</li>
            <li>İstək Siyahısı</li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="newsletter-heading d-flex">
            <p>Mesaj</p>
          </div>
          <div className="newsletter-content">
            <form action="#">
              <input type="text" placeholder="Email" />
              <button type="submit" className="submit-btn">
                Abonə ol
              </button>
            </form>
            <div className="footer-icons d-flex">
              <div className="sm-icon">
                <Link className="link" to="https://www.instagram.com/llamiye.lyv/">
                <FaInstagram className="insta-icon" />
                </Link>
              </div>
              <div className="sm-icon">
                <Link className="link" to="https://github.com/lamia34">
                <FaFacebook className="insta-icon" />
                </Link>
              </div>
              <div className="sm-icon">
                <Link className="link" to="https://github.com/lamia34">
                <FaTwitter className="insta-icon" />
                </Link>
              </div>
              <div className="sm-icon">
                <Link className="link" to="https://www.youtube.com/watch?v=F5FBJ5cesGU">
                <FaYoutube className="insta-icon" />
                </Link>
              </div>
              <div className="sm-icon">
                <Link className="link" to="https://github.com/lamia34">
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
