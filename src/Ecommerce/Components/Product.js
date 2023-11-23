import ListItem from "./ListItem";
import Loader from "./loader";
import {useEffect,useState,useContext} from "react";
import axios from 'axios';
import { commerceData } from '../../App';
import React from "react";
import { allProducts } from "../DataBase/product";
const Product=({cart,homeItem,Products,ratevalue})=>{
  console.log("Products-Component");
  const useCommerceData=useContext(commerceData);
    const [item,setItem]=useState([]);
    const [loader,setLoader]=useState(true);
    useEffect(()=>{
      async function getdata(){
       try{
      //  const response=await axios.get(homeItem);
        const data=[...allProducts];
         setLoader(false);
         const transformData= data.map((item)=>{
          return{
            ...item,
            quantity:0,
            wishlist:"false",
          }
         })

         let DataWithCart=[];
         for(let i=0;i<transformData.length;i++){
          let index=cart.findIndex( it =>it._id===transformData[i]._id);
          let wishListindex=[...useCommerceData.wishlistItem].findIndex( it =>it._id===transformData[i]._id);
           if(wishListindex>-1){
            transformData[i].wishlist="true";
    
           }
          // console.log(transformData[i]);
             if (index===-1){
              DataWithCart.push(transformData[i]);
             }
             else{
              DataWithCart.push(cart[index]);
             }
         }
         
         DataWithCart.sort((it1,it2)=> it2._id-it1._id);
        const ItemSearch=DataWithCart.filter((obj)=>obj.brand.toLowerCase().split(" ").join("").includes(Products));
        const RatedItem=ItemSearch.filter((obj)=>obj.rating>=ratevalue);
        console.log(RatedItem);
         setItem([...RatedItem]);
  
       }
       catch(error){
         console.log("Error occured:",error);
       }
      }
    
       getdata();
  },[Products,ratevalue]);

    const handleaddItem=(id)=>{

        let data=[...item];
       
        let index=data.findIndex(i=>i._id===id);

        data[index].quantity+=1;
        setItem([...data]);
        // onAddItem(data[index]);

        //Handling cartItem
        let cart=useCommerceData.cartItem;
        let items=[...cart];
        let index2=items.findIndex( i =>i._id===data[index]._id);
        if(index2 >-1){
          items[index2]=data[index];
        }
        else{
          items.push(data[index]);
        }
        useCommerceData.setCartItem([...items]);
      }

      const handleRemoveItem=(id)=>{

      let data=[...item];
      let index=data.findIndex(i=>i._id===id);
      if(data[index].quantity===0){
        return;
      }
      data[index].quantity-=1;
      setItem([...data]);
        //onRemoveItem(data[index]);
       
        //HandlingCartItem;
        let cart=useCommerceData.cartItem;
        let items=[...cart];
        let index2=items.findIndex( i =>i._id===data[index]._id);
         if(data[index].quantity===0){
         items.splice(index2,1);
         }
       else{
        items[index2]=data[index];
      }
       useCommerceData.setCartItem([...items]);
      }
     // console.log(Products);
    return(
        <>
       <div className="loader-container">
       {loader && <Loader/>}
       </div>
      <div className="Container">
      {[item.map((item)=> <ListItem onadd={handleaddItem} onremove={handleRemoveItem} data={item} key={item._id}/>)]}
      </div> 
      </>
    )
}
export default React.memo(Product);