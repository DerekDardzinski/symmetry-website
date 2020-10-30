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
  Rhombohedral32,
  Rhombohedral3bar,
  Rhombohedral3,
} from "./components/groups/Rhombohedral";
import {
  Hexagonal60mmm,
  Hexagonal6barm2,
  Hexagonal6mm,
  Hexagonal6om,
  Hexagonal622,
  Hexagonal6bar,
  Hexagonal6,
} from "./components/groups/Hexagonal";
import {
  Orthorhombicmmm,
  Orthorhombicmm2,
  Orthorhombic222,
} from "./components/groups/Orthorhombic";
import {
  Tetragonal4ommm,
  Tetragonal4bar2m,
  Tetragonal4mm,
  Tetragonal422,
  Tetragonal4om,
  Tetragonal4bar,
  Tetragonal4,
} from "./components/groups/Tetragonal";
import Text from "./components/build/Question";

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
          <Tetragonal4 />
        </Card>
        <Card title="Monoclinic">
          <Tetragonal4bar />
        </Card>
        <Card title="Rhombohedral">
          <Tetragonal4om />
        </Card>
        <Card title="Hexagonal">
          <Tetragonal422 />
        </Card>
        <Card title="Orthorhombic">
          <Tetragonal4mm />
        </Card>
        <Card title="Tetragonal">
          <Tetragonal4bar2m />
        </Card>
        <Card title="Cubic">
          <Tetragonal4ommm />
        </Card>
      </div>
    </div>
  );
}

export default Home;
