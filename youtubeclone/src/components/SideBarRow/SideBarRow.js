import React from "react";
//import styling
import "./SideBarRow.css";

//create a variable to hold a new div
const SideBarRow = ({ selected, Icon, title }) => {
  return (
    //indicate whether a row was selected or not
    <div className={`sidebarrow ${selected ? "selected" : ""}`}>
      {/* accept Icon and title as props */}
      <Icon className="sidebarrow__icon" />
      <h2 className="sidebarrow__title"> {title} </h2>
    </div>
  );
};

export default SideBarRow;
