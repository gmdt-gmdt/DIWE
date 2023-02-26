import React from "react";

const Register = () => {
  return (
    <section className="h-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: "15px 15px 15px 15px" }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="firstName"
                              className="form-control form-control-lg"
                              placeholder="First name"
                            />
                            {/* <label htmlFor="name"> First name</label> */}
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="lastName"
                              className="form-control form-control-lg"
                              placeholder="Last name"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="position"
                            className="form-control form-control-lg"
                            placeholder="Position"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="business"
                              className="form-control form-control-lg"
                              placeholder=" Business Arena"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 bg-primary text-white  shadow-lg p-3 mb-7"
                    style={{ borderRadius: "0px 15px 15px 0px" }}
                  >
                    <div className="p-5">
                      <h3 className="fw-normal mb-1">Contact Details</h3>

                      <div className="mb-1 pb-2">
                        <div className="form-outline form-white">
                          <input
                            type="text"
                            id="street"
                            className="form-control form-control-lg"
                            placeholder=" Street + Nr"
                          />
                        </div>
                      </div>

                      <div className="mb-1 pb-2">
                        <div className="form-outline form-white">
                          <input
                            type="text"
                            id="additionalInfo"
                            className="form-control form-control-lg"
                            placeholder="Additional Information"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-5 mb-1 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="zipCode"
                              className="form-control form-control-lg"
                              placeholder="Zip Code"
                            />
                          </div>
                        </div>
                        <div className="col-md-7 mb-1 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="place"
                              className="form-control form-control-lg"
                              placeholder="Place"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-1 pb-2">
                        <div className="form-outline form-white">
                          <input
                            type="text"
                            id="country"
                            className="form-control form-control-lg"
                            placeholder="Country"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-5 mb-1 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="code"
                              className="form-control form-control-lg"
                              placeholder="Code +"
                            />
                          </div>
                        </div>
                        <div className="col-md-7 mb-1 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="phoneNumber"
                              className="form-control form-control-lg"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-1">
                        <div className="form-outline form-white">
                          <input
                            type="text"
                            id="email"
                            className="form-control form-control-lg"
                            placeholder="Your email"
                          />
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-start mb-1 pb-3">
                        <input
                          className="form-check-input me-3"
                          type="checkbox"
                          value=""
                          id="tc"
                        />
                        <label className="form-check-label text-white" for="tc">
                          I do accept the{" "}
                          <a href="#!" className="text-white">
                            <u>Terms and Conditions</u>
                          </a>{" "}
                          of your site.
                        </label>
                      </div>

                      <button
                        type="button"
                        className="btn btn-light btn-lg"
                        data-mdb-ripple-color="dark"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
