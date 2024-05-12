import React, { useEffect, useRef } from 'react';
import 'ol/ol.css'; 
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import useStore from '../../StoreManager';

const Maps = () => {

  const mapRef = useRef(null);
  const stat=useStore(state=>state.states)
  useEffect(() => {
    
    const statesCoordinates = {
        "Andhra Pradesh": fromLonLat([79.7400, 15.9129]),
        "Arunachal Pradesh": fromLonLat([93.6167, 27.1004]),
        "Assam": fromLonLat([92.9376, 26.2006]),
        "Bihar": fromLonLat([85.3131, 25.0961]),
        "Chhattisgarh": fromLonLat([81.8661, 21.2787]),
        "Goa": fromLonLat([74.1240, 15.2993]),
        "Gujarat": fromLonLat([71.1924, 22.2587]),
        "Haryana": fromLonLat([76.0856, 29.0588]),
        "Himachal Pradesh": fromLonLat([77.1734, 31.1048]),
        "Jharkhand": fromLonLat([85.2799, 23.6102]),
        "Karnataka": fromLonLat([75.7139, 15.3173]),
        "Kerala": fromLonLat([76.2711, 10.8505]),
        "Madhya Pradesh": fromLonLat([78.6569, 22.9734]),
        "Maharashtra": fromLonLat([75.7139, 19.7515]),
        "Manipur": fromLonLat([93.9063, 24.6637]),
        "Meghalaya": fromLonLat([91.3662, 25.4670]),
        "Mizoram": fromLonLat([92.9376, 23.1645]),
        "Nagaland": fromLonLat([94.5624, 26.1584]),
        "Odisha": fromLonLat([85.0985, 20.9517]),
        "Punjab": fromLonLat([75.3412, 31.1471]),
        "Rajasthan": fromLonLat([74.2179, 27.0238]),
        "Sikkim": fromLonLat([88.5122, 27.5330]),
        "Tamil Nadu": fromLonLat([78.6569, 11.1271]),
        "Telangana": fromLonLat([79.0193, 18.1124]),
        "Tripura": fromLonLat([91.9882, 23.9408]),
        "Uttar Pradesh": fromLonLat([80.9462, 26.8467]),
        "Uttarakhand": fromLonLat([79.0193, 30.0668]),
        "West Bengal": fromLonLat([87.8550, 22.9868])
    };
      
    const indiaCoordinates =fromLonLat([78.9629, 20.5937]);
    
    const map = new Map({
      target: mapRef.current, 
      layers: [
        new TileLayer({
          source: new OSM() 
        })
      ],
      view: new View({
        center: (stat!=='')?statesCoordinates[stat]:indiaCoordinates, 
        zoom: (stat!=='')?7.5:4.5
      })
    });

    return () => {
      map.setTarget(null);
    };
  }, [stat]); 

  return <div ref={mapRef} className="map-container subContainer" />;
};

export default Maps;
