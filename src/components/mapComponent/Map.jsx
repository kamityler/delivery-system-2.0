import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder';

const Map = () => {
  const mapRef = useRef(null);
  const latitude = 49.828;
  const longitude = 24.054;

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const L = window.L;
    const geocoder = L.Control.Geocoder.mapbox('pk.eyJ1Ijoia2FtaS10eWxlciIsImEiOiJjbTIxejI2NXYwMXZhMmpzODhibjF2Z2FjIn0.7AVmRNUqbK8CUsU60eeAlA');
    L.Control.geocoder({
      geocoder,
      defaultMarkGeocode: false
    })
    .on('markgeocode', function(e) {
      const bbox = e.geocode.bbox;
      const poly = L.polygon([
        [bbox.getSouthEast().lat, bbox.getSouthEast().lng],
        [bbox.getNorthEast().lat, bbox.getNorthEast().lng],
        [bbox.getNorthWest().lat, bbox.getNorthWest().lng],
        [bbox.getSouthWest().lat, bbox.getSouthWest().lng]
      ]);
      map.fitBounds(poly.getBounds());
    })
    .addTo(map);
  }, []);

  return (
    
    <MapContainer
      center={[latitude, longitude]}
      zoom={15}
      style={{ height: "100vh", width: "100vw" }}
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
            {latitude}, {longitude}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
