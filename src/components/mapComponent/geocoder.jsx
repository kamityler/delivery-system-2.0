import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import './Map.css'
import L from 'leaflet';

const MapLoctionDefine = () => {
    const map = useMap();

    useEffect(()=>{
        const geocoder = L.Control.geocoder({defaultMarkGeocode: true})
            .on('markgeocode', function (e) {
                const bbox = e.geocode.bbox;
                const poly = L.polygon([
                    [bbox.getSouthWest().lat, bbox.getSouthWest().lng],
                    [bbox.getNorthWest().lat, bbox.getNorthWest().lng],
                    [bbox.getNorthEast().lat, bbox.getNorthEast().lng],
                    [bbox.getSouthEast().lat, bbox.getSouthEast().lng],                    
                ]).addTo(map);
                map.fitBounds(poly.getBounds());
            }).addTo(map);

            return () => map.removeControl(geocoder);
    }, [map]);
    return null;
}

export default MapLoctionDefine;
