"use client";
import { Category } from "../_components/Categories";
import { Dishes } from "../_components/Dishes";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className=" w-[100%] pl-6 pr-10 py-6 flex flex-col gap-6 overflow-scroll">
      <div className=" flex flex-col gap-6">
        <div className="flex justify-end">
        <UserButton />
        </div>
        <Category />
      </div>
      <div>
        <Dishes />
      </div>
    </div>
  );
}
