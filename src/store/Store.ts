import {configureStore} from "@reduxjs/toolkit";
import CropSlice from "../slices/CropSlice.ts";
import StaffSlice from "../slices/StaffSlice.ts";
import VehicleSlice from "../slices/VehicleSlice.ts";
import EquipmentSlice from "../slices/EquipmentSlice.ts";
import FieldSlice from "../slices/FieldSlice.ts";
import LogSlice from "../slices/LogSlice.ts";

export const store = configureStore({
    reducer:{
        cropsData : CropSlice,
        staffData : StaffSlice,
        vehicleData : VehicleSlice,
        EquipmentData : EquipmentSlice,
        FieldData : FieldSlice,
        logData : LogSlice
    }
})