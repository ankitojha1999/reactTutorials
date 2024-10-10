import React, { useState, useEffect } from "react";

const RestaurantCard = () => {
    const [restaurants, setRestaurants] = useState([]);
  
    const fetchRestaurants = async () => {
      const response = await fetch('https://api.yelp.com/v3/businesses/search?location=San+Francisco&categories=restaurants', {
        headers: {
          'Authorization': `Bearer 0ZiCb3p9BPVjnUr4SN0M0Q56YZwPkjZ-KhJhjweAx1Owy7vqbgjpoCEe_SE8gOV1kxNbYE2HTQ-Y0WS5pK_ZGYdbtfRuqHLMswiMOfYxTZg_sh4FHP1HHrA-JxkHZ3Yx`
        }
      });
      const data = await response.json();
      setRestaurants(data.businesses);
    };
  
    useEffect(() => {
      fetchRestaurants();
    }, []);
  
    return (
      <div className="restaurant-cards-container">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <img src={restaurant.image_url} alt={restaurant.name} className="restaurant-image" />
            <h2>{restaurant.name}</h2>
            <p>{restaurant.location.address1}</p>
            <p>{restaurant.rating} stars</p>
          </div>
        ))}
      </div>
    );
  };

  export default RestaurantCard;