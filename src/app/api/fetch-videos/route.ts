import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/app/lib/db";
import { Video } from "../../../../models/video.model";

export async function GET(req: NextRequest) {
        const { searchParams } = new URL(req.url);
        const subject = searchParams.get("subject");
        const standard = searchParams.get("standard");

        try {
                await connectToDB();

                const filters: any = {};
                if (subject) {
                        filters.subject = subject;
                }
                if (standard) {
                        filters.standard = standard;
                }

                const videos = await Video.find(filters);
                return NextResponse.json(videos);
        } catch (error) {
                console.error("Error fetching videos:", error);
                return NextResponse.json(
                        { message: "Error fetching videos" },
                        { status: 500 }
                );
        }
}
