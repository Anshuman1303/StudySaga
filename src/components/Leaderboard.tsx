"use client"
import { Container, Stack } from '@mantine/core';
import { useRef, useEffect } from 'react';
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
interface LeaderboardProps {
	data: StudentData[],
	loggedInUser: string,
	subject: string
}
const Leaderboard: React.FC<LeaderboardProps> = ({ data, loggedInUser, subject }) => {
	const refs = useRef<(HTMLDivElement | null)[]>([]);
	useEffect(() => {
		const targetIndex = data.findIndex(item => item.firstName + ' ' + item.lastName === loggedInUser);
		if (targetIndex !== -1 && refs.current[targetIndex]) {
		  refs.current[targetIndex].scrollIntoView({ behavior: 'smooth', block: 'end' });
		}
	  }, [data, loggedInUser]);
	  const setRef = (index: number) => (el: HTMLDivElement | null) => {
		refs.current[index] = el;
	  };
  return (
	<Stack
		m={"0 auto"}
		w='90%'
		align='stretch'
		justify='flex-start'
		gap={0}
	>
		{data.map((item, index) => <Container key={index} h={30} bg={index % 2 == 0 ? "#DEDEDE" : "#FFFFFF"}  ref={setRef(index)} w={'100%'} fluid>{index + 1} : {item.firstName} {item.lastName} {item.subjectExp[item.subjects.indexOf(subject)]}</Container>)}
	</Stack>
  )
}

export default Leaderboard