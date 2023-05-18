import React from "react";
import "./index.css";
import Button from "../Button";
function Slider(props) {
  const { text, subText, bgParent, bgChild, positionOfImg, img, button } =
    props;
  return (
    <div className={`${bgParent}`}>
<<<<<<< HEAD
      <div
        className={`slider ${positionOfImg == "left" ? "swap-img" : ""} ${
          bgChild ? bgChild : ""
        }`}
      >
        <div className="info">
          <h1>{text}</h1>
          <div className="sub-text-slider">{subText}</div>
          {button.map((item) => {
            return (
              <>
                <Button text={item.name} type={item.type} />
                <br />
              </>
            );
=======
      <div className="slider">
        <div className="info">
          <h1>{text}</h1>
          {button.map((item) => {
            return <Button text={item.name} type={item.type} />;
>>>>>>> ThangLuong
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
