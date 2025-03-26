import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { totalCostOfCart,removeFromCart } from "../../arraySlice";

function CartPart({data}) {
    const [count,setCount]=useState(1);
    

   
     
     const [modalData,setModalData]=useState(null);
            const cartData = useSelector((state) => state.cart.cartValue);
            const totalCost=useSelector((state)=>state.cart.totalCost);
            const dispatch=useDispatch();
            console.log(cartData);
            console.log("Total Cost is:"+totalCost);

            function incrementCart(data)
            {
                setCount(count+1);
                dispatch(totalCostOfCart(data.price));
            }

            function decrementCart(data)
            {
                if(count>1)
                {
                    setCount(count-1);
                    dispatch(totalCostOfCart(data.price*-1));
                }
            }

            function removeFromCartData(data)
            {
                alert("Hello");
                    dispatch(removeFromCart(data));
                    dispatch(totalCostOfCart(data.price*count*-1));
            }
  return (
    <div className="d-flex my-2 justify-content-between align-items-center">
      <div className='d-flex'>
        <div className="myimage d-flex mx-2 justify-content-center align-items-center">
          <img src={data.category.image} className="w-100"></img>
        </div>
        <div className="information mx-2 my-2">
          <span>{data.title}</span>
          <h3>${data.price}</h3>
          <div className="mt-2">
            <span
              className="me-2 my-2 px-2 py-2 bg-danger rounded text-white"
              onClick={() => decrementCart(data)}
            >
              -
            </span>
            <span className="fs-3">{count}</span>
            <span
              className="mx-2 my-2 px-2 py-2 bg-success rounded text-white"
              onClick={() => incrementCart(data)}
            >
              +
            </span>
          </div>
        </div>
      </div>

      <div className="crossdata">
        <i class="fa-solid fa-xmark deleteIcon" onClick={() => removeFromCartData(data)}></i>
      </div>
    </div>
  );
}

export default CartPart
