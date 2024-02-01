import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { City } from "../interface/city";
import "./Maps.css";
import "leaflet/dist/leaflet.css";

interface Props {
  city: City;
}

export default function Maps({ city }: Props) {
  const { lat, lon } = city.coord;

  return (
    <div className="divContainerMaps">
      <MapContainer center={[lat, lon]} zoom={12} scrollWheelZoom={false} className="maps-component">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="tileLayerMaps"
        />
        <Marker position={[lat, lon]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
