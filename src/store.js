import {configureStore} from '@reduxjs/toolkit';
import arrayReducer from './arraySlice';

export const store=configureStore({
    reducer:{
          cart:arrayReducer  
    }
})