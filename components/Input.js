"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GetParticipant } from "../app/services/services";
import { IoPersonAdd } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function InputWithButton() {
  const [fullName, setFullName] = useState("");

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName) alert("Participant name is required");

    try {
      const res = await fetch("http://localhost:3000/api/participants", {
        method: "POST",
        headers: {
          "Content-type": "application/js",
        },
        body: JSON.stringify({ fullName }),
      });

      if (res.ok) {
        setFullName("");
      } else {
        throw new Error("Field to add participant");
      }
    } catch (error) {
      console.log("filed Load...", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <Input
        type="text"
        placeholder="مشارك"
        key={"participant"}
        onChange={(e) => {
          setFullName(e.target.value);
        }}
        value={fullName}
      />
      <Button type="submit">
        <IoPersonAdd size={30} className="cursor-pointer hover:scale-50" />
      </Button>
    </form>
  );
}
