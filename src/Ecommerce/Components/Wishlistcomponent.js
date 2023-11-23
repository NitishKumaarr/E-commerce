import React,{useContext} from 'react'
import { commerceData } from '../../App'
 const Wishlistcomponent = ({data}) => {
  console.log("WishListItem-Component");
  const useCommerceData=useContext(commerceData);
  const moveFromWishlist=()=>{
   let item=[...useCommerceData.wishlistItem];
   const index=item.findIndex((i)=>i._id===data._id);
   item.splice(index,1);
   useCommerceData.setWishlistItem([...item]);
  }
 
  const moveToCart=()=>{
    let item=[...useCommerceData.cartItem];
    if(data.quantity===0){
      data.quantity+=1;
    }
    item.push(data);
    useCommerceData.setCartItem([...item]);
    moveFromWishlist();
  }
  return (
    <>
    <div className="cart-card">
       <div className="cart-card-image-container">
      <img className="cart-card-image" src={data.img}/>
      </div>
      <div className="cart-card-details">
            <div className="cart-card-title">{data.brand}</div>
            <div className=" cart-card-description">
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
               <p>{data.size}</p>
        </div>
       <div className="handle-wishlist-cart">
        <button className="button" onClick={moveFromWishlist}>Remove</button>
        <button className="button wishlist" onClick={moveToCart}>Add to Cart
        <span className="material-symbols-outlined" >
                        shopping_cart
        </span>
        </button>
       </div>
        </div> 
    </div>  
</>
  )
}
export default React.memo(Wishlistcomponent);