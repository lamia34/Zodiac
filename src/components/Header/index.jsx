import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/img/Logo.webp"

const Header = () => {
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
            <ul className="menu">
              <li>
              <NavLink activebutton='active' to="/">Ana səhifə</NavLink>
              </li>
              <li>
              <NavLink activebutton='active' to="/about">Bürclər </NavLink>
              </li>
              <li>
              <NavLink activebutton='active' to="/porsionplanner">PLANNER</NavLink>
              </li>
              <li>
              <NavLink activebutton='active' to="/blog">BLOG</NavLink>
              </li>
              <li>
              <NavLink activebutton='active' to="/Try">Try</NavLink>
              </li>
              <li>
              <NavLink activebutton='active' to="/Tarot">Tarot</NavLink>
              </li>
              <li>
              <NavLink activebutton='active' to="/contact">CONTACT</NavLink>
              </li>
              <li>
            <NavLink activeclassname="active" to="/login">LOGIN</NavLink>
             </li>
             </ul>
            </div>

          <div className=" col-1 buttons">
            <Link className="link" to="/favorites">
              <span className="pi pi-heart"></span>
            </Link>
            <Link className="link" to="./">
              <span className="pi pi-user"></span>
            </Link>
            <Link className="link" to="/cart">
              <span className="pi pi-shopping-cart"></span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
