import React from "react";
import { DESTINATIONS } from "../constants";

const Destination = () => {
  return (
    <div className="container-xxl py-5 destination">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h4 className="section-title bg-white text-center text-primary px-3">
            Destination
          </h4>
          <h1 className="mb-5">Popular Destination</h1>
        </div>

        <div className="row g-4">
          {DESTINATIONS.map((destination) => (
            /* <div className="col-lg-3 col-md-3 wow zoomIn" data-wow-delay="0.5s">
              <p
                className="position-relative d-block overflow-hidden"
                onClick={() => {}}
              >
                <img
                  className="img-fluid"
                  src={destination.image}
                  alt={destination.name}
                  style={{ height: 200, width: 400 }}
                />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  35% OFF
                </div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  {destination.name}
                </div>
              </p>
            </div> */
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="package-item">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src={destination.image}
                    alt=""
                    style={{ height: 200, width: 400 }}
                  />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt text-primary me-2"></i>
                    {destination.name}
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-primary me-2"></i>xx
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user text-primary me-2"></i>xxx
                  </small>
                </div>
                <div className="text-center p-4">
                  <h3 className="mb-0">$189.00</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                  </div>
                  <p>{destination.description}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <p
                      onClick={() => {}}
                      className="btn btn-sm btn-primary px-3 border-end"
                      style={{ borderRadius: "30px 30px 30px 30px" }}
                    >
                      Read More
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
