import React from "react";
import "./index.css";

const Option = (props) => {
  const data = props.data;
  var sc = props.sc ? "sc" : "text";
  const handleOnHover = (e) => {
    Object.values(document.querySelectorAll(`.${sc}`)).map((item) => {
      if (item.innerText === e.target.innerText) {
        item.style.backgroundColor = "#e3fcfa";
        props.setData(data.children);
      } else {
        item.style.backgroundColor = "unset";
      }
    });
  };

  return (
    <div
      className="option"
      onMouseEnter={(e) => {
        handleOnHover(e);
      }}
    >
      <div className={sc}>
        {data && data.subtitle}
        {data && data.children.mainTitle && (
          <div className="icon">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Option;
