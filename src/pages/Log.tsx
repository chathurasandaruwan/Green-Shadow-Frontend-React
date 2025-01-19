import {Header} from "../component/Header.tsx";
import {InputText} from "../component/InputText.tsx";
import {useRef, useState} from "react";
import {InputImage} from "../component/InputImage.tsx";
import {LButton} from "../component/LButton.tsx";
import {OneColTable} from "../component/OneColTable.tsx";
import {Button} from "../component/Button.tsx";
import {ModalHeader} from "../component/ModalHeader.tsx";
import {Select} from "../component/Select.tsx";

export function Log() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [logId, setLogId] = useState("");
    const [Date, setDate] = useState("");
    const [details, setDetails] = useState("");
    const [previewSrc, setPreviewSrc]= useState("");
    const [lastName, setLastName]= useState("");
    const [email, setEmail]= useState("");
    const [contactNo, setContactNo]= useState("");
    const [dateOfBirth, setDateOfBirth]= useState("");
    const [dateOfJoining, setDateOfJoining]= useState("");
    const [address, setAddress]= useState("");
    const [gender, setGender]= useState("");
    const [designation, setDesignation]= useState("");
    const [role, setRole]= useState("");
    const [staffName, setStaffName]= useState("");
    const [fieldName, setFieldName]= useState("");
    const [extentSize, setExtentSize]= useState("");
    const [previewSrcField, setPreviewSrcField]= useState("");
    const [staffModelIsVisible, setStaffModelIsVisible]= useState(false);
    const [fieldModelIsVisible, setFieldModelIsVisible]= useState(false);
    const [selectedStaff, setSelectedStaff]= useState<string[]>([]);
    const [selectedCrop, setSelectedCrop]= useState<string[]>([]);
    const [selectedField, setSelectedField]= useState<string[]>([]);


    const clearForm = () => {
        setLogId("001");
        setDate("");
        setDetails("");
        setPreviewSrc("");
        setSelectedStaff([]);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    function AddLog() {

    }
    function setSelectedStaffList() {
        setSelectedStaff([...selectedStaff,staffName]);
        setStaffName("")
    }
    function setSelectedFieldList() {
        setSelectedField([...selectedField,fieldName]);
        setFieldName("")
    }

    return (
        <>
            <section id="saveLog">
                <div className="container">
                    <Header>Log</Header>
                    <div className="form-wrap">
                        <form id="survey-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <InputText
                                        type="text"
                                        id="logIdTxt"
                                        item={logId || "001"}
                                        disable={true}
                                    >
                                        Log Id
                                    </InputText>
                                </div>
                                <div className="col-md-6">
                                    <InputText
                                        type="text"
                                        id="logDateLbl"
                                        item={Date}
                                        disable={true}
                                    >
                                        Date
                                    </InputText>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label id="Sc-name-label" htmlFor="logDetailTxt">Log details</label>
                                        <textarea name="details" id="logDetailTxt" value={details}
                                                  placeholder="Enter log details" className="form-control"
                                                  required onChange={(e) => setDetails(e.target.value)}></textarea>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <InputImage
                                        previewSrc={previewSrc}
                                        id="logImgSelector"
                                        fileInputRef={fileInputRef}
                                        setPreviewSrc={setPreviewSrc}
                                    >
                                        Log Image
                                    </InputImage>
                                </div>

                            </div>
                            <div className="row mb-4">
                                <LButton
                                    id="selectStaffBtn"
                                    icon="fa fa-users"
                                    btnAction={() => setStaffModelIsVisible(true)}
                                >
                                    Select Staffs
                                </LButton>
                                <LButton
                                    id="selectFieldBtn"
                                    icon="far fa-clone"
                                    btnAction={() => setFieldModelIsVisible(true)}
                                >
                                    Select Field
                                </LButton>
                                <LButton
                                    id="selectCropBtn"
                                    icon="fa fa-crop"
                                    btnAction={() => {
                                        alert("select Crop model")
                                    }}
                                >
                                    Select Crops
                                </LButton>
                            </div>
                            <div className="row mb-4">
                                <OneColTable
                                    id="staffListTbl"
                                    tbody={selectedStaff.map((staff, index) => <tr key={index}>{staff}</tr>)}
                                >Staffs
                                </OneColTable>
                                <OneColTable
                                    id="fieldListTbl"
                                    tbody={selectedField.map((field, index) => <tr key={index}>{field}</tr>)}
                                >Fields
                                </OneColTable>
                                <OneColTable
                                    id="cropListTbl"
                                >Crops
                                </OneColTable>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <Button
                                        btnOnAction={() => AddLog()}
                                        id="btnSave"
                                        style="btn-primary btn btn-block"
                                    >
                                        save
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
            <div className={`modal fade ${staffModelIsVisible ? 'show d-block' : 'hidden'}`} id="staffModal"
                 tabIndex={-1} role="dialog" aria-labelledby="staffModelLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content ">
                        <ModalHeader
                            id="staffModelLabel"
                            closeBtnOnAction={() => setStaffModelIsVisible(false)}
                        >Select Staff</ModalHeader>
                        <div className="modal-body">
                            <div className="container">
                                <div className="form-wrap">
                                    <form id="staff-select-form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Select
                                                    id="dropdownStaffName"
                                                    value={staffName}
                                                    setItems={setStaffName}
                                                    options={[
                                                        {value: "Kamal", name: "Kamal"},
                                                        {value: "Nimal", name: "Nimal"},
                                                        {value: "Namal", name: "Namal"},
                                                        {value: "Bimal", name: "Bimal"},
                                                    ]}
                                                >
                                                    Staff Name
                                                </Select>
                                            </div>
                                            <div className="col-md-6">
                                                <InputText
                                                    type="text"
                                                    id="lastNameDum"
                                                    item={lastName}
                                                    disable={true}
                                                >
                                                    LastName
                                                </InputText>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <InputText
                                                    type="text"
                                                    id="emailDum"
                                                    item={email}
                                                    disable={true}
                                                >
                                                    Email
                                                </InputText>
                                            </div>
                                            <div className="col-md-6">
                                                <InputText
                                                    type="text"
                                                    id="contactNoDum"
                                                    item={contactNo}
                                                    disable={true}
                                                >
                                                    Contact No
                                                </InputText>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <InputText
                                                    type="text"
                                                    id="dateOfBirthDum"
                                                    item={dateOfBirth}
                                                    disable={true}
                                                >
                                                    Date Of Birth
                                                </InputText>
                                            </div>
                                            <div className="col-md-6">
                                                <InputText
                                                    type="text"
                                                    id="dateOfJoiningDum"
                                                    item={dateOfJoining}
                                                    disable={true}
                                                >
                                                    Date Of Joining
                                                </InputText>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <InputText
                                                    type="text"
                                                    id="ADDDum"
                                                    item={address}
                                                    disable={true}
                                                >
                                                    Address
                                                </InputText>
                                            </div>
                                            <div className="col-md-6">
                                                <InputText
                                                    type="text"
                                                    id="genderDum"
                                                    item={gender}
                                                    disable={true}
                                                >
                                                    Gender
                                                </InputText>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <InputText
                                                    type="text"
                                                    id="designationDum"
                                                    item={designation}
                                                    disable={true}
                                                >
                                                    Designation
                                                </InputText>
                                            </div>
                                            <div className="col-md-6">
                                                <InputText
                                                    type="text"
                                                    id="roleInputDum"
                                                    item={role}
                                                    disable={true}
                                                >
                                                    Role
                                                </InputText>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <Button
                                btnOnAction={setSelectedStaffList}
                                id="btnStaffAdd"
                                style="btn-primary btn btn-block"
                            >
                                Add
                            </Button>
                            <Button
                                btnOnAction={() => setStaffModelIsVisible(false)}
                                id="btnStaffClose"
                                style={"btn btn-danger"}
                            >
                                Close
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`modal fade ${fieldModelIsVisible ? 'show d-block' : 'hidden'}`} id="fieldModal" tabIndex={-1} role="dialog" aria-labelledby="fieldModelLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <ModalHeader
                            id="fieldModelLabel"
                            closeBtnOnAction={() => setFieldModelIsVisible(false)}
                        >Select Field
                        </ModalHeader>
                        <div className="modal-body">
                            <div className="container">
                                <div className="form-wrap">
                                    <form id="field-select-form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Select
                                                    id="dropdownFieldName"
                                                    value={fieldName}
                                                    setItems={setFieldName}
                                                    options={[
                                                        {value: "field1", name: "field1"},
                                                        {value: "field2", name: "field2"},
                                                        {value: "field3", name: "field3"},
                                                        {value: "field4", name: "field4"},
                                                        {value: "field5", name: "field5"},
                                                    ]}
                                                >
                                                    Field Name
                                                </Select>
                                            </div>
                                            <div className="col-md-6">
                                                <InputText
                                                    type="text"
                                                    id="extentSizeDum"
                                                    item={extentSize}
                                                    disable={true}
                                                >
                                                    Extent Size
                                                </InputText>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="fieldImg">Field image</label>
                                                <div id="fieldImg" className="form-control-file">
                                                    {previewSrcField &&
                                                        <img id="previewImage" src={previewSrcField} alt="Preview"/>}
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <Button
                                btnOnAction={setSelectedFieldList}
                                id="btnFieldAdd"
                                style="btn-primary btn btn-block"
                            >
                                Add
                            </Button>
                            <Button
                                btnOnAction={() => setFieldModelIsVisible(false)}
                                id="btnFieldClose"
                                style={"btn btn-danger"}
                            >
                                Close
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}