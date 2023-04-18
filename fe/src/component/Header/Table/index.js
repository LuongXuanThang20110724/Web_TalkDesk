import React from "react";
import "./index.css";
import Section from "./Section";
import Section1 from "./Section1";
import Section2 from "./Section2";

function Table(props) {
  const data = props.data;
  const [data1, setData1] = React.useState(data[0][0].content[0].children);
  const [data2, setData2] = React.useState(
    data[0][0].content[0].children.content[0].children
  );
  React.useEffect(() => {
    setData1(data[0][0].content[0].children);
    setData2(data[0][0].content[0].children.content[0].children);
  }, [data]);

  const setDataFromChildComponent = (data) => {
    setData1(data);
    setData2(data.content[0].children);
  };
  const setDataFromChildComponent1 = (data) => {
    setData2(data);
  };
  return (
    <div className="table">
      <div className="section">
        {data.map((item) => {
          return <Section data={item} setData={setDataFromChildComponent} />;
        })}
      </div>
      <div className="section section1">
        <Section1 data={data1} setData={setDataFromChildComponent1} />
      </div>

      <div className="bg-gray">
        <Section2 data={data2} />
      </div>
    </div>
  );
}

export default Table;
