import React from "react";
import { Card } from "antd";
import "./rescard.css";
import { StarFilled } from "@ant-design/icons";
import { BASE_IMG_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

const Rescard = (props) => {
  const { resdata } = props;
  const {
    avgRating,
    cloudinaryImageId,
    slaString,
    name,
    id,
    cuisines,
    costForTwoString,
  } = resdata.data;
  return (
    <Link className="cardLink" to={`restaurant/${id}`}>
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
    </Link>
  );
};

export default Rescard;
