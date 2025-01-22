import { useAuthFetch } from "@/app/(Hooks)/FetchData";

export const Dishes = () => {
  const categories = useAuthFetch("food-category");
  return <div>
    {categories?.map((category) => {
        return(
            
        )
    })}
  </div>;
};
