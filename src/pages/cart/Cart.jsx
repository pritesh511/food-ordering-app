import React from "react";
import "./cart.css";
import { BASE_IMG_URL } from "../../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { EmptyCart } from "../../components";
import { addTocart, removeFromcart } from "../../redux/slices/cartslice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart_item = useSelector((state) => state.cartslice.cart);
  const currentRestaurant = useSelector(
    (state) => state.cartslice.currentRestaurant
  );

  console.log("cart_item", cart_item);
  const { cloudinaryImageId, name, city } = currentRestaurant;

  return cart_item.length <= 0 ? (
    <EmptyCart />
  ) : (
    <div className="container">
      <div className="cart-container">
        <div className="cart-items-list">
          <div className="cart-item">
            <div className="cart-item-top">
              <img
                src={BASE_IMG_URL + cloudinaryImageId}
                className="cart-res-img"
              />
              <div className="cart-res-detail">
                <h2>{name}</h2>
                <p>{city}</p>
                <div className="cart-underline"></div>
              </div>
            </div>
            {cart_item.map((item) => {
              return (
                <div className="cart-item-bottom" key={item?.id}>
                  <div className="cart-item-name">
                    <div
                      className={`cart-food ${
                        item?.itemAttribute?.vegClassifier === "VEG"
                          ? "green"
                          : "red"
                      }`}
                    >
                      <div
                        className={`cart-food-circle ${
                          item?.itemAttribute?.vegClassifier === "VEG"
                            ? "green"
                            : "red"
                        }`}
                      ></div>
                    </div>
                    <div className="cart-food-detail-right">
                      <p className="food-name">{item?.name}</p>
                      <p className="cart-item-price">Rs. {item?.price / 100}</p>
                    </div>
                  </div>
                  <div className="cart-item-button-main">
                    <div className="cart-button-wrap">
                      <span
                        className="cart-item-button"
                        onClick={() => dispatch(addTocart(item))}
                      >
                        +
                      </span>
                      <span className="cart-item-qty">{item?.qty}</span>
                      <span
                        className="cart-item-button"
                        onClick={() => dispatch(removeFromcart(item))}
                      >
                        -
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="cart-checkout-box"></div>
      </div>
    </div>
  );
};

export default Cart;
