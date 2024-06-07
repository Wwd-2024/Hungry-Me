import data from "../utils/mockData.json";
import RestaurantCard from "./RestaurantCard";

const resData = data;
const Body = () => {
    return (
        <div className="body">
            <div className="toolbar">
            <button onClick={()=>console.log("d")}>Top Rated Restaurants</button>
            <div className="searchbar">
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit">{<i className="fa fa-search"></i>}</button>
            </div>
            </div>
           
            <div className="res-container">
            {
                resData.map((restaurant) =>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                )
                )

            }
               

            </div>
        </div>
    )
};

export default Body;