import React from "react";
import { LOGO_URL } from "../../utils/constant";
import "./header.css";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="header">
          <div className="nav-logo">
            <Link to="/">
              <img src={LOGO_URL} alt="app-logo" />
            </Link>
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/search">
                <SearchOutlined />
                <span className="nav-text">Search</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/help">
                <GlobalOutlined />
                <span className="nav-text">Help</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search">
                <ShoppingCartOutlined />
                <span className="nav-text">Cart</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search">
                <UserOutlined />
                <span className="nav-text">Sign in</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
