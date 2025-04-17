import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const SelectLocation = ({ setLocation }) => {
  useMapEvents({
    click: (e) => {
      setLocation([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};


const LocationPage = () => {
  const iranCenter = [32.4279, 53.6880];
  const [selectedLocation, setSelectedLocation] = useState(null);
  return (
    <div>
      <p className='text-[16px] text-[#3772FF] font-yekan-600 pb-6'>داخل نقشه موقعیت مکانی محل سکونت خود را انتخاب کنید</p>
      <div className='w-full h-[404px] bg-[#D9D9D9] p-4 ml-3 rounded-2xl'>
      <MapContainer center={iranCenter} zoom={5} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      <SelectLocation setLocation={setSelectedLocation} />

      {selectedLocation && (
        <Marker position={selectedLocation}>
          <Popup>
            موقعیت انتخاب شده: <br />
            {selectedLocation[0].toFixed(4)}, {selectedLocation[1].toFixed(4)}
          </Popup>
        </Marker>
      )}
    </MapContainer>
      </div>
    </div>
  )
}

export default LocationPage
