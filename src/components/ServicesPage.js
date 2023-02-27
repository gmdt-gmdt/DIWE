import React from "react";
import { SERVICES } from "../constants";
import RubricTitle from "../molecules/RubricTitle";

const ServicesPage = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <RubricTitle title="Services" subTitle="Our Services" />
        <div className="row g-4">
          {SERVICES.map((service) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
