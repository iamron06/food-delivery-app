import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data , showItems , setShowIndex , showIndex}) => {
    // console.log(data);
    // const [showitems,setShowItems] = useState(false)
    const handleClick = () =>{
    //    setShowItems(!showitems)
    setShowIndex();
    
    }
    return(
        <div>
            {/* header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
             <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">
                {data.title} ({data.itemCards.length})
                </span>
                <span>⬇️</span>
            </div>
            
            {/* Accordion body */}
          { showItems && <ItemList items={data.itemCards} /> }
           </div>
        </div>
    )
}
export default RestaurantCategory

// if the restaurantCategory was managing its own state it would have been uncontrolled component
// if the restaurantCategory is dependent on its parent to manage its own state it would have been controlled component 
