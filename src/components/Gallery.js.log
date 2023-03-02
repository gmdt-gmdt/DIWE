import React from "react";
import { GALLERIES } from "../constants";

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="heading">
        <span>our gallery</span>
        <h1>we record memories</h1>
      </div>

      <div className="box-container">
        {GALLERIES.map((gallery) => (
          <div className="box" data-aos="zoom-in-up" key={gallery.name}>
            <img src={gallery.image} alt={gallery.name} />
            <span>{gallery.name}</span>
            <h3>{gallery.country}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
