import {createSlice} from "@reduxjs/toolkit";
import {Log} from "../models/Log.ts";


const initialState : Log[] = []

const LogSlice = createSlice({
    name: "log",
    initialState: initialState,
    reducers: {
        saveLog:(state,action)=>{
            state.push(action.payload)
        },

    }
})

export const {saveLog}=LogSlice.actions

export default LogSlice.reducer