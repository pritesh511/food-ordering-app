import React, { useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import "./header.css";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Drawerbar from "../drawerbar/Drawerbar";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const item_in_cart = useSelector((state) => state?.cartslice?.cart);
  const qty_in_cart = item_in_cart.reduce((a, b) => a + b.qty, 0);

  const current_user_login = useSelector(
    (state) => state?.userslice?.currentLoginUser
  );

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
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
                <Link to="/cart">
                  <ShoppingCartOutlined />
                  <span className="nav-text">Cart</span>
                  {qty_in_cart !== 0 && (
                    <span className="cart-item-badge">{qty_in_cart}</span>
                  )}
                </Link>
              </li>
              {current_user_login ? (
                <li className="nav-item">
                  <div className="login-user" onClick={showDrawer}>
                    {current_user_login?.name[0].toUpperCase()}
                  </div>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="/login">
                    <UserOutlined />
                    <span className="nav-text">Sign in</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Drawerbar onClose={onClose} openDrawer={openDrawer} />
    </>
  );
};

export default Header;
