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
const Card = function (props){
        return(
                        <div className="card" style={{ width: '18rem', margin: '10px', border: '1px solid black' }}>
                                <h2>Nagarajuna Foods</h2>
                                <img className="card-img-top" src={props.img} alt="Card image cap" width={100} height={200}></img>
                                
                                <div className="card-body" >
                                    
                                        <h3 className="card-title">{props.foodName}</h3>
                                        
                                        
                                        <h5 className="card-text">{props.price}</h5>
                                </div>
                                <div className="card-footer">
                                    <span className="bi bi-star-fill">Ratings: {props.rating}</span>
                                </div>
                        </div>
        )
}

const BodyComponent =function(){
        
        return (
                <div>
                    <div className="formgroup" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }} >
                        <input type="text" className="form-control" placeholder="Search..."></input>
                        <button className="btn btn-primary">Search</button>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'space-around', alignItems: 'center', gap: '20px' }}>
                        <Card foodName='Biryani' rating='4.5' price='800' img='https://imgs.search.brave.com/Wx0G5rypAHOv7t_0sgNaDawo1_gAhLkP_IdJjO85kCI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzM2LzM2LzU3/LzM2MF9GXzQzNjM2/NTc1NF96M2k1RXMw/c0ZtWnVMWTZHWkl6/ZGlVMDF2OUhxcEda/ZS5qcGc'/>
                        <Card foodName='Pizza' rating='4.0' price='700' img='https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg'/>
                        <Card foodName='Burger' rating='4.3' price='600' img='https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
                     
                        <Card 
                        foodName='Pasta' 
                        rating='4.2' 
                        price='500' 
                        img='https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
                        />

                        <Card 
                        foodName='Sushi' 
                        rating='4.8' 
                        price='1200' 
                        img='https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
                        />

                        <Card 
                        foodName='Salad' 
                        rating='4.1' 
                        price='300' 
                        img='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
                        />

                        <Card 
                        foodName='Tacos' 
                        rating='4.6' 
                        price='400' 
                        img='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
                        />

                        <Card 
                        foodName='Ice Cream' 
                        rating='4.9' 
                        price='250' 
                        img='https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
                        />
                        
                        <Card foodName='Pizza' rating='4.0' price='700' img='https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg'/>
               

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





