import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "./style/Sidebar.scss";
// import "react-pro-sidebar/dist/css/styles.css";
import "./style/Sidebar.css";
import background from "../images/SidebarBackground2.svg";
import Triclinic from "../images/triclinic";
import Monoclinic from "../images/monoclinic";
import Rhombohedral from "../images/rhombohedral";
import Hexagonal from "../images/hexagonal";
import Orthorhombic from "../images/orthorhombic";
import Tetragonal from "../images/tetragonal";
import Cubic from "../images/cubic";
import About from "../images/about";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft, FaGithub } from "react-icons/fa";
import { useSpring, useTransition, animated, config } from "react-spring";

function Sidebar() {
  const [expand, setExpand] = useState(false);
  // const expandAnimation = useSpring({
  // marginLeft: expand ? -210 : 0,
  // config: { duration: 600 },
  // });
  let arrow;
  let gitText;
  if (expand) {
    arrow = <FaArrowRight />;
    gitText = <></>;
  } else {
    arrow = <FaArrowLeft />;
    gitText = <span> View Source</span>;
  }
  return (
    <>
      <animated.div className="Sidebar">
        <div className="button-div">
          <animated.button
            // style={expandAnimation}
            className="expand-button"
            onClick={() => setExpand(!expand)}
          >
            {arrow}
          </animated.button>
        </div>
        <ProSidebar collapsed={expand} toggled={false} image={background}>
          <SidebarContent>
            <Menu iconShape="square">
              <br />
              <MenuItem icon={<About />}>About</MenuItem>
              <SubMenu icon={<Triclinic />} title="Triclinic">
                <MenuItem>1</MenuItem>
                <MenuItem>
                  <span style={{ textDecoration: "overline" }}>1</span>
                </MenuItem>
              </SubMenu>
              <SubMenu icon={<Monoclinic />} title="Monoclinic">
                <MenuItem>2/m</MenuItem>
                <MenuItem>m</MenuItem>
                <MenuItem>2</MenuItem>
              </SubMenu>
              <SubMenu icon={<Rhombohedral />} title="Rhombohedral">
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
              <SubMenu icon={<Hexagonal />} title="Hexagonal">
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
              <SubMenu icon={<Orthorhombic />} title="Orthorhombic">
                <MenuItem>mmm</MenuItem>
                <MenuItem>mm2</MenuItem>
                <MenuItem>222</MenuItem>
              </SubMenu>
              <SubMenu icon={<Tetragonal />} title="Tetragonal">
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
              <SubMenu icon={<Cubic />} title="Cubic">
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
          </SidebarContent>
          <SidebarFooter style={{ textAlign: "center" }}>
            <div
              className="sidebar-btn-wrapper"
              style={{
                padding: "20px 24px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button className="github-button">
                <a
                  href="https://github.com/DerekDardzinski/symmetry-website"
                  target="_blank"
                  className="sidebar-btn"
                  rel="noopener noreferrer"
                  style={{ color: "#011627" }}
                >
                  <FaGithub size={25} />
                  {gitText}
                </a>
              </button>
            </div>
          </SidebarFooter>
        </ProSidebar>
      </animated.div>
    </>
  );
}

export default Sidebar;
