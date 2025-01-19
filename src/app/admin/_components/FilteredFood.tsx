"use client";
import { useEffect, useState } from "react";
import { CategoryType } from "./Dishes";

import { Card } from "@/components/ui/card";
import { AddDish } from "./AddDish";
import { CardComp } from "./Card";

export type FoodType = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredients: string;
  category: string;
};

export const FilteredFood = ({ _id, categoryName }: CategoryType) => {
  const [foods, setFoods] = useState<FoodType[]>();
  const [food, setFood] = useState({
    name: "",
    price: 0,
    ingredients: "",
    image: "",
    category: _id,
  });

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch("http://localhost:8000/food");
      const data = await response.json();
      setFoods(data);
    };

    fetchFood();
  }, []);

  const onChange = (e: any) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "food-delivery");

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dg1tgxuba/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const dataJson = await response.json();
      setFood((prev: any) => ({ ...prev, image: dataJson.secure_url }));
    }
  };

  return (
    <div className="w-full p-5 flex flex-col gap-5 rounded-xl bg-background">
      <h4 className=" text-xl font-semibold  ">{categoryName}</h4>
      <div className="flex flex-wrap gap-4">
        <Card className="border border-dashed border-red-500 px-2 py-4 w-[270.75px] h-[241px] flex flex-col items-center  justify-center ">
          <AddDish
            categoryName={categoryName}
            food={food}
            setFood={setFood}
            onChange={onChange}
            handleUpload={handleUpload}
          />
        </Card>
        {foods?.map(
          (food) =>
            food.category === _id && (
              <div key={food._id}>
                <CardComp
                  food={food}
                  id={food._id}
                  onChange={onChange}
                  handleUpload={handleUpload}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};
