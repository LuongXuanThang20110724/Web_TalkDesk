import React from "react";
import "./index.css";
import logo from "../../assets/img/logo.png";
import Table from "../Header/Table";
import DataHeader from "../../utils/DataHeader";
function Header() {
  const dataHeader = DataHeader();
  const title = [
    "PRODUCTS",
    "SOLUTIONS",
    "CUSTOMERS",
    "SUPPORT",
    "RESOURCES",
    "ABOUT",
    "PRICING",
  ];
  const [data, setData] = React.useState(dataHeader[title[0]]);
  const [isShown, setIsShown] = React.useState(false);
  React.useEffect(() => {
    if (isShown) {
      document.getElementsByClassName("table")[0].style.visibility = "visible";
      document.getElementsByClassName("table")[0].style.opacity = "1";
    } else {
      document.getElementsByClassName("table")[0].style.visibility = "hidden";
      document.getElementsByClassName("table")[0].style.opacity = "0";
    }
  }, [isShown]);
  const language = document.getElementsByClassName("en-language")[0];
  language &&
    language.addEventListener("mouseover", () => {
      setIsShown(false);
    });

  const handleHover = (e) => {
    setIsShown(true);
    setData(dataHeader[e.target.innerText]);
  };
  return (
    <>
      <div className="d_flex_bethween header bg-gray">
        <img src={logo} alt="" className="logo" />
        <ul className="navbar">
          {title.map((item, index) => {
            if (index === title.length - 1) {
              return (
                <li key={index}>
                  {item} <i class="fa-solid fa-chevron-right"></i>
                </li>
              );
            } else {
              return (
                <li key={index} onMouseEnter={(e) => handleHover(e)}>
                  {item}
                </li>
              );
            }
          })}
        </ul>
        <div className="contact">
          <div>
            <i class="fa-regular fa-user"></i>
          </div>
          <div>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="en-language">
            <b style={{ fontSize: "15px" }}>EN</b>
            <i class="fa-solid fa-chevron-down"></i>
            <ul className="language">
              <li>English</li>
              <li>Español</li>
              <li>Español (América Latina)</li>
              <li>Deutsch</li>
              <li>Français</li>
              <li>Italiano</li>
              <li>Português</li>
              <li>Português (Brasil)</li>
            </ul>
          </div>
        </div>
      </div>
      <Table data={data} />
    </>
  );
}

export default Header;
