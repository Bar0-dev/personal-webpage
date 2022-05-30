import Logo from "../../CommonComponents/Logo/Logo";
import NavButton from "../../CommonComponents/NavButton/NavButton";
import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <header>
      <nav className={styles.navbar}>
        <Logo />
        <NavButton href="/">Home</NavButton>
      </nav>
    </header>
  );
}
