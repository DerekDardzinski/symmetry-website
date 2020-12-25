import React, { useState } from "react";
import Card from "../components/Card";
import { Triclinic1, Triclinic1bar } from "../components/groups/Triclinic";
import {
  Monoclinic2,
  Monoclinic2om,
  Monoclinicm,
} from "../components/groups/Monoclinic";
import {
  Rhombohedral3barm,
  Rhombohedral3m,
  Rhombohedral32,
  Rhombohedral3bar,
  Rhombohedral3,
} from "../components/groups/Rhombohedral";
import {
  Hexagonal60mmm,
  Hexagonal6barm2,
  Hexagonal6mm,
  Hexagonal6om,
  Hexagonal622,
  Hexagonal6bar,
  Hexagonal6,
} from "../components/groups/Hexagonal";
import {
  Orthorhombicmmm,
  Orthorhombicmm2,
  Orthorhombic222,
} from "../components/groups/Orthorhombic";
import {
  Tetragonal4ommm,
  Tetragonal4bar2m,
  Tetragonal4mm,
  Tetragonal422,
  Tetragonal4om,
  Tetragonal4bar,
  Tetragonal4,
} from "../components/groups/Tetragonal";
import {
  Cubicm3barm,
  Cubic4bar3m,
  Cubic432,
  Cubicm3bar,
  Cubic23,
} from "../components/groups/Cubic";
import Text from "../components/build/Question";

function Home() {
  const a = (
    <>
      3<span>test</span>3
    </>
  );
  return (
    <div className="home-main">
      {/*
      <div className="home-header">
        <p className="home-title">Experience Point Groups in 3D</p>
      </div>
      */}
      <div className="home-grid">
        <Card title="About" button_text="explore" route="/about">
          <Text />
        </Card>
        <Card
          title="Triclinic"
          button_text="explore"
          route="/triclinic"
          left_side="Group Shown: "
          group_name="1"
        >
          <Triclinic1 />
        </Card>
        <Card
          title="Monoclinic"
          button_text="explore"
          route="/monoclinic"
          left_side="Group Shown: "
          group_name="2"
        >
          <Monoclinic2 />
        </Card>
        <Card
          title="Rhombohedral"
          button_text="explore"
          route="/rhombohedral"
          left_side="Group Shown: "
          group_name="3"
        >
          <Rhombohedral3 />
        </Card>
        <Card
          title="Hexagonal"
          button_text="explore"
          route="/hexagonal"
          left_side="Group Shown: "
          group_name="6"
        >
          <Hexagonal6 />
        </Card>
        <Card
          title="Orthorhombic"
          button_text="explore"
          route="/orthorhombic"
          left_side="Group Shown: "
          group_name="mmm"
        >
          <Orthorhombicmmm />
        </Card>
        <Card
          title="Tetragonal"
          button_text="explore"
          route="/tetragonal"
          left_side="Group Shown: "
          group_name="4"
        >
          <Tetragonal4 />
        </Card>
        <Card
          title="Cubic"
          button_text="explore"
          route="/cubic"
          left_side="Group Shown: "
          group_name={
            <>
              m<span style={{ textDecoration: "overline" }}>3</span>
            </>
          }
        >
          <Cubicm3bar />
        </Card>
      </div>
    </div>
  );
}

export default Home;
