import React from "react";

const RubricTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h4 className="bg-white text-center text-primary p-1 mb-1 rounded-circle">
        {title}
      </h4>
      <h1 className="mb-5">{subTitle}</h1>
    </div>
  );
};

export default RubricTitle;
