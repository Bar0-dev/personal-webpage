import Container from "../../CommonComponents/Container/Container";
import styles from "./contacts.module.scss";
import Typography from "../../CommonComponents/Typography/Typography";

export default function Contacts() {
  return (
    <section id={styles.paper}>
      <Container>
        <Typography variant="h1">Hi! I'm Bartosz</Typography>
        <Typography variant="h2">
          web developer, mechanical engineer and robotics technician
        </Typography>
      </Container>
    </section>
  );
}
