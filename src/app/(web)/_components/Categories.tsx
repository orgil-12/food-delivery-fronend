import { useAuthFetch } from "@/app/(Hooks)/FetchData";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const Categories = () => {
  const categories = useAuthFetch("food-category");
  return (
    <div className="py-8 flex flex-col gap-9">
      <h1 className="text-3xl font-semibold text-primary-foreground">
        Categories
      </h1>
      <div className="flex gap-2">
        <Link href={"/"}>
          <Badge
            variant={"destructive"}
            className="rounded-full text-lg font-normal px-5 py-1"
          >
            All dishes
          </Badge>
        </Link>
        
        {categories?.map((category) => {
          return (
            <Link href={`${category._id}`} key={category._id}>
              <Badge
                variant={"outline"}
                className="bg-background text-primary rounded-full text-lg font-normal px-5 py-1"
              >
                {category.categoryName}
              </Badge>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
