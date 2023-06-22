import { Button } from "antd";
import React from "react";
import "./login.css";
import { LeftCircleOutlined } from "@ant-design/icons";
import banner from "../../assets/images/banner.jpg";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constant";

const Login = () => {
  return (
    <div className="form-container">
      <Link to="/" className="back-icon">
        <LeftCircleOutlined />
        <span>Back</span>
      </Link>
      <div className="form-block">
        <form className="login-form">
          <img src={LOGO_URL} alt="logo" className="login-logo" />
          <div className="input-block">
            <label className="input-label">Name:</label>
            <input
              className="form-input"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="input-block">
            <label className="input-label">Password:</label>
            <input
              className="form-input"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <Button type="primary" className="login-submit-btn">
            Submit
          </Button>
          <p className="form-bottom">
            Dont have an account? <Link to="/">Create your account</Link>
          </p>
        </form>
      </div>
      <div className="banner-block">
        <img src={banner} alt="banner-image" />
      </div>
    </div>
  );
};

export default Login;
