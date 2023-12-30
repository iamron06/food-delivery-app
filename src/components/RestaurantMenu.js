import React from 'react'
// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
// import { CDN_URL } from '../utils/constants';
import useRestauratMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
const { resId } = useParams();

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   setResInfo(json.data);
  // };
  const resInfo = useRestauratMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage} =
  resInfo?.cards[0]?.card?.card?.info;
    // console.log(resInfo)

  const { itemCards } =
  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) => card.card.card.itemCards)
  // .map((card)=> card.card.card.itemCards )
    
  // console.log(itemCards)
  const titles = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card)=>card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log(titles);

 const a = titles.map((t)=>t.card.card.itemCards);
 console.log(a);
 console.log(a[0][0].card.info.name);
 console.log(a.map((innerArray)=>innerArray.map((item) => item?.card?.info?.name)))


  // const {itemCards1} = itemCards.flatMap((card) => card.card.card.itemCards || []).map((card) => card.card.itemCards);

  // const {itemCards1} = itemCards[2].card[2].card.info.name

  // console.log(itemCards1)
  
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
     
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {/* {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))} */}

        {a.map((innerArray)=>innerArray.map((item)=>
        <li key={item?.card?.info?.id} >
          {item?.card?.info?.name} -{" Rs."}
          {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
        </li>

        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;