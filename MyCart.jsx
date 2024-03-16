import React from "react";
import "../component/allStyle/MyCart.css";
const MyCart = () => {
  return (
    <div>
      <div class="cart-card">
        <div class="cart-image">
          <img src="product-image.jpg" alt="Product Image" />
        </div>
        <div class="cart-details">
          <h3 class="product-title">Product Title</h3>
          <p class="product-description">
            Product Description Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Integer nec odio.
          </p>

          <div class="quantity-controls">
            <button class="quantity-btn decrement">-</button>
            <span class="quantity">1</span>
            <button class="quantity-btn increment">+</button>
          </div>
          <div class="cart-footer">
            <span class="product-price">$99.99</span>
            <div class="cart-buttons">
              <button class="btn btn-remove">Remove</button>
              <button class="btn btn-save">buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
