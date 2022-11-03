import React from "react";
import { Col, Row } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useGlobalVariables } from "../hooks";
import { useBetween } from "use-between";

const useSharedGlobalVariables = () => useBetween(useGlobalVariables);

const WrapListItem = (props) => {
  const url = props.url;
  const address = props.address;
  const { imageVisible, setImageActive } = useSharedGlobalVariables();
  const { imageChooseUrl, setimageChooseUrl } = useSharedGlobalVariables();
  const setStateImg = () => {
    setImageActive(true);
    setimageChooseUrl(props.index - 1);
  };
  return (
    <Col md={4} sm={6} xs={12}>
      <div className="portfolio-wrap">
        {" "}
        <img
          src={`assets/img/portfolio/web_dev/Screenshot_${url}.png`}
          alt="asdf"
        />
        <div className="portfolio-info">
          <h4>{props.title}</h4>
          <p>Web</p>
          <div className="portfolio-links">
            <i className="bx bx-plus" onClick={() => setStateImg()}></i>
            <a href={address} target="_blank">
              <i className="bx bx-link"></i>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default WrapListItem;
