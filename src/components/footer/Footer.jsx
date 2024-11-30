import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copy rights {new Date().getFullYear()} by world wise
      </p>
    </footer>
  );
};

export default Footer;
