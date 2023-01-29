import React from "react";



const Products = ({items,addToCart,removeFromCart,quantity}) => {


  return (
    <div className="grid grid-cols-2 gap-10 md:max-w-screen-lg px-10 mx-auto md:gap-12 md:grid-cols-3 lg:grid-cols-5">
      {items.map((item) => {
        return (
          <div
            className="flex mb-5 gap-10 flex-col justify-center"
            key={item.id}>
            <div className="flex-col shadow-xl p-5 flex justify-center ">
              <img className=" p-5" src={`/images/${item.image}.svg`} alt="" />
              <h4 className="font-light text-sm text-center">{item.name}</h4>
            </div>
            <div className="text-center">
              <div className="border flex items-center justify-between center rounded-md">
              <button className=" text-xl bg-gray-200 w-10 p-2" onClick={() => removeFromCart(item)}>-</button>
              <span className="">{quantity[item.id] || 0}</span>
              <button  className=" text-xl bg-gray-200 w-10 p-2" onClick={() => addToCart(item)}>+</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
