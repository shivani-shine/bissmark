import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import allReducers from "./mainReducer";

const store = configureStore({
    reducer: allReducers,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
    devTools: process.env.NODE_ENV !== 'production', 
})

export default store;
