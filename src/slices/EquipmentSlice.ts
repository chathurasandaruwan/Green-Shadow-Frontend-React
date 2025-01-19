import {createSlice} from "@reduxjs/toolkit";
import {Equipment} from "../models/Equipment.ts";


const initialState : Equipment[] = []

const EquipmentSlice = createSlice({
    name: "equipment",
    initialState: initialState,
    reducers: {
        saveEquipment:(state,action)=>{
            state.push(action.payload)
        },
        updateEquipment:(state, action )=>{
            const updateEquipments = action.payload
            const index = state.findIndex((equipment) => equipment.equipmentName === updateEquipments.equipment);
            if (index !== -1) {
                state[index] = { ...state[index], ...updateEquipments };
            }
        },
        deleteEquipment:(state, action )=>{
            const index = action.payload
            if (index !== -1) {
                state.splice(index, 1);
            }
        },

    }
})

export const {saveEquipment,updateEquipment,deleteEquipment}=EquipmentSlice.actions

export default EquipmentSlice.reducer