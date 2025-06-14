"use client";

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from 'react-i18next'; 
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function LocationSelector({ onLocationChange }) {
  useMapEvents({
    click(e) {
      onLocationChange(e.latlng);
    },
  });
  return null;
}

const LocationPage = () => {
  const { t } = useTranslation('dashboard');
  const [showMap, setShowMap] = useState(false);
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState("");

  const fetchAddress = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=fa`
      ); 
      const data = await response.json();
      if (data && data.display_name) {
        setAddress(data.display_name);
      } else {
        setAddress(t('addressUnknown')); 
      }
    } catch (error) {
      console.error(t('errorFetchingAddressConsole'), error);
      setAddress(t('errorFetchingAddress')); 
    }
  };

  const handleLocationChange = (latlng) => {
    setPosition(latlng);
    fetchAddress(latlng.lat, latlng.lng);
    toast.success(t('locationSelectedSuccessfully')); 
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      <p className="text-[16px] text-[#3772FF] font-yekan-600 pb-6">
        {t('selectLocationOnMap')}
      </p>

      {!showMap ? (
        <div
          onClick={() => setShowMap(true)}

          className="w-full h-[404px] bg-[#D9D9D9] p-4 ml-3 rounded-2xl cursor-pointer flex items-center justify-center"
          role="button" 
          tabIndex={0}
          onKeyPress={(e) => { 
            if (e.key === 'Enter' || e.key === ' ') {
              setShowMap(true);
            }
          }}
          aria-label={t('clickToSelectLocation')}

        >
          <span className="text-gray-500">{t('clickToSelectLocation')}</span>
        </div>
      ) : (
        <div className="w-full h-[404px] p-4 ml-3 relative z-10 rounded-2xl overflow-hidden">
          <MapContainer
            center={[32.4279, 53.688]}
            zoom={5}
            style={{ width: "100%", height: "100%", borderRadius: "16px" }}
            aria-label={t('selectLocationOnMap')} 
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationSelector onLocationChange={handleLocationChange} />
            {position && <Marker position={position} />}
          </MapContainer>
        </div>
      )}

      {position && (
        <div className="mt-4 text-center text-[13px] text-gray-700">
          <p className="font-yekan-600 text-[#3772FF] mb-2">
            {t('selectedCoordinates')} 
          </p>
          <p>
            Lat: {position.lat.toFixed(5)}, Lng: {position.lng.toFixed(5)}
          </p>
          <p className="mt-2 font-yekan-500 text-black">
            📍 {t('address')} {address || t('fetchingAddress')}
          </p>
        </div>
      )}
    </div>
  );
};

export default LocationPage;