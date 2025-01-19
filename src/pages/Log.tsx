import {Header} from "../component/Header.tsx";
import {InputText} from "../component/InputText.tsx";
import {useRef, useState} from "react";
import {InputImage} from "../component/InputImage.tsx";
import {LButton} from "../component/LButton.tsx";
import {OneColTable} from "../component/OneColTable.tsx";
import {Button} from "../component/Button.tsx";
import {ModalHeader} from "../component/ModalHeader.tsx";

export function Log() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [logId, setLogId] = useState("");
    const [Date, setDate] = useState("");
    const [details, setDetails] = useState("");
    const [previewSrc, setPreviewSrc]= useState("");
    const [selectedStaff, setSelectedStaff]= useState([]);
    const [selectedCrop, setSelectedCrop]= useState([]);
    const [selectedField, setSelectedField]= useState([]);


    const clearForm = () => {
        setLogId("001");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    function AddLog() {

    }
    function closeStaffModal() {

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
                                        item={logId}
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
                                    btnAction={() => {
                                        alert("select staff model")
                                    }}
                                >
                                    Select Staffs
                                </LButton>
                                <LButton
                                    id="selectFieldBtn"
                                    icon="far fa-clone"
                                    btnAction={() => {
                                        alert("select Field model")
                                    }}
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
                                >Staffs
                                </OneColTable>
                                <OneColTable
                                    id="fieldListTbl"
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
            <div className="modal fade " id="staffModal" tabIndex={-1} role="dialog" aria-labelledby="staffModelLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content ">
                        <ModalHeader
                            id="staffModelLabel"
                            closeBtnOnAction={closeStaffModal}
                        >Select Staff</ModalHeader>
                        <div className="modal-body">
                            <div className="container">
                                <div className="form-wrap">
                                    <form id="staff-select-form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="dropdownStaffName">Staff Name</label>
                                                    <select id="dropdownStaffName" name="staffName"
                                                            className="form-control" required>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label id="lastN-label" htmlFor="lastNameDum">Last Name</label>
                                                    <input type="text" name="lastName" id="lastNameDum"
                                                           placeholder="Enter Last Name" className="form-control"
                                                           disabled/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="emailDum">Email</label>
                                                    <input type="text" name="email" id="emailDum"
                                                           placeholder="Enter Email" className="form-control" disabled/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label id="contactNo-label" htmlFor="contactNoDum">Contact
                                                        No</label>
                                                    <input type="tel" name="contactNo" id="contactNoDum"
                                                           placeholder="Enter Contact No" className="form-control"
                                                           disabled/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="dateOfBirthDum">Date of Birth</label>
                                                    <input type="date" id="dateOfBirthDum" className="form-control"
                                                           disabled/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="dateOfJoiningDum">Date of Joining</label>
                                                    <input type="date" id="dateOfJoiningDum" className="form-control"
                                                           disabled/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group ">
                                                    <label htmlFor="ADDDum">Address</label>
                                                    <input type="text" className="form-control" id="ADDDum"
                                                           placeholder="No-" disabled/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="genderDum">Gender</label>
                                                    <input id="genderDum" name="gender" className="form-control"
                                                           disabled/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="designationDum">Designation</label>
                                                    <input id="designationDum" name="des" className="form-control"
                                                           disabled/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="roleInputDum">Role</label>
                                                    <input id="roleInputDum" name="role" className="form-control"
                                                           disabled/>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" id="btnStaffAdd" className="btn btn-primary btn-block">Add</button>
                            <button type="button" id="btnStaffClose" className="btn btn-danger"
                                    data-bs-dismiss="modal">Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}