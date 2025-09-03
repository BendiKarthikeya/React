import React from "react";
import ReactDOM from 'react-dom/client';
import youtubeLogo from './public/Images/youtube logo.webp';

const AppRender = function () {
        return (
                <div>
                        <HeadingComponent />
                        <BodySection/>
                        <FooterComponent />
                </div>
        )

}

const HeadingComponent = function () {
        return (
                <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'space-between', color: 'white', alignItems: 'center', padding: '5px' }}>
                        <div>
                                <img src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWlld3hycmZuczlucXZ6NmU4cTMzc2twODUwMTc4azQwN29xOWdhNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/STqyREqVKtFJbAx7kU/giphy.gif' alt="YouTube Logo" style={{ height: "40px" }}></img>
                        </div>
                        <div>
                                <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-between', alignItems: 'center', gap: '25px' }}>
                                        <li>Home</li>
                                        <li>About Us</li>
                                        <li>Contact</li>
                                        <li>Products</li>
                                </ul>
                        </div>

                </div>
        )               

}
const restaurantList = [
    {
        id: 1,
        name: "Meghana Foods",
        image: "https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg",
        cuisine: "Biryani, North Indian, Asian",
        rating: "4.4",
        deliveryTime: "38"
    },
    {
        id: 2,
        name: "KFC",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/94603016D.png",
        cuisine: "Fast Food, Burgers",
        rating: "4.1",
        deliveryTime: "30"
    },
    {
        id: 3,
        name: "Domino's Pizza",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/94603011D.png",
        cuisine: "Pizza, Italian",
        rating: "4.2",
        deliveryTime: "35"
    }
];

const Card = function (props){
        return(
                        <div className="card" style={{ width: '18rem', margin: '10px', border: '1px solid black' }}>
                                <div className="card-header">
                                    <h2>
                                        {props.foodName}
                                    </h2>
                                </div>
                                <img className="card-img-top" src={props.img} alt="Card image cap" width={100} height={200}></img>
                                
                                <div className="card-body" >
                                    <h5 className="card-text">{props.cuisine}</h5>
                                </div>
                                <div className="card-footer">
                                    <span className="bi bi-star-fill">Ratings: {props.rating}</span>
                                </div>
                        </div>
        )
}

const BodySection =function(){
        return (
                <div>
                    <div className="formgroup" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }} >
                        <input type="text" className="form-control" placeholder="Search..."></input>
                        <button className="btn btn-primary">Search</button>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'space-around', alignItems: 'center', gap: '20px' }}>
                        {restaurantList.map(restaurant => (
    <Card key={restaurant.id} foodName={restaurant.name} rating={restaurant.rating} img={restaurant.image} cuisine={restaurant.cuisine} />
))}
                    </div>
                </div>
        )

}

const FooterComponent = function () {
        return (
                <div>
                        <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-between', alignItems: 'center', gap: '15px',backgroundColor: 'black', color: 'white', padding: '10px'    }}>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Contact</li>
                                <li>Products</li>
                        </ul>

                </div>
        )
}


const root = ReactDOM.createRoot(document.getElementById("root")).render(<AppRender />);

