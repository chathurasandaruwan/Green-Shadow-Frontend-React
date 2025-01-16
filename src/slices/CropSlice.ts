import {Crop} from "../models/Crop.ts";
import {createSlice} from "@reduxjs/toolkit";


const initialState : Crop[] = []

const CropSlice = createSlice({
    name: "crop",
    initialState: initialState,
    reducers: {
        saveCrop:(state,action)=>{
            state.push(action.payload)
        },
    }
})

export const {saveCrop}=CropSlice.actions

export default CropSlice.reducer