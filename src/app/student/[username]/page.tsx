import {
  AspectRatio,
  Avatar,
  BackgroundImage,
  Card,
  CardSection,
  Center,
  Flex,
  List,
  ListItem,
  Overlay,
  Progress,
  RingProgress,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { IconBook, IconSchool } from "@tabler/icons-react";
import { Student } from "../../../../models/student.model";
import { Subject } from "../../../../models/subject.model";
import connectToDB from "@/app/lib/db";
import Link from "next/link";

interface PageProps {
  params: {
    username: string;
  };
}

export default async function StudentPage({ params }: PageProps) {
  const { username } = params;
  const textures = [
    "kenney_pixel-platformer",
    "kenney_pixel-platformer-farm-expansion",
    "kenney_pixel-platformer-food-expansion",
    "kenney_pixel-platformer-industrial-expansion",
    "kenney_tiny-battle",
    "kenney_tiny-dungeon",
    "kenney_tiny-ski",
    "kenney_tiny-town",
  ];

  try {
    await connectToDB();

    const student = await Student.findOne({ username }).populate([{ path: "subjects_with_exp.subject", model: Subject }]);
    if (!student) {
      return <div>Student not found</div>;
    }

    return (
      <Flex w="100%" p="2rem" direction="column" gap="xl">
        <Flex direction="column" gap="md">
          <Flex w="100%" align="center" gap="md">
            <Avatar size="xl" radius="xs" />
            <Flex direction="column">
              <Title order={2}>
                {student.firstName} {student.lastName}
              </Title>
              <Text>@{student.username}</Text>
            </Flex>
          </Flex>
          <Flex align="center" gap="sm" w="35%">
            <AspectRatio ratio={1 / 1} className="bg-yellow-circle bg-contain bg-no-repeat" w="xl">
              <Center>
                <Title order={4}>26</Title>
              </Center>
            </AspectRatio>
            <Progress value={30} size="sm" w="100%" striped animated radius="xl"></Progress>
          </Flex>
        </Flex>
        <Title>Subjects</Title>
        <SimpleGrid cols={4}>
          {student.subjects_with_exp.map((subject, index) => (
            <Link key={index} href="/learn/cs50">
              <Card withBorder shadow="md" radius="lg" padding="lg">
                <CardSection>
                  <AspectRatio ratio={4 / 1}>
                    <BackgroundImage src={`/assets/textures/${textures[subject.subject.artwork_id]}/Sample.png`}>
                      <Flex p="lg" c="white" direction="column" className="bg-gradient-to-r from-black to-transparent">
                        <Title order={2}>{subject.subject.subject_name}</Title>
                        <Text>Teacher Name</Text>
                      </Flex>
                    </BackgroundImage>
                  </AspectRatio>
                </CardSection>
                <Flex align="center" justify="space-between">
                  <List mt="md">
                    <ListItem icon={<IconSchool />}>
                      {student.lessons_completed || 0}/{student.lessons_assigned || 0} Lessons
                    </ListItem>
                    <ListItem icon={<IconBook />}>
                      {student.assignment_completed || 0}/{student.assignment_assigned || 0} Assignments
                    </ListItem>
                  </List>
                  <RingProgress
                    sections={[
                      {
                        value: ((student.lessons_completed || 0) / (student.lessons_assigned || 1)) * 100,
                        color: "yellow",
                      },
                    ]}
                    label={<Text ta="center">{((student.lessons_completed || 0) / (student.lessons_assigned || 1)) * 100}%</Text>}
                    size={100}
                    thickness={10}
                    roundCaps
                  />
                </Flex>
              </Card>
            </Link>
          ))}
        </SimpleGrid>
      </Flex>
    );
  } catch (error) {
    console.error(error);
    return <div>Error fetching student data</div>;
  }
}
