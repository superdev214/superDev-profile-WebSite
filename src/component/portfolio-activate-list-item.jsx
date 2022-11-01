import React from "react";
import { useGlobalVariables } from "../hooks";
import { useBetween } from 'use-between';

const useSharedGlobalVariables = () => useBetween(useGlobalVariables);
const ListItem = (props) => {
  const {activeFilter, setActivate} = useSharedGlobalVariables();
  return(
    <>
     <li
          key={props.index}
          data-filter={props.filter}
          index = {props.index}
          class={activeFilter === props.filter ? "filter-active" : "null"}          
          onClick = {() => {setActivate(props.filter) ;  }}
        >
          {props.name}
        </li>
    </>
  )
};
export default ListItem;
