import React, { useState } from "react";
import "./NewCustomer.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function NewCustomer() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nickName: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      nickName: data.nickName,
    };
    axios
      .post("http://localhost:3001/api/post", userData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => toast.error(err.response.data));
    setTimeout(() => navigate("/WaiverForm"), 500);
    return toast("Successful creation!");
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  return (
    <div className="container">
      <div className="new-customer-reg">
        <Link to="/">
          <button className="center-button-startover">Start Over</button>
        </Link>
        <div className="form-in">
          <form onSubmit={handleSubmit} className="new-customer-form">
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              name="firstName"
              required
              value={data.firstName}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              name="lastName"
              required
              value={data.lastName}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              className="email"
              name="email"
              required
              value={data.email}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="phone">Phone*</label>
            <input
              type="tel"
              className="phone"
              name="phone"
              required
              value={data.phone}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="nickName">Nickname</label>
            <input
              type=" text"
              className="nickname"
              name="nickName"
              value={data.nickName}
              onChange={handleInputChange}
            />
            <div className="input-with-optional">
              <span className="nick-helper">
                (optional) This will be displayed instead of your first name.
              </span>
              <br />
            </div>
            <button type="submit" className="regi">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
