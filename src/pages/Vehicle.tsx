import {InputText} from "../component/InputText.tsx";
import {useState} from "react";
import {Header} from "../component/Header.tsx";
import {Button} from "../component/Button.tsx";
import {Select} from "../component/Select.tsx";
import {InputRadio} from "../component/InputRadio.tsx";
import {Table} from "../component/Table.tsx";
import {useDispatch, useSelector} from "react-redux";
import {Vehicle as VehicleModel} from "../models/Vehicle.ts";
import {deleteVehicles, saveVehicle} from "../slices/VehicleSlice.ts";
import {deleteCrop} from "../slices/CropSlice.ts";

export function Vehicle() {
    const [licensePlateNum, setLicensePlateNum] = useState("");
    const [remarks, setRemarksTxt] = useState("");
    const [category, setCategory] = useState("");
    const [fuelTypedName, setFuelTypedName] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [staffName, setStaffName] = useState("");
    const [staffLastName, setStaffLastName] = useState("");
    const [staffContactNo, setStaffContactNo] = useState("");
    const [staffDesignation, setStaffDesignation] = useState("");
    const [saveBtnText, setSaveBtnText]= useState("");
    const [saveBtnStyle, setSaveBtnStyle]= useState("");

    const vehicles:VehicleModel[] = useSelector(state => state.vehicleData);
    const dispatch = useDispatch();

    function AddVehicle() {
        dispatch(saveVehicle(new VehicleModel(licensePlateNum, remarks, category, fuelTypedName, selectedStatus, staffName)));
        clearForm();
    }
    const clearForm = () => {
        setSaveBtnText("Save");
        setSaveBtnStyle("btn-primary btn btn-block");
        setLicensePlateNum("");
        setRemarksTxt("");
        setCategory("");
        setFuelTypedName("");
        setSelectedStatus("");
        setStaffName("");
        setStaffLastName("");
        setStaffContactNo("");
        setStaffDesignation("");
    }
    const deleteOnAction = ( e:any,index:number) => {
        e.stopPropagation();
        dispatch(deleteVehicles(index))
    };
    const loadSelectedVehicle = ( vehicle:VehicleModel) => {
        setLicensePlateNum(vehicle.licensePlateNum);
        setRemarksTxt(vehicle.remarks);
        setCategory(vehicle.category);
        setFuelTypedName(vehicle.fuelTypedName);
        setSelectedStatus(vehicle.status);
        setStaffName(vehicle.staffName);
        setSaveBtnText("Update");
        setSaveBtnStyle("btn-warning btn btn-block");
    }
    return (
        <>
            <section id="saveVehicle">
                <div className="container">
                    <Header>Vehicle</Header>
                    <div className="form-wrap">
                        <form id="survey-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <InputText
                                        id="licensePlateNumTxt"
                                        placeholder="Enter license plate number"
                                        item={licensePlateNum}
                                        setItems={setLicensePlateNum}
                                        type="text"
                                    >
                                        License Plate Number
                                    </InputText>
                                </div>
                                <div className="col-md-6">
                                    <InputText
                                        id="remarksTxt"
                                        placeholder="Enter Remarks"
                                        item={remarks}
                                        setItems={setRemarksTxt}
                                        type="text"
                                    >
                                        Remarks
                                    </InputText>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Select
                                        id="dropdownCategory"
                                        value={category}
                                        setItems={setCategory}
                                        options={[
                                            {value: "Car", name: "Car"},
                                            {value: "Van", name: "Van"},
                                            {value: "Motorbikes", name: "Motorbikes"},
                                            {value: "Tractors–Land-masters", name: "Tractors–Land-masters"},
                                            {value: "Tractors-4WD", name: "Tractors-4WD"},
                                            {value: "Tankers-truck", name: "Tankers-truck"},
                                            {value: "Land-vehicles", name: "Land-vehicles"},
                                            {value: "Lorry", name: "Lorry"},
                                        ]}
                                    >
                                        Category
                                    </Select>
                                </div>
                                <div className="col-md-6">
                                    <Select
                                        id="fuelTypedName"
                                        value={fuelTypedName}
                                        setItems={setFuelTypedName}
                                        options={[
                                            {value: "Petrol", name: "Petrol"},
                                            {value: "Diesel", name: "Diesel"},
                                            {value: "Electric", name: "Electric"},
                                            {value: "Hybrid", name: "Hybrid"},
                                        ]}
                                    >
                                        Fuel type
                                    </Select>

                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>What is the vehicle status ?</label>
                                        <InputRadio
                                            setSelectedSeason={setSelectedStatus}
                                            id="customRadioInline1"
                                            name="customRadioInline1"
                                            value="Available"
                                            selectedSeason={selectedStatus}
                                        >
                                            Available
                                        </InputRadio>
                                        <InputRadio
                                            setSelectedSeason={setSelectedStatus}
                                            id="customRadioInline1"
                                            name="customRadioInline1"
                                            value="NotAvailable"
                                            selectedSeason={selectedStatus}
                                        >
                                            NotAvailable
                                        </InputRadio>
                                    </div>
                                </div>
                            </div>
                            <div id="staffSelectCard" className="row">
                                <h4 className="text-center text-black-50"><b>Select Staff here..</b></h4>
                                <div className="col-md-6">
                                    <Select
                                        id="dropdownStaffName"
                                        value={staffName}
                                        setItems={setStaffName}
                                        options={[
                                            {value: "Staff 1", name: "Staff 1"},
                                            {value: "Staff 2", name: "Staff 2"},
                                            {value: "Staff 3", name: "Staff 3"},
                                            {value: "Staff 4", name: "Staff 4"},
                                            {value: "Staff 5", name: "Staff 5"},
                                        ]}
                                    >
                                        Staff Name
                                    </Select>
                                </div>
                                <div className="col-md-6">
                                    <InputText
                                        id="lastName"
                                        placeholder="Last Name"
                                        item={staffLastName}
                                        disable={true}
                                    >
                                        Last Name
                                    </InputText>
                                </div>
                                <div className="col-md-6">
                                    <InputText
                                        id="contactNo"
                                        placeholder="Contact No"
                                        item={staffContactNo}
                                        disable={true}
                                    >
                                        Contact No
                                    </InputText>
                                </div>
                                <div className="col-md-6">
                                    <InputText
                                        id="designation"
                                        placeholder="Designation"
                                        item={staffDesignation}
                                        disable={true}
                                    >
                                        Designation
                                    </InputText>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <Button
                                        id="btnSave"
                                        style={saveBtnStyle || "btn-primary btn btn-block"}
                                        btnOnAction={AddVehicle}
                                    >{saveBtnText || "Save"}</Button>
                                    <Button
                                        id="btnClear"
                                        style="btn btn-secondary btn-block"
                                        btnOnAction={clearForm}
                                    >Clear</Button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
            <section id="vehicleTblCard">
                <div className="container">
                    <Table
                        firstDivClass='row'
                        secondDivClass='col-12'
                        id='vehicleTbl'
                        tableClass="table"
                        headers = {[
                            "License Plate Number",
                            "Remarks",
                            "Category",
                            "Fuel type",
                            "status",
                            "Staff name",
                        ]}
                        tbody={vehicles.map((vehicle, index) => (
                            <tr key={index}>
                                <td>{vehicle.licensePlateNum}</td>
                                <td>{vehicle.remarks}</td>
                                <td>{vehicle.category}</td>
                                <td>{vehicle.fuelTypedName}</td>
                                <td>{vehicle.status}</td>
                                <td>{vehicle.staffName}</td>
                                <td>
                                    <button className=" btn tblBtn btn-danger deleteBtnTbl" onClick={(e) => deleteOnAction(e, index)}>Delete <i
                                        className="far fa-trash-alt"></i></button>
                                    <button className=" btn  tblBtn btn-warning editBtn" onClick={() => loadSelectedVehicle(vehicle)}>Edit<i
                                        className="fas fa-pencil-alt"></i></button>
                                </td>
                            </tr>
                        ))}
                    />
                </div>
            </section>
        </>
    );
}