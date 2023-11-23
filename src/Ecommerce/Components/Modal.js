import  ReactDOM  from "react-dom";
import React from "react";

const Modal=()=>{
    console.log("Modal-Component");
    return(
        ReactDOM.createPortal(<div className="modal-cotainer">
        <div className="loader-overlay"></div>
        <div className="card">
            <div className="card-image-container">
              <img className="card-image" src="data:image/jpeg;base64,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" alt=""/>
            </div>
            <div className="card-details">
                <div className="close-container">
                    <p>Premium Collection </p>
                    <button><span>X</span></button>
                </div>
                <div className="card-description">
                    <p className="card-des">Men Sneakers</p>
                    <p className="card-price">Rs 750
                        <span className="price-strike-through">Rs. 2499</span>
                        <span className="Discount">(30% OFF)</span>
                    </p>
                    <p className="rating">
                        <span className="material-symbols-outlined">
                            star
                        </span>
                        <span>4.5</span>
                    </p>
                    <p className="product-size">Size:XXL</p>
                    <p className="product-size">MEN</p>
                </div>
                <div className="quantity-container">
                    <p><span>
                        Quatity:
                    </span>
                    </p>
                    <button className="count">+</button>
                    <span className="count-value">1</span>
                    <button className="count">-</button>
                    
                </div>
                <div className="cta-button">
                    <button className="button btn-primary btn-icon cart-btn d-flex">
                        Remove
                    </button>
                    <button className="button btn-primary btn-icon cart-btn d-flex">
                        Save to Wishlist
                    </button>
                </div>
            </div>
        </div>
    </div>,document.getElementById("modal-root"))
    
    )
}
export default React.memo(Modal);