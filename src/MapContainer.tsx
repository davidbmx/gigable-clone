import React, { useState, useEffect, useRef } from 'react';

type GoogleMap = google.maps.Map;
type Marker = google.maps.Marker;
type Props = {
    lat: number,
    lng: number
}

const MapContainer = ({lat, lng}: Props) =>  {
    const [map, setMap] = useState<GoogleMap>();
    const [marker, setMarker] = useState<Marker>();
    const ref = useRef<HTMLDivElement>(null);
    
    const initMap = () => {
        if (ref.current) {
            setMap(
                new google.maps.Map(
                    ref.current,
                    {
                        center: {lat, lng},
                        zoom: 9
                    }
                )
            )
        }
    }

    const loadMap = () => {
        if (!map) {
            initMap();
        }
    }

    useEffect(loadMap, [map]);

    if (map && !marker) {
        setMarker(
            new google.maps.Marker({
                position: {lat, lng},
                map
            })
        )
    }

    return (
        <div id="gmap" ref={ref}></div>
    )
}

export default MapContainer;
