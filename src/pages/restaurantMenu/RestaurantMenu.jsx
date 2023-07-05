import React, { useEffect, useState } from "react";
import { Collapse } from "antd";
import { RES_MENU_API } from "../../utils/constant";
import { useParams } from "react-router";
import { StarFilled } from "@ant-design/icons";
import "./restaurantMenu.css";
import { BASE_IMG_URL } from "../../utils/constant";
import MenuSkelton from "../../components/menuSkelton/MenuSkelton";
import { useDispatch, useSelector } from "react-redux";
import {
  addTocart,
  setCurremtRestaurant,
  removeFromcart,
} from "../../redux/slices/cartslice";
import { useNavigate } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenuData, setResMenuData] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart_Item = useSelector((state) => state.cartslice.cart);
  const is_login_user = useSelector(
    (state) => state.userslice.currentLoginUser
  );

  const { resId } = params;

  useEffect(() => {
    fetchResMenuData();
  }, []);

  const fetchResMenuData = async () => {
    const data = await fetch(`${RES_MENU_API}&restaurantId=${resId}`);
    const json = await data.json();
    setResMenuData(json);
  };

  if (resMenuData === null) return <MenuSkelton />;

  const resData = resMenuData?.data?.cards[0].card.card.info;

  const handleCart = (item) => {
    if (is_login_user) {
      dispatch(addTocart(item?.card?.info));
      dispatch(setCurremtRestaurant(resData));
    } else {
      navigate("/login");
    }
  };

  const food_item =
    resMenuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      .filter((item) => item?.card?.card?.itemCards !== undefined)
      .map((item, index) => {
        return {
          key: `${index + 1}`,
          label: `${item?.card?.card?.title} (${item?.card?.card?.itemCards.length})`,
          children: item?.card?.card?.itemCards.map((item) => {
            const item_data = cart_Item?.find(
              (food) => food.id === item?.card?.info?.id
            );
            const in_cart_item = item_data?.qty;
            if (in_cart_item) {
              item.card.info["qty"] = in_cart_item;
            } else {
              item.card.info["qty"] = 0;
            }
            return (
              <div className="res-item-card" key={item?.card?.info?.id}>
                <div className="res-item-card-left">
                  <div
                    className={`food-type-main ${
                      item?.card?.info?.itemAttribute?.vegClassifier ===
                      "NONVEG"
                        ? "red"
                        : "green"
                    }`}
                  >
                    <div
                      className={`food-type ${
                        item?.card?.info?.itemAttribute?.vegClassifier ===
                        "NONVEG"
                          ? "red"
                          : "green"
                      }`}
                    ></div>
                  </div>
                  <h3>{item?.card?.info?.name}</h3>
                  <p>
                    ₹
                    {Math.trunc(
                      parseInt(
                        (item?.card?.info?.price
                          ? item?.card?.info?.price
                          : item?.card?.info?.defaultPrice) / 100
                      )
                    )}
                  </p>
                </div>
                <div className="food-img">
                  <img
                    src={
                      item?.card?.info?.imageId
                        ? BASE_IMG_URL + item?.card?.info?.imageId
                        : BASE_IMG_URL + resData?.cloudinaryImageId
                    }
                  />
                  {item?.card?.info?.qty ? (
                    <div className="button-wrap">
                      <span
                        className="item-button"
                        onClick={() => dispatch(addTocart(item?.card?.info))}
                      >
                        +
                      </span>
                      <span className="item-qty">{item?.card?.info?.qty}</span>
                      <span
                        className="item-button"
                        onClick={() =>
                          dispatch(removeFromcart(item?.card?.info))
                        }
                      >
                        -
                      </span>
                    </div>
                  ) : (
                    <div
                      className="add-item-button"
                      onClick={() => handleCart(item)}
                    >
                      Add Item
                    </div>
                  )}
                </div>
              </div>
            );
          }),
        };
      });

  const items = food_item;

  return (
    <div className="resmenu-container">
      <div className="res-menu-header">
        <div className="res-header-left">
          <h2>{resData?.name}</h2>
          <p>{resData?.labels[1].message}</p>
        </div>
        <div className="res-header-right">
          <div className="res-header-rating">
            <StarFilled />
            <span>{resData?.avgRating}</span>
          </div>
        </div>
      </div>
      <div className="res-menu-container">
        <Collapse
          defaultActiveKey={["1"]}
          ghost
          items={items}
          expandIconPosition="end"
        />
      </div>
    </div>
  );
};

export default RestaurantMenu;
