import Card from './CardComponent';
import ShimmerUI from './ShimmerUI';
import { use, useEffect, useState } from 'react';

import CardComponent2 from './CardComponent2';
import { useParams } from 'react-router-dom';

const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const BodyComponent4 = function(){
    const [restaurantList, setRestaurantList] = useState([]);
    const [RecommendedList, setRecommendedList] = useState([]);
    const { id } = useParams();

    
    const URL = "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9507849&lng=77.532563&restaurantId="+id;

    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setRestaurantList(data?.data?.cards[2].card?.card?.info || []);
            console.log(restaurantList);

            let groupedCards =data?.data?.cards.find((c)=>c?.groupedCard);

            let cards= groupedCards.groupedCard?.cardGroupMap?.REGULAR?.cards;

            let result = cards.find((c)=>c.card?.card?.itemCards);
            console.log(result)

            setRecommendedList(result);

            // setRecommendedList(.cards.find((c)=>c.card?.card?.itemCards)?.card?.card?.itemCards.map((item)=>item.card.info) || []);
            // console.log(RecommendedList);
            
        };
        fetchData();
    }, []);

    
    return(
        <div>
            {(restaurantList.length === 0 ? (
                <ShimmerUI/>
            ) : (   
                <CardComponent2
                    key={restaurantList.id}
                    name={restaurantList.name}
                    costForTwoMessages={restaurantList.costForTwoMessages}
                    cuisines={restaurantList.cuisines}
                    avgRating={restaurantList.avgRating}
                ></CardComponent2>
            ))}

        </div>
    )
}

export default BodyComponent4;