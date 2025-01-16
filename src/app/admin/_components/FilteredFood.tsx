"use client";
import { useEffect, useState } from "react";
import { CategoryType } from "./Dishes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
type FoodType = {
  _id: string;
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: string;
};

export const FilteredFood = ({ _id, categoryName }: CategoryType) => {
  const [food, setFood] = useState<FoodType[]>();

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch("http://localhost:8000/food");
      const data = await response.json();
      setFood(data);
    };

    fetchFood();
  }, []);
  return (
    <div className="w-full p-5 flex flex-col gap-5 rounded-xl bg-background">
      <h4 className=" text-xl font-semibold  ">{categoryName}</h4>
      <div className="flex flex-wrap gap-4">
        <Card className="border border-dashed px-2 py-4">
          <Dialog>
            <DialogTitle className="  ">
              <DialogTrigger asChild>
                <Button
                  variant="destructive"
                  className="rounded-full  p-[10px]"
                >
                  <Plus />
                </Button>
              </DialogTrigger>
              <h3>
                Add new Dish to <br /> {categoryName}
              </h3>
            </DialogTitle>
            <DialogContent className="flex flex-col gap-6 w-[460px] p-6">
              <DialogHeader className="pb-4">
                <DialogTitle>Add new category</DialogTitle>
              </DialogHeader>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="categoryName">Category name</Label>
                <Input
                  id="categoryName"
                  type="text"
                  className="w-[412px]"
                  placeholder="Type category name..."
                  required
                  pattern="[A-Za-z]"
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Add category</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Card>
      </div>
    </div>
  );
};
