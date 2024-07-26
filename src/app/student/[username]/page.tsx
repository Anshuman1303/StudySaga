import {
        AspectRatio,
        Avatar,
        BackgroundImage,
        Card,
        CardSection,
        Flex,
        Image,
        List,
        ListItem,
        RingProgress,
        SimpleGrid,
        Text,
        Title,
} from "@mantine/core";
import { IconBook, IconSchool } from "@tabler/icons-react";
export default function Home({ params }: { params: { username: string } }) {
        return (
                <Flex w="100%" p="2rem" direction="column" gap="xl">
                        <Flex w="100%" align="center" gap="md">
                                <Avatar size={"xl"} radius="xs"></Avatar>
                                <Flex direction="column">
                                        <Title order={2}>
                                                Full Display Name
                                        </Title>
                                        <Text>@{params.username}</Text>
                                </Flex>
                        </Flex>
                        <Title>Subjects</Title>
                        <SimpleGrid cols={4}>
                                <Card
                                        withBorder
                                        shadow="md"
                                        radius="lg"
                                        padding="lg">
                                        <CardSection>
                                                <AspectRatio ratio={4 / 1}>
                                                        <BackgroundImage
                                                                src="https://placehold.co/600x400?text=_"
                                                                p="lg">
                                                                <Title
                                                                        order={
                                                                                2
                                                                        }>
                                                                        Subject
                                                                        Name
                                                                </Title>
                                                                <Text>
                                                                        Teacher
                                                                        Name
                                                                </Text>
                                                        </BackgroundImage>
                                                </AspectRatio>
                                        </CardSection>
                                        <Flex
                                                align="center"
                                                justify="space-between">
                                                <List mt="md">
                                                        <ListItem
                                                                icon={
                                                                        <IconSchool />
                                                                }>
                                                                15/35 Lessons
                                                        </ListItem>
                                                        <ListItem
                                                                icon={
                                                                        <IconBook />
                                                                }>
                                                                12/30
                                                                Assignments
                                                        </ListItem>
                                                </List>
                                                <RingProgress
                                                        sections={[
                                                                {
                                                                        value: 86,
                                                                        color: "blue",
                                                                },
                                                        ]}
                                                        label={
                                                                <Text ta="center">
                                                                        86%
                                                                </Text>
                                                        }
                                                        size={100}
                                                        thickness={10}
                                                        roundCaps
                                                />
                                        </Flex>
                                </Card>
                                <Card
                                        withBorder
                                        shadow="md"
                                        radius="lg"
                                        padding="lg">
                                        <CardSection>
                                                <AspectRatio ratio={4 / 1}>
                                                        <BackgroundImage
                                                                src="https://placehold.co/600x400?text=_"
                                                                p="lg">
                                                                <Title
                                                                        order={
                                                                                2
                                                                        }>
                                                                        Subject
                                                                        Name
                                                                </Title>
                                                                <Text>
                                                                        Teacher
                                                                        Name
                                                                </Text>
                                                        </BackgroundImage>
                                                </AspectRatio>
                                        </CardSection>
                                        <Flex
                                                align="center"
                                                justify="space-between">
                                                <List mt="md">
                                                        <ListItem
                                                                icon={
                                                                        <IconSchool />
                                                                }>
                                                                15/35 Lessons
                                                        </ListItem>
                                                        <ListItem
                                                                icon={
                                                                        <IconBook />
                                                                }>
                                                                12/30
                                                                Assignments
                                                        </ListItem>
                                                </List>
                                                <RingProgress
                                                        sections={[
                                                                {
                                                                        value: 86,
                                                                        color: "blue",
                                                                },
                                                        ]}
                                                        label={
                                                                <Text ta="center">
                                                                        86%
                                                                </Text>
                                                        }
                                                        size={100}
                                                        thickness={10}
                                                        roundCaps
                                                />
                                        </Flex>
                                </Card>
                                <Card
                                        withBorder
                                        shadow="md"
                                        radius="lg"
                                        padding="lg">
                                        <CardSection>
                                                <AspectRatio ratio={4 / 1}>
                                                        <BackgroundImage
                                                                src="https://placehold.co/600x400?text=_"
                                                                p="lg">
                                                                <Title
                                                                        order={
                                                                                2
                                                                        }>
                                                                        Subject
                                                                        Name
                                                                </Title>
                                                                <Text>
                                                                        Teacher
                                                                        Name
                                                                </Text>
                                                        </BackgroundImage>
                                                </AspectRatio>
                                        </CardSection>
                                        <Flex
                                                align="center"
                                                justify="space-between">
                                                <List mt="md">
                                                        <ListItem
                                                                icon={
                                                                        <IconSchool />
                                                                }>
                                                                15/35 Lessons
                                                        </ListItem>
                                                        <ListItem
                                                                icon={
                                                                        <IconBook />
                                                                }>
                                                                12/30
                                                                Assignments
                                                        </ListItem>
                                                </List>
                                                <RingProgress
                                                        sections={[
                                                                {
                                                                        value: 86,
                                                                        color: "blue",
                                                                },
                                                        ]}
                                                        label={
                                                                <Text ta="center">
                                                                        86%
                                                                </Text>
                                                        }
                                                        size={100}
                                                        thickness={10}
                                                        roundCaps
                                                />
                                        </Flex>
                                </Card>
                                <Card
                                        withBorder
                                        shadow="md"
                                        radius="lg"
                                        padding="lg">
                                        <CardSection>
                                                <AspectRatio ratio={4 / 1}>
                                                        <BackgroundImage
                                                                src="https://placehold.co/600x400?text=_"
                                                                p="lg">
                                                                <Title
                                                                        order={
                                                                                2
                                                                        }>
                                                                        Subject
                                                                        Name
                                                                </Title>
                                                                <Text>
                                                                        Teacher
                                                                        Name
                                                                </Text>
                                                        </BackgroundImage>
                                                </AspectRatio>
                                        </CardSection>
                                        <Flex
                                                align="center"
                                                justify="space-between">
                                                <List mt="md">
                                                        <ListItem
                                                                icon={
                                                                        <IconSchool />
                                                                }>
                                                                15/35 Lessons
                                                        </ListItem>
                                                        <ListItem
                                                                icon={
                                                                        <IconBook />
                                                                }>
                                                                12/30
                                                                Assignments
                                                        </ListItem>
                                                </List>
                                                <RingProgress
                                                        sections={[
                                                                {
                                                                        value: 86,
                                                                        color: "blue",
                                                                },
                                                        ]}
                                                        label={
                                                                <Text ta="center">
                                                                        86%
                                                                </Text>
                                                        }
                                                        size={100}
                                                        thickness={10}
                                                        roundCaps
                                                />
                                        </Flex>
                                </Card>
                                <Card
                                        withBorder
                                        shadow="md"
                                        radius="lg"
                                        padding="lg">
                                        <CardSection>
                                                <AspectRatio ratio={4 / 1}>
                                                        <BackgroundImage
                                                                src="https://placehold.co/600x400?text=_"
                                                                p="lg">
                                                                <Title
                                                                        order={
                                                                                2
                                                                        }>
                                                                        Subject
                                                                        Name
                                                                </Title>
                                                                <Text>
                                                                        Teacher
                                                                        Name
                                                                </Text>
                                                        </BackgroundImage>
                                                </AspectRatio>
                                        </CardSection>
                                        <Flex
                                                align="center"
                                                justify="space-between">
                                                <List mt="md">
                                                        <ListItem
                                                                icon={
                                                                        <IconSchool />
                                                                }>
                                                                15/35 Lessons
                                                        </ListItem>
                                                        <ListItem
                                                                icon={
                                                                        <IconBook />
                                                                }>
                                                                12/30
                                                                Assignments
                                                        </ListItem>
                                                </List>
                                                <RingProgress
                                                        sections={[
                                                                {
                                                                        value: 86,
                                                                        color: "blue",
                                                                },
                                                        ]}
                                                        label={
                                                                <Text ta="center">
                                                                        86%
                                                                </Text>
                                                        }
                                                        size={100}
                                                        thickness={10}
                                                        roundCaps
                                                />
                                        </Flex>
                                </Card>
                                <Card
                                        withBorder
                                        shadow="md"
                                        radius="lg"
                                        padding="lg">
                                        <CardSection>
                                                <AspectRatio ratio={4 / 1}>
                                                        <BackgroundImage
                                                                src="https://placehold.co/600x400?text=_"
                                                                p="lg">
                                                                <Title
                                                                        order={
                                                                                2
                                                                        }>
                                                                        Subject
                                                                        Name
                                                                </Title>
                                                                <Text>
                                                                        Teacher
                                                                        Name
                                                                </Text>
                                                        </BackgroundImage>
                                                </AspectRatio>
                                        </CardSection>
                                        <Flex
                                                align="center"
                                                justify="space-between">
                                                <List mt="md">
                                                        <ListItem
                                                                icon={
                                                                        <IconSchool />
                                                                }>
                                                                15/35 Lessons
                                                        </ListItem>
                                                        <ListItem
                                                                icon={
                                                                        <IconBook />
                                                                }>
                                                                12/30
                                                                Assignments
                                                        </ListItem>
                                                </List>
                                                <RingProgress
                                                        sections={[
                                                                {
                                                                        value: 86,
                                                                        color: "blue",
                                                                },
                                                        ]}
                                                        label={
                                                                <Text ta="center">
                                                                        86%
                                                                </Text>
                                                        }
                                                        size={100}
                                                        thickness={10}
                                                        roundCaps
                                                />
                                        </Flex>
                                </Card>
                                <Card
                                        withBorder
                                        shadow="md"
                                        radius="lg"
                                        padding="lg">
                                        <CardSection>
                                                <AspectRatio ratio={4 / 1}>
                                                        <BackgroundImage
                                                                src="https://placehold.co/600x400?text=_"
                                                                p="lg">
                                                                <Title
                                                                        order={
                                                                                2
                                                                        }>
                                                                        Subject
                                                                        Name
                                                                </Title>
                                                                <Text>
                                                                        Teacher
                                                                        Name
                                                                </Text>
                                                        </BackgroundImage>
                                                </AspectRatio>
                                        </CardSection>
                                        <Flex
                                                align="center"
                                                justify="space-between">
                                                <List mt="md">
                                                        <ListItem
                                                                icon={
                                                                        <IconSchool />
                                                                }>
                                                                15/35 Lessons
                                                        </ListItem>
                                                        <ListItem
                                                                icon={
                                                                        <IconBook />
                                                                }>
                                                                12/30
                                                                Assignments
                                                        </ListItem>
                                                </List>
                                                <RingProgress
                                                        sections={[
                                                                {
                                                                        value: 86,
                                                                        color: "blue",
                                                                },
                                                        ]}
                                                        label={
                                                                <Text ta="center">
                                                                        86%
                                                                </Text>
                                                        }
                                                        size={100}
                                                        thickness={10}
                                                        roundCaps
                                                />
                                        </Flex>
                                </Card>
                                <Card
                                        withBorder
                                        shadow="md"
                                        radius="lg"
                                        padding="lg">
                                        <CardSection>
                                                <AspectRatio ratio={4 / 1}>
                                                        <BackgroundImage
                                                                src="https://placehold.co/600x400?text=_"
                                                                p="lg">
                                                                <Title
                                                                        order={
                                                                                2
                                                                        }>
                                                                        Subject
                                                                        Name
                                                                </Title>
                                                                <Text>
                                                                        Teacher
                                                                        Name
                                                                </Text>
                                                        </BackgroundImage>
                                                </AspectRatio>
                                        </CardSection>
                                        <Flex
                                                align="center"
                                                justify="space-between">
                                                <List mt="md">
                                                        <ListItem
                                                                icon={
                                                                        <IconSchool />
                                                                }>
                                                                15/35 Lessons
                                                        </ListItem>
                                                        <ListItem
                                                                icon={
                                                                        <IconBook />
                                                                }>
                                                                12/30
                                                                Assignments
                                                        </ListItem>
                                                </List>
                                                <RingProgress
                                                        sections={[
                                                                {
                                                                        value: 86,
                                                                        color: "blue",
                                                                },
                                                        ]}
                                                        label={
                                                                <Text ta="center">
                                                                        86%
                                                                </Text>
                                                        }
                                                        size={100}
                                                        thickness={10}
                                                        roundCaps
                                                />
                                        </Flex>
                                </Card>
                                <Card
                                        withBorder
                                        shadow="md"
                                        radius="lg"
                                        padding="lg">
                                        <CardSection>
                                                <AspectRatio ratio={4 / 1}>
                                                        <BackgroundImage
                                                                src="https://placehold.co/600x400?text=_"
                                                                p="lg">
                                                                <Title
                                                                        order={
                                                                                2
                                                                        }>
                                                                        Subject
                                                                        Name
                                                                </Title>
                                                                <Text>
                                                                        Teacher
                                                                        Name
                                                                </Text>
                                                        </BackgroundImage>
                                                </AspectRatio>
                                        </CardSection>
                                        <Flex
                                                align="center"
                                                justify="space-between">
                                                <List mt="md">
                                                        <ListItem
                                                                icon={
                                                                        <IconSchool />
                                                                }>
                                                                15/35 Lessons
                                                        </ListItem>
                                                        <ListItem
                                                                icon={
                                                                        <IconBook />
                                                                }>
                                                                12/30
                                                                Assignments
                                                        </ListItem>
                                                </List>
                                                <RingProgress
                                                        sections={[
                                                                {
                                                                        value: 86,
                                                                        color: "blue",
                                                                },
                                                        ]}
                                                        label={
                                                                <Text ta="center">
                                                                        86%
                                                                </Text>
                                                        }
                                                        size={100}
                                                        thickness={10}
                                                        roundCaps
                                                />
                                        </Flex>
                                </Card>
                                <Card
                                        withBorder
                                        shadow="md"
                                        radius="lg"
                                        padding="lg">
                                        <CardSection>
                                                <AspectRatio ratio={4 / 1}>
                                                        <BackgroundImage
                                                                src="https://placehold.co/600x400?text=_"
                                                                p="lg">
                                                                <Title
                                                                        order={
                                                                                2
                                                                        }>
                                                                        Subject
                                                                        Name
                                                                </Title>
                                                                <Text>
                                                                        Teacher
                                                                        Name
                                                                </Text>
                                                        </BackgroundImage>
                                                </AspectRatio>
                                        </CardSection>
                                        <Flex
                                                align="center"
                                                justify="space-between">
                                                <List mt="md">
                                                        <ListItem
                                                                icon={
                                                                        <IconSchool />
                                                                }>
                                                                15/35 Lessons
                                                        </ListItem>
                                                        <ListItem
                                                                icon={
                                                                        <IconBook />
                                                                }>
                                                                12/30
                                                                Assignments
                                                        </ListItem>
                                                </List>
                                                <RingProgress
                                                        sections={[
                                                                {
                                                                        value: 86,
                                                                        color: "blue",
                                                                },
                                                        ]}
                                                        label={
                                                                <Text ta="center">
                                                                        86%
                                                                </Text>
                                                        }
                                                        size={100}
                                                        thickness={10}
                                                        roundCaps
                                                />
                                        </Flex>
                                </Card>
                        </SimpleGrid>
                </Flex>
        );
}
