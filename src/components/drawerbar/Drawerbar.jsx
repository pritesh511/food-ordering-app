import React from "react";
import { Drawer } from "antd";
import "./drawerbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  HomeOutlined,
  CommentOutlined,
  SettingOutlined,
  RadarChartOutlined,
  DribbbleOutlined,
  RightCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const Drawerbar = (props) => {
  const { openDrawer, onClose } = props;
  const currentUser = useSelector((state) => state.userslice.currentLoginUser);
  return (
    <>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        open={openDrawer}
        key="right"
      >
        <div className="top-menu">
          {/* <img src="" alt="avtar-image" /> */}
          <div className="avtar">{currentUser?.name[0].toUpperCase()}</div>
          <p className="drawer-name">{currentUser?.name}</p>
        </div>
        <ul className="drawer-menu-list">
          <li className="drawer-menu-item">
            <Link to="/">
              <HomeOutlined />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="drawer-menu-item">
            <Link to="/">
              <UserOutlined />
              <span>Profile</span>
            </Link>
          </li>
          <li className="drawer-menu-item">
            <Link to="/">
              <RadarChartOutlined />
              <span>Offers</span>
            </Link>
          </li>
          <li className="drawer-menu-item">
            <Link to="/">
              <SettingOutlined />
              <span>Setting</span>
            </Link>
          </li>
          <li className="drawer-menu-item">
            <Link to="/">
              <DribbbleOutlined />
              <span>My Orders</span>
            </Link>
          </li>
          <li className="drawer-menu-item">
            <Link to="/">
              <CommentOutlined />
              <span>Help & Faq</span>
            </Link>
          </li>
          <li className="drawer-menu-item">
            <Link to="/">
              <LogoutOutlined />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
        <div className="menu-bottom">
          <div className="drawerbar-small">
            <RightCircleOutlined />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Drawerbar;
