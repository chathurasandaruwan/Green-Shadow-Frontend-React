import  { useEffect, useRef } from 'react';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Header} from "../component/Header.tsx";
export function Field() {
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

    return (
        <>
            <section id="saveField">
                <div className="container">
                    <Header>Field</Header>
                    <div className="form-wrap">
                        <form id="survey-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label id="field-name-label" htmlFor="fieldNameTxt">Field Name</label>
                                        <input type="text" name="name" id="fieldNameTxt" placeholder="Enter field name"
                                               className="form-control" required/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label id="Sc-name-label" htmlFor="extentSizeTxt">Extent Size</label>
                                        <input type="text" name="name" id="extentSizeTxt"
                                               placeholder="Enter Extent Size" className="form-control" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group form-control-file">
                                        {/*image1*/}
                                        <label htmlFor="fieldImgSelector1">Field Image 01</label>
                                        <img id="previewImage1" src="" alt="Preview"/>
                                        <input type="file" name="cropImg" id="fieldImgSelector1"
                                               className="form-control" required/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group form-control-file">
                                        {/*image2*/}
                                        <label htmlFor="fieldImgSelector2">Field Image 02</label>
                                        <img id="previewImage2" src="" alt="Preview"/>
                                        <input type="file" name="cropImg" id="fieldImgSelector2"
                                               className="form-control" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="map_container ">
                                        <div id="map" ref={mapRef}></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label id="location-label" htmlFor="location">Location</label>
                                        <input type="text" name="name" id="location" placeholder="Enter Location"
                                               className="form-control" disabled/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <button type="button" id="btnSave" className="btn btn-primary btn-block">Save
                                    </button>
                                    <button type="button" id="fieldDeleteBtn"
                                            className="btn btn-danger btn-block">Delete
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