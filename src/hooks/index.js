import { useEffect, useState } from "react";

export const useGlobalVariables = () => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);

  return { 
    value1, setValue1, 
    value2, setValue2
  };
};