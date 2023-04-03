import React from "react";
import "./index.css";
function Table(props) {
  return (
    <div className="cpn-table">
      <table>
        <thead>
          <tr>
            <th>
              Agent{" "}
              <i
                class="fa-solid fa-sort"
                style={{ color: "#979eaa", marginLeft: "5px" }}
              ></i>
            </th>
            <th>
              Ring groups{" "}
              <i
                class="fa-solid fa-sort"
                style={{ color: "#979eaa", marginLeft: "5px" }}
              ></i>
            </th>
            <th>
              Status{" "}
              <i
                class="fa-solid fa-sort"
                style={{ color: "#979eaa", marginLeft: "5px" }}
              ></i>
            </th>
            <th>
              Status time{" "}
              <i
                class="fa-solid fa-sort"
                style={{ color: "#979eaa", marginLeft: "5px" }}
              ></i>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>Dom</td>
            <td>Dom</td>
            <td>Dom</td>
            <td>6000</td>
          </tr>
          <tr>
            <td>Dom</td>
            <td>Dom</td>
            <td>Dom</td>
            <td>6000</td>
          </tr>
          <tr>
            <td>Dom</td>
            <td>Dom</td>
            <td>Dom</td>
            <td>6000</td>
          </tr> */}
          {props.children}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
