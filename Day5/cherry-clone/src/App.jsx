import "./App.css";
import Filters from "./Components/Filters";
import Navbar from "./Components/Navbar";
import Offers from "./Components/Offers";
import Restaurants from "./Components/Restaurants";
import userInfo from "./data/userInfo.json"
import offers from "./data/offers.json"
import restaurants from "./data/restaurants.json";

function App() {
  return (
    <div>
      <Navbar {...userInfo.location}/>
      <Offers offers={offers}/>
      <section className="near-you">
        <Filters />
        <Restaurants restaurants={restaurants} />
      </section>
    </div>
  );
}

export default App;
