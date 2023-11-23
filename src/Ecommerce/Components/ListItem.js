import { useContext, useState ,useEffect,memo} from "react"
import Modal from "./Modal";
import { commerceData } from "../../App";

 const ListItem=({data,onadd,onremove})=>{
    //console.log(data);
    console.log("ListItem-Component");
    const[color,setColor]=useState("material-symbols-outlined")
    const useCommerceData=useContext(commerceData);
     const IncrementByOne=()=>{

        onadd(data._id);
     }
     const DecrementByOne=()=>{
       onremove(data._id);
     }
     const MoveToWishlist=()=>{
       const items=[...useCommerceData.wishlistItem];
       const index=items.findIndex((it)=>it._id===data._id);
       if(color==="material-icons"){
        items.splice(index,1);
         setColor("material-symbols-outlined")
       }
       else{
        if(index===-1){
       items.push(data);
       setColor("material-icons");
        }
      
       }
       useCommerceData.setWishlistItem([...items]);
     }
     useEffect(()=>{
        {data.wishlist==="true"?setColor("material-icons"):setColor("material-symbols-outlined")};
     },[]);
     //console.log(color);
    return (
        <>
        <div className="card">
           <div className="card-image-container">
          <img className="card-image" src={data.img}/>
         
          <span className={`${color}`} onClick={MoveToWishlist}>
                        favorite
          </span>
          </div>
          <div className="card-details">
                <div className="card-title">{data.brand}</div>
                <div className="card-description">
                   <p className="card-des">{data.name}</p>
                   <p className="card-price">Rs{data.newPrice}
                    <span className="price-strike-through">Rs{data.oldPrice}</span>
                    <span className="Discount">({data.discount} % off)</span>
                   </p>
                   <p className="rating">
                    <span className="material-symbols-outlined">
                        star
                    </span>
                    <span>{data.rating}</span>
                   </p>
    
                 </div>
            </div>     
            {data.quantity===0?<div className="cta-button">
                <button className="button" onClick={IncrementByOne}>
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                    Add To Cart
                </button>
            </div>
           :<div className="number-button">
                <button className="cart-button" onClick={DecrementByOne}>
                    <span>
                        -
                    </span>
                </button>
                <span>{data.quantity}</span>
                <button className="cart-button" onClick={IncrementByOne}>
                    <span>
                        +
                    </span>
                </button>
            </div>
          }    
        </div> 
        </>  
    )
}
export default memo(ListItem);