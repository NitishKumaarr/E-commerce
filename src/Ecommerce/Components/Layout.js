import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import SubHeader from "./subheader";
const Layout=()=>{
    return(
        <>
         <Navbar/>
         <div className="subheader">
          <SubHeader/>
          </div>
          <Outlet/>
        </>
    )
}
