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
  Progress,
  RingProgress,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { IconBook, IconSchool } from "@tabler/icons-react";
import { Student } from "../../../../models/student.model";
import connectToDB from "@/app/lib/db";

interface StudentData {
  firstName: string;
  lastName: string;
  username: string;
  regNo: string;
  profilePhoto?: string;
  standard?: string;
  section?: string;
  subjects: string[];
  exp?: number;
  level?: number;
  subjectExp?: number[];
  lessons_assigned?: number;
  assignment_assigned?: number;
  lessons_completed?: number;
  assignment_completed?: number;
}

interface PageProps {
  params: {
    username: string;
  };
}

export default async function StudentPage({ params }: PageProps) {
  const { username } = params;

  try {
    await connectToDB();

    const student = await Student.findOne({ username }).exec();

    if (!student) {
      return <div>Student not found</div>;
    }

    return (
      <Flex w="100%" p="2rem" direction="column" gap="xl">
        <Flex direction="column" gap="md">
          <Flex w="100%" align="center" gap="md">
            <Avatar size="xl" radius="xs" src={student.profilePhoto || null} />
            <Flex direction="column">
              <Title order={2}>
                {student.firstName} {student.lastName}
              </Title>
              <Text>@{student.username}</Text>
            </Flex>
          </Flex>
          <Flex align="center" gap="sm" w="35%">
            <AspectRatio ratio={1 / 1} c="white" className="bg-yellow-circle bg-contain bg-no-repeat" w="xl">
              <Center>
                <Title order={4}>26</Title>
              </Center>
            </AspectRatio>
            <Progress value={30} size="sm" w="100%" striped animated radius="xl"></Progress>
          </Flex>
        </Flex>
        <Title>Subjects</Title>
        <SimpleGrid cols={4}>
          {student.subjects.map((subject, index) => (
            <Card key={index} withBorder shadow="md" radius="lg" padding="lg">
              <CardSection>
                <AspectRatio ratio={4 / 1}>
                  <BackgroundImage src="https://placehold.co/600x400?text=_" p="lg">
                    <Title order={2}>{subject}</Title>
                    <Text>Teacher Name</Text>
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
                      color: "blue",
                    },
                  ]}
                  label={<Text ta="center">{((student.lessons_completed || 0) / (student.lessons_assigned || 1)) * 100}%</Text>}
                  size={100}
                  thickness={10}
                  roundCaps
                />
              </Flex>
            </Card>
          ))}
        </SimpleGrid>
      </Flex>
    );
  } catch (error) {
    console.error(error);
    return <div>Error fetching student data</div>;
  }
}
