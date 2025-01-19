import {InputText} from "../component/InputText.tsx";
import {useState} from "react";
import {Select} from "../component/Select.tsx";
import {InputRadio} from "../component/InputRadio.tsx";
import {Button} from "../component/Button.tsx";
import {Header} from "../component/Header.tsx";
import {Table} from "../component/Table.tsx";
import {useDispatch, useSelector} from "react-redux";
import {deleteEquipment, saveEquipment, updateEquipment} from "../slices/EquipmentSlice.ts";
import {Equipment as EquipmentModel} from "../models/Equipment.ts";

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
    const [saveBtnText, setSaveBtnText]= useState("");
    const [saveBtnStyle, setSaveBtnStyle]= useState("");

    const equipments:EquipmentModel[] = useSelector(state => state.EquipmentData);
    const dispatch = useDispatch();
    function saveBtnOnAction() {
        if (saveBtnText === "Update"){
            dispatch(updateEquipment(new EquipmentModel(equipmentName, type, status, staffName,fieldName)));
            clearForm();
        }else {
            dispatch(saveEquipment(new EquipmentModel(equipmentName, type, status, staffName,fieldName)));
            clearForm();
        }
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
        setSaveBtnText("Save");
        setSaveBtnStyle("btn-primary btn btn-block");
    }
    const deleteOnAction = ( e:any,index:number) => {
        e.stopPropagation();
        dispatch(deleteEquipment(index))
    };
    const loadSelectedEquipment = ( equipment:EquipmentModel) => {
        setEquipmentName(equipment.equipmentName);
        setType(equipment.type);
        setStatus(equipment.status);
        setStaffName(equipment.staffName);
        setFieldName(equipment.fieldName);
        setSaveBtnText("Update");
        setSaveBtnStyle("btn-warning btn btn-block");
    }

    return (
        <>
            <section id="equipmentTblCard" className="container">
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
                            "Staff name",
                            "Field name",
                        ]}
                        tbody={equipments.map((equipment, index) => (
                            <tr key={index}>
                                <td>{equipment.equipmentName}</td>
                                <td>{equipment.type}</td>
                                <td>{equipment.status}</td>
                                <td>{equipment.staffName}</td>
                                <td>{equipment.fieldName}</td>
                                <td>
                                    <button className=" btn tblBtn btn-danger deleteBtnTbl" onClick={(e) => deleteOnAction(e, index)}>Delete <i
                                        className="far fa-trash-alt"></i></button>
                                    <button className=" btn  tblBtn btn-warning editBtn" onClick={() => loadSelectedEquipment(equipment)}>Edit<i
                                        className="fas fa-pencil-alt"></i></button>
                                </td>
                            </tr>
                        ))}
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
                                        btnOnAction={saveBtnOnAction}
                                        id="btnSave"
                                        style={saveBtnStyle || "btn-primary btn btn-block"}
                                    >
                                        {saveBtnText || "Save"}
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