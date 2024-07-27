import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/app/lib/db";
import { Student } from "../../../../../models/student.model";

export async function GET(
        request: NextRequest,
        { params }: { params: { username: string } }
) {
        const { username } = params;

        try {
                await connectToDB();

                const student = await Student.findOne({ username });

                if (!student) {
                        return NextResponse.json(
                                {
                                        success: false,
                                        message: "Student not found",
                                },
                                { status: 404 }
                        );
                }

                return NextResponse.json({ success: true, data: student });
        } catch (error) {
                console.error(error);
                return NextResponse.json(
                        {
                                success: false,
                                message: "Error fetching student data",
                        },
                        { status: 500 }
                );
        }
}
