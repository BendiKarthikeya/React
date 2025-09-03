
import Card from './CardComponent';
import {restaurantList} from '../utils/restaurantList.js';
// import {data} from '../utils/data.js'; // Assuming data.js exports restaurantList   
import {CDN_URL} from '../utils/restaurantList.js';

const BodyComponent = function () {

    return (
        <div>
            <div className="formgroup" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }} >
                <input type="text" className="form-control" placeholder="Search..."></input>
                <button className="btn btn-primary">Search</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'space-around', alignItems: 'center', gap: '20px' }}>
                {restaurantList.map((restaurant) => (
                    <Card key={restaurant.data.id} name={restaurant.data.name} img={CDN_URL+restaurant.data.cloudinaryImageId} price={restaurant.data.price} rating={restaurant.rating} />
                ))}
            </div>
        </div>
    )

}

export default BodyComponent;
