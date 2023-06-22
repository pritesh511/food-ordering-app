import React from "react";
import "./register.css";
import banner from "../../assets/images/banner.jpg";
import { Link } from "react-router-dom";
import { LeftCircleOutlined } from "@ant-design/icons";
import { LOGO_URL } from "../../utils/constant";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const registerSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name contain much more than 2 character")
      .required("Please enter name"),
    email: Yup.string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Please enter valid email"
      )
      .required("Please enter email"),
    password: Yup.string()
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        "Password contain minimum eight characters, at least one letter and one number"
      )
      .required("Please enter password"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please enter confirm password"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerSchema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm({ values: "" });
      },
    });

  return (
    <div className="form-container">
      <Link to="/" className="back-icon">
        <LeftCircleOutlined />
        <span>Back</span>
      </Link>
      <div className="form-block">
        <form className="login-form" onSubmit={handleSubmit}>
          <img src={LOGO_URL} alt="logo" className="login-logo" />
          <div className="input-block">
            <label className="input-label">Name :</label>
            <input
              className="form-input"
              placeholder="Enter your name"
              type="text"
              name="name"
              value={values?.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors?.name && touched?.name && (
              <span className="form-error">{errors?.name}</span>
            )}
          </div>
          <div className="input-block">
            <label className="input-label">Email :</label>
            <input
              className="form-input"
              placeholder="Enter your email"
              type="text"
              name="email"
              value={values?.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors?.email && touched?.email && (
              <span className="form-error">{errors?.email}</span>
            )}
          </div>
          <div className="input-block">
            <label className="input-label">Password :</label>
            <input
              className="form-input"
              placeholder="Enter your password"
              type="text"
              name="password"
              value={values?.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors?.password && touched?.password && (
              <span className="form-error">{errors?.password}</span>
            )}
          </div>
          <div className="input-block">
            <label className="input-label">Confirm Password :</label>
            <input
              className="form-input"
              placeholder="Enter your confirm password"
              type="text"
              name="confirm_password"
              value={values?.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors?.confirm_password && touched?.confirm_password && (
              <span className="form-error">{errors?.confirm_password}</span>
            )}
          </div>
          <button type="submit" className="login-submit-btn">
            Submit
          </button>
          <p className="form-bottom">
            Already have account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
      <div className="banner-block">
        <img src={banner} alt="banner-image" />
      </div>
    </div>
  );
};

export default Register;
