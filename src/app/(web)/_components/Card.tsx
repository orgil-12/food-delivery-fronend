import { Card } from "@/components/ui/card";
import React, { use, useEffect, useState } from "react";

export const CardComp = ({ food, id }: any) => {
  return (
    <Card className="border rounded-[20px] bg-background p-4 w-[397.33px] h-[342px] flex flex-col gap-5 items-center  ">
      <div
        className={`w-[365.33px] h-[210px]  bg-cover bg-center rounded-xl flex justify-end items-end p-5`}
        style={{ backgroundImage: `url(${food.image})` }}
      >
      </div>
      <div className="grid gap-2">
        <div className="flex justify-between items-center">
          <span className="text-red-500 text-2xl font-semibold ">{food.name}</span>
          <span className="text-lg font-semibold ">${food.price}</span>
        </div>
        <h4 className="text-sm">{food.ingredients}</h4>
      </div>
    </Card>
  );
};
