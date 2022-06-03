import styles from "./container.module.scss";

export default function Container(props) {
  return <div className={styles.container}>{props.children}</div>;
}
