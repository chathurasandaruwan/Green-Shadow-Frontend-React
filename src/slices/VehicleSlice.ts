
import {createSlice} from "@reduxjs/toolkit";
import {Vehicle} from "../models/Vehicle.ts";


const initialState : Vehicle[] = []

const VehicleSlice = createSlice({
    name: "vehicle",
    initialState: initialState,
    reducers: {
        saveVehicle:(state,action)=>{
            state.push(action.payload)
        },
        updateVehicle:(state, action )=>{
            const updateVehicles = action.payload
            const index = state.findIndex((vehicle) => vehicle.licensePlateNum === updateVehicles.licensePlateNum);
            if (index !== -1) {
                state[index] = { ...state[index], ...updateVehicles };
            }
        },
        deleteVehicles:(state, action )=>{
            const index = action.payload
            if (index !== -1) {
                state.splice(index, 1);
            }
        },

    }
})

export const {saveVehicle,updateVehicle,deleteVehicles}=VehicleSlice.actions

export default VehicleSlice.reducer