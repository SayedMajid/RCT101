import React from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <CartProvider>
        <Navbar />
        <Body />
      </CartProvider>
    </div>
  );
}

export default App;
