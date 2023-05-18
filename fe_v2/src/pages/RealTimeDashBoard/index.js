import React from "react";
import SubNavbar from "../../component/SubNavbar";
import Feature from "../../component/Feature";
import Live from "./Live";
import Inbound from "./Inbound";
import ServiceLevel from "./ServiceLevel";
import Agents from "./Agents";
import Numbers from "./Numbers";
import StatisticKeyCall from "./StatisticKeyCall";
<<<<<<< HEAD

function RealTimeDashBoard() {
  const [eleNavbar, setEleNavbar] = React.useState("Live");
  const dict = {
=======
import DisplayStaff from "../Admin/DisplayStaff";
import AddAgent from "../Admin/AddAgent";
import AddCall from "../Admin/AddCall";
import AddStaff from "../Admin/AddStaff";
import DisplayDeletedStaff from "../Admin/DisplayDeletedStaff";
import StatisticKeyWord from "./StatisticKeyWord";

function RealTimeDashBoard() {
  const [eleNavbar, setEleNavbar] = React.useState(
    localStorage.getItem("login") == "admin" ? "Admin" : "Live"
  );
  const HandleSet = (data) => {
    setEleNavbar(data);
  };
  const dict = {
    Admin: { src: <DisplayStaff handleSet={HandleSet} /> },
    DisplayStaff: { src: <DisplayStaff handleSet={HandleSet} /> },
    AddAgent: { src: <AddAgent handleSet={HandleSet} /> },
    AddCall: { src: <AddCall handleSet={HandleSet} /> },
    AddStaff: { src: <AddStaff handleSet={HandleSet} /> },
    DisplayDeletedStaff: { src: <DisplayDeletedStaff handleSet={HandleSet} /> },

>>>>>>> ThangLuong
    Live: { src: <Live /> },
    Inbound: { src: <Inbound /> },
    ServiceLevel: { src: <ServiceLevel /> },
    Agents: { src: <Agents /> },
    Numbers: { src: <Numbers /> },
    StatisticKeyCall: { src: <StatisticKeyCall /> },
<<<<<<< HEAD
  };
=======
    StatisticKeyWord: { src: <StatisticKeyWord /> },
  };

>>>>>>> ThangLuong
  return (
    <div id="RealTimeDashBoard">
      <div className="main-content">
        <SubNavbar setPage={(data) => setEleNavbar(data)} />
        <Feature
          text="Inbound - General Europe"
          icon={[
            { iconClass: "fa-solid fa-gear", marginLeftValue: "40px" },
            { iconClass: "fa-solid fa-compress", marginLeftValue: "40px" },
          ]}
          button={[
            { name: "Edit", type: 0 },
            { name: "New dashboard", type: 1 },
          ]}
        />
        {dict[eleNavbar].src}
      </div>
    </div>
  );
}

export default RealTimeDashBoard;
