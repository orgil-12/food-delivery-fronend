"use client";
import { useEffect, useState } from "react";
import { Header } from "../_components/Header";
import { Categories } from "../_components/Categories";
import { Dishes } from "../_components/Dishes";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div
        className="bg-cover bg-no-repeat bg-center w-full h-[870px]"
        style={{ backgroundImage: `url(/BG.png)` }}
      ></div>
      <div className="px-[240px]">
        <Categories />
        <Dishes/>
      </div>
    </div>
  );
}
