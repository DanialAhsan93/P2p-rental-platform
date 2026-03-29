import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Itemmap({ lat, lng }) {
  
  return (
    <MapContainer center={[51.5072, -0.1276]} zoom={13} className="h-64 w-full rounded-xl">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.5072, 0.1276]}>
        <Popup>Item Location</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Itemmap;