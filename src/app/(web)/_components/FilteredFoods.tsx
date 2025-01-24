"use client";
import { useEffect, useState } from "react";
import { CategoryType } from "./Dishes";

import { Card } from "@/components/ui/card";
import { AddDish } from "@/app/admin/_components/AddDish";
import { FoodType } from "@/app/admin/_components/FilteredFood";
import { CardComp } from "./Card";



interface FilteredFoodProps {
  _id: string;
  categoryName: string;
  foods: FoodType[];
}

export const FilteredFood = ({ _id, categoryName, foods }: FilteredFoodProps) => {


  return (
    <div className="w-full p-5 flex flex-col gap-[54px] rounded-xl">
      <h4 className=" text-3xl font-semibold text-primary-foreground  ">{categoryName}</h4>
      <div className="flex flex-wrap gap-9">
        {foods?.map(
          (food) =>
            food.category === _id &&  (
              <div key={food._id}>
                <CardComp food={food} _id={_id} />
              </div>
            )
        )}
      </div>
    </div>
  );
};
