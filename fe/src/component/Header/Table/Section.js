import React from "react";
import Option from "../../Option";
function Section(props) {
  const data = props.data;
  const setDataFromChildComponent = (data) => {
    props.setData(data);
  };
  return (
    <div className="container-parent-section">
      {data.map((itemData) => {
        return (
          <div className="container-section">
            <div className="title">{itemData.mainTitle}</div>
            <div className="list-options">
              {itemData.content.map((item) => {
                return (
                  <Option data={item} setData={setDataFromChildComponent} />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Section;
