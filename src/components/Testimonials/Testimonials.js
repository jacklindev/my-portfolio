import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import { testimonialsData } from "../../data/testimonialsData";
import SingleTestimonial from "./SingleTestimonial/SingleTestimonial";

import "./Testimonials.css";

const Testimonials = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="testimonials"
      style={{ backgroundColor: theme.secondary }}
      id="testimonials"
    >
      <div className="testimonials-header">
        <h2 style={{ color: theme.primary }}>Testimonials</h2>
      </div>
      <div className="testimonials-body">
        {testimonialsData.map((testimonial) => (
          <SingleTestimonial
            key={testimonial.id}
            data={testimonial}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
