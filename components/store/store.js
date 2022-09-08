import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer:{
        cards:cardSlice,
        users:userSlice,
    }
})
export default store;