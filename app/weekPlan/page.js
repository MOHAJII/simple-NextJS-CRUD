import CustomTable from "@/components/CustomTable";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const getParticipants = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/participants", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Field to fetch data!!!");

    return res.json();
  } catch (error) {
    console.log("Error loading....", error);
  }
};

const makeGroups = async () => {
  const { participants: data } = await getParticipants();
  const participants = [];
  const gtoups = data.map((participant, index) => {
    participants.push(participant.fullName);
  });

  const shuffleParticipants = [...participants].sort(() => Math.random() - 0.5);

  const couples = [];

  if (shuffleParticipants.length % 2 != 0) shuffleParticipants.push("anonym");

  for (let i = 0; i < shuffleParticipants.length; i += 2)
    couples.push([shuffleParticipants[i], shuffleParticipants[i + 1]]);

  return couples;
};

const page = async () => {
  const couples = await makeGroups();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <CustomTable data={couples} />
        <div className="w-full flex justify-center">
          <Button>
            <Link href={"/"}>Back to home</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default page;
