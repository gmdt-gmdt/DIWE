import React, { useState } from "react";
import { GEOLOCATION } from "../constants";
import RubricTitle from "../molecules/RubricTitle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    //dispatch(loginFromAPI(formData));
    //Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <RubricTitle title="Contact Us" subTitle="Contact For Any Query" />
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <h5>Get In Touch</h5>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos
            </p>
            <div className="d-flex align-items-center mb-4">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary "
                style={{ width: 50, height: 50 }}
              >
                <i className="fa fa-map-marker-alt text-white"></i>
              </div>
              <div className="ms-3">
                <h5 className="text-primary">Office</h5>
                <p className="mb-0">Location, Cotonou, Benin</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary "
                style={{ width: 50, height: 50 }}
              >
                <i className="fa fa-phone-alt text-white"></i>
              </div>
              <div className="ms-3">
                <h5 className="text-primary">Mobile</h5>
                <p className="mb-0">+012 345 67890</p>
              </div>
            </div>
            <div className="d-flex align-items-center ">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                style={{ width: 50, height: 50 }}
              >
                <i className="fa fa-envelope-open text-white"></i>
              </div>
              <div className="ms-3">
                <h5 className="text-primary">Email</h5>
                <p className="mb-0">info@example.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <iframe
              title="Welcome"
              className="position-relative rounded w-100 min-vh-70 d-flex"
              src={GEOLOCATION}
              style={{ minHeight: 300, border: "none" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div
            className="col-lg-4 col-md-12 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your Name"
                      onChange={handleChange}
                      value={formData.name}
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      onChange={handleChange}
                      value={formData.subject}
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control h-300"
                      placeholder="Leave a message here"
                      name="message"
                      style={{ height: 100 }}
                      onChange={handleChange}
                      value={formData.message}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                {/* <JoditEditor
                  config={config}
                  ref={editor}
                  value={content}
                  onBlur={handleUpdate}
                  onChange={(newContent) => {}}
                /> */}

                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
