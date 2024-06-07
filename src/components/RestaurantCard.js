import { IMG_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {name, cuisines, cloudinaryImageId, costForTwo, avgRating} = props.resData.info;
return (
    <div className="card">
        <img alt="food" src={IMG_URL+cloudinaryImageId}/>
         <h3>{name}</h3>
         <div className="rating">
         <h4> {<i className="fa fa-star"></i>} {avgRating} </h4> 
         <h4>{costForTwo}</h4>
    </div>
         {cuisines.join(', ')}
    </div>
)
};

export default RestaurantCard;