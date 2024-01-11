import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentSlice";

const appStore = configureStore({
    reducer:{
        student:studentReducer
    }
})
export default appStore;