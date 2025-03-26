import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { totalCostOfCart, removeFromCart } from "../../arraySlice";

function OrderData({data}) {
     const cartData = useSelector((state) => state.cart.cartValue);
                const totalCost=useSelector((state)=>state.cart.totalCost);
                const dispatch=useDispatch();
  return (
    <div className="d-flex flex-column align-items-center">
      {data.map((elements, index) => (
        <div className="d-flex justify-content-between align-items-center w-100 border border-black mx-2 my-2 px-2 py-2 w-75">
          <div>
            <span className='fw-bold'>Date:</span>
            {new Date().getDate() +
              "." +
              new Date().getMonth() +
              "." +
              new Date().getFullYear()}
          </div>
          <div className="justify-content-center align-items-center">
            <p>
              <span className='fw-bold'>Element Added:</span>
              {elements.cartData.length}
            </p>
            <p><span className='fw-bold'>Cost:</span> ${elements.totalCost}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderData
