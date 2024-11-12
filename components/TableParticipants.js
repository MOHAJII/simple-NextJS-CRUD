"use client";
import React from "react";
import { IoPersonRemoveSharp } from "react-icons/io5";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TableParticipants = ({ participants }) => {
  const router = useRouter();

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await fetch(
        `http://localhost:3000/api/participants?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        alert("Participante deleted successfully!!");        
        router.push("/displayParticipant");
      }
    } catch (error) {
      console.log("Error to load...", error);
    }
  };

  return (
    <Table className="text-xl text-left">
      <TableCaption>قائمة المشاركين</TableCaption>
      <TableHeader>
        <TableRow className="my-2">
          <TableHead className="w-[300px] font-bold text-left">
            الاسم الكامل
          </TableHead>
          <TableHead className="w-[300px] font-bold text-center"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {participants.map((participant) => (
          <TableRow key={participant._id}>
            <TableCell className="font-medium">
              {participant.fullName}
            </TableCell>
            <TableCell>
              <IoPersonRemoveSharp
                className="hover:scale-125 cursor-pointer transition-all duration-200 ease-in"
                size={25}
                onClick={() => handleDelete(participant._id)}
              />
            </TableCell>
            <TableCell>
              <Link href={`../app/editParticipant/${participant._id}`}>
                <div className="cursor-pointer text-green-600 bg-green-200 p-1 rounded-lg">
                  Update
                </div>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableParticipants;
