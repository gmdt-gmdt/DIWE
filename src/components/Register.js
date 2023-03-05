import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addUserFromAPI } from "../store/actions/user-actions";

const Register = () => {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    position: "",
    business: "",
    street: "",
    additionalInfo: "",
    zipCode: "",
    place: "",
    country: "",
    code: "",
    phoneNumber: "",
    tc: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUserFromAPI(formData));

    //Reset form
    setFormData({
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      position: "",
      business: "",
      street: "",
      additionalInfo: "",
      zipCode: "",
      place: "",
      country: "",
      code: "",
      phoneNumber: "",
      tc: false,
    });
  };
  const handleChange = (event) => {
    const { name, value, type } = event.target;
    const isCheckbox = type === "checkbox";

    setFormData({
      ...formData,
      [name]: isCheckbox ? event.target.checked : value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
                              name="firstName"
                              onChange={handleChange}
                              className="form-control form-control-lg"
                              placeholder="First name"
                              value={FormData.firstName}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="text"
                              name="lastName"
                              onChange={handleChange}
                              className="form-control form-control-lg"
                              placeholder="Last name"
                              value={formData.lastName}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row pb-4">
                        <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="password"
                              name="password"
                              onChange={handleChange}
                              className="form-control form-control-lg"
                              placeholder="Password"
                              value={formData.password}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="business"
                              name="business"
                              onChange={handleChange}
                              className="form-control form-control-lg"
                              placeholder=" Business Arena"
                              value={formData.business}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="position"
                            name="position"
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            placeholder="Position"
                            value={formData.position}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 bg-primary text-white  shadow-lg p-3 mb-7"
                    style={{ borderRadius: "0px 15px 15px 0px" }}
                  >
                    <div className="p-5">
                      <h3 className="fw-normal mb-1">Contact</h3>

                      <div className="mb-1 pb-2">
                        <div className="form-outline form-white">
                          <input
                            type="text"
                            id="street"
                            name="street"
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            placeholder=" Street + Nr"
                            value={formData.street}
                          />
                        </div>
                      </div>

                      <div className="mb-1 pb-2">
                        <div className="form-outline form-white">
                          <input
                            type="text"
                            id="additionalInfo"
                            name="additionalInfo"
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            placeholder="Additional Information"
                            value={formData.additionalInfo}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-5 mb-1 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="zipCode"
                              name="zipCode"
                              onChange={handleChange}
                              className="form-control form-control-lg"
                              placeholder="Zip Code"
                              value={formData.zipCode}
                            />
                          </div>
                        </div>
                        <div className="col-md-7 mb-1 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="place"
                              name="place"
                              onChange={handleChange}
                              className="form-control form-control-lg"
                              placeholder="Place"
                              value={formData.place}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-1 pb-2">
                        <div className="form-outline form-white">
                          <input
                            type="text"
                            id="country"
                            name="country"
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            placeholder="Country"
                            value={formData.country}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-5 mb-1 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="code"
                              name="code"
                              onChange={handleChange}
                              className="form-control form-control-lg"
                              placeholder="Code +"
                              value={formData.code}
                            />
                          </div>
                        </div>
                        <div className="col-md-7 mb-1 pb-2">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="phoneNumber"
                              name="phoneNumber"
                              onChange={handleChange}
                              className="form-control form-control-lg"
                              placeholder="Phone Number"
                              value={formData.phoneNumber}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-1">
                        <div className="form-outline form-white">
                          <input
                            type="text"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            placeholder="Your email"
                            value={formData.email}
                          />
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-start mb-1 pb-3">
                        <input
                          className="form-check-input me-3"
                          type="checkbox"
                          id="tc"
                          name="tc"
                          onChange={handleChange}
                          value={formData.tc}
                        />
                        <label
                          className="form-check-label text-white"
                          htmlFor="tc"
                        >
                          I do accept the{" "}
                          <a href="#!" className="text-white">
                            <u>Terms and Conditions</u>
                          </a>{" "}
                          of your site.
                        </label>
                      </div>

                      <button type="submit" className="btn btn-light btn-lg">
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
    </form>
  );
};

export default Register;
