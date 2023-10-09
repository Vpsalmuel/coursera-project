import React from "react";
import spinachi from "../pizzas/spinaci.jpg";
import magarita from "../pizzas/margherita.jpg";
import focaccia from "../pizzas/focaccia.jpg";
import funghi from "../pizzas/funghi.jpg";
import salamino from "../pizzas/salamino.jpg";
import prosciutto from "../pizzas/prosciutto.jpg";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: focaccia,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: magarita,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: spinachi,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: funghi,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: salamino,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: prosciutto,
    soldOut: false,
  },
];

const Pizza = () => {
  return (
    <ul className="pizzas">
      {pizzaData.map((pizza) => (
        <li className="pizza" key={pizza.name}>
          <img src={pizza.photoName} alt={pizza.name} />
          <div>
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients}</p>
            <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Pizza;
