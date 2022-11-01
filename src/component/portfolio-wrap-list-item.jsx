import React from "react";
import { Col, Row } from "react-bootstrap";


const WrapListItem = (props) => {
  const url = props.url;

  return (
    <Col lg={3} md={4} sm={6} xs={12}>
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
                <a href="assets\img\portfolio\web_dev/Screenshot_6.png" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                <a href="https://upbots.com/" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
      </div>
    </Col>
  );
};

export default WrapListItem;
