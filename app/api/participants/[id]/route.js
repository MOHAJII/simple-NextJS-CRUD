import connectMongoDB from "@/libs/mongodb";
import Participant from "@/models/participant";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  const { id } = params;
  const { newFullName: fullName } = await request.json();
  await connectMongoDB();
  await Participant.findByIdAndUpdate(id, { fullName });
  return NextResponse.json({ message: "Paricipant updated" }, { status: 200});
};

export const GET = async (request, { params }) => {
    const { id } = params;
    await connectMongoDB();
    const participant = await Participant.findOne({ _id: id });
    return NextResponse.json({ participant }, { status: 200 });
}
