import {Crop} from "../models/Crop.ts";
import {createSlice} from "@reduxjs/toolkit";


const initialState : Crop[] = []

const CropSlice = createSlice({
    name: "crop",
    initialState: initialState,
    reducers: {
        AddCrop:(state,action)=>{
            state.push(action.payload)
        },
    }
})

export const {AddCrop}=CropSlice.actions

export default CropSlice.reducer