import React, { useEffect, useState } from "react";
import { Collapse } from "antd";
import { RES_MENU_API } from "../../utils/constant";
import { useParams } from "react-router";
import { StarFilled } from "@ant-design/icons";
import "./restaurantMenu.css";
import { BASE_IMG_URL } from "../../utils/constant";
import MenuSkelton from "../../components/menuSkelton/MenuSkelton";
import { useDispatch } from "react-redux";
import { addTocart, setCurremtRestaurant } from "../../redux/slices/cartslice";

const RestaurantMenu = () => {
  const [resMenuData, setResMenuData] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();

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

  const food_item =
    resMenuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      .filter((item) => item?.card?.card?.itemCards !== undefined)
      .map((item, index) => {
        return {
          key: `${index + 1}`,
          label: `${item?.card?.card?.title} (${item?.card?.card?.itemCards.length})`,
          children: item?.card?.card?.itemCards.map((item) => {
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
                  <p>RS. {item?.card?.info?.price / 100}</p>
                </div>
                <div className="food-img">
                  <img src={BASE_IMG_URL + item?.card?.info?.imageId} />
                  {/* <div className="button-wrap">
                    <span className="item-button">+</span>
                    <span className="item-qty">1</span>
                    <span className="item-button">-</span>
                  </div> */}
                  <div
                    className="add-item-button"
                    onClick={() => {
                      dispatch(addTocart(item?.card?.info, resData));
                      dispatch(setCurremtRestaurant(resData));
                    }}
                  >
                    Add Item
                  </div>
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
