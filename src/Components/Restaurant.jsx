import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router';


const Restaurant = () => {
  const {id} = useParams();
  const URL = `https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9507849&lng=77.532563&restaurantId=${id}`;
  const [restaurantList, setRestaurantList] = useState({});
  const [recommendedList, setRecommendedList] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch(URL);
            const jsonData = await response.json();
            
            let cardsData = jsonData?.data?.cards?.find((c) => c?.card.card.info);
            const restInfo = cardsData?.card?.card?.info;

            let groupedCards = jsonData?.data?.cards?.find((c) => c?.groupedCard);
            let itemCards = groupedCards?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find((c) => c?.card?.card?.itemCards);
            let recommendInfo = itemCards?.card?.card?.itemCards;

            setRecommendedList(recommendInfo);
            setRestaurantList(restInfo);
        };
        fetchData();
    }, [URL]);
  return (
    <div>
      <div>
        <h2>{restaurantList?.name}</h2>
      </div>

      <div>
        <h1>Recommended({recommendedList.length})</h1>
        {recommendedList?.length === 0 ? (<h2>Loading data</h2> ) : (recommendedList?.map( (item) => 
          <h3 key={item?.card?.info?.id}>{item?.card?.info?.name}</h3>
        ))}
      </div>
        
    </div>

  )
}

export default Restaurant