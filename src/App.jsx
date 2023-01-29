import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import items from "./data/products.json";
import {
  GrTwitter,
  GrFacebook,
  GrInstagram,
  BsWhatsapp,
} from "react-icons/all";
import Nav from "./components/Nav";

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
            Select which items you wish to store before moving to your new home.
            We’ll keep ’em safe!
          </p>
        </section>
        <Products
          items={items}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          quantity={quantity}
        />
        <Cart cart={cart} />
      </main>
      <footer className="bg-[#FD9255]  text-white">
        <div className="grid grid-cols-2 gap-10 px-6 py-8 md:grid-cols-4 lg:p-20 lg:mx-20  ">
          <div className=" md:space-y-8 ">
            <img src="/images/casa.png" alt="casa" />
            <p className="text-sm my-3">
              It is a long established fact that a reader will be distracted br by
              the readable content of a page whenters.
            </p>
            <div className=" flex gap-5 text-3xl">
              <GrTwitter />
              <GrFacebook />
              <GrInstagram />
            </div>
          </div>
          <div>
            <h3 className="mb-10">About</h3>
            <ul className="text-sm space-y-3">
              <li>About Us</li>
              <li>Privacy & Policy</li>
              <li>Terms & Conditions</li>
              <li>Faq</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-10">Navigate</h3>
            <ul className="text-sm space-y-3">
              <li>How we Work</li>
              <li>Services</li>
              <li>Free Quote</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-10">Contact Us</h3>
            <div className="flex flex-col  gap-2 font-light space-y-0 text-xs">
              <span>Ricardo Mondragon 444</span>
              <span>Phone: +52 81123 5678</span>
              <span>Email: info@challenge.com</span>
            </div>
            <div className="mt-4">
              <div className="flex border-2 rounded-sm max-w-fit space-x-2 p-1 px-5">
                <BsWhatsapp className="text-xl" />
                <span>Whatsapp</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
