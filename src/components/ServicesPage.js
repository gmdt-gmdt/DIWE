import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RubricTitle from "../molecules/RubricTitle";
import { getServicesDataFromAPI } from "../store/actions/service-actions";
import Spinner from "./Spinner";

const ServicesPage = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);

  useEffect(() => {
    dispatch(getServicesDataFromAPI());
  }, [dispatch]);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <RubricTitle title="Services" subTitle="Our Services" />
        <div className="row g-4">
          {!services.length ? (
            <Spinner />
          ) : (
            services.map((service) => (
              <div
                key={service.name}
                className="col-lg-3 col-sm-6 wow fadeInUp shadow-lg"
                data-wow-delay="0.1s"
              >
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i
                      className={`fa fa-3x ${service.iconName} text-primary mb-4`}
                    ></i>
                    <h5>{service.name}</h5>
                    <p>{service.description}</p>
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

export default ServicesPage;
