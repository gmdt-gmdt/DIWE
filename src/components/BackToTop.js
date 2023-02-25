import React from "react";
import { Link } from "react-router-dom";

const BackToTop = () => {
  return (
    <Link
      to="/home"
      className="btn btn-lg btn-primary btn-lg-square back-to-top"
    >
      <i className="bi bi-arrow-up"></i>
    </Link>
  );
};

export default BackToTop;
