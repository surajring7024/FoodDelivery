import { useEffect, useState } from "react";
import { RES_MENU_API } from "./constants";

const useRestaurantaMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_MENU_API + resId);
    const jsonData = await data.json();
    setResInfo(jsonData.data);
  };
  return resInfo;
};

export default useRestaurantaMenu;
