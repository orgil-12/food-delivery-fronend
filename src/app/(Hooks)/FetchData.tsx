import path from "path";
import { useEffect, useState } from "react";
import { CategoryType } from "../admin/_components/Dishes";

export function useAuthFetch(path:any){
    const [data , setData] = useState<CategoryType[]>()
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`http://localhost:8000/${path}`);
          const data = await response.json();
          setData(data);
        };
    
        fetchData();
      }, []);

      return data
}
