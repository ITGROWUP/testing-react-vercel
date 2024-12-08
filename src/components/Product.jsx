import React, { useState, useEffect } from "react";

const Product = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);

  const animateCounter = (target, setter, duration = 3000) => {
    let start = 0;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const current = Math.floor(target * progress);
      setter(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setter(target); 
      }
    };

    requestAnimationFrame(update);
  };

  useEffect(() => {
    animateCounter(705, setCustomerCount, 3000);
    animateCounter(8354, setOrderCount, 3000); 
    animateCounter(9.5, setRatingCount, 3000); 
  }, []);

  return (
    <div className="bg-white absolute top-(-10) left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-5/12 w-4/5 h-28 border-4 border-[#0345D9] rounded-3xl z-10">
      <div className="container text-black flex justify-around items-center h-full">
        <div>
          <div className="text-4xl text-center pb-2 font-bold">{customerCount}</div>
          <div className="text-center">Customer</div>
        </div>
        <div className="justify-center">
          <div className="text-4xl text-center pb-2 font-bold">{orderCount}</div>
          <div className="text-center">Total Order</div>
        </div>
        <div className="justify-center">
          <div className="text-4xl text-center pb-2 font-bold">{ratingCount.toFixed(1)}</div>
          <div className="text-center">Rating</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
