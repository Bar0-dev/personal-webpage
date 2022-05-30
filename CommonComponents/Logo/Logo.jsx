import styles from "./logo.module.scss";

export default function Logo() {
  return (
    <img
      className={styles.logo}
      src="images/LogoThin.svg"
      aria-label="logo"
    ></img>
  );
}
