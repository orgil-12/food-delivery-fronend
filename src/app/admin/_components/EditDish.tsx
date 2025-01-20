"use client";
import { Button } from "@/components/ui/button";
import { Pencil, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { FoodType } from "./FilteredFood";
import { useState } from "react";

export const EditDish = ({ food, id }: { food: FoodType; id: string }) => {
  const [editFood, setEditFood] = useState(food);

  const editDish = async () => {
    await fetch(`http://localhost:8000/food/${food._id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(editFood),
    });
  };

  const onChange = (e: any) => {
    console.log("--", e.target.name, e.target.value);
    setEditFood({
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
      setEditFood((prev: any) => ({ ...prev, image: dataJson.secure_url }));
    }
  };

  return (
    <Dialog>
      <DialogTitle className=" text-center ">
        <DialogTrigger asChild>
          <Button variant={"outline"} className="rounded-full px-3 py-5">
            <Pencil color={"red"} />
          </Button>
        </DialogTrigger>
      </DialogTitle>
      <DialogContent className="flex flex-col gap-6 p-6">
        <DialogHeader className="pb-4 grid gap-4">
          <DialogTitle>Dishes info</DialogTitle>
        </DialogHeader>
        <div className="flex">
          <Label htmlFor="foodName">Food name11</Label>
          <Input
            value={editFood?.name}
            id="foodName"
            name="name"
            type="text"
            placeholder="Type food name..."
            onChange={onChange}
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="foodPrice">Food price</Label>
          <Input
            id="foodPrice"
            name="price"
            value={editFood?.price}
            type="number"
            placeholder="Enter price..."
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col w-full  gap-1.5">
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={editFood?.ingredients}
            rows={4}
            cols={50}
            className="border rounded-md py-2 px-4  text-sm font-normal "
            placeholder="List ingredients..."
            onChange={onChange}
          ></textarea>
        </div>
        <div className="grid w-full items-center gap-1.5">
          <h1 className="text-sm">Food image</h1>
          {editFood?.image !== "" ? (
            <div
              className={`bg-cover bg-center rounded-md h-[138px] flex justify-end p-4 `}
              style={{ backgroundImage: `url(${food.image})` }}
            >
              <Button
                variant="outline"
                className="rounded-full px-3 py-5"
                onClick={() => {}}
              >
                <X />
              </Button>
            </div>
          ) : (
            <Label
              htmlFor="image"
              className={`h-[138px] border border-dashed rounded-md bg-blue-50 flex flex-col items-center justify-center p-4 gap-2`}
            >
              <div className="rounded-full p-2 bg-background "></div>
              <h3 className="text-sm">Choose a file or drag & drop it here</h3>
            </Label>
          )}

          <Input
            id="image"
            name="image"
            type="file"
            placeholder="Enter price..."
            className="hidden"
            onChange={handleUpload}
          />
        </div>
        <DialogFooter className="pt-6">
          <DialogClose asChild>
            <Button onClick={editDish}>Edit dish</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
