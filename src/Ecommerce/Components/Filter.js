import React, { useState } from 'react'
function Filter({number}) {
    console.log("Filter-Component");
    const getRadioValue=(e)=>{
        number(e.target.value);
    }
   
  return (
    <>
         <aside className="side-bar">
          <h3 className="heading-3">Filter</h3>
          <div className="filter-container">
        
              <h3 className="heading-4">Ratings</h3>
              <div className="rating">
                  <input data-rating="4" id="rating-4" value="4" className="radio" type="radio" name="rating" onChange={getRadioValue}/>
                  <label data-rating="4" for="rating-4" className="label">4 stars & above</label>
              </div>
              <div className="rating">
                  <input data-rating="3" id="rating-3"  value="3" className="radio" type="radio" name="rating" onChange={getRadioValue}/>
                  <label data-rating="3" for="rating-3" className="label">3 stars & above</label>
              </div>
              <div className="rating">
                  <input data-rating="2" id="rating-2" value="2" className="radio" type="radio" name="rating" onChange={getRadioValue}/>
                  <label data-rating="2" for="rating-2" className="label">2 stars & above</label>
              </div>
              <div className="rating">
                  <input data-rating="1" id="rating-1" value="1" className="radio" type="radio" name="rating" onChange={getRadioValue}/>
                  <label data-rating="1" for="rating-1" className="label">1 stars & above</label>
              </div>
          </div>
      </aside>
    </>
  )
}

export default React.memo(Filter);