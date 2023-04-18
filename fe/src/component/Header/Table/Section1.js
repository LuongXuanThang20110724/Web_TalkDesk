import React from "react";
import Option from "../../Option";

function Section1(props) {
  var data = props.data;
  if (typeof data == "object") {
    data = [data];
  }
  const setDataFromChildComponent1 = (data) => {
    props.setData(data);
  };

  return (
    <div className="container">
      <div className="container-parent-section">
        {data.map((itemData) => {
          return (
            <div className="container-section">
              <div className="title">{itemData.mainTitle}</div>
              <div className="list-options">
                {itemData.content.map((item) => {
                  return (
                    <Option
                      data={item}
                      sc={true}
                      setData={setDataFromChildComponent1}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Section1;
