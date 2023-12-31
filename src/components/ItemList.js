import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    console.log(items);
    return (
        <div>
           {items.map((item)=>(
           <div key={item?.card?.info?.id}>
            <img 
            src ={CDN_URL + item?.card?.info?.imageId}
           />
           <button>Add+</button>
            <div>
            <span>{item?.card?.info?.name}</span>
            <span> Rs-{item?.card?.info?.price ? item?.card?.info?.price /100 : item?.card?.info?.defaultPrice /100 }</span>
            </div>
            <p>{item?.card?.info?.description}</p>
            </div>
           ))}
        </div>
    )
}

export default ItemList