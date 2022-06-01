import React, { useContext } from "react";
import { CartProvider } from "../context/CartContext";

const Wishlist = () => {
  const { count } = useContext(CartProvider);
  return <div>Wishlist : {count}</div>;
};

export default Wishlist;
