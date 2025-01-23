"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAuthFetch } from "@/app/(Hooks)/FetchData";
import { FilteredFood } from "./FilteredFoods";

export type CategoryType = {
  categoryName: string;
  _id: string;
};

export type FoodType = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredients: string;
  category: string;
};

export const Dishes = () => {
  const params = useParams();
  const foodCategory: CategoryType[] = useAuthFetch("food-category") || [];
  const foods: FoodType[] = useAuthFetch("food") || [];

  //   const grouped = Object.groupBy(food, ({ category }) => category);

  //   console.log(grouped)

  if (!foods || foods.length === 0) return null;

  return (
    <div className="flex flex-col gap-[54px]">
      {!params.id
        ? foodCategory?.map((category) => {
             const categoryFoods = foods.filter(food => food.category === category._id) 

             if (categoryFoods.length ===0) return null;

            return (
              <div key={category._id}>
                <FilteredFood
                  _id={category._id}
                  categoryName={category.categoryName}
                  foods={categoryFoods}
                />
              </div>
            );
          })
        : foodCategory
            ?.filter((category) => category._id === params.id)
            .map((category) => (
              <div key={category._id}>
                <FilteredFood
                  _id={category._id}
                  categoryName={category.categoryName}
                  foods={foods}
                />
              </div>
            ))}
    </div>
  );
};
