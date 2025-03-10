import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Header} from "../component/Header.tsx";
import {useRef, useState} from "react";
import {Button} from "../component/Button.tsx";
import {InputText} from "../component/InputText.tsx";
import {Select} from "../component/Select.tsx";
import {InputImage} from "../component/InputImage.tsx";
import {InputRadio} from "../component/InputRadio.tsx";
import {Crop as CropModel} from "../models/Crop.ts";
import {useDispatch, useSelector} from "react-redux";
import {deleteCrop, saveCrop, updateCrop} from "../slices/CropSlice.ts";
import {Table} from "../component/Table.tsx";
import {Footer} from "../component/Footer.tsx";

export function Crop() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [commonName, setCommonName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [category, setCategory] = useState("");
    const [fieldName, setFieldName] = useState("");
    const [selectedSeason, setSelectedSeason] = useState("");
    const [previewSrc, setPreviewSrc]= useState("");
    const [saveBtnText, setSaveBtnText]= useState("");
    const [saveBtnStyle, setSaveBtnStyle]= useState("");

    const crops:CropModel[] = useSelector(state => state.cropsData);
    const dispatch = useDispatch();
    function AddCrop() {
        if (saveBtnText=="Update"){
            dispatch(updateCrop(new CropModel(commonName, scientificName, category, fieldName, selectedSeason, previewSrc)));
        }else {
            dispatch(saveCrop(new CropModel(commonName, scientificName, category, fieldName, selectedSeason, previewSrc)));
        }
        clearForm();
    }
    const clearForm = () => {
        setCommonName("");
        setScientificName("");
        setCategory("");
        setFieldName("");
        setSelectedSeason("");
        setPreviewSrc("");
        setSaveBtnText("Save")
        setSaveBtnStyle("btn-primary btn btn-block")
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const loadSelectedCrop = ( crop:CropModel) => {
        setSaveBtnText("Update")
        setSaveBtnStyle("btn-warning btn btn-block")
        setCommonName(crop.commonName);
        setScientificName(crop.scientificName);
        setCategory(crop.category);
        setFieldName(crop.fieldName);
        setSelectedSeason(crop.season);
        setPreviewSrc(crop.image);
    };
    const deleteOnAction = ( e:any,index:number) => {
        e.stopPropagation();
        dispatch(deleteCrop(index))
    };
    return (
        <>
            <section id="saveCrop">
                <div className="container">
                    <Header>Crop</Header>
                    <div className="form-wrap">
                        <form id="survey-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <InputText
                                        type="text"
                                        id="commonNameTxt"
                                        placeholder="Enter common name"
                                        item={commonName}
                                        setItems={setCommonName}
                                    >
                                        Common Name
                                    </InputText>
                                </div>
                                <div className="col-md-6">
                                    <InputText
                                        type="text"
                                        id="scientificNameTxt"
                                        placeholder="Enter scientific name"
                                        item={scientificName}
                                        setItems={setScientificName}
                                    >
                                        Scientific Name
                                    </InputText>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Select
                                        id="dropdownCategory"
                                        value={category}
                                        setItems={setCategory}
                                        options={[
                                            {value: "Rice", name: "Rice"},
                                            {value: "Cow-pea", name: "Cow-pea"},
                                            {value: "Green-gram", name: "Green-gram"},
                                            {value: "Chickpea", name: "Chickpea"},
                                            {value: "Sweet-potato", name: "Sweet-potato"},
                                            {value: "Reddish", name: "Reddish"},
                                            {value: "Cassava", name: "Cassava"},
                                            {value: "Other", name: "Other"},
                                        ]}
                                    >
                                        Category
                                    </Select>
                                </div>
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
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>What is the crop season?</label>
                                        <InputRadio
                                            setSelectedSeason={setSelectedSeason}
                                            id="customRadioInline1"
                                            name="season"
                                            value="Yala"
                                            selectedSeason={selectedSeason}
                                        >
                                            Yala
                                        </InputRadio>
                                        <InputRadio
                                            setSelectedSeason={setSelectedSeason}
                                            id="customRadioInline2"
                                            name="season"
                                            value="Maha"
                                            selectedSeason={selectedSeason}
                                        >
                                            Maha
                                        </InputRadio>
                                        <InputRadio
                                            setSelectedSeason={setSelectedSeason}
                                            id="customRadioInline3"
                                            name="season"
                                            value="Other"
                                            selectedSeason={selectedSeason}
                                        >
                                            Other
                                        </InputRadio>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <InputImage
                                        previewSrc={previewSrc}
                                        id="cropImgSelector"
                                        fileInputRef={fileInputRef}
                                        setPreviewSrc={setPreviewSrc}
                                    >
                                        Crop Image
                                    </InputImage>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <Button
                                        btnOnAction={() => AddCrop()}
                                        id="saveBtn"
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
            <section id="cropTable">
                <div className="container">
                    <Table
                        firstDivClass='row'
                        secondDivClass='col-12'
                        id='cropTbl'
                        tableClass="table table-image"
                        headers = {[
                        "Image",
                        "Common Name",
                        "Scientific Name",
                        "Category",
                        "Field Name",
                        "Season",
                        ]}
                        tbody={crops.map((crop, index) => (
                                <tr key={index} onClick={()=>loadSelectedCrop(crop)}>
                                    <td className="w-25">
                                        <img
                                            src={crop.image}
                                            className="img-fluid img-thumbnail"
                                            alt={crop.commonName}
                                        />
                                    </td>
                                    <td>{crop.commonName}</td>
                                    <td>{crop.scientificName}</td>
                                    <td>{crop.category}</td>
                                    <td>{crop.fieldName}</td>
                                    <td>{crop.season}</td>
                                    <td>
                                        <button className="btn deleteBtn" onClick={(e)=>deleteOnAction(e,index)}>
                                            Delete <i className="far fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    ></Table>
                </div>
            </section>
            <Footer/>
        </>
    );
}