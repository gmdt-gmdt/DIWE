import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutFromAPI, getCurrentUser } from "../store/actions/auth-actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth);
  const currentToken = getCurrentUser();
  const access = currentToken || (currentUser && currentUser.isAuthenticated);

  const logout = () => {
    dispatch(logoutFromAPI());
    window.location.reload();
  };

  return (
    <div className="container-fluid position-relative p-5">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/home" className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa fa-map-marker-alt me-3"></i>Diwe Tourist
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/home" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="services" className="nav-item nav-link">
              Services
            </Link>
            <Link to="package" className="nav-item nav-link">
              Packages
            </Link>
            <div className="nav-item dropdown">
              <p
                onClick={() => {}}
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </p>
              <div className="dropdown-menu m-0">
                <Link to="/destination" className="dropdown-item">
                  Destination
                </Link>
                <Link to="/booking" className="dropdown-item">
                  Booking
                </Link>
                <Link to="/team" className="dropdown-item">
                  Travel Guides
                </Link>
                <Link to="/testimonial" className="dropdown-item">
                  Testimonial
                </Link>
                {/* <a href="404.html" className="dropdown-item">
                  404 Page
                </a> */}
              </div>
            </div>
            <Link to="contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          {/* <Link
              to="/register"
              className="btn btn-primary rounded-pill py-2 px-4"
            >
              Register
            </Link> */}
          {access && (
            <p
              className="btn bg-primary rounded-pill py-2 px-4"
              onClick={logout}
            >
              Logout
            </p>
          )}
          {!access && (
            <Link
              to="/register"
              className="btn btn-primary rounded-pill py-2 px-4"
            >
              Register
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
