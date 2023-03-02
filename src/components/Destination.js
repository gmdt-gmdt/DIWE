import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RubricTitle from "../molecules/RubricTitle";
import { getDestinationsDataFromAPI } from "../store/actions/destination-actions";
import Spinner from "./Spinner";

const Destination = () => {
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.destinations.destinations);

  useEffect(() => {
    dispatch(getDestinationsDataFromAPI());
  }, [dispatch]);

  return (
    <div className="container-xxl py-5 destination">
      <div className="container">
        <RubricTitle title="Destination" subTitle="Popular Destination" />

        <div className="row g-4">
          {/* TODO: create DestinationItem & loading (if !destinations.length) component */}
          {!destinations.length ? (
            <Spinner />
          ) : (
            destinations.map((destination) => (
              <div
                key={destination.name}
                className="col-lg-4 col-md-6 wow fadeInUp shadow-lg p-3 mb-7 rounded"
                data-wow-delay="0.5s"
              >
                <div className="package-item">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid"
                      src={destination.image}
                      alt=""
                      style={{ height: 200, width: 300 }}
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Destination;
