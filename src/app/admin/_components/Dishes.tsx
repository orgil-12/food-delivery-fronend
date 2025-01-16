"use client";
import { useEffect, useState } from "react";
import { FilteredFood } from "./FilteredFood";

export type CategoryType = {
  categoryName: string;
  _id: string;
};

export const Dishes = () => {
  const [foodCategory, setFoodCategory] = useState<CategoryType[]>();

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch("http://localhost:8000/food-category");
      const data = await response.json();
      setFoodCategory(data);
    };

    fetchCategory();
  }, []);

  //   const grouped = Object.groupBy(food, ({ category }) => category);

  //   console.log(grouped)
  return (
    <div className="flex flex-col gap-5">
      {foodCategory?.map((category) => (
        <div key={category._id}>
          <FilteredFood
            _id={category._id}
            categoryName={category.categoryName}
          />
        </div>
      ))}
    </div>
  );
};
