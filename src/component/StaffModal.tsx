import {Button} from "./Button.tsx";
import {InputText} from "./InputText.tsx";

export function StaffModal(props: any) {
    return (
        <div className={`modal fade ${props.isVisible ? 'show d-block' : 'hidden'}`} id="staffModel" tabIndex={-1} role="dialog"
             aria-labelledby="staffModelLabel" aria-hidden={!props.isVisible}>
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
                                            {/*<div className="form-group">
                                                <label htmlFor="genderDropdown">Gender</label>
                                                <select id="genderDropdown" name="gender" className="form-control"
                                                        required>
                                                    <option value="" disabled selected hidden>Select Gender</option>
                                                    <option value="MALE">MALE</option>
                                                    <option value="FEMALE">FEMALE</option>
                                                </select>
                                            </div>*/}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            {/*<div className="form-group">
                                                <label htmlFor="dropdownDesignation">Designation</label>
                                                <select id="dropdownDesignation" name="category"
                                                        className="form-control" required>
                                                    <option value="" disabled selected hidden>Select Designation
                                                    </option>
                                                    <option value="MANAGER">MANAGER</option>
                                                    <option value="SENIOR_ASSISTANT_MANAGER">SENIOR_ASSISTANT_MANAGER
                                                    </option>
                                                    <option value="ASSISTANT_MANAGER">ASSISTANT_MANAGER</option>
                                                    <option value="ADMIN_AND_HR_STAFF">ADMIN_AND_HR_STAFF</option>
                                                    <option value="OFFICE_ASSISTANT">OFFICE_ASSISTANT</option>
                                                    <option value="SENIOR_AGRONOMIST">SENIOR_AGRONOMIST</option>
                                                    <option value="AGRONOMIST">AGRONOMIST</option>
                                                    <option value="SOIL_SCIENTIST">SOIL_SCIENTIST</option>
                                                    <option value="SENIOR_TECHNICIAN">SENIOR_TECHNICIAN</option>
                                                    <option value="TECHNICIAN">TECHNICIAN</option>
                                                    <option value="SUPERVISORS">SUPERVISORS</option>
                                                    <option value="LABORS">LABORS</option>
                                                </select>
                                            </div>*/}
                                        </div>
                                        <div className="col-md-6">
                                            {/*<div className="form-group">
                                                <label htmlFor="roleDropdown">Role</label>
                                                <select id="roleDropdown" name="role" className="form-control" required>
                                                    <option value="" disabled selected hidden>Select Role</option>
                                                    <option value="MANAGER">MANAGER</option>
                                                    <option value="ADMINISTRATIVE">ADMINISTRATIVE</option>
                                                    <option value="SCIENTIST">SCIENTIST</option>
                                                    <option value="OTHER">OTHER</option>
                                                </select>
                                            </div>*/}
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