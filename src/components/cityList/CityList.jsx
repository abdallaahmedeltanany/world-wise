/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import Spinner from "../spinner/Spinner";
import CityItem from "../cityItem/CityItem";
import Message from "../message/Message";
import { useCities } from "../../contexts/CitiesContext";

const CityList = () => {
  const { cities, isLoading } = useCities();
  const { deleteCity } = useCities();

  console.log(cities);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} deleteCity={deleteCity} />
      ))}
    </ul>
  );
};

export default CityList;
