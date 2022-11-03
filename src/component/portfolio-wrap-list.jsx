import React from "react";
import { Col, Row } from "react-bootstrap";
import WrapListItem from "./portfolio-wrap-list-item";

const WrapList = (props) => {
    const [...wrList] = props.list;
    return(
        <div className="wraplist">
            <Row>
              {wrList.map((list)=>(
                <WrapListItem url={list.urlIndex} key={list.urlIndex} title={list.title} index={list.index}/>
              ))}
            </Row>
        </div>
    )
}

export default WrapList;