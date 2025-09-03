import { Link } from 'react-router';
import Card from './CardComponent';
import ShimmerUI from './ShimmerUI';
import { useEffect, useState } from 'react';

const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const BodyComponent3 = function(){
    const [restaurantList, setRestaurantList] = useState([]);
    const [originalList, setOriginalList] = useState([]);
    const URL = "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9525755&lng=77.5292796&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        
    useEffect(() => {
        const fetchData = async () => {
            try {
                let apiResponse = await fetch(URL);
                let data = await apiResponse.json();
                console.log(data);
                const restaurants = data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants || [];
                setRestaurantList(restaurants);
                setOriginalList(restaurants); // <-- Add this line
                console.log(restaurants);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    
    return (
        <div>
            <div className="d-flex justify-content-around align-items-center">
                <div className="form-group" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }} >
                    <input type="text" className="form-control" placeholder="Search..." onInput={
                        function name(params) {
                            // Handle search input
                            console.log(params.target.value);
                            const filteredList = originalList.filter((restaurant) => restaurant.info.name.toLowerCase().includes(params.target.value.toLowerCase()));
                            setRestaurantList(filteredList);
                            console.log(filteredList);
                        }
                    }></input>
                    <button className="btn btn-primary">Search</button>
                </div>
                <div>
                    <button onClick={() =>{
                            const filteredList = originalList.filter((restaurant) => Number(restaurant.info.avgRating) > 4.5);
                            setRestaurantList(filteredList);
                        }
                    }>Filter</button>
                </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'space-around', alignItems: 'center', gap: '20px' }}>
                {restaurantList.length===0 ? (<ShimmerUI/>) : restaurantList.map((restaurant) => (
                   <Link to= {"/restaurant/"+restaurant.info.id}  key={restaurant.info.id} style={{ textDecoration:'none'}}>
                    <Card
                            name={restaurant.info.name}
                            img={CDN_URL + restaurant.info.cloudinaryImageId}
                            rating={restaurant.info.avgRating}
                        />
                   </Link>
                   
                ))}
            </div>
        </div>
    )
}

export default BodyComponent3;