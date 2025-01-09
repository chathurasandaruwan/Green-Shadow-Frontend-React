import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Header} from "../component/Header.tsx";
import {CropModel} from "../component/CropModel.tsx";
import {useState} from "react";
export function Crop() {
    const [commonName, setCommonName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [category, setCategory] = useState("");
    const [fieldName, setFieldName] = useState("");
    const [selectedSeason, setSelectedSeason] = useState("");
    const [previewSrc, setPreviewSrc]= useState("");
    function AddCrop() {
        console.log(commonName, scientificName, category, fieldName, selectedSeason, previewSrc);
    }
    const clearForm = () => {
        setCommonName("");
        setScientificName("");
        setCategory("");
        setFieldName("");
        setSelectedSeason("");
        setPreviewSrc("");
    };
    return (
        <section id="saveCrop">
            <div className="container">
                <Header>Crop</Header>
                <div className="form-wrap">
                    <CropModel
                        commonName={commonName}
                        scientificName={scientificName}
                        category={category}
                        fieldName={fieldName}
                        selectedSeason={selectedSeason}
                        previewSrc={previewSrc}
                        setCommonName={setCommonName}
                        setScientificName={setScientificName}
                        setCategory={setCategory}
                        setFieldName={setFieldName}
                        setSelectedSeason={setSelectedSeason}
                        setPreviewSrc={setPreviewSrc}
                        addCropBtnOnAction={AddCrop}
                        clearBtnOnAction={clearForm}
                    >
                        save
                    </CropModel>
                </div>
            </div>
        </section>
    );
}