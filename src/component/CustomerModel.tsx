/*
import {useState} from "react";

export function CustomerModel(props:any) {
    const handleSeasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        props.setSelectedSeason(value);
    };
    const [previewSrc, setPreviewSrc] = useState<string>("");

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    setPreviewSrc(reader.result as string);
                    props.setPreviewSrc(reader.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <form id="survey-form">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label id="Co-name-label" htmlFor="commonNameTxt">Common Name</label>
                        <input type="text" name="name" id="commonNameTxt" placeholder="Enter common name"
                               className="form-control" required onChange={(e)=>props.setCommonName(e.target.value)}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label id="Sc-name-label" htmlFor="scientificNameTxt">Scientific Name</label>
                        <input type="text" name="name" id="scientificNameTxt" placeholder="Enter scientific name"
                               className="form-control" required onChange={(e)=>props.setScientificName(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="dropdownCategory">Category</label>
                        <select id="dropdownCategory" name="category" className="form-control" required onChange={(e) => props.setCategory(e.target.value)}>
                            <option value="default" disabled selected hidden>Select Category</option>
                            <option value="Rice">Rice</option>
                            <option value="Cow-pea">Cow-pea</option>
                            <option value="Green-gram">Green-gram</option>
                            <option value="Chickpea">Chickpea</option>
                            <option value="Sweet-potato">Sweet-potato</option>
                            <option value="Reddish">Reddish</option>
                            <option value="Cassava">Cassava</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="dropdownFieldName">Field Name</label>
                        <select id="dropdownFieldName" name="fieldName" className="form-control" required onChange={(e)=>props.setFieldName(e.target.value)}>
                            <option value="default"  disabled selected hidden>Select Field Name</option>
                            <option value="field1">Field1</option>
                            <option value="field2">Field2</option>
                            <option value="field3">Field3</option>
                            <option value="field4">Field4</option>
                            <option value="field5">Field5</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>What is the crop season ?</label>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline1" name="customRadioInline1" value="Yala"
                                   className="custom-control-input" checked={props.setSelectedSeason === "Yala"} onChange={handleSeasonChange}/>
                            <label className="custom-control-label" htmlFor="customRadioInline1">Yala</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline2" name="customRadioInline1" value="Maha"
                                   className="custom-control-input" checked={props.setSelectedSeason === "Maha"} onChange={handleSeasonChange}/>
                            <label className="custom-control-label" htmlFor="customRadioInline2">Maha</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline3" name="customRadioInline1" value="Other"
                                   className="custom-control-input" checked={props.setSelectedSeason === "Other"} onChange={handleSeasonChange}/>
                            <label className="custom-control-label" htmlFor="customRadioInline3">Other</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group form-control-file">
                        <label htmlFor="cropImgSelector">Crop Image</label>
                        {previewSrc && <img id="previewImage" src={previewSrc} alt="Preview" />}
                        {/!*<input id="imageInput" className="hiddenInput"/>*!/}
                        <input type="file" name="cropImg" id="cropImgSelector" className="form-control" required onChange={handleImageChange}/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <button type="button" id="btnSave" className="btn btn-primary btn-block" onClick={props.AddCrop}>Save</button>
                    <button type="button" id="btnClear" className="btn btn-secondary btn-block">Clear</button>
                </div>
            </div>

        </form>
    );
}*/
import { useState } from "react";

export function CustomerModel(props: any) {
    const handleSeasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        props.setSelectedSeason(value);
    };

    const [previewSrc, setPreviewSrc] = useState<string>("");

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    setPreviewSrc(reader.result as string);
                    props.setPreviewSrc(reader.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const clearForm = () => {
        props.setCommonName("");
        props.setScientificName("");
        props.setCategory("");
        props.setFieldName("");
        props.setSelectedSeason("");
        props.setPreviewSrc("");
        setPreviewSrc("");
    };

    return (
        <form id="survey-form">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label id="Co-name-label" htmlFor="commonNameTxt">Common Name</label>
                        <input
                            type="text"
                            id="commonNameTxt"
                            placeholder="Enter common name"
                            className="form-control"
                            required
                            value={props.commonName}
                            onChange={(e) => props.setCommonName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label id="Sc-name-label" htmlFor="scientificNameTxt">Scientific Name</label>
                        <input
                            type="text"
                            id="scientificNameTxt"
                            placeholder="Enter scientific name"
                            className="form-control"
                            required
                            value={props.scientificName}
                            onChange={(e) => props.setScientificName(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="dropdownCategory">Category</label>
                        <select
                            id="dropdownCategory"
                            className="form-control"
                            required
                            value={props.category}
                            onChange={(e) => props.setCategory(e.target.value)}
                        >
                            <option value="" disabled >Select Category</option>
                            <option value="Rice">Rice</option>
                            <option value="Cow-pea">Cow-pea</option>
                            <option value="Green-gram">Green-gram</option>
                            <option value="Chickpea">Chickpea</option>
                            <option value="Sweet-potato">Sweet-potato</option>
                            <option value="Reddish">Reddish</option>
                            <option value="Cassava">Cassava</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="dropdownFieldName">Field Name</label>
                        <select
                            id="dropdownFieldName"
                            className="form-control"
                            required
                            value={props.fieldName}
                            onChange={(e) => props.setFieldName(e.target.value)}
                        >
                            <option value="" disabled >Select Field Name</option>
                            <option value="field1">Field1</option>
                            <option value="field2">Field2</option>
                            <option value="field3">Field3</option>
                            <option value="field4">Field4</option>
                            <option value="field5">Field5</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>What is the crop season?</label>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                type="radio"
                                id="customRadioInline1"
                                name="season"
                                value="Yala"
                                className="custom-control-input"
                                checked={props.selectedSeason === "Yala"}
                                onChange={handleSeasonChange}
                            />
                            <label className="custom-control-label" htmlFor="customRadioInline1">Yala</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                type="radio"
                                id="customRadioInline2"
                                name="season"
                                value="Maha"
                                className="custom-control-input"
                                checked={props.selectedSeason === "Maha"}
                                onChange={handleSeasonChange}
                            />
                            <label className="custom-control-label" htmlFor="customRadioInline2">Maha</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                type="radio"
                                id="customRadioInline3"
                                name="season"
                                value="Other"
                                className="custom-control-input"
                                checked={props.selectedSeason === "Other"}
                                onChange={handleSeasonChange}
                            />
                            <label className="custom-control-label" htmlFor="customRadioInline3">Other</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group form-control-file">
                        <label htmlFor="cropImgSelector">Crop Image</label>
                        {previewSrc && <img id="previewImage" src={previewSrc} alt="Preview" />}
                        <input
                            type="file"
                            id="cropImgSelector"
                            className="form-control"
                            required
                            onChange={handleImageChange}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <button
                        type="button"
                        id="btnSave"
                        className="btn btn-primary btn-block"
                        onClick={props.addCropBtnOnAction}
                    >
                        {props.children}
                    </button>
                    <button
                        type="button"
                        id="btnClear"
                        className="btn btn-secondary btn-block"
                        onClick={clearForm}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </form>
    );
}
