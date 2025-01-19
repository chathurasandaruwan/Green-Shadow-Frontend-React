import {InputText} from "../component/InputText.tsx";
import {useState} from "react";
import {Select} from "../component/Select.tsx";
import {InputRadio} from "../component/InputRadio.tsx";
import {Button} from "../component/Button.tsx";
import {Header} from "../component/Header.tsx";
import {Table} from "../component/Table.tsx";

export function Equipment() {
    const [equipmentName, setEquipmentName] = useState("");
    const [type, setType] = useState("");
    const [status, setStatus] = useState("");
    const [staffName, setStaffName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [fieldName, setFieldName] = useState("");
    const [extentSize, setExtentSize] = useState("");
    const [designation, setDesignation] = useState("");
    const [preview, setPreview] = useState("");

    function AddEquipment() {
        console.log(equipmentName, type, status, staffName, lastName, contactNo, fieldName, extentSize, designation);
    }
    function clearForm() {
        setEquipmentName("");
        setType("");
        setStatus("");
        setStaffName("");
        setLastName("");
        setContactNo("");
        setFieldName("");
        setExtentSize("");
        setDesignation("");
        setPreview("");
    }

    return (
        <>
            <section id="equipmentTblCard" className="container">
                {/*<header className="header animatedBg rounded-4 shadow-lg">
                    <h1 id="title" className="text-center">Equipment Manage</h1>
                    <p id="description" className="text-center">
                        Please use this form to fill out your Equipment details.
                    </p>
                </header>*/}
                <Header>Equipment</Header>
                <div className=" equipmentTbl">
                    <Table
                        firstDivClass='row'
                        secondDivClass='col-12'
                        id='equipmentTbl'
                        tableClass="table"
                        headers = {[
                            "Name",
                            "Type",
                            "Status",
                            "Field name",
                            "Staff name",
                        ]}
                    />
                </div>
            </section>
            <section id="saveEquipment">
                <div className="container">
                    <div className="form-wrap">
                        <form id="survey-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <InputText
                                        type="text"
                                        id="nameTxt"
                                        placeholder="Enter Equipment Name"
                                        item={equipmentName}
                                        setItems={setEquipmentName}
                                    >
                                        Equipment Name
                                    </InputText>
                                </div>
                                <div className="col-md-6">
                                    <Select
                                        id="dropdownType"
                                        value={type}
                                        setItems={setType}
                                        options={[
                                            {value: "Mechanical", name: "Mechanical"},
                                            {value: "Electrical", name: "Electrical"},
                                        ]}
                                    >
                                        Type
                                    </Select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>What is the equipment status ?</label>
                                        <InputRadio
                                            setSelectedSeason={setStatus}
                                            id="customRadioInline1"
                                            name="customRadioInline1"
                                            value="Available"
                                            selectedSeason={status}
                                        >
                                            Available
                                        </InputRadio>
                                        <InputRadio
                                            setSelectedSeason={setStatus}
                                            id="customRadioInline1"
                                            name="customRadioInline1"
                                            value="NotAvailable"
                                            selectedSeason={status}
                                        >
                                            NotAvailable
                                        </InputRadio>
                                    </div>
                                </div>
                            </div>
                            {/*select staff card*/}
                            <div id="staffSelectCard" className="row">
                                <h4 className="text-center text-black-50"><b>Select Staff here..</b></h4>
                                <div className="col-md-6">
                                    <Select
                                        id="dropdownStaffName"
                                        value={staffName}
                                        setItems={setStaffName}
                                        options={[
                                            {value: "kamal", name: "kamal"},
                                            {value: "ranil", name: "ranil"},
                                            {value: "nimal", name: "nimal"},
                                            {value: "sahan", name: "sahan"},
                                        ]}
                                    >
                                        Staff Name
                                    </Select>
                                </div>
                                <div className="col-md-6">
                                    <InputText
                                        type="text"
                                        id="lastName"
                                        placeholder="Last Name"
                                        item={lastName}
                                        disable={true}
                                    >
                                        Last Name
                                    </InputText>
                                </div>
                                <div className="col-md-6">
                                    <InputText
                                        type="text"
                                        id="contactNo"
                                        placeholder="Contact No"
                                        item={contactNo}
                                        disable={true}
                                    >
                                        Contact No
                                    </InputText>
                                </div>
                                <div className="col-md-6">
                                    <InputText
                                        type="text"
                                        id="designation"
                                        placeholder="Designation"
                                        item={designation}
                                        disable={true}
                                    >
                                        Designation
                                    </InputText>
                                </div>
                            </div>
                            {/*select field card*/}
                            <div id="fieldSelectCard" className="row">
                                <h4 className="text-center text-black-50"><b>Select Field here..</b></h4>
                                <div className="col-md-6">
                                    <Select
                                        id="dropdownFieldName"
                                        value={fieldName}
                                        setItems={setFieldName}
                                        options={[
                                            {value: "Field1", name: "Field1"},
                                            {value: "Field2", name: "Field2"},
                                            {value: "Field3", name: "Field3"},
                                            {value: "Field4", name: "Field4"},
                                        ]}
                                    >
                                        Field Name
                                    </Select>
                                </div>
                                <div className="col-md-6">
                                    <InputText
                                        type="text"
                                        id="extentSize"
                                        placeholder="Extent Size"
                                        item={extentSize}
                                        disable={true}
                                    >
                                        Extent Size
                                    </InputText>

                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="fieldImg">field Image</label>
                                        {preview && <img id="previewImage" src={preview} alt="Preview"/>}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <Button
                                        btnOnAction={AddEquipment}
                                        id="btnSave"
                                        style={"btn-primary btn btn-block"}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        btnOnAction={clearForm}
                                        id="btnClear"
                                        style={"btn btn-secondary btn-block"}
                                    >
                                        Clear
                                    </Button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}