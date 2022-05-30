import Link from "next/link";
import styles from "./navbutton.module.scss";

export default function NavButton(props) {
  return (
    <Link href={props.href}>
      <button className={styles.buttonNav}>{props.children}</button>
    </Link>
  );
}
