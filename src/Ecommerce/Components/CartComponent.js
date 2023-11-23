import React,{useContext} from 'react'
import { commerceData } from '../../App';
 const CartComponent = ({data,onadd,onremove}) => {
    console.log("Cart-Component");
    const useCommerceData=useContext(commerceData);
    //console.log(data);
    const removeCartItem=()=>{
        let items=[...useCommerceData.cartItem];
        let index=items.findIndex( i =>i._id===data._id);
        items.splice(index,1);
        useCommerceData.setCartItem([...items]);
    }
     const IncrementByOne=()=>{

        onadd(data._id);
     }
     const DecrementByOne=()=>{
       onremove(data._id);
     }
    const addWishlistItem=()=>{
        //Adding Item in to the wishlist
        let wishlistItems=[...useCommerceData.wishlistItem];
        let index2=wishlistItems.findIndex( i =>i._id===data._id);
        if(index2===-1){
           wishlistItems.push(data);
        }
        useCommerceData.setWishlistItem([...wishlistItems]);
         
        //item is removed
        removeCartItem();
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
            <div className="qnt-btn">
                 <p>Quantity:</p>
                <div className="number-button">
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
            </div>     
           <div className="remove-wishlist-cart">
            <button className="button" onClick={removeCartItem}>Remove</button>
            <button className="button" onClick={addWishlistItem}>Add to Wishlist</button>
           </div>
            </div> 
        </div>  
    </>
  )
}
export default React.memo(CartComponent);
