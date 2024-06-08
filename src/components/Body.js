import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from 'react';

const Body = () => {

    const [listData, setListData] = useState([]);
    const [searchText, setSearchText] =  useState("");
    const [listDataCopy, setListDataCopy] = useState([]);

    useEffect(()=> {
        fetchData();
    },[]);  


    const fetchData = async () => { 

        const liveData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json =  await liveData.json();

        const newData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setListData(newData);
        setListDataCopy(newData);
    }

   
   
    // conditional rendering
    return listData.length === 0 ? <Shimmer/> :(
        <div className="body">
            <div className="toolbar">
            <button onClick={()=> {
            const filteredData = listData.filter(res=> res.info.avgRating > 4.3);
            setListData(filteredData);
           
        } }>Top Rated Restaurants</button>
            <div className="searchbar">
            <input type="text" placeholder="Search.."value ={searchText} name="search" onChange={(event)=>{
                setSearchText(event.target.value)
            }} />
            <button onClick={()=>{
             const newData =  listData.filter(res=> (res.info.name).toLowerCase().includes(searchText.toLowerCase()));
             setListDataCopy(newData);
            }
            
            }>{<i className="fa fa-search"></i>}</button>
            </div>
            </div>
           
            <div className="res-container">
            {
                listDataCopy.map((restaurant) =>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                )
                )

            }
               

            </div>
        </div>
    )
};

export default Body;