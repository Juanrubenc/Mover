import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Cart from "./components/Cart";
import items from "./data/products.json";
import Footer from "./components/Footer";


function App() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState({});

  const addToCart = (item) => {
    setCart([...cart, item]);
    setQuantity({ ...quantity, [item.id]: (quantity[item.id] || 0) + 1 });
  };

  const removeFromCart = (item) => {
    if (cart.includes(item)) {
      const index = cart.findIndex((cartItem) => cartItem.id === item.id);
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
      setQuantity({ ...quantity, [item.id]: quantity[item.id] - 1 });
    }
  };

  return (
    <div className="App font-poppins">
    <Nav/>
      <main>
        <section className="flex max-w-lg mx-auto flex-col justify-center m-24">
          <h1 className="text-4xl md:text-5xl font-light text-center">
            What Items to Store?
          </h1>
          <p className="p-5 m-2 font-light lg:text-normal text-gray-500 text-center">
            Select which item you wish to store before moving to your new home.
            We’ll keep ’em safe!
          </p>
        </section>
        <Products
          items={items}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          quantity={quantity}
        />
        <div className="md:max-w-screen-lg px-10 mx-auto">
          {/* clear cart button */}
          <button
            className="bg-[#FD9255] text-white p-2 rounded-md mt-5"
            onClick={() => {
              setCart([]);
              setQuantity({});
            }}
          >
            Clear Cart
          </button>
        </div>
        <Cart cart={cart} />
      </main>
      <footer className="bg-[#FD9255]  text-white">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
