
import Navbar from './Ecommerce/Components/Navbar';
import SubHeader from './Ecommerce/Components/subheader';
import { useState ,createContext, useEffect,useCallback} from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from './Ecommerce/Components/Product';
import React from 'react';
import Filter from './Ecommerce/Components/Filter';
const LazyCartItem=React.lazy(()=> import('./Ecommerce/Components/CartItem'));
const LazyWishListItem=React.lazy(()=>import('./Ecommerce/Components/Wishlistcomponent'));
 
const commerceData=createContext();

function App() {
   const [cartItem,setCartItem]=useState([]);
   const [wishlistItem,setWishlistItem]=useState([]);
   const[wishlistColor,setWishlistColor]=useState({link:"link",xyz:"material-symbols-outlined"});
   const [searchItem,setsearchItem]=useState("");
   const[rateValue,SetrateValue]=useState(0);
   const addCartItem=(item)=>{
      let items=[...cartItem];
      let index=items.findIndex( i =>i._id===item._id);
      if(index >-1){
        items[index]=item;
      }
      else{
        items.push(item);
      }
      setCartItem([...items]);
   }
   //console.log(cartItem);

   const removeCartItem=(item)=>{
    let items=[...cartItem];
    let index=items.findIndex( i =>i._id===item._id);
    if(items[index].quantity===0){
       items.splice(index,1);
    }
    else{
      items[index]=item;
    }
    setCartItem([...items]);
   }

  //console.log(cartItem);
  const homeItem="https://e-commerce-71fa1-default-rtdb.firebaseio.com/products.json";
  useEffect(()=>{
    {wishlistItem.length>0?setWishlistColor({...wishlistItem,link:"link2",xyz:"material-icons"})
    :setWishlistColor({...wishlistItem,link:"link",xyz:"material-symbols-outlined"})};
  },[wishlistItem])
  
  const itemsearch =useCallback(
     (text)=>{
      setsearchItem(text);
    }
  ,
    [searchItem],
  )
 
  const getRatingValue=(num)=>{
     SetrateValue(num);
  }
  //console.log(rateValue);
  return (
      <>
      <commerceData.Provider value={{cartItem,wishlistItem,addCartItem,setCartItem,setWishlistItem}}>
      <Navbar cart={cartItem.length} color={wishlistColor} itemsearch={itemsearch}  />
        <div className="subheader">
          <SubHeader/>
        </div>
       
         <Routes> 
        <Route path="/" element={
          <div className='products-page'>
          <Filter number={getRatingValue}/>
          <div className='home-product'>
          <Product ratevalue={rateValue} cart={cartItem} homeItem={homeItem} Products={searchItem}/>
          </div>
         </div>
        }>
        </Route>
        </Routes> 
        
      
        <Routes>
          <Route path="/random" element={
            <React.Suspense>
            <div className="cart-Container">
            {[wishlistItem.map((data)=> < LazyWishListItem data={data} key={data._id}/>)]}
             </div> 
            </React.Suspense>
          }>
          </Route>
       </Routes>

        <Routes>
        <Route path="/Cart" element={
        cartItem.length===0?<h2>Your Cart Is Empty</h2>:
        <React.Suspense >
          <LazyCartItem data={cartItem}  onAddItem={addCartItem} onRemoveItem={removeCartItem}/>
        </React.Suspense>}>
        </Route>
        </Routes>
        </commerceData.Provider>
      </>
      
  );
}

export default App;
export  {commerceData};
