import {createSlice} from "@reduxjs/toolkit";
import {Field} from "../models/Field.ts";


const initialState : Field[] = []

const FieldSlice = createSlice({
    name: "field",
    initialState: initialState,
    reducers: {
        saveField:(state,action)=>{
            state.push(action.payload)
        },
        updateField:(state, action )=>{
            const updateField = action.payload
            const index = state.findIndex((field) => field.fieldName === updateField.fieldName);
            if (index !== -1) {
                state[index] = { ...state[index], ...updateField };
            }
        },
        deleteField:(state, action )=>{
            const index = state.findIndex((field) => field.fieldName === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },

    }
})

export const {saveField,updateField,deleteField}=FieldSlice.actions

export default FieldSlice.reducer