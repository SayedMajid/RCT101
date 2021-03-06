import React from "react";

const Restaurants = (props) => {
  return (
    <div className="container divider">
      <div className="cards">
        {props.restaurants.map((restaurant) => (
          <div className="card">
            <img width="254" height="160px" src={restaurant.image}/>
            <div className="restaurant-details">
              <div className="restaurant-title">{restaurant.name}</div>
              <div className="restaurant-subtitle">
                {restaurant.category.join(", ")}
              </div>
            </div>
            <div className="restaurant-info">
              <div className="restaurant-ratings">
                <i className="material-icons star-icon">star</i> {restaurant.rating}
              </div>
              .<div className="restaurant-delivery-timings">{restaurant.deliveryTiming} Mins</div> .
              <div className="restaurant-cost-for-two">{restaurant.costOf2} FOR TWO</div>
            </div>
            <div className="offer-banner">
              <span className="material-icons"> local_offer </span>
              <span className="offer-text">{restaurant.offers.join(" | ")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
