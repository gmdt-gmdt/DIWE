import React from "react";

const BackToTop = () => {
  return (
    <p
      onClick={() => window.scrollTo(0, 0)}
      className="btn btn-lg btn-primary btn-lg-square back-to-top"
    >
      <i className="bi bi-arrow-up"></i>
    </p>
  );
};

export default BackToTop;
