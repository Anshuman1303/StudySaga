import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes.hero}>
      <Overlay gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)" opacity={1} zIndex={0} />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>StudySaga</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat perspiciatis maxime doloribus aspernatur consequatur magni
          ipsum ratione explicabo excepturi neque qui, hic quas numquam dicta itaque reprehenderit quis natus dignissimos.
        </Text>

        <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
          Get started
        </Button>
      </Container>
    </div>
  );
}
