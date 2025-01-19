import { Card } from "@/components/ui/card";
import React, { use, useEffect, useState } from "react";
import { FoodType } from "./FilteredFood";
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

export const CardComp = ({ food, id, onChange, handleUpload }: any) => {
  const [editFood, setEditFood] = useState({
    name: "",
    price: 0,
    ingredients: "",
    image: "",
    category: id,
  });

  console.log(editFood);
  return (
    <Card className="border bg-background p-4 w-[270.75px] h-[241px] flex flex-col gap-5 items-center  justify-center">
      <div
        className={`w-[238.75px] h-[129px]  bg-cover bg-center rounded-xl flex justify-end items-end p-5`}
        style={{ backgroundImage: `url(${food.image})` }}
      >
        <Dialog>
          <DialogTitle className=" text-center ">
            <DialogTrigger
              asChild
              className=" w-6 h-6 bg-background rounded-full p-3"
            >
              <Pencil color="red" />
            </DialogTrigger>
          </DialogTitle>
          <DialogContent className="flex flex-col gap-6 p-6">
            <DialogHeader className="pb-4 grid gap-4">
              <DialogTitle>Dishes info</DialogTitle>
            </DialogHeader>
            <div className="flex">
              <Label htmlFor="foodName">Food name</Label>
              <Input
                value={food?.name}
                id="foodName"
                name="name"
                type="text"
                onChange={onChange}
                placeholder="Type food name..."
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="foodPrice">Food price</Label>
              <Input
                id="foodPrice"
                name="price"
                value={food?.price}
                type="number"
                placeholder="Enter price..."
              />
            </div>
            <div className="flex flex-col w-full  gap-1.5">
              <label htmlFor="ingredients">Ingredients</label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={food?.ingredients}
                rows={4}
                cols={50}
                className="border rounded-md py-2 px-4  text-sm font-normal "
                placeholder="List ingredients..."
              ></textarea>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <h1 className="text-sm">Food image</h1>
              {food?.image !== "" ? (
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
                  <h3 className="text-sm">
                    Choose a file or drag & drop it here
                  </h3>
                </Label>
              )}

              <Input
                id="image"
                name="image"
                type="file"
                placeholder="Enter price..."
                className="hidden"
              />
            </div>
            <DialogFooter className="pt-6">
              <DialogClose asChild>
                <Button>Add dish</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-2">
        <div className="flex justify-between">
          <span className="text-red-500 ">{food.name}</span>
          <span>${food.price}</span>
        </div>
        <h4 className="text-xs">{food.ingredients}</h4>
      </div>
    </Card>
  );
};
