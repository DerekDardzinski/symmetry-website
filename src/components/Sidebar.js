import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./style/Sidebar.scss";
// import "react-pro-sidebar/dist/css/styles.css";
import "./style/Sidebar.css";
import background from "../images/SidebarBackground.svg";
import SvgComponent from "../images/triclinic.js";
import React, { useState } from "react";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ProSidebar collapsed={true} image={background}>
        <Menu iconShape="circle">
          <MenuItem>About</MenuItem>
          <SubMenu icon={<SvgComponent />} title="Triclinic">
            <MenuItem>1</MenuItem>
            <MenuItem>
              <span style={{ textDecoration: "overline" }}>1</span>
            </MenuItem>
          </SubMenu>
          <SubMenu title="Monoclinic">
            <MenuItem>2/m</MenuItem>
            <MenuItem>m</MenuItem>
            <MenuItem>2</MenuItem>
          </SubMenu>
          <SubMenu title="Rhombohedral">
            <MenuItem>
              <span style={{ textDecoration: "overline" }}>3</span>m
            </MenuItem>
            <MenuItem>3m</MenuItem>
            <MenuItem>32</MenuItem>
            <MenuItem>
              <span style={{ textDecoration: "overline" }}>3</span>
            </MenuItem>
            <MenuItem>3</MenuItem>
          </SubMenu>
          <SubMenu title="Hexagonal">
            <MenuItem>6/mmm</MenuItem>
            <MenuItem>
              <span style={{ textDecoration: "overline" }}>6</span>m2
            </MenuItem>
            <MenuItem>6mm</MenuItem>
            <MenuItem>622</MenuItem>
            <MenuItem>6/m</MenuItem>
            <MenuItem>
              <span style={{ textDecoration: "overline" }}>6</span>
            </MenuItem>
            <MenuItem>6</MenuItem>
          </SubMenu>
          <SubMenu title="Orthorhombic">
            <MenuItem>mmm</MenuItem>
            <MenuItem>mm2</MenuItem>
            <MenuItem>222</MenuItem>
          </SubMenu>
          <SubMenu title="Tetragonal">
            <MenuItem>4/mmm</MenuItem>
            <MenuItem>
              <span style={{ textDecoration: "overline" }}>4</span>2m
            </MenuItem>
            <MenuItem>4mm</MenuItem>
            <MenuItem>422</MenuItem>
            <MenuItem>4/m</MenuItem>
            <MenuItem>
              <span style={{ textDecoration: "overline" }}>4</span>
            </MenuItem>
            <MenuItem>4</MenuItem>
          </SubMenu>
          <SubMenu title="Cubic">
            <MenuItem>
              m<span style={{ textDecoration: "overline" }}>3</span>m
            </MenuItem>
            <MenuItem>
              <span style={{ textDecoration: "overline" }}>4</span>3m
            </MenuItem>
            <MenuItem>432</MenuItem>
            <MenuItem>
              m<span style={{ textDecoration: "overline" }}>3</span>
            </MenuItem>
            <MenuItem>23</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
