import Container from "../../CommonComponents/Container/Container";
import styles from "./contacts.module.scss";

export default function Contacts() {
  return (
    <section id={styles.paper}>
      <Container>
        <h1>Hi! I'm Bartosz</h1>
        <h2>web developer, mechanical engineer and robotics technician</h2>
      </Container>
    </section>
  );
}
