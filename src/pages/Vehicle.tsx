import {InputText} from "../component/InputText.tsx";
import {useState} from "react";
import {Header} from "../component/Header.tsx";
import {Button} from "../component/Button.tsx";

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

    function AddVehicle() {
        console.log(licensePlateNum, remarks, category, fuelTypedName, selectedStatus, staffName, staffLastName, staffContactNo, staffDesignation);
    }
    const clearForm = () => {
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
                                    <div className="form-group">
                                        <label htmlFor="dropdownCategory">Category</label>
                                        <select id="dropdownCategory" name="category" className="form-control" required>
                                            <option value="" disabled selected hidden>Select Category</option>
                                            <option value="Car">Car</option>
                                            <option value="Van">Van</option>
                                            <option value="Motorbikes">Motorbikes</option>
                                            <option value="Tractors–Land-masters">Tractors–Land-masters</option>
                                            <option value="Tractors-4WD">Tractors-4WD</option>
                                            <option value="Tankers-truck">Tankers-truck</option>
                                            <option value="Land-vehicles">Land-vehicles</option>
                                            <option value="Lorry">Lorry</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="fuelTypedName">Fuel type</label>
                                        <select id="fuelTypedName" name="fieldName" className="form-control" required>
                                            <option value="" disabled selected hidden>Select Fuel type</option>
                                            <option value="Petrol">Petrol</option>
                                            <option value="Diesel">Diesel</option>
                                            <option value="Electric">Electric</option>
                                            <option value="Hybrid">Hybrid</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>What is the vehicle status ?</label>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadioInline1" name="customRadioInline1"
                                                   value="Available" className="custom-control-input"/>
                                            <label className="custom-control-label"
                                                   htmlFor="customRadioInline1">Available</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadioInline2" name="customRadioInline1"
                                                   value="NotAvailable" className="custom-control-input"/>
                                            <label className="custom-control-label"
                                                   htmlFor="customRadioInline2">NotAvailable</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="staffSelectCard" className="row">
                                <h4 className="text-center text-black-50"><b>Select Staff here..</b></h4>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="dropdownStaffName">Staff Name</label>
                                        <select id="dropdownStaffName" name="staffName" className="form-control"
                                                required>
                                        </select>
                                    </div>
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
                                        style="btn btn-primary btn-block"
                                        btnOnAction={AddVehicle}
                                    >Save</Button>
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
        </>
    );
}