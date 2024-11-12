import TableParticipants from "@/components/TableParticipants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

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

const DisplayParticipant = async () => {
  const { participants } = await getParticipants();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <TableParticipants participants={participants} />
        <div className="w-full flex justify-center">
          <Button>
            <Link href={"/"}>Back to home</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default DisplayParticipant;
