import React from "react";
import { LOGO_URL } from "../../utils/constant";
import "./header.css";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="header">
          <div className="nav-logo">
            <img src={LOGO_URL} alt="app-logo" />
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <SearchOutlined />
              <span className="nav-text">Search</span>
            </li>
            <li className="nav-item">
              <GlobalOutlined />
              <span className="nav-text">Help</span>
            </li>
            <li className="nav-item">
              <ShoppingCartOutlined />
              <span className="nav-text">Cart</span>
            </li>
            <li className="nav-item">
              <UserOutlined />
              <span className="nav-text">Sign in</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
