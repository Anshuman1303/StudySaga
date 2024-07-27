"use client";
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Avatar,
  Menu,
  MenuTarget,
  MenuDropdown,
} from "@mantine/core";
import Logo from "../Logo/Logo";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconSettings,
  IconLogout,
  IconUserScan,
} from "@tabler/icons-react";
import classes from "./Header.module.css";
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{
              width: rem(22),
              height: rem(22),
            }}
            color={theme.colors.yellow[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link href="/" className="h-full">
            <Logo h="100%" />
          </Link>
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Home
            </a>
            <a href="/learn/cs50" className={classes.link}>
              Learn
            </a>
            <a href="/student/john.doe" className={classes.link}>
              Academy
            </a>
            <a href="/subject/Math/leaderboard" className={classes.link}>
              Leaderboard
            </a>
          </Group>
          <SignedOut>
            <Group visibleFrom="sm">
              <SignInButton mode="modal">
                <Button variant="default">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button>Sign Up</Button>
              </SignUpButton>
            </Group>
          </SignedOut>
          <SignedIn>
            <Group visibleFrom="sm">
              <Menu trigger="click-hover">
                <MenuTarget>
                  <UnstyledButton>
                    <Avatar></Avatar>
                  </UnstyledButton>
                </MenuTarget>
                <MenuDropdown>
                  <Menu.Item leftSection={<IconUserScan style={{ width: rem(14), height: rem(14) }} />}>
                    <Link href="/student/john.doe">Profile</Link>
                  </Menu.Item>
                  <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>Settings</Menu.Item>
                  <Menu.Divider />
                  <Menu.Item leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}>
                    <SignOutButton />
                  </Menu.Item>
                </MenuDropdown>
              </Menu>
            </Group>
          </SignedIn>
          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer opened={drawerOpened} onClose={closeDrawer} size="100%" padding="md" title="Navigation" hiddenFrom="sm" zIndex={1000000}>
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="/" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{
                  width: rem(16),
                  height: rem(16),
                }}
                color={theme.colors.yellow[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <SignInButton mode="modal">
              <Button variant="default" onClick={toggleDrawer}>
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button onClick={toggleDrawer}>Sign Up</Button>
            </SignUpButton>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
