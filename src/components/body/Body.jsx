import React, { useEffect, useState } from "react";
import "./body.css";
import Rescard from "../rescard/Rescard";
import { RES_API_URL } from "../../utils/constant";
import RescardSkelton from "../rescardSkelton/RescardSkelton";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../../redux/slices/restslice";
import { restaurantList } from "../../utils/restMockData";

const Body = () => {
  const [reslist, setReslist] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const resdata = await fetch(RES_API_URL, {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*"
    //   }
    // });
    // const resjson = await resdata.json();

    // setReslist(
    //   resjson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
    // dispatch(
    //   setRestaurant(
    //     resjson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //       ?.restaurants
    //   )
    // );
    setTimeout(
      (r) => {
        setReslist(restaurantList);
        dispatch(setRestaurant(restaurantList));
      },
      1000
    );
  };

  return reslist.length === 0 ? (
    <RescardSkelton />
  ) : (
    <div className="body-wrapper">
      <div className="container">
        <div className="res-container">
          {reslist.map((res) => {
            return <Rescard resdata={res} key={res.info.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
