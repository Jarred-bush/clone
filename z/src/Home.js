import React, { useState, useEffect } from "react";
import "./Home.css";
import BattleAxe from "./battleaxes.png";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  return (
    <div className="home-container">
      <img src={BattleAxe} alt="" className="axe-image" />
      <div>
        <h2 className="heading"> Welcome to Battle Axes!</h2>
      </div>
      <div className="split">
        <div className="newc">
          <p className="info1">
            <strong>First Timer?</strong>
          </p>
          <p className="info3">
            Click the 'New Customer'
            <br />
            button to get started.
          </p>
          <Link to="/NewCustomer">
            <button className="new-customer">New Customer</button>
          </Link>
        </div>
        <div className="returnc">
          <h3 className="info2">Returning Customer?</h3>
          <p className="info4">
            Enter your Email or Phone
            <br />
            below to find your acount.
          </p>
          <form>
            <input type="text" className="text-field" />
            <button className="search-btn">Search</button>
          </form>
        </div>
      </div>
      <div className="search-results">
        <div>
          <p className="instructions">
            Please click below to select the person signing this waiver.
          </p>
          <ul className="boxed-list nobullets">
            <li>
              <div>
                <p className="phone"></p>
                <p className="email"></p>
                <p className="phone"></p>
              </div>
              <div className="right">
                <button>Select</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
