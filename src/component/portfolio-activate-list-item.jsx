import React from "react";
import { useGlobalVariables } from "../hooks";

const ListItem = (props) => {
  const {activeId, setActivate} = useGlobalVariables();
  return(
    <>
     <li
          key={props.index}
          data-filter={props.filter}
          index = {props.index}
          class={activeId === props.index ? "filter-active" : "null"}          
          onClick = {() => {setActivate(props.index) ; console.log(props.index) }}
        >
          {props.name}
        </li>
    </>
  )
};
export default ListItem;
