import React from "react";
import RubricTitle from "../molecules/RubricTitle";

export const Team = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <RubricTitle title="Travel Guide" subTitle="Meet Our Guide" />
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="images/team-1.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: -19 }}
              >
                <p className="btn btn-square mx-1" onClick={() => {}}>
                  <i className="fab fa-facebook-f"></i>
                </p>
                <p className="btn btn-square mx-1" onClick={() => {}}>
                  <i className="fab fa-twitter"></i>
                </p>
                <p className="btn btn-square mx-1" onClick={() => {}}>
                  <i className="fab fa-instagram"></i>
                </p>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="images/team-2.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: -19 }}
              >
                <p className="btn btn-square mx-1" onClick={() => {}}>
                  <i className="fab fa-facebook-f"></i>
                </p>
                <p className="btn btn-square mx-1" onClick={() => {}}>
                  <i className="fab fa-twitter"></i>
                </p>
                <p className="btn btn-square mx-1" onClick={() => {}}>
                  <i className="fab fa-instagram"></i>
                </p>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="images/team-3.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: -19 }}
              >
                <p className="btn btn-square mx-1" onClick={() => {}}>
                  <i className="fab fa-facebook-f"></i>
                </p>
                <p className="btn btn-square mx-1" onClick={() => {}}>
                  <i className="fab fa-twitter"></i>
                </p>
                <p className="btn btn-square mx-1" onClick={() => {}}>
                  <i className="fab fa-instagram"></i>
                </p>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="images/team-4.jpg" alt="" />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: -19 }}
              >
                <p className="btn btn-square mx-1" onClick={() => {}}>
                  <i className="fab fa-facebook-f"></i>
                </p>
                <p className="btn btn-square mx-1" onClick={() => {}}>
                  <i className="fab fa-twitter"></i>
                </p>
                <p className="btn btn-square mx-1" onClick={() => {}}>
                  <i className="fab fa-instagram"></i>
                </p>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
