import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RubricTitle from "../molecules/RubricTitle";
import { getPackagesDataFromAPI } from "../store/actions/package-actions";

const Package = () => {
  const dispatch = useDispatch();
  const packages = useSelector((state) => state.package.packages);
  useEffect(() => {
    dispatch(getPackagesDataFromAPI());
  }, [dispatch]);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <RubricTitle title="Packages" subTitle="Awesome Packages" />
        <div className="row g-4 justify-content-center">
          {packages?.map((pack) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
              key={pack.location}
            >
              <div className="package-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={pack.image} alt="" />
                </div>
                <div className="d-flex border-bottom">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt text-primary me-2"></i>
                    {pack.location}
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt text-primary me-2"></i>
                    {pack.duration} Days
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user text-primary me-2"></i>
                    {pack.visitNumber} Pesons
                  </small>
                </div>
                <div className="text-center p-4">
                  <h3 className="mb-0">${pack.amount}</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                  </div>
                  <p>{pack.description} </p>
                  <div className="d-flex justify-content-center mb-2">
                    <p
                      onClick={() => {}}
                      className="btn btn-sm btn-primary px-3 border-end"
                      style={{ borderRadius: "30px 0 0 30px" }}
                    >
                      Read More
                    </p>
                    <p
                      onClick={() => {}}
                      className="btn btn-sm btn-primary px-3"
                      style={{ borderRadius: "0 30px 30px 0" }}
                    >
                      Book Now
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

export default Package;
