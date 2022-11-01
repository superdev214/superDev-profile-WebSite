import React from "react";

const Icon_Box = (props) => {
  return (
    <div className="icon-box">
      <div className="icon">
        <i className={props.class}></i>
      </div>
      <h4>
        <a>{props.target}</a>
      </h4>
      <p>{props.detail}</p>
    </div>
  );
};

export default Icon_Box;
