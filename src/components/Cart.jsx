import React from "react";

const Cart = ({ cart }) => {

    let totalSize = cart.reduce((acc, item) => {
        return (acc + item.size);
    }, 0);

    totalSize = totalSize.toFixed(2);

    const subTotal = (totalSize * 200).toFixed(2);
    const tax = (subTotal * 0.16).toFixed(2);
    const total = (parseFloat(subTotal) + parseFloat(tax)).toFixed(2);
    const dueToday = (total / 2).toFixed(2);



return (
  <div className="flex flex-col max-w-md mx-auto m-10 px-5 lg:p-0">
    <div>
      <h1 className=" text-3xl font-light text-center">Summary</h1>
    </div>
    <div className="shadow-lg bg-gray-200 p-5 m-8">
      <div className="flex justify-between p-5">
        <h1 className=" text-lg font-light">Total Items</h1>
        <h1 className=" text-lg font-light">{cart.length}</h1>
      </div>
      <div className="flex justify-between p-5">
        <span className=" text-lg  font-light">
          M<sup>2</sup>
        </span>
        <span className=" text-lg font-light">{totalSize}</span>
      </div>
      <div className="flex justify-between p-5">
        <span className=" text-lg font-light">Subtotal</span>
        <span className=" text-lg font-light">${subTotal}</span>
      </div>
      <div className="flex justify-between p-5">
        <span className=" text-lg font-light">Tax</span>
        <span className=" text-lg font-light">${tax}</span>
      </div>
      <div className="flex justify-between p-5 font-bold text-lg">
        <span>Total</span>
        <span>${total}</span>
      </div>
      <div className="flex justify-between p-5 font-bold text-lg">
        <span>Due Today 50%</span>
        <span>${dueToday}</span>
      </div>
    </div>
  </div>
);
}

export default Cart;
