import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./search.css";
import Rescard from "../../components/rescard/Rescard";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  const [searchRes, setSearchRes] = useState("");
  const [filterRes, setFilterRes] = useState([]);
  const allResData = useSelector((state) => state.restslice.restaurant);

  useEffect(() => {
    const filterRestaurant = allResData.filter((res) =>
      res?.data?.name.toLowerCase().includes(searchRes.toLowerCase())
    );
    setFilterRes(filterRestaurant);
  }, [searchRes]);

  const handleSearch = (e) => {
    setSearchRes(e.target.value);
  };

  return (
    <div className="container">
      <div className={`search-input-wrapper border`}>
        <input
          type="text"
          value={searchRes}
          className="search-input"
          onChange={(e) => handleSearch(e)}
        />
        <div className="search-icon">
          <SearchOutlined />
        </div>
      </div>
      {searchRes.length > 0 && (
        <div className="res-container">
          {filterRes?.map((res) => {
            return <Rescard resdata={res} key={res.data.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
