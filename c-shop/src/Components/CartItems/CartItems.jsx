import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { getTotalCartAmount, data_all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cart_items">
      <div className="cart_items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {data_all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cart_items-format-main cart_items-format ">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart_items-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <i
                  class="fa-solid fa-circle-minus"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                ></i>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart_items-down">
        <div className="cart_items-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cart_items-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart_items-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart_items-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart_items-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart_items-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
