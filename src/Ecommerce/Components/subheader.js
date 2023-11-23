import React from "react";
const SubHeader=()=>{
    console.log("subheader-Component");
    return(
        <div className="Subheader-container">
            <ul className="List-item">
                <li className="item"><a href="">Home</a></li>
                <li className="item"><a href="">Category 1</a></li>
                <li className="item"><a href="">Category 2</a></li>
                <li className="item"><a href="">Category 3</a></li>
                <li className="item"><a href="">Category 4</a></li>
            </ul>
        </div>
    )
}
export default React.memo(SubHeader);