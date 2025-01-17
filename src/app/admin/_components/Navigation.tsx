import { Logo } from "./Logo";
import { LayoutDashboard } from "lucide-react";
import { Settings } from "lucide-react";
import { Truck } from "lucide-react";
import Link from "next/link";

export const Navigation = () => {
  return (
    <div className="h-full py-9 px-5 flex flex-col gap-10 bg-background ">
      <Link href={`/`}>
        <div className="flex gap-2 ">
          <div>
            <Logo />
          </div>
          <div>
            <h1 className=" text-lg font-semibold ">NomNom</h1>
            <h2 className="text-xs text-muted-foreground  ">Swift delivery</h2>
          </div>
        </div>
      </Link>

      <div className="flex flex-col w-[165px] gap-6 ">
        <Link href={`/admin/menu/all-dishes`}>
          <button className="flex px-6 py-2 focus:bg-primary focus:text-primary-foreground items-center gap-[10px] rounded-full">
            <LayoutDashboard strokeWidth={1} />
            <h3 className="text-sm font-medium  ">Food menu</h3>
          </button>
        </Link>

        <button className="flex px-6 py-2 focus:bg-primary focus:text-primary-foreground items-center gap-[10px] rounded-full">
          <Truck strokeWidth={1} />
          <h3 className="text-sm font-medium  ">Orders</h3>
        </button>
        <button className="flex px-6 py-2 focus:bg-primary focus:text-primary-foreground items-center gap-[10px] rounded-full">
          <Settings strokeWidth={1} />
          <h3 className="text-sm font-medium  ">Settings</h3>
        </button>
      </div>
    </div>
  );
};
