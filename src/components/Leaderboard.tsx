"use client";
import { Center, Container, Flex, Stack, Title } from "@mantine/core";
import { useRef, useEffect } from "react";
import { IStudentDocument } from "../../models/student.model";
interface LeaderboardProps {
  data: IStudentDocument[];
  loggedInUser: string;
  subject: string;
}
const Leaderboard: React.FC<LeaderboardProps> = ({ data, loggedInUser, subject }) => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const targetIndex = data.findIndex((item) => item.firstName + " " + item.lastName === loggedInUser);
    if (targetIndex !== -1 && refs.current[targetIndex]) {
      refs.current[targetIndex].scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [data, loggedInUser]);
  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    refs.current[index] = el;
  };
  return (
    <Flex w="100%" py="xl" direction="column" align="center" gap="md">
      <Title order={1}>Leaderboard</Title>
      <Stack w="90%" align="stretch" justify="flex-start" gap={0}>
        {data.map((item, index) => (
          <Container key={index} h={30} bg={index % 2 == 0 ? "#DEDEDE" : "#FFFFFF"} ref={setRef(index)} w={"100%"} fluid>
            {index + 1} : {item.firstName} {item.lastName}
          </Container>
        ))}
      </Stack>
    </Flex>
  );
};

export default Leaderboard;
