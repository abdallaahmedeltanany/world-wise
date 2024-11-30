import { useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom";

const DetectClick = () => {
  const Navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      Navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
};

export default DetectClick;
