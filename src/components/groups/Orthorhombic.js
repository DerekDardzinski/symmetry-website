import React from "react";
import orthorhombicGroup from "./crystalSystems/Orthorhombic";
import orthorhombicAxis from "./props/Orthorhombic";
import generatePointGroup from "../build/Generate";
import { matrix } from "mathjs";
import AxisLine from "../build/Axes";
import Atom from "../build/Atom";

function Orthorhombicmmm() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(
    orthorhombicGroup._mmm,
    generalPoint,
    false
  );
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color="#FF1F35" position={p} />);
  });
  let axes = [];
  Object.entries(orthorhombicAxis._mmm).forEach(([key, value]) => {
    console.log(key);
    axes.push(<AxisLine props={value} />);
  });
  return (
    <group>
      <group rotation={[0, 0, 0]}>{atoms}</group>
      {axes}
    </group>
  );
}

function Orthorhombicmm2() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(
    orthorhombicGroup._mm2,
    generalPoint,
    false
  );
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color="#FF1F35" position={p} />);
  });
  let axes = [];
  Object.entries(orthorhombicAxis._mm2).forEach(([key, value]) => {
    console.log(key);
    axes.push(<AxisLine props={value} />);
  });
  return (
    <group>
      <group rotation={[0, 0, 0]}>{atoms}</group>
      {axes}
    </group>
  );
}

function Orthorhombic222() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(
    orthorhombicGroup._222,
    generalPoint,
    false
  );
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color="#FF1F35" position={p} />);
  });
  let axes = [];
  Object.entries(orthorhombicAxis._222).forEach(([key, value]) => {
    console.log(key);
    axes.push(<AxisLine props={value} />);
  });
  return (
    <group>
      <group rotation={[0, 0, 0]}>{atoms}</group>
      {axes}
    </group>
  );
}

export { Orthorhombicmmm, Orthorhombicmm2, Orthorhombic222 };
