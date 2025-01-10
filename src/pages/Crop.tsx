import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Header} from "../component/Header.tsx";
import {useRef, useState} from "react";
import {Button} from "../component/Button.tsx";
import {InputText} from "../component/InputText.tsx";
import {Select} from "../component/Select.tsx";
import {InputImage} from "../component/InputImage.tsx";

export function Crop() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [commonName, setCommonName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [category, setCategory] = useState("");
    const [fieldName, setFieldName] = useState("");
    const [selectedSeason, setSelectedSeason] = useState("");
    const [previewSrc, setPreviewSrc]= useState("");
    function AddCrop() {
        console.log(commonName, scientificName, category, fieldName, selectedSeason, previewSrc);
        clearForm();
    }
    const clearForm = () => {
        setCommonName("");
        setScientificName("");
        setCategory("");
        setFieldName("");
        setSelectedSeason("");
        setPreviewSrc("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    const handleSeasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedSeason(value);
    };

    /*const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    setPreviewSrc(reader.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };*/

    return (
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
                                        { value: "Rice", name: "Rice" },
                                        { value: "Cow-pea", name: "Cow-pea" },
                                        { value: "Green-gram", name: "Green-gram" },
                                        { value: "Chickpea", name: "Chickpea" },
                                        { value: "Sweet-potato", name: "Sweet-potato" },
                                        { value: "Reddish", name: "Reddish" },
                                        { value: "Cassava", name: "Cassava" },
                                        { value: "Other", name: "Other" },
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
                                        { value: "field1", name: "field1" },
                                        { value: "field2", name: "field2" },
                                        { value: "field3", name: "field3" },
                                        { value: "field4", name: "field4" },
                                        { value: "field5", name: "field5" },
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
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            id="customRadioInline1"
                                            name="season"
                                            value="Yala"
                                            className="custom-control-input"
                                            checked={selectedSeason === "Yala"}
                                            onChange={handleSeasonChange}
                                        />
                                        <label className="custom-control-label"
                                               htmlFor="customRadioInline1">Yala</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            id="customRadioInline2"
                                            name="season"
                                            value="Maha"
                                            className="custom-control-input"
                                            checked={selectedSeason === "Maha"}
                                            onChange={handleSeasonChange}
                                        />
                                        <label className="custom-control-label"
                                               htmlFor="customRadioInline2">Maha</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            id="customRadioInline3"
                                            name="season"
                                            value="Other"
                                            className="custom-control-input"
                                            checked={selectedSeason === "Other"}
                                            onChange={handleSeasonChange}
                                        />
                                        <label className="custom-control-label"
                                               htmlFor="customRadioInline3">Other</label>
                                    </div>
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
                                    // handleImageChange={handleImageChange}
                                >
                                    Crop
                                </InputImage>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Button
                                    btnOnAction={AddCrop}
                                    style={"btn-primary btn btn-block"}
                                >
                                    Save
                                </Button>
                                <Button
                                    btnOnAction={clearForm}
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
    );
}