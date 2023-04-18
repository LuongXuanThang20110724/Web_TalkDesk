import React from "react";
import imgSection from "../../../assets/img/sc2.png";

function Section2(props) {
  const handleClose = () => {
    document.getElementsByClassName("table")[0].style.visibility = "unset";
    document.getElementsByClassName("table")[0].style.opacity = "0";
  };
  return (
    <div className="sc2">
      <div className="img-close">
        <div className="img-section">
          <img src={imgSection} alt="" />
        </div>
        <i class="fa-solid fa-xmark" onClick={(e) => handleClose()}></i>
      </div>
      <div className="sub-text">{props.data.text}</div>
    </div>
  );
}

export default Section2;
