import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Header} from "../component/Header.tsx";
export function Crop() {
    return (
        <section id="saveCrop">
            <div className="container">
                <Header>Crop</Header>
                <div className="form-wrap">
                    <form id="survey-form">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label id="Co-name-label" htmlFor="commonNameTxt">Common Name</label>
                                    <input type="text" name="name" id="commonNameTxt"
                                           placeholder="Enter common name" className="form-control" required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label id="Sc-name-label" htmlFor="scientificNameTxt">Scientific Name</label>
                                    <input type="text" name="name" id="scientificNameTxt"
                                           placeholder="Enter scientific name" className="form-control" required/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="dropdownCategory">Category</label>
                                    <select id="dropdownCategory" name="category" className="form-control" required>
                                        <option value="" disabled selected hidden>Select Category</option>
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
                                    <select id="dropdownFieldName" name="fieldName" className="form-control"
                                            required>
                                        <option value="" disabled selected hidden>Select Field Name</option>
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
                                        <input type="radio" id="customRadioInline1" name="customRadioInline1"
                                               value="Yala" className="custom-control-input"/>
                                        <label className="custom-control-label"
                                               htmlFor="customRadioInline1">Yala</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadioInline2" name="customRadioInline1"
                                               value="Maha" className="custom-control-input"/>
                                        <label className="custom-control-label"
                                               htmlFor="customRadioInline2">Maha</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadioInline3" name="customRadioInline1"
                                               value="Other" className="custom-control-input"/>
                                        <label className="custom-control-label"
                                               htmlFor="customRadioInline3">Other</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group form-control-file">
                                    <label htmlFor="cropImgSelector">Crop Image</label>
                                    <img id="previewImage" src="" alt="Preview"/>
                                    <input id="imageInput" className="hiddenInput"/>
                                    <input type="file" name="cropImg" id="cropImgSelector" className="form-control"
                                           required/>
                                </div>
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
    );
}