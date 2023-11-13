import { useRef } from "react";
import restaurantChefs from "../assets/images/Mario and Adrian b.jpg";
import restaurant from "../assets/images/restaurant.jpg";
import React from "react";

const About = () => {
  const aboutRef = useRef(null);

  return (
    <div className="about-section" ref={aboutRef}>
      <div className="about" id="about">
        <div className="about-content">
          <h4>Little Lemon</h4>
          <h5>Chicago</h5>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>

        <div className="owners">
          <img id="chefs" src={restaurantChefs} alt="male owner" />
          <img id="restaurant" src={restaurant} alt="female owner" />
        </div>
      </div>
    </div>
  );
};

export default About;
