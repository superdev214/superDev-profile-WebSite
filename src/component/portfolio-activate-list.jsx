import React from "react";
import { useState } from "react";
import ListItem from "./portfolio-activate-list-item";
const ActiveList = (props) => {
  const [...myarray] = props.list;
  const [activeIndex, setActiveId] = useState(1);

  return (
    <div className="portfolio-list">
      <ul id="portfolio-flters">
        {myarray.map((list) => (
          <ListItem
            key={list.index}
            index = {list.index}
            filter={list.filter}
            name={list.name}
            activeIndex={activeIndex}
            setActiveId={setActiveId}
          />
        ))}
      </ul>
    </div>
  );
};
export default ActiveList;
