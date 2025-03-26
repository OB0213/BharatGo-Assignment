import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartValue:[],
  totalCost:0,
  checkoutData:false,
  checkoutArray:[],
  emailId:''
};

export const arraySlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state,action) => {
     state.cartValue.push(action.payload);
    },
    totalCostOfCart:(state,action)=>{
        state.totalCost=state.totalCost+action.payload;
    },
    removeFromCart:(state,action)=>{
        state.cartValue=state.cartValue.filter((value,index)=>value.id!==action.payload.id);
    },
    setCheckoutData:(state,action)=>{
        state.checkoutData=action.payload;
    },
    emptyCart:(state,action)=>{
        state.cartValue=[];
    },
    setCheckoutArray:(state,action)=>{
        state.checkoutArray.push(action.payload);
        state.totalCost=0;
    },
    setEmailId:(state,action)=>{
        console.log(action.payload);
        state.emailId=action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,totalCostOfCart,removeFromCart,emptyCart,setCheckoutData,setCheckoutArray,setEmailId } = arraySlice.actions;

export default arraySlice.reducer;
