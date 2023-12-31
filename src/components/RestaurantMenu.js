import React, { useState } from 'react'
// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from '../utils/constants';
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestauratMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
const { resId } = useParams();

  const resInfo = useRestauratMenu(resId);
  const [showIndex, setShowIndex] = useState(null)

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage} =
  resInfo?.cards[0]?.card?.card?.info;
    // console.log(resInfo)

  const { itemCards } =
  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) => card.card.card.itemCards)
  // .map((card)=> card.card.card.itemCards )
    
  // console.log(itemCards)
  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card)=>card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log(categories);

 const an = categories.map((t)=>t.card.card.itemCards);
 console.log(an);
//  console.log(an[0][0].card.info.name);
 const b = (an.map((innerArray)=>innerArray.map((item) => item?.card?.info)))
 console.log(b);
//  console.log(b.map((item) => item?.name))

// Higher order component: 
//  const isBestSeller = (an) => {
//   return (props) => {
//     const bestSeller = props?.info.isBestseller===true
//     const additionalProps = {
//       isBestSeller: isBestSeller,
//     };
//     const mergedProps = { ...props, ...additionalProps };
    
//     return <an {...mergedProps}/>
    
  // }}
 
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
     
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* Accordions */}
      {categories.map((category, index) => 
      <RestaurantCategory 
      key={category?.card?.card?.title} 
      data={category?.card?.card} 
      showItems ={index === showIndex ? true : false}
      setShowIndex={()=> setShowIndex(index)}
      />)}
      {/* <h2>Menu</h2> */}
      {/* <div className="res-container" > */}
        {/* {an.map((innerArray)=>innerArray.map((item)=>
        
        <ul className="res-card" style={{ backgroundColor: "#f0f0f0" }} key={item?.card?.info?.id} >
          <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + item?.card?.info?.imageId}
      />
          {item?.card?.info?.name} -{" Rs."}
          {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
          {/* {isBestSeller && <p>Best Seller!</p>} */}
        {/* /* </ul> */}

        {/* ))}  */}
      {/* </div> */}
    </div>
  );
};

export default RestaurantMenu;