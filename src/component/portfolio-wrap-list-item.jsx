import React from "react";
import { Col, Row } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useGlobalVariables } from "../hooks";
import { useBetween } from "use-between";

const useSharedGlobalVariables = () => useBetween(useGlobalVariables);

const WrapListItem = (props) => {
  const url = props.url;
  const {imageVisible, setImageActive} = useSharedGlobalVariables();
  const { imageChooseUrl, setimageChooseUrl} = useSharedGlobalVariables();
  const setStateImg = () =>{
    setImageActive(true);
    setimageChooseUrl(props.index - 1);
  }
  return (
    <Col md={4} sm={6} xs={12}>
      <div className="portfolio-wrap">
        {" "}
        <img
          src={`assets/img/portfolio/web_dev/Screenshot_${url}.png`}
          alt="asdf"
        />
        <div class="portfolio-info">
          <h4>{props.title}</h4>
          <p>Web</p>
          <div class="portfolio-links">
         
              <i class="bx bx-plus"
                  onClick={() => (setStateImg())}></i>

              <i class="bx bx-link" ></i>
        
          </div>
        </div>
      </div>
    </Col>
  );
};

export default WrapListItem;
