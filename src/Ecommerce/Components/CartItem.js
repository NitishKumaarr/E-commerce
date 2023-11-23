import React, { useEffect } from 'react'
import  CartComponent  from './CartComponent';
import { useState ,useContext} from 'react';
import  PriceComponent  from './PriceComponent';
import { commerceData } from '../../App';
function CartItem({data,onAddItem,onRemoveItem,updateCart}) {
  console.log("CartItem-Component");
  const useCommerceData=useContext(commerceData);
  const [item,setItem]=useState([...data]);

  
  useEffect(()=>{
    setItem([...data]);
  },[data]);

  const handleaddItem=(id)=>{

    let data=[...item];
   
    let index=data.findIndex(i=>i._id===id);

    data[index].quantity+=1;
     setItem([...data]);
    //useCommerceData.setCartItem([...useCommerceData.CartItem ,data[index]])
    onAddItem(data[index]);
  }
  const handleRemoveItem=(id)=>{

  let data=[...item];
  let index=data.findIndex(i=>i._id===id);
 
  if(data[index].quantity===0){
    // data.splice(index,1);
    // setItem([...data]);
    return;
  }
  data[index].quantity-=1;
  setItem([...data]);
    onRemoveItem(data[index]);
  }
return(
    <>
  <div className='cart-price-container'>
  <div className="cart-Container">
  {[item.map((data)=> <CartComponent onadd={handleaddItem} onremove={handleRemoveItem} data={data} key={data._id}/>)]}
  </div> 
  <PriceComponent cart={data}/>
  </div>
  </>
  )
}

export default React.memo(CartItem);