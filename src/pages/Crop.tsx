import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Header} from "../component/Header.tsx";
import {CustomerModel} from "../component/CustomerModel.tsx";
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
    return (
        <section id="saveCrop">
            <div className="container">
                <Header>Crop</Header>
                <div className="form-wrap">
                    <CustomerModel
                        addCropBtnOnAction={AddCrop}
                        setCommonName={setCommonName}
                        setScientificName={setScientificName}
                        setCategory={setCategory}
                        setFieldName={setFieldName}
                        setSelectedSeason={setSelectedSeason}
                        setPreviewSrc={setPreviewSrc}
                    >
                        save
                    </CustomerModel>
                </div>
            </div>
        </section>
    );
}