import React, { StrictMode } from "react";
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
function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;
    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {numPizzas > 0 ? (
                <>
                    <p>this is a great pizza hub</p>
                    <ul className="pizzas">
                        {pizzas.map(pizza => (
                            <Pizza
                                pizzaObj={pizza}
                                key={pizza.name}
                            ></Pizza>
                        ))}
                    </ul>
                </>
            ) : (
                <p>we do not have our menu. Please come later</p>
            )}

            {/* <Pizza
                name="Pizza Spinaci"
                ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                photoName="pizzas/spinaci.jpg"
                price={10}
            />
            <Pizza
                name="Pizza Funghi"
                ingredients="Tomato"
                photoName="pizzas/funghi.jpg"
                price={12}
            /> */}
        </main>
    );
}
function Pizza({ pizzaObj }) {
    console.log(pizzaObj);
    // if (pizzaObj.soldOut) return null;
    return (
        <div className={`pizza  ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img
                src={pizzaObj.photoName}
                alt={pizzaObj.name}
            />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>
                    {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 3}
                </span>
            </div>
        </div>
    );
}
function App() {
    return (
        <div className="container">
            <Header />
            <Menu></Menu>
            <Footer></Footer>
        </div>
    );
}
function Header() {
    // const style = { color: "red", fontSize: "48px" };
    const style = {};
    return (
        <header className="header">
            <h1 style={style}>Fast React Company</h1>;
        </header>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 24;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);
    // if (hour >= openHour && hour <= closeHour) {
    //     alert("we are open!");
    // } else {
    //     alert("we are closed");
    // }
    // return React.createElement("footer", null, "We're currently open!");

    // if (!isOpen)
    //     return (
    //         <p>
    //             we're happy to welcome you between {openHour}:00 and
    //             {closeHour}:00
    //         </p>
    //     );
    return (
        <footer className="footer">
            {isOpen ? (
                <Order
                    closeHour={closeHour}
                    openHour={openHour}
                ></Order>
            ) : (
                <p>
                    we're happy to welcome you between {openHour}:00 and
                    {closeHour}:00
                </p>
            )}
        </footer>
    );
}
function Order({ closeHour, openHour }) {
    return (
        <div className="order">
            <p>
                We're open from {openHour}:00 to {closeHour}:00. Come visit us
                or order online
            </p>
            <button className="btn">Order</button>
        </div>
    );
}
//react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// React.render(<App />, document.getElementById("root"));
