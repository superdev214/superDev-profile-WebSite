import { useEffect, useState } from "react";

export const useGlobalVariables = () => {
  const [activeFilter, setActivate] = useState("*");

  const [activeNavItem, setClassActive] = useState("Home");
  const [imageVisible, setImageActive] = useState(false);
  const [imageChooseUrl, setimageChooseUrl] = useState(1);
  return { 
    activeFilter, setActivate, 
    imageChooseUrl, setimageChooseUrl,
    activeNavItem, setClassActive,
    imageVisible,setImageActive
  };
};