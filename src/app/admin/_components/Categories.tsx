"use client";
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
    <div>
      {foodCategory?.map((category) => {
        return <div key={category._id}>{category.categoryName}</div>;
      })}
    </div>
  );
};
