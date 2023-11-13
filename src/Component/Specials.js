import React from "react";
import Card from "./Card";
import salad from "../assets/images/greek-salad1.jpg";
import lemon from "../assets/images/lemon-dessert1.jpg";
import bruchetta from "../assets/images/bruchetta.svg";
import { useRef } from "react";

const Specials = () => {
  const specialRef = useRef(null);

  return (
    <div className="special-sec" ref={specialRef}>
      <div className="menu-header">
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>
      <div className="card-container">
        <Card
          image={salad}
          title={"Greek salad"}
          price={"$12.99"}
          description={
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
          }
          link={"/"}
        />
        <Card
          image={lemon}
          title={"Lemon Desserts"}
          price={"$5.00"}
          description={
            "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          }
          link={"/"}
        />
        <Card
          image={bruchetta}
          title={"Bruchetta"}
          price={"$5.99"}
          description={
            " Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          }
          link={"/"}
        />
      </div>
    </div>
  );
};

export default Specials;
