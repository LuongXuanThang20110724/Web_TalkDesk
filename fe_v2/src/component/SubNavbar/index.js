import React from "react";
import "./index.css";
import RemoveSpecialCharacters from "../../utils/RemoveSpecialCharacters";
const SubNavbar = (props) => {
  const HandleClickSubNavbar = (e) => {
    // Add class active to the current/clicked event
    let i, tablinks;
    tablinks = document.getElementsByClassName("navbar-feature")[0].children;
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    e.currentTarget.className += " active";
    props.setPage(RemoveSpecialCharacters(e.currentTarget.innerHTML));
  };
  return (
    <div className="subnavbar">
      <ul className="navbar-feature">
        {localStorage.getItem("login") == "admin" && (
          <li onClick={(e) => HandleClickSubNavbar(e)} className="active">
            Admin
          </li>
        )}

        <li
          onClick={(e) => HandleClickSubNavbar(e)}
          className={localStorage.getItem("login") == "admin" ? "" : "active"}
        >
          Live
        </li>
        <li onClick={(e) => HandleClickSubNavbar(e)}>Inbound</li>
        <li onClick={(e) => HandleClickSubNavbar(e)}>Service Level</li>
        <li onClick={(e) => HandleClickSubNavbar(e)}>Agents</li>
        <li onClick={(e) => HandleClickSubNavbar(e)}>Numbers</li>
        <li onClick={(e) => HandleClickSubNavbar(e)}>StatisticKeyCall</li>
        <li onClick={(e) => HandleClickSubNavbar(e)}>StatisticKeyWord</li>
      </ul>
    </div>
  );
};

export default SubNavbar;
