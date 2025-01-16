import {configureStore} from "@reduxjs/toolkit";
import CropSlice from "../slices/CropSlice.ts";

export const store = configureStore({
    reducer:{
        cropsData : CropSlice
    }
})