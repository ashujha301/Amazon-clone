import React from 'react'

const Right = () => {
  return (
    <div className='right_buy'>
        <img src='' alt='' />
        <div className="cost_right">
            <p> Your order is eligible for FREE order</p> <br />
            <span style={{color: "#56595"}}>Select this option at checkout</span>
            <h3>Subtotal (1 Item) :<strong style={{fontWeight: 700}}>Rs4049.00</strong></h3>
            <button className='rightbuy_btn'>Process to Buy</button>
            <div className="emi">
                 Emi Available
            </div>
        </div>
    </div>
  )
}

export default Right;