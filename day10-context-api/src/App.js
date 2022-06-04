import React from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
