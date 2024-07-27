import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/app/lib/db";
import { Student } from "../../../../models/student.model";
import { IStudent } from "../../../../models/student.model";
import { Subject, ISubject } from "../../../../models/subject.model";

const generateSampleSubjects = (): ISubject[] => {
        return [
                {
                        subject_id: "1",
                        subject_name: "Math",
                        artwork_id: "1"
                },
                {
                        subject_id: "2",
                        subject_name: "Science",
                        artwork_id: "2"
                },
                {
                        subject_id: "3",
                        subject_name: "History",
                        artwork_id: "3"
                },
                {
                        subject_id: "4",
                        subject_name: "Geography",
                        artwork_id: "4"
                },
                {
                        subject_id: "5",
                        subject_name: "Literature",
                        artwork_id: "5"
                }
        ]
}

const generateSampleData = (subjects):IStudent[] => {
        return [
                {
                        firstName: "John",
                        lastName: "Doe",
                        username: "john.doe",
                        regNo: "S123456",
                        profilePhoto: "https://example.com/photo1.jpg",
                        standard: "10th",
                        section: "A",
                        subjects_with_exp: [
                                {subject: subjects[0], exp: 5},
                                {subject: subjects[1], exp: 2}
                        ],
                        exp: 2,
                        level: 2,
                        lessons_assigned: 5,
                        assignment_assigned: 3,
                        lessons_completed: 4,
                        assignment_completed: 2,
                },
                {
                        firstName: "Jane",
                        lastName: "Smith",
                        username: "jane.smith",
                        regNo: "S123457",
                        profilePhoto: "https://example.com/photo2.jpg",
                        standard: "12th",
                        section: "B",
                        subjects_with_exp:[{subject: subjects[2], exp: 15}, {subject: subjects[0], exp: 12}, {subject: subjects[1], exp: 10}],
                        exp: 3,
                        level: 3,
                        lessons_assigned: 7,
                        assignment_assigned: 5,
                        lessons_completed: 6,
                        assignment_completed: 4,
                },
                {
                        firstName: "Alice",
                        lastName: "Johnson",
                        username: "alice.johnson",
                        regNo: "S123458",
                        profilePhoto: "https://example.com/photo3.jpg",
                        standard: "11th",
                        section: "C",
                        subjects_with_exp: [{subject: subjects[0], exp: 5}, {subject: subjects[4], exp: 1}],
                        exp: 1,
                        level: 1,
                        lessons_assigned: 3,
                        assignment_assigned: 2,
                        lessons_completed: 2,
                        assignment_completed: 1,
                },
                {
                        firstName: "Bob",
                        lastName: "Brown",
                        username: "bob.brown",
                        regNo: "S123459",
                        profilePhoto: "https://example.com/photo4.jpg",
                        standard: "10th",
                        section: "A",
                        subjects_with_exp: [{subject: subjects[2], exp: 5}, {subject: subjects[3], exp: 2}],
                        exp: 2,
                        level: 2,
                        lessons_assigned: 5,
                        assignment_assigned: 4,
                        lessons_completed: 4,
                        assignment_completed: 3,
                },
                {
                        firstName: "Charlie",
                        lastName: "Davis",
                        username: "charlie.davis",
                        regNo: "S123460",
                        profilePhoto: "https://example.com/photo5.jpg",
                        standard: "9th",
                        section: "D",
                        subjects_with_exp: [{subject: subjects[0], exp: 5}, {subject: subjects[1], exp: 2}],
                        exp: 3,
                        level: 3,
                        lessons_assigned: 6,
                        assignment_assigned: 4,
                        lessons_completed: 5,
                        assignment_completed: 3,
                },
                {
                        firstName: "Diana",
                        lastName: "Evans",
                        username: "diana.evans",
                        regNo: "S123461",
                        profilePhoto: "https://example.com/photo6.jpg",
                        standard: "8th",
                        section: "E",
                        subjects_with_exp: [{subject: subjects[0], exp: 3}, {subject: subjects[1], exp: 2}, {subject: subjects[2], exp: 3}],
                        exp: 1,
                        level: 1,
                        lessons_assigned: 4,
                        assignment_assigned: 2,
                        lessons_completed: 3,
                        assignment_completed: 1,
                },
                {
                        firstName: "Ethan",
                        lastName: "Foster",
                        username: "ethan.foster",
                        regNo: "S123462",
                        profilePhoto: "https://example.com/photo7.jpg",
                        standard: "7th",
                        section: "F",
                        subjects_with_exp: [{subject: subjects[0], exp: 25}, {subject: subjects[1], exp: 21}],
                        exp: 2,
                        level: 2,
                        lessons_assigned: 5,
                        assignment_assigned: 3,
                        lessons_completed: 4,
                        assignment_completed: 2,
                },
                {
                        firstName: "Fiona",
                        lastName: "Garcia",
                        username: "fiona.garcia",
                        regNo: "S123463",
                        profilePhoto: "https://example.com/photo8.jpg",
                        standard: "6th",
                        section: "G",
                        subjects_with_exp: [{subject: subjects[0], exp: 5}, {subject: subjects[1], exp: 12}],
                        exp: 1,
                        level: 1,
                        lessons_assigned: 4,
                        assignment_assigned: 2,
                        lessons_completed: 3,
                        assignment_completed: 1,
                },
                {
                        firstName: "George",
                        lastName: "Hall",
                        username: "george.hall",
                        regNo: "S123464",
                        profilePhoto: "https://example.com/photo9.jpg",
                        standard: "5th",
                        section: "H",
                        subjects_with_exp: [{subject: subjects[0], exp: 3}, {subject: subjects[2], exp: 4}],
                        exp: 1,
                        level: 1,
                        lessons_assigned: 3,
                        assignment_assigned: 1,
                        lessons_completed: 2,
                        assignment_completed: 1,
                },
                {
                        firstName: "Hannah",
                        lastName: "Ivy",
                        username: "hannah.ivy",
                        regNo: "S123465",
                        profilePhoto: "https://example.com/photo10.jpg",
                        standard: "4th",
                        section: "I",
                        subjects_with_exp: [{subject: subjects[0], exp: 6}, {subject: subjects[2], exp: 8}],
                        exp: 1,
                        level: 1,
                        lessons_assigned: 3,
                        assignment_assigned: 2,
                        lessons_completed: 2,
                        assignment_completed: 1,
                },
                {
                        firstName: "Ian",
                        lastName: "Jones",
                        username: "ian.jones",
                        regNo: "S123466",
                        profilePhoto: "https://example.com/photo11.jpg",
                        standard: "3rd",
                        section: "J",
                        subjects_with_exp: [{subject: subjects[2], exp: 6}, {subject: subjects[3], exp: 3}],
                        exp: 1,
                        level: 1,
                        lessons_assigned: 2,
                        assignment_assigned: 1,
                        lessons_completed: 1,
                        assignment_completed: 1,
                },
                {
                        firstName: "Julia",
                        lastName: "King",
                        username: "julia.king",
                        regNo: "S123467",
                        profilePhoto: "https://example.com/photo12.jpg",
                        standard: "2nd",
                        section: "K",
                        subjects_with_exp: [{subject: subjects[0], exp: 4}, {subject: subjects[1], exp: 4}],
                        exp: 1,
                        level: 1,
                        lessons_assigned: 2,
                        assignment_assigned: 1,
                        lessons_completed: 1,
                        assignment_completed: 1,
                },
                {
                        firstName: "Kevin",
                        lastName: "Lewis",
                        username: "kevin.lewis",
                        regNo: "S123468",
                        profilePhoto: "https://example.com/photo13.jpg",
                        standard: "1st",
                        section: "L",
                        subjects_with_exp: [{subject: subjects[2], exp: 5}, {subject: subjects[4], exp: 12}],
                        exp: 1,
                        level: 1,
                        lessons_assigned: 1,
                        assignment_assigned: 1,
                        lessons_completed: 1,
                        assignment_completed: 1,
                },
                {
                        firstName: "Laura",
                        lastName: "Miller",
                        username: "laura.miller",
                        regNo: "S123469",
                        profilePhoto: "https://example.com/photo14.jpg",
                        standard: "KG",
                        section: "M",
                        subjects_with_exp: [{subject: subjects[1], exp: 5}, {subject: subjects[2], exp: 2}],
                        exp: 1,
                        level: 1,
                        lessons_assigned: 1,
                        assignment_assigned: 1,
                        lessons_completed: 1,
                        assignment_completed: 1,
                },
                {
                        firstName: "Michael",
                        lastName: "Nelson",
                        username: "michael.nelson",
                        regNo: "S123470",
                        profilePhoto: "https://example.com/photo15.jpg",
                        standard: "Nursery",
                        section: "N",
                        subjects_with_exp: [{subject: subjects[1], exp: 4}, {subject: subjects[2], exp: 3}],
                        exp: 1,
                        level: 1,
                        lessons_assigned: 1,
                        assignment_assigned: 1,
                        lessons_completed: 1,
                        assignment_completed: 1,
                },
                {
                        firstName: "Natalie",
                        lastName: "O'Connor",
                        username: "natalie.oconnor",
                        regNo: "S123471",
                        profilePhoto: "https://example.com/photo16.jpg",
                        standard: "10th",
                        section: "A",
                        subjects_with_exp: [{subject: subjects[0], exp: 18}, {subject: subjects[3], exp: 9}],
                        exp: 2,
                        level: 2,
                        lessons_assigned: 5,
                        assignment_assigned: 4,
                        lessons_completed: 4,
                        assignment_completed: 3,
                },
                {
                        firstName: "Oliver",
                        lastName: "Perry",
                        username: "oliver.perry",
                        regNo: "S123472",
                        profilePhoto: "https://example.com/photo17.jpg",
                        standard: "9th",
                        section: "B",
                        subjects_with_exp: [{subject: subjects[0], exp: 5}, {subject: subjects[1], exp: 2}, {subject: subjects[3], exp: 12}],
                        exp: 2,
                        level: 2,
                        lessons_assigned: 6,
                        assignment_assigned: 4,
                        lessons_completed: 5,
                        assignment_completed: 3,
                },
                {
                        firstName: "Patricia",
                        lastName: "Quinn",
                        username: "patricia.quinn",
                        regNo: "S123473",
                        profilePhoto: "https://example.com/photo18.jpg",
                        standard: "8th",
                        section: "C",
                        subjects_with_exp: [{subject: subjects[4], exp: 15}, {subject: subjects[1], exp: 9}],
                        exp: 2,
                        level: 2,
                        lessons_assigned: 5,
                        assignment_assigned: 3,
                        lessons_completed: 4,
                        assignment_completed: 2,
                },
                {
                        firstName: "Quentin",
                        lastName: "Roberts",
                        username: "quentin.roberts",
                        regNo: "S123474",
                        profilePhoto: "https://example.com/photo19.jpg",
                        standard: "7th",
                        section: "D",
                        subjects_with_exp: [{subject: subjects[0], exp: 1}, {subject: subjects[3], exp: 22}],
                        exp: 1,
                        level: 1,
                        lessons_assigned: 4,
                        assignment_assigned: 2,
                        lessons_completed: 3,
                        assignment_completed: 1,
                },
                {
                        firstName: "Rachel",
                        lastName: "Stewart",
                        username: "rachel.stewart",
                        regNo: "S123475",
                        profilePhoto: "https://example.com/photo20.jpg",
                        standard: "6th",
                        section: "E",
                        subjects_with_exp: [{subject: subjects[2], exp: 7}, {subject: subjects[4], exp: 3}],
                        exp: 1,
                        level: 1,
                        lessons_assigned: 4,
                        assignment_assigned: 2,
                        lessons_completed: 3,
                        assignment_completed: 1,
                },
        ];
};

export async function GET(request: NextRequest) {
        try {
                await connectToDB();
                await Subject.insertMany(generateSampleSubjects());
                const subs = await Subject.find().lean();
                const subjects = subs.map(sub => sub?._id);
                console.log(subjects)
                const students = await Student.insertMany(generateSampleData(subjects));

                return NextResponse.json({ success: true, data: students });
        } catch (error) {
                console.error(error);
                return NextResponse.json({
                        success: false,
                        error: "Error adding sample data",
                });
        }
}
