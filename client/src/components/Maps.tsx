import { MapContainer, TileLayer } from "react-leaflet";
import { City } from "../types/city";
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
      </MapContainer>
    </div>
  );
}
