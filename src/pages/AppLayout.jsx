import Map from "../components/maps/Map";
import SideBar from "../components/sideBar/SideBar";
import User from "../components/user/User";
import styles from "./AppLayout.module.css";
const AppLayout = () => {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
