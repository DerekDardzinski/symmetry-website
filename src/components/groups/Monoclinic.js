import React from "react";
import monoclinicGroup from "./crystalSystems/Monoclinic";
import monoclinicAxis from "./props/Monoclinic";
import generatePointGroup from "../build/Generate";
import { matrix } from "mathjs";
import AxisLine from "../build/Axes";
import Atom from "../build/Atom";

function Monoclinic2() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(monoclinicGroup._2, generalPoint, false);
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color="#FF1F35" position={p} />);
  });
  let axes = [];
  Object.entries(monoclinicAxis._2).forEach(([key, value]) => {
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

function Monoclinic2om() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(
    monoclinicGroup._2om,
    generalPoint,
    false
  );
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color="#FF1F35" position={p} />);
  });
  let axes = [];
  Object.entries(monoclinicAxis._2om).forEach(([key, value]) => {
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

function Monoclinicm() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(monoclinicGroup._m, generalPoint, false);
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color="#FF1F35" position={p} />);
  });
  let axes = [];
  Object.entries(monoclinicAxis._m).forEach(([key, value]) => {
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

export { Monoclinic2, Monoclinic2om, Monoclinicm };
