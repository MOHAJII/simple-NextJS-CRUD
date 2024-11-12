import connectMongoDB from "@/libs/mongodb";
import Participant from "@/models/participant";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const newParticipant = await request.json();
    await connectMongoDB();
    await Participant.create(newParticipant);
    return NextResponse.json({message: "Participant Created"}, {status: 201});
}

export const GET = async () => {
    await connectMongoDB();
    const participants = await Participant.find();
    return NextResponse.json({participants});
}

export const DELETE = async (request) => {
    const participantId = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Participant.findByIdAndDelete(participantId);
    return NextResponse.json({ message: "Participant delete successfully"}, {status: 200})
}