import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const MyCart = () => {
  const loadedCart = useLoaderData();
  const [myCart, setMyCart] = useState(loadedCart);

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-5 p-5 mt-10">
      {
      myCart?.map(cart => <Cart key={cart._id} cart={cart} myCart={myCart} setMyCart={setMyCart}></Cart>)
      }
      </div>
    </div>
  );
};

export default MyCart;
