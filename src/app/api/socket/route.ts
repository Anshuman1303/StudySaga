import { NextResponse } from "next/server";
import { server } from "../../../server";

export async function GET() {
        // This API route is just to check if the server is running
        return NextResponse.json({ message: "Socket.IO server running" });
}
