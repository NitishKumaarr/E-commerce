import  React,{ useEffect, useState } from "react";
import { Link,NavLink,Outlet} from "react-router-dom";
const Navbar=({cart,color,itemsearch})=>{
  console.log("Navbar-Component");
   const [searchProducts,setsearchProducts]=useState("");
    const handlesearch=(e)=>{
       setsearchProducts(e.target.value.toLowerCase());
       
    }
   useEffect(()=>{
    itemsearch(searchProducts);
   },[searchProducts]); 
    return(
      <>
        <header className="heading-container">
        <div className="heading-title-icon">
          <h1 className="heading-title">
             <a href="#" className="link">Garib Center</a>
          </h1>
        </div>
        <div className="searchbar">
          <input type="text" value={searchProducts} className="input" placeholder="Search Items" onChange={handlesearch}/>
          <span className="material-symbols-outlined search">
           search
          </span>
        </div>
        <div className="navigation">
          <ul className="list-non-bullet">
              <li className="list-item-inline">
              <Link to="/" className="link cursor">
               <div className="link " >Home</div>
               </Link>
              </li>
              <li className="list-item-inline">
                 <NavLink to='/random'>
                 <span className={`${color.xyz} ${color.link} cursor`}>
                 favorite
                </span>
                <span className="add-item-number">{cart}</span>
                </NavLink> 
              </li>
              <li className="list-item-inline">
               <NavLink to='/Cart'>
                 <span className="material-symbols-outlined cursor link">
                          shopping_cart
                      </span>
                 </NavLink>
                 </li>
                  <span className="add-item-number">{cart}</span>
                 
              </ul>
        </div>
      </header>
      <Outlet/>
      </>
    )
}

export default React.memo(Navbar);