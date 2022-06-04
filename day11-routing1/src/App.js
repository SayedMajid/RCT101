import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Products/>
    </div>
  );
}

export default App;
