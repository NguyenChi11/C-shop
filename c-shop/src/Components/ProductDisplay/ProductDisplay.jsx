import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product_display">
      <div className="product_display-left">
        <div className="product_display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product_display-img">
          <img
            className="product_display-main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="product_display-right">
        <h1>{product.name}</h1>
        <div className="product_display-right-stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <p>(122)</p>
        </div>
        <div className="product_display-right-prices">
          <div className="product_display-right-price-old">
            ${product.old_price}
          </div>
          <div className="product_display-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product_display-right-description">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="product_display-right-size">
          <h1>Select Size</h1>
          <div className="product_display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="product_display-right-category">
          <span>Category :</span>Men, Shirt, pants
        </p>
        <p className="product_display-right-category">
          <span>Tag :</span>Modern, Shirt, pants
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
