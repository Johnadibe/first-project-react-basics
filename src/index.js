import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
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
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" }; // Added the variable in line 68

  return (
    <header className="header">
      {/* line 65 and line 68 is still the same thing. */}
      {/* <h1 style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}> */}

      {/* <h1 style={style} className="header"> */}
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  // const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* 3. Conditional Rendering with Ternary Operator */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic italian cuisine. 6 creative dishes to choose from. All
            from our stone oven.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}

      {/* 2. Conditional Rendering with &&
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {/* 1. Rendering Lists */}
      {/* <ul className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />

          // This is not how its been done in real world
          // <Pizza
          //   name={pizza.name}
          //   ingredients={pizza.ingredients}
          //   price={pizza.price}
          //   photName={pizza.photoName}
          //   soldOut={pizza.soldOut}
          // />
        ))}
      </ul> */}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // From prop destructuring lesson
  // 1. function Pizza(props) {
  // console.log(props);

  // if (props.pizzaObj.soldOut) return null;
  // if (pizzaObj.soldOut) return null; // From prop destructuring lesson

  // From Prop Destructuring lesson
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );

  // return (
  //   <li className="pizza">
  //     <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
  //     <div>
  //       <h3>{props.pizzaObj.name}</h3>
  //       <p>{props.pizzaObj.ingredients}</p>
  //       <span>{props.pizzaObj.price}</span>
  //     </div>
  //   </li>
  // );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // We would not use this pattern in real app
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  // else alert("Sorry we're closed!");

  // Conditional Rendering with multiple returns
  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>We're closed until {openHour}.00.</p>
      )}
      {/* {new Date().toLocaleTimeString()}. We're currently open! */}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

// Extracting JSX into a new component
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour} until {closeHour}.00. Come visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// This is the way we render the root so that we basically render our App in the DOM in React version 18
// React version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before version 18
// Before React version 18, we would simply do:
// React.render(<App />);
