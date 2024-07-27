import {
  AspectRatio,
  Badge,
  Button,
  Card,
  Flex,
  Stack,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
  Timeline,
  TimelineItem,
  Title,
} from "@mantine/core";
const vids = [
  "https://www.youtube.com/embed/3LPJfIKxwWc?si=5xCMjj9rWzaziJgD",
  "https://www.youtube.com/embed/cwtpLIWylAw?si=hrw7B8E8mhAQ757U",
  "https://www.youtube.com/embed/4vU4aEFmTSo?si=3q2CjTUiFa3enha5",
  "https://www.youtube.com/embed/jZzyERW7h1A?si=XUhhlgDR3AKHFLGE",
  "https://www.youtube.com/embed/F9-yqoS7b8w?si=0SxsyX82UmH0WN22",
  "https://www.youtube.com/embed/0euvEdPwQnQ?si=Th0AON-G98lCZzzn",
  "https://www.youtube.com/embed/EHi0RDZ31VA?si=O70KTx7GKT8-Md5H",
  "https://www.youtube.com/embed/6X58aP7yXC4?si=O4rqllFAzabquuYt",
  "https://www.youtube.com/embed/1RCMYG8RUSE?si=O-CD928zisyH-nr5",
  "https://www.youtube.com/embed/ciz2UaifaNM?si=ggndrOsEXktjniZf",
  "https://www.youtube.com/embed/-aqUek49iL8?si=GhDvNi9TStD_KT9X",
  "https://www.youtube.com/embed/EKof-cJiTG8?si=RMPk_QiQgofUMK7T",
];
const assignments = [
  "Assignment 1",
  "Assignment 2",
  "Assignment 3",
  "Assignment 4",
  "Assignment 5",
  "Assignment 6",
  "Assignment 7",
  "Assignment 8",
  "Assignment 9",
  "Assignment 10",
  "Assignment 11",
];
export default function SubjectPage() {
  return (
    <Flex w="100%" justify="stretch">
      <Tabs variant="outline" defaultValue="lessons" w="100%" py="lg" px="md">
        <TabsList>
          <TabsTab value="lessons">Lessons</TabsTab>
          <TabsTab value="assignments">Assignments</TabsTab>
        </TabsList>
        <TabsPanel value="lessons" p="lg">
          <Timeline active={1} bulletSize={24}>
            {vids.map((vid, index) => (
              <TimelineItem key={index} bullet={<>{index + 1}</>}>
                <Flex direction="column" w="70%">
                  <Title>Video Title</Title>
                  <Flex w="100%" gap="md">
                    <AspectRatio ratio={16 / 9} w="100%">
                      <iframe
                        src={vid}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-xl"
                      />
                    </AspectRatio>
                    <Text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui est, magni pariatur voluptatem cum commodi tempore
                      incidunt quasi placeat numquam tenetur voluptates? Ex debitis harum ullam ducimus quo, fugit voluptatem?
                    </Text>
                  </Flex>
                </Flex>
              </TimelineItem>
            ))}
          </Timeline>
        </TabsPanel>
        <TabsPanel value="assignments" p="xl">
          <Stack w="100%">
            {assignments.map((assignment, index) => (
              <Card key={index} w="100%" shadow="md" withBorder py="xs">
                <Flex w="100%" align="center" justify="space-between">
                  <Flex direction="column">
                    <Title order={3}>{assignment}</Title>
                    <Text c="dimmed" size="sm">
                      Teacher Name
                    </Text>
                  </Flex>
                  <Flex gap="sm" align="center">
                    <Badge>Quiz</Badge>
                    <Text>Due: 30/07/2024</Text>
                    <Button>Attemt</Button>
                  </Flex>
                </Flex>
              </Card>
            ))}
          </Stack>
        </TabsPanel>
      </Tabs>
    </Flex>
  );
}
