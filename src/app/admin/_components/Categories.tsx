"use client";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

type CategoryType = {
  categoryName: string;
  _id: string;
};

export const Category = () => {
  const [foodCategory, setFoodCategory] = useState<CategoryType[]>();

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch("http://localhost:8000/food-category");
      const data = await response.json();
      setFoodCategory(data);
    };

    fetchCategory();
  });

  return (
    <div className=" w-full p-6 rounded-xl  flex flex-col gap-4 bg-background ">
      <h4 className=" text-xl font-semibold  ">Dishes Category</h4>
      <div className="flex flex-wrap gap-3 ">
        {foodCategory?.map((category) => {
          return <Badge variant="outline" key={category._id} className=" rounded-full border py-2 px-4 flex gap-2 text-sm font-medium ">{category.categoryName}</Badge>;
        })}
      </div>
    </div>
  );
};
