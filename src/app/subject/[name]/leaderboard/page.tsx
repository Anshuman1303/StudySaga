import Leaderboard from '@/components/Leaderboard'
import connectToDB from '@/app/lib/db'
import { Student } from '../../../../../models/student.model'

const LeaderboardComp = async ({ params }: { params: { name: string}}) => {
	const subject = params.name;
	const loggedInUser = "Hannah Ivy"
	try {
		await connectToDB();
		const students = await Student.find({ subjects: subject }).lean();
		students.sort((a, b) => b.subjectExp[b.subjects.indexOf(subject)] - a.subjectExp[a.subjects.indexOf(subject)]);
		const s = JSON.parse(JSON.stringify(students));
		return (
			<Leaderboard data={s} loggedInUser={loggedInUser} subject={subject}></Leaderboard>
	  )
	}
	catch {
		return (
			<div>Some error occurred.</div>
		)
	}
}

export default LeaderboardComp