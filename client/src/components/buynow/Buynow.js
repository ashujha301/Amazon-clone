import { Divider } from "@mui/material";
import React from "react";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Right";
import "./buynow.css";

const Buynow = () => {
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>select all item</p>
          <span className="leftbuyprice">price</span>
          <Divider />

          <div className="item_container">
            <img
              src="https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70"
              alt=""
            />
            <div className="item_details">
              <h3>Molife Sense 500 Smartwatch (Black,Strap,Freesize) Rs4049</h3>
              <h3>Smart Watch</h3>
              <h3 className="diffrentprice">RS 4049</h3>
              <p className="unusuall">Usually dispatched in 8 days.</p>
              <p>Eligible for FREE shipping</p>
              <img src="" alt="" />
              <Option />
            </div>
            <h3 className="item_price">Rs4049.00</h3>
          </div>
          <Divider />
          <Subtotal />
        </div>
        <Right />
      </div>
    </div>
  );
};

export default Buynow;
