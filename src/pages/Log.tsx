import {Header} from "../component/Header.tsx";
import {InputText} from "../component/InputText.tsx";
import {useRef, useState} from "react";
import {InputImage} from "../component/InputImage.tsx";
import {LButton} from "../component/LButton.tsx";

export function Log() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [logId, setLogId] = useState("");
    const [Date, setDate] = useState("");
    const [details, setDetails] = useState("");
    const [previewSrc, setPreviewSrc]= useState("");

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
                                        <textarea  name="details" id="logDetailTxt" value={details}
                                                  placeholder="Enter log details" className="form-control"
                                                  required onChange={(e)=>setDetails(e.target.value)}></textarea>
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
                                    btnAction={() => {alert("select staff model")}}
                                >
                                    Select Staffs
                                </LButton>
                                {/*<div className="col-md-4 ">
                                    <button type="button" id="selectFieldBtn" className="selectBtnSet btn"
                                            data-bs-toggle="modal" data-bs-target="#fieldModal">
                                        <i className="far fa-clone"></i> Select Fields
                                    </button>

                                </div>*/}
                                <LButton
                                    id="selectFieldBtn"
                                    icon="far fa-clone"
                                    btnAction={() => {alert("select Field model")}}
                                >
                                    Select Field
                                </LButton>
                                {/*<div className="col-md-4 ">
                                    <button type="button" id="selectCropBtn" className="selectBtnSet btn"
                                            data-bs-toggle="modal" data-bs-target="#cropModal">
                                        <i className="fa fa-crop" aria-hidden="true"></i> Select Crops
                                    </button>
                                </div>*/}
                                <LButton
                                    id="selectCropBtn"
                                    icon="fa fa-crop"
                                    btnAction={() => {alert("select Crop model")}}
                                >
                                    Select Crops
                                </LButton>
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-4 ">
                                    <table id="staffListTbl" className=" text-center">
                                        <thead>
                                        <tr>
                                            <th scope="col">Staffs</th>
                                        </tr>
                                        </thead>
                                        <tbody id="staffTbl-body">
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-4 ">
                                    <table id="fieldListTbl" className=" text-center ">
                                        <thead>
                                        <tr>
                                            <th scope="col">Fields</th>
                                        </tr>
                                        </thead>
                                        <tbody id="fieldTbl-body">
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-4 ">
                                    <table id="cropListTbl" className=" text-center">
                                        <thead>
                                        <tr>
                                            <th scope="col">Crops</th>
                                        </tr>
                                        </thead>
                                        <tbody id="cropListTbl-body">
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <button type="button" id="btnSave" className="btn btn-primary btn-block">Save
                                    </button>
                                    <button type="button" id="btnClear" className="btn btn-secondary btn-block">Clear
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}