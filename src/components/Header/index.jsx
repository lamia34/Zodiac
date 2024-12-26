import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/img/Logo.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping , faHeart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';



const Header = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleUserIconHover = () => {
    setIsHovered(!isHovered);
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <nav className="nav">
          <div className="logo col-1">
            <div className="logo col-1">
  <Link to="/">
    <img src={logo} alt="AstroSphere Logo" />
  </Link>
</div>

          </div>
          <div className="col-10">
          <div className="burger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
          </div>
          <ul className={`menu ${menuOpen ? "active" : ""}`}>
              <li>
              <NavLink activebutton='active' to="/">Giriş</NavLink>
              </li>
              <li>
              <NavLink activebutton='active' to="/about">Haqqında </NavLink>
              </li>
              <li>
              <NavLink activebutton='active' to="/try">Bürclər</NavLink>
              </li>
              <li>
              <NavLink activebutton='active' to="/blog">Blog</NavLink>
              </li>
              <li>
              <NavLink activebutton='active' to="/Tarot">Tarot</NavLink>
              </li>
              <li>
              <NavLink activebutton='active' to="/planet">Planet</NavLink>
              </li>
              <li>
              <NavLink activebutton='active' to="/contact">Əlaqə</NavLink>
              </li>

              <div className="user-actions">
              <Link to="/basket">
              <FontAwesomeIcon icon={faCartShopping} className="basket-icon" />
              </Link>
              <NavLink to="/favorites">
              <FontAwesomeIcon icon={faHeart} className="heart-icon" />
              </NavLink>
              <NavLink to="/login">
              <FontAwesomeIcon icon={faUser} className="user-icon" />
              </NavLink>
              <div className="burger" onClick={toggleMenu}>
               <FontAwesomeIcon icon={faBars} />
               </div>
              </div>
             </ul>
            </div>

          {/* <div className=" col-1 buttons">
            <Link className="link" to="/favorites">
              <span className="pi pi-heart"></span>
            </Link>
            <Link className="link" to="./">
              <span className="pi pi-user"></span>
            </Link>
            <Link className="link" to="/cart">
              <span className="pi pi-shopping-cart"></span>
            </Link>
          </div> */}
        </nav>
      </header>
    </>
  );
};

export default Header;
