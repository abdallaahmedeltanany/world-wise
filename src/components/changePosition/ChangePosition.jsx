/* eslint-disable react/prop-types */
import { useMap } from "react-leaflet";

const ChangePosition = ({ postion }) => {
  const map = useMap();
  map.setView(postion);
  return null;
};

export default ChangePosition;
