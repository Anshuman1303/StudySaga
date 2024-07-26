import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";
import connectToDB from "@/app/lib/db";
import { Video } from "../../../../models/video.model";

export async function POST(req: NextRequest) {
        try {
                await connectToDB();

                const filePath = path.join(process.cwd(), "data/video.json");
                const data = readFileSync(filePath, "utf-8");
                const sampleData = JSON.parse(data);

                await Video.insertMany(sampleData);
                console.log("Sample data added successfully");

                return NextResponse.json({
                        message: "Sample data added successfully",
                });
        } catch (error) {
                console.error("Error adding sample data:", error);
                return NextResponse.json(
                        { message: "Error adding sample data" },
                        { status: 500 }
                );
        }
}
