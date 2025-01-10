import {useEffect, useRef, useState} from 'react';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Header} from "../component/Header.tsx";
import {InputText} from "../component/InputText.tsx";
import {InputImage} from "../component/InputImage.tsx";
import {Button} from "../component/Button.tsx";
export function Field() {
    const fileInputRef1 = useRef<HTMLInputElement>(null);
    const fileInputRef2 = useRef<HTMLInputElement>(null);
    const [fieldName, setFieldName] = useState("");
    const [extentSize, setExtentSizeTxt] = useState("");
    const [previewSrc1, setPreviewSrc1]= useState("");
    const [previewSrc2, setPreviewSrc2]= useState("");
    const [location, setLocation] = useState("");
        const mapRef = useRef<HTMLDivElement | null>(null);
        useEffect(() => {
            if (!mapRef.current) return;
            // Initialize the map
            const map = L.map(mapRef.current).setView([6.9271, 79.8612], 10); // Centered on Colombo

            // Add OpenStreetMap tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);

            let marker: L.Marker | undefined;

            // Add event listener for map clicks
            map.on('click', (e: L.LeafletMouseEvent) => {
                const {lat, lng} = e.latlng;
                const latitude = lat.toFixed(6);
                const longitude = lng.toFixed(6);

                // Update the input field with the selected coordinates
                const locationInput = document.getElementById('location') as HTMLInputElement;
                if (locationInput) {
                    locationInput.value = `${latitude}, ${longitude}`;
                    setLocation(`${latitude}, ${longitude}`);
                }

                // If a marker already exists, remove it
                if (marker) {
                    map.removeLayer(marker);
                }

                // Add a marker at the clicked location
                marker = L.marker([lat, lng]).addTo(map);
            });

            // Cleanup on component unmount
            return () => {
                map.remove();
            };
        }, []);
    function AddField() {
        console.log(fieldName, extentSize, previewSrc1, previewSrc2, location);
        clearForm();
    }
    const clearForm = () => {
        setFieldName("");
        setExtentSizeTxt("");
        setPreviewSrc1("");
        setPreviewSrc2("");
        setLocation("");
        if (fileInputRef1.current) {
            fileInputRef1.current.value = "";
        }
        if (fileInputRef2.current) {
            fileInputRef2.current.value = "";
        }
    }
    function deleteField() {
        console.log("delete field");
    }
    return (
        <>
            <section id="saveField">
                <div className="container">
                    <Header>Field</Header>
                    <div className="form-wrap">
                        <form id="survey-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <InputText
                                        type="text"
                                        id="fieldNameTxt"
                                        placeholder="Enter field name"
                                        item={fieldName}
                                        setItems={setFieldName}
                                    >
                                        Field Name
                                    </InputText>
                                </div>
                                <div className="col-md-6">
                                    <InputText
                                        type="text"
                                        id="extentSizeTxt"
                                        placeholder="Enter extent size"
                                        item={extentSize}
                                        setItems={setExtentSizeTxt}
                                    >
                                        Extent Size
                                    </InputText>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    {/*image1*/}
                                    <InputImage
                                        id="fieldImgSelector1"
                                        fileInputRef={fileInputRef1}
                                        previewSrc={previewSrc1}
                                        setPreviewSrc={setPreviewSrc1}
                                    >
                                        Field Image 01
                                    </InputImage>
                                </div>
                                <div className="col-md-6">
                                    {/*image2*/}
                                    <InputImage
                                        id="fieldImgSelector2"
                                        fileInputRef={fileInputRef2}
                                        previewSrc={previewSrc2}
                                        setPreviewSrc={setPreviewSrc2}
                                    >
                                        Field Image 02
                                    </InputImage>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="map_container ">
                                        <div id="map" ref={mapRef}></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <InputText
                                        type="text"
                                        id="location"
                                        placeholder="Enter Location"
                                        item={location}
                                    >
                                        Location
                                    </InputText>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <Button
                                        btnOnAction={AddField}
                                        id="saveBtn"
                                        style={"btn-primary btn btn-block"}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        btnOnAction={deleteField}
                                        id="fieldDeleteBtn"
                                        style={"btn btn-danger btn-block"}
                                    >
                                        Delete
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