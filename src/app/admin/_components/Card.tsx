import { Card } from "@/components/ui/card";
import { FoodType } from "./FilteredFood";


export const CardComp =  ({food}: any) => {


  return (
    <Card
      className="border bg-background p-4 w-[270.75px] h-[241px] flex flex-col gap-5 items-center  justify-center"
      key={food._id}
    >
      <div
        className={`w-[238.75px] h-[129px]  bg-cover bg-center rounded-xl`}
        style={{ backgroundImage: `url(${food.image})` }}
      ></div>
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
