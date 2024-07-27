import { Overlay, Container, Title, Button, Text, Card, SimpleGrid, rem } from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";
import classes from "./page.module.css";
const mockdata = [
  {
    title: "Extreme performance",
    description:
      "By integrating game mechanics, such as points, levels, rewards, and challenges, this app aims to increase student motivation, enhance learning outcomes, and foster a positive attitude towards studying.",
    icon: IconGauge,
  },
  {
    title: "Privacy focused",
    description:
      "This helping platform features personalized learning paths, and collaborative challenges that cater to diverse learning styles and needs.",
    icon: IconUser,
  },
  {
    title: "No third parties",
    description:
      "It provides real-time feedback and analytics for both students and educators, enabling continuous improvement and targeted support.",
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
            Scholar Saga is an innovative educational platform designed to transform traditional homework tasks into engaging and enjoyable
            experiences.
          </Text>

          <Button size="xl" className={classes.control}>
            Get started
          </Button>
        </Container>
      </div>
      <Container size="lg" py="xl">
        <Title order={2} className={classes.featuresTitle} ta="center" mt="sm">
          Learning made fun
        </Title>

        <Text c="dimmed" className={classes.featuresDescription} ta="center" mt="md">
          With a user-friendly interface and a variety of fun, educational games, Scholar Saga creates an immersive learning environment
          that encourages students to take ownership of their education.{" "}
        </Text>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    </>
  );
}
