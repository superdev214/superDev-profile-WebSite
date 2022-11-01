import React from "react";
import { useState } from "react";
import ListItem from "./portfolio-activate-list-item";

const ActiveList = (props) => {
  const [...myarray] = props.list;


  return (
    <div className="portfolio-list">
      <ul id="portfolio-flters">
        {myarray.map((list) => (
          <ListItem
            key={list.index}
            index = {list.index}
            filter={list.filter}
            name={list.name}
          />
        ))}
      </ul>
    </div>
  );
};
export default ActiveList;
