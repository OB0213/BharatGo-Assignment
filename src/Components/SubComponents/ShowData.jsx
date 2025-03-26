import React,{useState} from "react";
import ModalComponent from "./ModalComponent";
import { useSelector, useDispatch } from "react-redux";
import { addToCart,totalCostOfCart,setCheckoutData } from "../../arraySlice";
import Modal from "./Modal";
import CartModal from "./CartModal";

function ShowData({ data }) {
    const [modalData,setModalData]=useState(null);
    const cartData = useSelector((state) => state.cart.cartValue);
    const totalCost=useSelector((state)=>state.cart.totalCost);
    const checkoutData=useSelector((state)=>state.cart.checkoutData);
    const dispatch=useDispatch();
    console.log(cartData);

    const checkInCart=(values)=>{
      const mydata=cartData.filter((element,index)=>element.id===values.id);
      if(mydata.length>0)
      {
        return true;
      }
      return false;
    }

    const addElementToTheCart=(values)=>{
const mydata=cartData.filter((element,index)=>element.id===values.id);
      if(mydata.length>0)
      {
        alert("This Element is already inserted in cart");
      }
      else
      {
          dispatch(addToCart(values));
          dispatch(totalCostOfCart(values.price*1));
          dispatch(setCheckoutData(false));
      }
     
    }

  return (
    <div className="col-9 row h-100 d-flex justify-content-center align-items-center">
      {data.map((elements, index) => (
        <div
          className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex flex-col justify-content-center my-2 partData"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => setModalData(elements)}
        >
          <div className="px-2 py-2">
            <div className="w-100 h-75 position-relative rounded">
              <img
                src={elements.category.image}
                className="w-100 h-100 rounded"
              ></img>
              <span
                className={`position-absolute top-0 end-0 mx-2 my-2 bg-white px-1 py-1 rounded-circle ${
                  checkInCart(elements) === true ? "addedCart" : ""
                }`}
                onClick={() => addElementToTheCart(elements)}
              >
                {checkInCart(elements) == true ? (
                  <i class="fa-solid fa-check"></i>
                ) : (
                  <i
                    class="fa-solid fa-plus myicon"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  ></i>
                )}
              </span>
              <span className="position-absolute bottom-0 start-0 categoryData mx-1 my-1 px-1 rounded-3">
                <span className="py-1 px-1">{elements.category.name}</span>
              </span>
            </div>

            <div className="d-flex justify-content-between w-100 mt-2">
              <span className="py-1 px-1">{elements.title}</span>
              <span className="pb-1 mt-2 fw-bold fs-5">${elements.price}</span>
            </div>
          </div>
        </div>
      ))}

      <Modal modalData={modalData} />
      <CartModal></CartModal>
    </div>
  );
}

export default ShowData;
