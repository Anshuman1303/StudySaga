import { Overlay, Container, Title, Button, Text, Card, SimpleGrid, rem } from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";
import classes from "./page.module.css";
const mockdata = [
  {
    title: "Extreme performance",
    description:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
    icon: IconGauge,
  },
  {
    title: "Privacy focused",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
    icon: IconUser,
  },
  {
    title: "No third parties",
    description: "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
    icon: IconCookie,
  },
];

export default function Home() {
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.featuresCard} padding="xl">
      <feature.icon style={{ width: rem(50), height: rem(50) }} stroke={2} />
      <Text fz="lg" fw={500} className={classes.featuresCardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <>
      <div className={classes.hero}>
        <Overlay gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)" opacity={1} zIndex={0} />
        <Container className={classes.container} size="md">
          <Title className={classes.title}>StudySaga</Title>
          <Text className={classes.description} size="xl" mt="xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat perspiciatis maxime doloribus aspernatur consequatur magni
            ipsum ratione explicabo excepturi neque qui, hic quas numquam dicta itaque reprehenderit quis natus dignissimos.
          </Text>

          <Button size="xl" className={classes.control}>
            Get started
          </Button>
        </Container>
      </div>
      <Container size="lg" py="xl">
        <Title order={2} className={classes.featuresTitle} ta="center" mt="sm">
          Integrate effortlessly with any technology stack
        </Title>

        <Text c="dimmed" className={classes.featuresDescription} ta="center" mt="md">
          Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a
          Steel-type Pokémon.
        </Text>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    </>
  );
}
