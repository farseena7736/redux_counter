import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store = configureStore({
    //reducer can only update value of store in store 
    //reducer key is preedefine (object which can hold more than one reducer)
    reducer:{
        //reducer coming from counterSlice since we are export reducer as export defult
        counter:counterSlice

    }
})