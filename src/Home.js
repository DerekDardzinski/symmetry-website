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
import {
  Cubicm3barm,
  Cubic4bar3m,
  Cubic432,
  Cubicm3bar,
  Cubic23,
} from "./components/groups/Cubic";
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
          <Cubic23 />
        </Card>
        <Card title="Monoclinic">
          <Cubicm3bar />
        </Card>
        <Card title="Rhombohedral">
          <Cubic432 />
        </Card>
        <Card title="Hexagonal">
          <Cubic4bar3m />
        </Card>
        <Card title="Orthorhombic">
          <Cubicm3barm />
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
