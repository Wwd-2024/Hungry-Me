import React from 'react';
import ReactDOM from 'react-dom/client';



const test = <h1>HI</h1>

const Header = () => (
<div className="header">
<div >
    <img className="logo" src="data:image/png;base64,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"/>
</div>
<div className ="nav-item">
    <ul>
        <li>
            Home
        </li>
        <li>
            About us
        </li>
        <li>
            Cart
        </li>
    </ul>
</div>
</div>

);
    
const RestaurantCard = () => {
return (
    <div className="card">
        <img alt="food" src="https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_3840,ar_4:3,g_center,f_auto/NYC_Principe_Interior_KatePrevite_00012_iuzxox"/>
    <h2>Hyderabadi biriyani</h2>
    <h3>Indian, Mexican, Chinese</h3>
    <h4>4.3 Stars</h4>
    <i class="fa-solid fa-indian-rupee-sign"></i> <h5>  150 per person</h5>
    </div>
)
};
const Body = () => {
    return (
        <div className="body">
            <div className="searchbar">
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit"><i class="fa fa-search"></i></button>
            </div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
               

            </div>
        </div>
    )
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);