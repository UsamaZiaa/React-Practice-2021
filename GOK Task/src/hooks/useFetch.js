import { useEffect, useState } from "react";

const useFetch = ({ url, category }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch(url);
      const dataAPI = await rawData.json();
      const filterData = dataAPI.entries.filter((element) => element.programType === category)
      setData(filterData.slice(0,25));
    };
    fetchData();
  }, [url, category]);
  return { data };
};

export default useFetch;