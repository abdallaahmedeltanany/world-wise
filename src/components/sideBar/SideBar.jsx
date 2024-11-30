import Logo from "../logo/Logo";
import styles from "./Sidebar.module.css";
import AppNav from "../appNav/AppNav";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SideBar;
