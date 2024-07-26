"use client"
import { Container, Stack } from '@mantine/core';
import { useRef, useEffect } from 'react';
interface Item {
	name: string;
	exp: number;
}
interface LeaderboardProps {
	data: Item[],
	loggedInUser: string	
}
const Leaderboard: React.FC<LeaderboardProps> = ({ data, loggedInUser }) => {
	const refs = useRef<(HTMLDivElement | null)[]>([]);
	useEffect(() => {
		const targetIndex = data.findIndex(item => item.name === loggedInUser);
		if (targetIndex !== -1 && refs.current[targetIndex]) {
		  refs.current[targetIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
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
		{data.map((item, index) => <Container key={index} h={30} bg={index % 2 == 0 ? "#DEDEDE" : "#FFFFFF"}  ref={setRef(index)} w={'100%'} fluid>{index + 1} : {item.name} {item.exp}</Container>)}
	</Stack>
  )
}

export default Leaderboard