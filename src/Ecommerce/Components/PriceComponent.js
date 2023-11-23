import React from 'react'

 const PriceComponent = ({cart}) => {
  console.log("Price-Component");
    const quantity=cart.reduce((acc,curr) => acc + curr.quantity,0)
    const price=cart.reduce((acc,curr) => acc + curr.quantity*curr.oldPrice,0)
    const Discontprice=cart.reduce((acc,curr) => acc + curr.quantity*curr.newPrice,0)
  return (
    
       <div className="price-container" id="cart">
        <div className="final-price">
          <div className="head"><h2 >Price Details</h2></div>
          <div className="price-item price">
            <span>Price(<span class="item-count">{quantity}</span>) items:</span>
            <span className="price-part">Rs <span className="product-price">{price}</span></span>
          </div>
          <div className="discount-price-item price">
            <span>Discount:</span>
            <span className="price-part">Rs <span className="discount-price">{price-Discontprice}</span></span>
          </div>
          <div className="delivery-charge price">
            <span>Delivery Charge:</span>
            <span className="price-part">Rs 100</span>
          </div>
          <div className="price-after-discount price">
            <span>Total Amount:</span>
            <span className="price-part">Rs <span className="total-amount">{Discontprice+100}</span></span>
          </div>
          <div className="price">
            <marquee direction="left" className="marquee-style">You will save Rs <span className="save-amount">{price-Discontprice}</span> on this order</marquee>
          </div>
          <button className="button place-order">
            Place Order
          </button>
        </div>
        </div>
    
  )
}
export default React.memo(PriceComponent);