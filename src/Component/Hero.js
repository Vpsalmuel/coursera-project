import React from "react";
import hero from "../assets/images/Img_pop.png";
import { useRef } from "react";

const Hero = () => {
  const handleClick = () => {
    window.location.href = './booking'; // Replace this with the URL you want to navigate to
  };
  const heroRef = useRef(null);
  return (

    <div className="hero" ref={heroRef}>
      <div className="banner">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterraneran restaurant, focused on
          traditional recipes served wth a modern twist.{" "}
        </p>
        <button  onClick={handleClick}>Reserve a table</button>
      </div>

      <div className="banner-img">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
