import {configureStore} from "@reduxjs/toolkit";
import CropSlice from "../slices/CropSlice.ts";
import StaffSlice from "../slices/StaffSlice.ts";

export const store = configureStore({
    reducer:{
        cropsData : CropSlice,
        staffData : StaffSlice
    }
})