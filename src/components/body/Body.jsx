import React, { useEffect, useState } from "react";
import "./body.css";
import Rescard from "../rescard/Rescard";
import { RES_API_URL } from "../../utils/constant";

const Body = () => {
  const [reslist, setReslist] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resdata = await fetch(RES_API_URL);
    const resjson = await resdata.json();
    setReslist(resjson?.data?.cards[2]?.data?.data?.cards);
  };

  return (
    <div className="body-wrapper">
      <div className="container">
        <div className="res-container">
          {reslist.map((res) => {
            return <Rescard resdata={res} key={res.data.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
