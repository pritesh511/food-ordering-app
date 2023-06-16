import React from "react";
import "./body.css";
import Rescard from "../rescard/Rescard";
import { resdata } from "../../utils/mockData";

const Body = () => {
  return (
    <div className="body-wrapper">
      <div className="container">
        <div className="res-container">
          {resdata.map((res) => {
            return <Rescard resdata={res} key={res.data.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
