import { useEffect, useState } from "react";

export const useGlobalVariables = () => {
  const [activeFilter, setActivate] = useState("*");
  const [value2, setValue2] = useState(null);

  return { 
    activeFilter, setActivate, 
    value2, setValue2
  };
};