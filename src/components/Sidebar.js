import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./style/Sidebar.scss";
// import "react-pro-sidebar/dist/css/styles.css";
import "./style/Sidebar.css";
import React, { useState } from "react";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>About</MenuItem>
          <SubMenu title="Triclinic">
            <MenuItem>Component 1</MenuItem>
          </SubMenu>
          <SubMenu title="Monoclinic">
            <MenuItem>Component 1</MenuItem>
          </SubMenu>
          <SubMenu title="Rhombohedral">
            <MenuItem>Component 1</MenuItem>
          </SubMenu>
          <SubMenu title="Hexagonal">
            <MenuItem>Component 1</MenuItem>
          </SubMenu>
          <SubMenu title="Orthorhombic">
            <MenuItem>Component 1</MenuItem>
          </SubMenu>
          <SubMenu title="Tetragonal">
            <MenuItem>Component 1</MenuItem>
          </SubMenu>
          <SubMenu title="Cubic">
            <MenuItem>Component 1</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
