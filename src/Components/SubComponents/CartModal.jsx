import React,{useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import CartPart from './CartPart';
import { totalCostOfCart,emptyCart, setCheckoutData,setCheckoutArray} from '../../arraySlice';
import { useNavigate } from 'react-router-dom';

function CartModal() {
     const [modalData,setModalData]=useState(null);
        const cartData = useSelector((state) => state.cart.cartValue);
        const totalCost=useSelector((state)=>state.cart.totalCost);
        const checkoutData=useSelector((state)=>state.cart.checkoutData);
        const checkoutArray=useSelector((state)=>state.cart.checkoutArray);
        const dispatch=useDispatch();
        console.log(cartData);
        const navigate=useNavigate();

        function goToNavigation()
        {
            navigate("/myorders", { state: { count: cartData.length, totalCost:totalCost } });
            dispatch(setCheckoutData(true));
            dispatch(setCheckoutArray({cartData:cartData,totalCost:totalCost}));
            dispatch(emptyCart());
        }

    
  return (
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Cart
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
{

   checkoutData==false? cartData.map((elements)=>(
        <CartPart data={elements} />
    )):''
}

          </div>
          <div class="modal-footer">
            <div className='d-flex justify-content-between align-items-center w-100'>
                <p className='fw-bold h3'>Total</p>
                <p className='fw-bold h3'>${checkoutData==false?totalCost:0}</p>
            </div>
            <button
              type="button"
              class="btn btn-secondary w-100"
              data-bs-dismiss="modal"
              onClick={goToNavigation}
            >
              Checkout
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal
