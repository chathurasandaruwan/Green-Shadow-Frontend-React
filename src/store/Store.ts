/*import {combineReducers, createStore} from "redux";
import {CustomerReducer} from "../reducers/CustomerReducer.tsx";
import {ItemReducer} from "../reducers/ItemReducer.ts";*/
import {configureStore} from "@reduxjs/toolkit";
import CropSlice from "../slices/CropSlice.ts";

export const store = configureStore({
    reducer:{
        cropsData : CropSlice
    }
})