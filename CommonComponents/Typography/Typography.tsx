import styles from "./typography.module.scss";

export default function Typography(props) {
  const variant = props.variant ?? "h1";

  switch (variant) {
    case "h1":
      return <h1>{props.children}</h1>;

    case "h2":
      return <h2>{props.children}</h2>;
    case "h3":
  }
}
