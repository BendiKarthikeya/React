
import Card from './CardComponent';
// import {restaurantList} from '../utils/restaurantList.js';
// import {data} from '../utils/data.js'; // Assuming data.js exports restaurantList   
// import {CDN_URL} from '../utils/restaurantList.js';

import {data} from '../utils/SwiggyAPI-data.js'
import { useEffect, useState } from 'react';

const BodyComponent2 = function () {

    const [restaurantList, setRestaurantList] = useState([]);

    console.log("Body Component is rendered");

    useEffect(()=>{
        console.log("useEffect");
        setTimeout(() => {
            
        }, 3000);
    })

    return (
        <div>
            <div className="formgroup" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }} >
                <input type="text" className="form-control" placeholder="Search..."></input>
                <button className="btn btn-primary">Search</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'space-around', alignItems: 'center', gap: '20px' }}>
                {data.map((restaurant) => (
                    <Card key={restaurant.id} name={restaurant.name} img={restaurant.image}  rating={restaurant.rating} />
                ))}
            </div>
        </div>
    )

}

export default BodyComponent2;
