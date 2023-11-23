import React from "react";
const Loader=()=>{
    console.log("Loader-Component");
    return(
        <>
        
           <div className="loader">
          <div className="spinner"></div>
          </div>
        </>
    )
}
export default React.memo(Loader);