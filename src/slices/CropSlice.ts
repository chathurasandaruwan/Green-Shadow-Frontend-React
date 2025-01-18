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
        updateCrop:(state, action )=>{
            const updateCrops = action.payload
            const index = state.findIndex((crop) => crop.commonName === updateCrops.commonName);
            if (index !== -1) {
                state[index] = { ...state[index], ...updateCrops };
            }
        },
        deleteCrop:(state, action )=>{
            const index = action.payload
            if (index !== -1) {
                state.splice(index, 1);
            }
        },

    }
})

export const {saveCrop,updateCrop,deleteCrop}=CropSlice.actions

export default CropSlice.reducer