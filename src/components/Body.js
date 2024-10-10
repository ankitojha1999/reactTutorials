import RestaurantCard from "./RestaurantCard.js";

const Body = () => {
    TopRatedRes = () => {
        console.log("Top Rated Restaurant");
    }
    return(
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search for restaurants"/>
                <button>Search</button>
                <button onClick={TopRatedRes} >Top Rated Restaurant</button>
            </div>

            <div className="restaurant-container">
                <RestaurantCard/>
            </div>
        </div>
    )
};
export default Body;