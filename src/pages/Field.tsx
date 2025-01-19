import {useEffect, useRef, useState} from 'react';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Header} from "../component/Header.tsx";
import {InputText} from "../component/InputText.tsx";
import {InputImage} from "../component/InputImage.tsx";
import {Button} from "../component/Button.tsx";
import {Table} from "../component/Table.tsx";
import {useDispatch, useSelector} from "react-redux";
import {Field as FieldModel} from "../models/Field.ts";
import {saveField} from "../slices/FieldSlice.ts";


export function Field() {
    const fileInputRef1 = useRef<HTMLInputElement>(null);
    const fileInputRef2 = useRef<HTMLInputElement>(null);
    const [fieldName, setFieldName] = useState("");
    const [extentSize, setExtentSizeTxt] = useState("");
    const [previewSrc1, setPreviewSrc1]= useState("");
    const [previewSrc2, setPreviewSrc2]= useState("");
    const [location, setLocation] = useState("");
    const fields:FieldModel[] = useSelector((state) => state.FieldData);
    const dispatch = useDispatch();

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
    function saveBtnOnAction() {
        dispatch(saveField(new FieldModel(fieldName, extentSize, previewSrc1, previewSrc2,location)));
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
    const loadSelectedField = ( field:FieldModel) => {
        setFieldName(field.fieldName);
        setExtentSizeTxt(field.extentSize);
        setPreviewSrc1(field.image1);
        setPreviewSrc2(field.image2);
        setLocation(field.location);
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
                                        disable={true}
                                    >
                                        Location
                                    </InputText>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <Button
                                        btnOnAction={saveBtnOnAction}
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
            <section id="fieldTblCard" className="py-4 bg-light">
                <div className="container">
                    <div className="custCard shadow-sm">
                        {/*<div className="card-body">
                            <div className="table-responsive">
                                <table id="fieldTable" className="table table-hover table-nowrap align-middle">
                                    <thead className="table-light">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Extent Size</th>
                                        <th scope="col">image1</th>
                                        <th scope="col">image2</th>
                                        <th scope="col">Location</th>
                                    </tr>
                                    </thead>
                                    <tbody id="fieldTableBody">
                                    <!--<tr>
                                        <td>Field1</td>
                                        <td>4000</td>
                                        <td>
                                            <img alt="..." src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2">
                                        </td>
                                        <td>
                                            <img alt="..." src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2">
                                        </td>
                                        <td>
                                            <ul>
                                                <li>6.23211</li>
                                                <li>120.2112</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Field2</td>
                                        <td>3000</td>
                                        <td>
                                            <img alt="..." src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2">
                                        </td>
                                        <td>
                                            <img alt="..." src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2">
                                        </td>
                                        <td>
                                            <ul>
                                                <li>16.23211</li>
                                                <li>12.2112</li>
                                            </ul>
                                        </td>
                                    </tr>-->
                                    </tbody>
                                </table>
                            </div>
                        </div>*/}
                        <Table
                            firstDivClass='card-body'
                            secondDivClass='table-responsive'
                            id='fieldTable'
                            tableClass="table table-hover table-nowrap align-middle"
                            theadClass="table-light"
                            headers = {[
                                "Name",
                                "Extent size",
                                "image1",
                                "image2",
                                "Location",
                            ]}
                            tbody={fields.map((field, index) => (
                                <tr key={index}>
                                    <td>{field.fieldName}</td>
                                    <td>{field.extentSize}</td>
                                    <td>
                                        <img
                                            src={field.image1}
                                            className="avatar avatar-sm rounded-circle me-2"
                                            alt={'Image1'}
                                        />
                                    </td>
                                    <td>
                                        <img
                                            src={field.image2}
                                            className="avatar avatar-sm rounded-circle me-2"
                                            alt={'Image2'}
                                        />
                                    </td>
                                    <td>{field.location}</td>
                                    <td>
                                        <button className=" btn  tblBtn btn-warning editBtn"
                                                onClick={() => loadSelectedField(field)}>Edit<i
                                            className="fas fa-pencil-alt"></i></button>
                                    </td>
                                </tr>
                            ))}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}