import React from "react";
import rhombohedralGroup from "./crystalSystems/Rhombohedral";
import rhombohedralAxis from "./props/Rhombohedral";
import generatePointGroup from "../build/Generate";
import { matrix } from "mathjs";
import AxisLine from "../build/Axes";
import Atom from "../build/Atom";

function Rhombohedral3barm() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(
    rhombohedralGroup._3barm,
    generalPoint,
    true
  );
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color="#FF1F35" position={p} />);
  });
  let axes = [];
  Object.entries(rhombohedralAxis._3barm).forEach(([key, value]) => {
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

function Rhombohedral3m() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(
    rhombohedralGroup._3m,
    generalPoint,
    true
  );
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color="#FF1F35" position={p} />);
  });
  let axes = [];
  Object.entries(rhombohedralAxis._3m).forEach(([key, value]) => {
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

function Rhombohedral32() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(
    rhombohedralGroup._32,
    generalPoint,
    true
  );
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color="#FF1F35" position={p} />);
  });
  let axes = [];
  Object.entries(rhombohedralAxis._32).forEach(([key, value]) => {
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

function Rhombohedral3bar() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(
    rhombohedralGroup._3bar,
    generalPoint,
    true
  );
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color="#FF1F35" position={p} />);
  });
  let axes = [];
  Object.entries(rhombohedralAxis._3bar).forEach(([key, value]) => {
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

function Rhombohedral3() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(
    rhombohedralGroup._3,
    generalPoint,
    true
  );
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color="#FF1F35" position={p} />);
  });
  let axes = [];
  Object.entries(rhombohedralAxis._3).forEach(([key, value]) => {
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

export {
  Rhombohedral3barm,
  Rhombohedral3m,
  Rhombohedral32,
  Rhombohedral3bar,
  Rhombohedral3,
};
