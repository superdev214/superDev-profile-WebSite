import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useGlobalVariables } from "../hooks";
import { useBetween } from "use-between";
import CloseButton from "react-bootstrap/CloseButton";

const useSharedGlobalVariables = () => useBetween(useGlobalVariables);

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);
  const { imageVisible, setImageActive } = useSharedGlobalVariables();
  const { imageChooseUrl, setimageChooseUrl} = useSharedGlobalVariables();
  const [...wrList] = props.urllist;

  const handleSelect = (selectedIndex, e) => {
    setimageChooseUrl(selectedIndex);
  };

  return (
    <div className="imageDiv"
      style={{
        display: imageVisible === true ? "flex" : "none",
        // position: "absolute",
        // left: 0,
        // right: 0,
        // top: 0,
        // bottom: 0,
        // margin: "auto",

        // width: "80%",
        // height: 100,
        // padding: 30,
        // zIndex: 2,
      }}
    >
<CloseButton className="imgDivClose" variant="white" onClick={()=>setImageActive(false)}></CloseButton>
      <Carousel activeIndex={imageChooseUrl} onSelect={handleSelect} interval={null}>
        {wrList.map((item,index) => (
          <Carousel.Item  key = {index}>
            <img
              className="d-block"
             
              src={`assets/img/portfolio/web_dev/Screenshot_${item.urlIndex}.png`}
              alt="First slide"
              style={{
                width: "90%",
                height: "auto",
                padding: 30,
                textAlign: "center",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
