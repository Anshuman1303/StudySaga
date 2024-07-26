import Leaderboard from '@/components/Leaderboard'

const LeaderboardComp = () => {
	let data = [
		{ name: 'Alice', exp: 34 },
		{ name: 'Bob', exp: 72 },
		{ name: 'Charlie', exp: 55 },
		{ name: 'David', exp: 89 },
		{ name: 'Eva', exp: 47 },
		{ name: 'Frank', exp: 63 },
		{ name: 'Grace', exp: 21 },
		{ name: 'Hannah', exp: 76 },
		{ name: 'Isaac', exp: 90 },
		{ name: 'Judy', exp: 28 },
		{ name: 'Kyle', exp: 41 },
		{ name: 'Laura', exp: 54 },
		{ name: 'Mike', exp: 68 },
		{ name: 'Nina', exp: 83 },
		{ name: 'Oscar', exp: 37 },
		{ name: 'Paul', exp: 65 },
		{ name: 'Quinn', exp: 48 },
		{ name: 'Rachel', exp: 99 },
		{ name: 'Steve', exp: 31 },
		{ name: 'Tina', exp: 58 },
		{ name: 'Ursula', exp: 71 },
	  ];
	data.sort((item1, item2) => item2.exp - item1.exp)
	const loggedInUser = "Kyle"
  return (
		<Leaderboard data={data} loggedInUser={loggedInUser}></Leaderboard>
  )
}

export default LeaderboardComp