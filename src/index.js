import React from "react";
import ReactDOM from "react-dom/client";
// just imported two libraries.
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "50px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>AK Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const isPizzaAvailable = pizzas.length ? true : false;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {isPizzaAvailable ? <Pizzas /> : <p>Sorry no pizza available</p>}
    </main>
  );
}

function Pizzas() {
  const pizzas = pizzaData;
  return (
    <ul className="pizzas">
      {pizzas.map((pizza) => (
        <Pizza pizzaobj={pizza} key={pizza.name} />
      ))}
    </ul>
  );
}

function Pizza({ pizzaobj }) {
  if (pizzaobj.soldOut) {
    return null;
  }
  return (
    <li className="pizza">
      <img src={pizzaobj.photoName} alt={pizzaobj.name} />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <Close openHour={openHour} closeHour={closeHour} />
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>
        {new Date().toLocaleTimeString()} We are currently open !!! (until :{" "}
        {closeHour})
        <br />
        Come visit or order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

function Close({ openHour, closeHour }) {
  return (
    <div className="order">
      <div>
        <p>
          {new Date().toLocaleTimeString()} We are currently close !!! (until :{" "}
          {openHour})
        </p>
        <p>
          Our timings are {openHour} to {closeHour}.
        </p>
      </div>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18
// React.render(<App />, document.getElementById("root"));
