import { useEffect } from "react";
import Shimmer from "./Shimmer";
import {useState, useEffect } from 'react';
import {DETAIL_INFO} from '../utils/constants';
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {

    const [resDetail, setResDetail] = useState(null);
    const {resID} =useParams();

    const fetchData = async () => {
        const data = await fetch(DETAIL_INFO+resID);
        const json = await data.json();
        setResDetail(json);
        console.log(json)
    }

    useEffect(()=>{
        fetchData();
    },[]);

    if(resDetail === null) {
        return <Shimmer />;
    }


    const {name, cuisines,avgRating, costForTwo} = resDetail?.data?.cards[2]?.card?.card?.info;
    const resMenu= resDetail?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
    console.log(resMenu);

   
    return (
        <div className="detail-container">
            <div className="res-info">
                <h3>{name}</h3> 
                  {cuisines.join(', ')}
                <div className="rating">
                     <h4> {<i className="fa fa-star"></i>} {avgRating} </h4> 
                    <h4>{costForTwo}</h4> 
                </div>
            </div>

            <div className="res-menu">
                
                {resMenu.map(res=> {
                  return (  
                    <div>
                         
                         <h2 className="menu-title">{res.card?.card?.title}</h2> 
                        
               
                             {
                             
                             res.card.card?.itemCards?.map(item => {
                              
                                 return (
                                      <div className=""> 
                                         <br/>
                                        <h4>{item.card.info?.name}  </h4>
                                        <h5>Rs. {item.card.info?.price/100 } </h5>
                                   
                                        <div>  {item.card.info?.description} </div>
                                       </div>

                                )
                             })
                         }
                 
                 </div>
                 )})
                 }
           </div>
         </div>
    );
}

export default RestaurantDetails;