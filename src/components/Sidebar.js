import React from "react";
import SidebarMenu from '../common/components/SidebarMenu';

const Sidebar = (props) => {
    
  return (
    <div className={"col-md-" + props.col}>
      <div className="category-sidebar">
        <h4 className="category-title">{props.title}</h4>
        <SidebarMenu api={props.api}/>
      </div>
    </div>
  );
}


export default Sidebar;
