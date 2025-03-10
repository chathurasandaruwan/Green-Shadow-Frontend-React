import {Button} from "./Button.tsx";
import {InputText} from "./InputText.tsx";
import {Select} from "./Select.tsx";
import {InputAddress} from "./InputAddress.tsx";
import React, {useState} from "react";

export function StaffModal(props: any) {
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const staffNames:string[] = props.staffNames;
    const handelSearch = (e: any) => {
        let value = e.target.value;
        props.setSearchTxt(value);
        if (value) {
            const matches = staffNames.filter((name) =>
                name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(matches);
        } else {
            setSuggestions([]); // Clear suggestions
        }
    }
    const handleSuggestionClick = (name: string) => {
        props.setSearchTxt(name);
        setSuggestions([]); // Clear suggestions
    };

    const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest("#searchBox") && !target.closest("#suggestions")) {
            setSuggestions([]); // Clear suggestions when clicking outside
        }
    };

    React.useEffect(() => {
        // Attach event listener to detect clicks outside the component
        document.addEventListener("click", handleClickOutside);
        return () => {
            // Clean up event listener on component unmount
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);



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
                                <div id="custSearchCardBody" className={'card'} style={props.SearchCardStyle}>
                                    <div className="card-header custSearchCardHeader" style={props.SearchCardHeaderStyle}>
                                        <b>Search Staff By name</b>
                                    </div>
                                    <div className="card-body">
                                        <div className="input-group mb-3">
                                            <input id="searchBox" type="search" role="combobox" className="form-control"
                                                   placeholder="Search by name here ....."
                                                   aria-describedby="button-addon2" value={props.searchTxt} onChange={handelSearch}/>
                                            <Button
                                                btnOnAction={props.searchBtnOnAction}
                                                id="searchBtn"
                                                style={"btn btn-outline-success"}
                                            >
                                                Search
                                            </Button>

                                        </div>
                                        <ul id="suggestions" className="list-group">
                                            {suggestions.map((name) => (
                                                <li
                                                    key={name}
                                                    className="list-group-item"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => handleSuggestionClick(name)}
                                                >
                                                    {name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
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
                                                <InputAddress
                                                    id="inputAD1"
                                                    item={props.address1}
                                                    setItems={props.setAddress1}
                                                    placeholder="No-"
                                                />
                                                <InputAddress
                                                    id="inputAD5"
                                                    item={props.address5}
                                                    setItems={props.setAddress5}
                                                    placeholder="Postal code"
                                                />
                                                <InputAddress
                                                    id="inputAD2"
                                                    item={props.address2}
                                                    setItems={props.setAddress2}
                                                    placeholder="lane"
                                                />
                                                <InputAddress
                                                    id="inputAD4"
                                                    item={props.address4}
                                                    setItems={props.setAddress4}
                                                    placeholder="State"
                                                />
                                                <InputAddress
                                                    id="inputAD3"
                                                    item={props.address3}
                                                    setItems={props.setAddress3}
                                                    placeholder="City"
                                                />
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