import React from "react";
import Pizza from "./Pizza";
// import spinach from "../pizzas/spinaci.jpg";
// import funghi from "../pizzas/funghi.jpg";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All our
        stone oven, all organic, all delicious
      </p>
      <Pizza />
    </main>
  );
};

export default Menu;
