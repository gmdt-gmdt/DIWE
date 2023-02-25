import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="content" data-aos="zoom-in-up" data-aos-delay="300">
        <span>start your adventures</span>
        <h3>Let's Explore This World</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          voluptatum praesentium amet quibusdam quam officia suscipit odio.
        </p>
        <Link href="book-form" className="btn">
          book now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
