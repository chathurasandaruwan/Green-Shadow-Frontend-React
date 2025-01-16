import {Button} from "./Button.tsx";
import {InputText} from "./InputText.tsx";
import {Select} from "./Select.tsx";

export function StaffModal(props: any) {
    return (
        <div className={`modal fade ${props.isVisible ? 'show d-block' : 'hidden'}`} id="staffModel" tabIndex={-1} role="dialog"
             aria-labelledby="staffModelLabel" aria-hidden={true}>
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content ">
                    <div className='modal-header custModalHeader' style={props.headerStyle}>
                        <h5 className="modal-title" id="staffModelLabel">{props.title}</h5>
                        <Button
                            btnOnAction={props.onClose}
                            id="closeBtn"
                            style={"btn-close"}
                        ></Button>
                    </div>
                    <div className="modal-body">
                    <div className="container">
                            <div className="form-wrap-staff">
                                {/*<div id="custSearchCardBody" className="card">
                                    <div className="card-header custSearchCardHeader">
                                        <b>Search Staff By name</b>
                                    </div>
                                    <div className="card-body">
                                        <div className="input-group mb-3">
                                            <input id="searchBox" type="search" role="combobox" className="form-control"
                                                   placeholder="Search by name here ....."
                                                   aria-describedby="button-addon2"/>
                                            <button id="searchBtn" className="btn btn-outline-success"
                                                    type="button">Search
                                            </button>
                                        </div>
                                        <ul id="suggestions" className="list-group"></ul>
                                    </div>
                                </div>*/}
                                <form id="survey-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <InputText
                                                id="firstNameTxt"
                                                placeholder="Enter First Name"
                                                type="text"
                                                item={props.firstName}
                                                setItems={props.setFirstName}
                                            >
                                                First Name
                                            </InputText>
                                        </div>
                                        <div className="col-md-6">
                                            <InputText
                                                id="lastNameTxt"
                                                placeholder="Enter Last Name"
                                                type="text"
                                                item={props.lastName}
                                                setItems={props.setLastName}
                                            >
                                                Last Name
                                            </InputText>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <InputText
                                                id="emailTxt"
                                                placeholder="Enter Email"
                                                type="email"
                                                item={props.email}
                                                setItems={props.setEmail}
                                            >
                                                Email
                                            </InputText>
                                        </div>
                                        <div className="col-md-6">
                                            <InputText
                                                id="contactNoTxt"
                                                placeholder="Enter Contact No"
                                                type="tel"
                                                item={props.contactNo}
                                                setItems={props.setContactNo}
                                            >
                                                Contact No
                                            </InputText>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <InputText
                                                id="dateOfBirthTxt"
                                                placeholder="Enter Date of Birth"
                                                type="date"
                                                item={props.DOB}
                                                setItems={props.setDOB}
                                            >
                                                Date of Birth
                                            </InputText>
                                        </div>
                                        <div className="col-md-6">
                                            <InputText
                                                id="dateOfJoiningTxt"
                                                placeholder="Enter Date of Joining"
                                                type="date"
                                                item={props.dateOfJoining}
                                                setItems={props.setDateOfJoining}
                                            >
                                                Date of Joining
                                            </InputText>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group ">
                                                <label htmlFor="inputAD1">Address</label>
                                                <input type="text" className="form-control" id="inputAD1"
                                                       placeholder="No-"/>
                                                <input type="text" className="form-control" id="inputAD5"
                                                       placeholder="Postal code"/>
                                                <input type="text" className="form-control" id="inputAD2"
                                                       placeholder="lane"/>
                                                <input type="text" className="form-control" id="inputAD4"
                                                       placeholder="State"/>
                                                <input type="text" className="form-control" id="inputAD3"
                                                       placeholder="City"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <Select
                                                id="genderDropdown"
                                                value={props.gender}
                                                setItems={props.setGender}
                                                options={[
                                                    { value: "MALE", name: "MALE" },
                                                    { value: "FEMALE", name: "FEMALE" },
                                                ]}
                                            >
                                                Gender
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Select
                                                id="dropdownDesignation"
                                                value={props.designation}
                                                setItems={props.setDesignation}
                                                options={[
                                                    { value: "MANAGER", name: "MANAGER" },
                                                    { value: "SENIOR_ASSISTANT_MANAGER", name: "SENIOR_ASSISTANT_MANAGER" },
                                                    { value: "ASSISTANT_MANAGER", name: "ASSISTANT_MANAGER" },
                                                    { value: "ADMIN_AND_HR_STAFF", name: "ADMIN_AND_HR_STAFF" },
                                                    { value: "OFFICE_ASSISTANT", name: "OFFICE_ASSISTANT" },
                                                    { value: "SENIOR_AGRONOMIST", name: "SENIOR_AGRONOMIST" },
                                                    { value: "AGRONOMIST", name: "AGRONOMIST" },
                                                    { value: "SOIL_SCIENTIST", name: "SOIL_SCIENTIST" },
                                                    { value: "SENIOR_TECHNICIAN", name: "SENIOR_TECHNICIAN" },
                                                    { value: "TECHNICIAN", name: "TECHNICIAN" },
                                                    { value: "SUPERVISORS", name: "SUPERVISORS" },
                                                    { value: "LABORS", name: "LABORS" },
                                                ]}
                                            >
                                                Designation
                                            </Select>
                                        </div>
                                        <div className="col-md-6">
                                            <Select
                                                id="roleDropdown"
                                                value={props.role}
                                                setItems={props.setRole}
                                                options={[
                                                    { value: "MANAGER", name: "MANAGER" },
                                                    { value: "ADMINISTRATIVE", name: "ADMINISTRATIVE" },
                                                    { value: "SCIENTIST", name: "SCIENTIST" },
                                                    { value: "OTHER", name: "OTHER" },
                                                ]}
                                            >
                                                Role
                                            </Select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Button
                            btnOnAction={props.onSave}
                            id="btnSave"
                            style={props.saveButtonClass}
                        >
                            {props.saveButtonText}
                        </Button>
                        <Button
                            btnOnAction={props.onClear}
                            id="btnClear"
                            style={props.clearButtonClass}
                        >
                            Clear
                        </Button>
                        <Button
                            btnOnAction={props.onClose}
                            id="btnClose"
                            style={props.closeButtonClass}
                        >
                            {props.closeButtonText}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}