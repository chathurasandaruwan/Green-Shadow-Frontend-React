import {Header} from "../component/Header.tsx";
import {InputText} from "../component/InputText.tsx";
import {useRef, useState} from "react";
import {InputImage} from "../component/InputImage.tsx";
import {LButton} from "../component/LButton.tsx";
import {OneColTable} from "../component/OneColTable.tsx";
import {Button} from "../component/Button.tsx";

export function Log() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [logId, setLogId] = useState("");
    const [Date, setDate] = useState("");
    const [details, setDetails] = useState("");
    const [previewSrc, setPreviewSrc]= useState("");


    const clearForm = () => {
        setLogId("001");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    function AddLog() {

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
                                <LButton
                                    id="selectFieldBtn"
                                    icon="far fa-clone"
                                    btnAction={() => {alert("select Field model")}}
                                >
                                    Select Field
                                </LButton>
                                <LButton
                                    id="selectCropBtn"
                                    icon="fa fa-crop"
                                    btnAction={() => {alert("select Crop model")}}
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
        </>
    );
}