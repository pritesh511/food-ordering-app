import React from "react";
import { Card } from "antd";
import "./rescard.css";
import { StarFilled } from "@ant-design/icons";
import { BASE_IMG_URL } from "../../utils/constant";

const Rescard = (props) => {
  const { resdata } = props;
  const {
    avgRating,
    cloudinaryImageId,
    slaString,
    name,
    cuisines,
    costForTwoString,
  } = resdata.data;
  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          className="res-img"
          src={BASE_IMG_URL + cloudinaryImageId}
        />
      }
    >
      <h2 className="res-name">{name}</h2>
      <p className="res-item-name">{cuisines.join(", ")}</p>
      <div className="res-detail">
        <div className="res-rating">
          <StarFilled />
          <span>{avgRating ? avgRating : 4}</span>
        </div>
        <p className="delivery-time">{slaString}</p>
        <p className="delivery-time">{costForTwoString}</p>
      </div>
    </Card>
  );
};

export default Rescard;
