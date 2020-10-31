import React from "react";
import triclinicGroup from "./crystalSystems/Triclinic";
import triclinicAxis from "./props/Triclinic";
import generatePointGroup from "../build/Generate";
import { matrix } from "mathjs";
import AxisLine from "../build/Axes";
import Atom from "../build/Atom";
import { atomColor } from "../build/AxesProps";

function Triclinic1() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(triclinicGroup._1, generalPoint, false);
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color={atomColor} position={p} />);
  });
  let axes = [];
  Object.entries(triclinicAxis._p1).forEach(([key, value]) => {
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

function Triclinic1bar() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(
    triclinicGroup._1bar,
    generalPoint,
    false
  );
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color={atomColor} position={p} />);
  });
  let axes = [];
  Object.entries(triclinicAxis._p1).forEach(([key, value]) => {
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

export { Triclinic1, Triclinic1bar };
