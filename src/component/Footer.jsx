import React from "react";
import Order from "./Order";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} We're Currently Open */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>We're happy to Welcome you to our resturant</p>
      )}
    </footer>
  );
};

export default Footer;
