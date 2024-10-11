import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder';
import './Map.css'
import { useMapUserLocation } from './../../hooks';

const Map = () => {
    const mapRef = useRef(null);
    const {position} = useMapUserLocation();
    

    useEffect(()=>{
        const map = mapRef.current?.leafletElement;
        if (!map) return;
        console.log(mapRef);
    })

    // useEffect(() => {
    //     const L = window.L;
    //     const map = mapRef.current?.leafletElement;
    //     if (!map) return;
    //     map.flyTo({position});        

    //     const geocoder = L.Control.Geocoder.nominatim();
        
        
    //     L.Control.geocoder({ geocoder, defaultMarkGeocode: false })
    //         .on('markgeocode', function(e) {
    //         const bbox = e.geocode.bbox;
    //         const poly = L.polygon([
    //             [bbox.getSouthEast().lat, bbox.getSouthEast().lng],
    //             [bbox.getNorthEast().lat, bbox.getNorthEast().lng],
    //             [bbox.getNorthWest().lat, bbox.getNorthWest().lng],
    //             [bbox.getSouthWest().lat, bbox.getSouthWest().lng]
    //         ]);
    //         map.fitBounds(poly.getBounds());
    //         })
    //         .addTo(map);
    // }, []);

    return (
        <MapContainer className='map-container' center={position} zoom={15} ref={mapRef}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
            <Marker position={position}>
                <Popup> your position </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;
