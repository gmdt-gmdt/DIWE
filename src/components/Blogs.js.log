import React from "react";
import { useNavigate } from "react-router-dom";
import { BLOGS } from "../constants";

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <section className="blogs" id="blogs">
      <div className="heading">
        <span>blogs & posts</span>
        <h1>we untold stories</h1>
      </div>

      <div className="box-container">
        {BLOGS.map((b) => (
          <div className="box" data-aos="fade-up">
            <div className="image">
              <img src={b.image} alt={b.name} />
            </div>
            <div className="content">
              <p onClick={() => navigate(window.location)} className="link">
                {b.name}
              </p>
              <p>{b.description}</p>
              <div className="icon">
                <p onClick={() => navigate(window.location)}>
                  <i className="fas fa-clock"></i> {b.published}
                </p>
                <p onClick={() => navigate(window.location)}>
                  <i className="fas fa-user"></i> {b.publishedBy}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
