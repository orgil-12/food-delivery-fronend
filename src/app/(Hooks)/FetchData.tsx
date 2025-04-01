import { useEffect, useState } from "react";

export function useAuthFetch(path: string) {
    const [data , setData] = useState()
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${path}`);
          const data = await response.json();
          setData(data);
        };
    
        fetchData();
      }, [path]);

      return data
}
