import React from "react";

const ListItem = (props) => {
 
  return(
    <>
     <li
          key={props.index}
          data-filter={props.filter}
          index = {props.index}
          class={props.activeIndex === props.index ? "filter-active" : "null"}          
          onClick = {() => {props.setActiveId(props.index); }}
        >
          {props.name}
        </li>
    </>
  )
};
export default ListItem;
