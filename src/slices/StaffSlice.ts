import {createSlice} from "@reduxjs/toolkit";
import {Staff} from "../models/Staff.ts";


const initialState : Staff[] = []

const StaffSlice = createSlice({
    name: "staff",
    initialState: initialState,
    reducers: {
        saveStaff:(state,action)=>{
            state.push(action.payload)
        },

    }
})

export const {saveStaff}=StaffSlice.actions

export default StaffSlice.reducer