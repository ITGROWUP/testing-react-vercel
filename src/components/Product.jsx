import React from "react";

const Product = () => {
  return (
    <div className="bg-white absolute top-(-10) left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-5/12 w-4/5 h-28 border-4 border-[#4800DD] rounded-3xl z-10">
      <div className="container text-black flex justify-around items-center h-full">
        <div>
          <div className="text-4xl text-center pb-2">705</div>
          <div className="text-center">Customer</div>
        </div>
        <div className="justify-center">
          <div className="text-4xl text-center pb-2">8.354</div>
          <div className="text-center">Total Order</div>
        </div>
        <div className="justify-center">
          <div className="text-4xl text-center pb-2">9/10</div>
          <div className="text-center">Rating</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
