import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../redux/stateSlices/CartSlice";
import searchInputReducer from "../redux/stateSlices/SearchInputSlice";

export default configureStore({
    reducer:{
        cart:cartReducer,
       
        searchInput:searchInputReducer,
    }
})