import { Divider } from '@mui/material';
import { fontSize } from '@mui/system';
import React from 'react'
import './cart.css'

const Cart = () => {
  return <div className='cart_section'>
        <div className="cart_container">
            <div className="left_cart">
                <img src='' alt='cart_img'/>
                <div className="cart_btn">
                <button className='cart_btn1'>Add to Cart</button>
                <button className='cart_btn2'>Buy Now</button>
                </div>
                
                
            </div>
            <div className="right_cart">
            <h3>Fitness Gear</h3>
            <h4>AJRO DEAL New adustable single resistance tube (multicolor) resistance tube(multicolor)</h4>
            <Divider/>
            <p>M.R.P: <span>RS 499</span></p>
            <p>Deal of the day: <span style={{color: "red"}}>RS 166</span></p>
            <p>You save: <span style={{color: "red"}}>RS 333 (66%)</span></p>
            <div className="discount_box">
                <h5>Discount:<span style={{color: "#111"}}>Upto 70%</span></h5>
                <h4>Free delivery:<span style={{color: "#111"}}>Oct 8-21 </span>Details</h4>
                <p>Fastest delivery: <span style={{color: "#111"}}>Tomorrow 11AM</span></p>
                <p className='description'>About the Item:<span style={{color:"#565959", fontSize:14,fontWeight:500,letterSpacing:"0.4px" }}>khjsbdkjajdakscbbkjaccadcackaddcajc</span></p>            
            </div>
            </div>
        </div>
    </div>
  
};

export default Cart;
