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
        /*searchStaff:(state,action)=>{
            let staffArray:Staff[] = [];
            state.map((staff)=>{
                if(staff.firstName===action.payload){
                    staffArray.push(staff)
                }
            })
            return staffArray;
        },*/
        updateStaff:(state, action )=>{
            const updateStaff = action.payload
            const index = state.findIndex((staff) => staff.email === updateStaff.email);
            if (index !== -1) {
                state[index] = { ...state[index], ...updateStaff };
            }
        },

    }
})

export const {saveStaff,updateStaff}=StaffSlice.actions

export default StaffSlice.reducer