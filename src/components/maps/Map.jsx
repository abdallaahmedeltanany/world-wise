/* eslint-disable no-unused-vars */
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../../contexts/CitiesContext";
import ChangePosition from "../changePosition/ChangePosition";
import DetectClick from "../detectClick/DetectClick";
import { useGeolocation } from "../../hooks/useGeoLocation";
import Button from "../button/Button";
import { useUrlPosition } from "../../hooks/useUrlPosition";

const Map = () => {
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const navigate = useNavigate();
  const { cities, currentCity } = useCities();
  const {
    isLoading: isLoadingPosition,
    position: geoLocationPosition,
    getPosition,
  } = useGeolocation();
  const [lat, lng] = useUrlPosition();
  useEffect(() => {
    if (geoLocationPosition) setMapPosition(geoLocationPosition);
  }, [geoLocationPosition]);
  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lat, lng]);

  return (
    <div className={styles.mapContainer}>
      <Button type="position" onClick={getPosition}>
        {isLoadingPosition ? "Loading..." : "use your location"}
      </Button>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangePosition postion={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

export default Map;
