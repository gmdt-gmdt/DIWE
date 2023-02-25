import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <div id="menu-btn" className="fas fa-bars"></div>
        <Link
          data-aos="zoom-in-left"
          data-aos-delay="150"
          to=""
          className="logo"
        >
          <i className="fas fa-paper-plane"></i>Diwe travel
        </Link>
        <nav className="navbar">
          <Link data-aos="zoom-in-left" data-aos-delay="300" to="">
            home
          </Link>
          <Link data-aos="zoom-in-left" data-aos-delay="450" to="about">
            about
          </Link>
          <Link data-aos="zoom-in-left" data-aos-delay="600" to="destination">
            destination
          </Link>
          <Link data-aos="zoom-in-left" data-aos-delay="750" to="services">
            services
          </Link>
          <Link data-aos="zoom-in-left" data-aos-delay="900" to="gallery">
            gallery
          </Link>
          <Link data-aos="zoom-in-left" data-aos-delay="1150" to="blogs">
            blogs
          </Link>
        </nav>
        <div
          data-aos="zoom-in-left"
          data-aos-delay="1300"
          className="btn"
          onClick={() => navigate("book-form")}
        >
          book now
        </div>
      </header>
    </>
  );
};

export default Header;
