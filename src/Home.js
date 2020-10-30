import React, { useState } from "react";
import backgroundImage from "./images/SidebarBackground2.svg";
import Card from "./Card";
import { Triclinic1, Triclinic1bar } from "./components/groups/Triclinic";
import {
  Monoclinic2,
  Monoclinic2om,
  Monoclinicm,
} from "./components/groups/Monoclinic";
import {
  Rhombohedral3barm,
  Rhombohedral3m,
} from "./components/groups/Rhombohedral";
import Text from "./components/build/Question";
// <div className="home-main">
// <div className="home-left">
// <div className="home-grid">
// </div>
// </div>
// <div className="home-right">test</div>
// </div>
//
// <div className="home-nav" id="home-a">
// Home
// </div>
// <div className="home-nav" id="home-a">
// Triclinic
// </div>
// <div className="home-nav" id="home-m">
// Monoclinic
// </div>
// <div className="home-nav" id="home-r">
// Rhombohedral
// </div>
// <div className="home-nav" id="home-h">
// Hexagonal
// </div>
// <div className="home-nav" id="home-o">
// Orthorhombic
// </div>
// <div className="home-nav" id="home-t">
// Tetragonal
// </div>
// <div className="home-nav" id="home-c">
// Cubic
// </div>

const cardProps = {
  a: {
    src:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&w=1000&q=80",
    title: "About",
  },
};

function Home() {
  return (
    <div className="home-main">
      {/*
      <div className="home-header">
        <p className="home-title">Experience Point Groups in 3D</p>
      </div>
      */}
      <div className="home-grid">
        <Card title="About">
          <Text />
        </Card>
        <Card title="Triclinic">
          <Triclinic1 />
        </Card>
        <Card title="Monoclinic">
          <Monoclinic2om />
        </Card>
        <Card title="Rhombohedral">
          <Rhombohedral3barm />
        </Card>
        <Card title="Hexagonal">
          <Rhombohedral3m />
        </Card>
        <Card title="Orthorhombic">
          <Triclinic1 />
        </Card>
        <Card title="Tetragonal">
          <Triclinic1 />
        </Card>
        <Card title="Cubic">
          <Triclinic1 />
        </Card>
      </div>
    </div>
  );
}

export default Home;
