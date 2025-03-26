import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { totalCostOfCart } from "../arraySlice";
import CartModal from "./SubComponents/CartModal";
import { useLocation } from 'react-router-dom';
import OrderData from './SubComponents/OrderData';

function MyOrders() {
    let mydate=new Date();
    const location=useLocation();
    const cartData = useSelector((state) => state.cart.cartValue);
                  const totalCost=useSelector((state)=>state.cart.totalCost);
                  const checkoutData=useSelector((state)=>state.cart.checkoutData);
                  const checkoutArray = useSelector(
                    (state) => state.cart.checkoutArray
                  );
                  const dispatch=useDispatch();
                  console.log(checkoutData);
                  console.log("Checkout Array is:",checkoutArray);
    const userOrderData=location.state;
   const [data,setData]=useState();


  return (
    <div className="container-fluid mt-5">
      <div className="mt-5 pt-3">
        <p className="text-center h3">My Orders</p>
        {
            checkoutArray.length==0?<p className='text-center my-2'>Product Not present in cart</p>:<OrderData data={checkoutArray}/>
        }
       </div>
    </div>
  );
}

export default MyOrders
