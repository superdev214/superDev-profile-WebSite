import { useEffect, useState } from "react";

export const useGlobalVariables = () => {
  const [activeId, setActivate] = useState(1);
  const [value2, setValue2] = useState(null);

  return { 
    activeId, setActivate, 
    value2, setValue2
  };
};