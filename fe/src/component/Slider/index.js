import React from "react";
import "./index.css";
import Button from "../Button";
function Slider(props) {
  const { text, subText, bgParent, bgChild, positionOfImg, img, button } =
    props;
  return (
    <div className={`${bgParent}`}>
      <div className="slider">
        <div className="info">
          <h1>{text}</h1>
          {button.map((item) => {
            return <Button text={item.name} type={item.type} />;
          })}
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
