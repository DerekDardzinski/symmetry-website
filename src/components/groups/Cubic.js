import React from "react";
import cubicGroup from "./crystalSystems/Cubic";
import cubicAxis from "./props/Cubic";
import generatePointGroup from "../build/Generate";
import { matrix } from "mathjs";
import AxisLine from "../build/Axes";
import Atom from "../build/Atom";
import { atomColor } from "../build/AxesProps";

function Cubicm3barm() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(cubicGroup._m3barm, generalPoint, false);
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color={atomColor} position={p} />);
  });
  let axes = [];
  Object.entries(cubicAxis._m3barm).forEach(([key, value]) => {
    axes.push(<AxisLine props={value} />);
  });
  return (
    <group>
      <group rotation={[0, 0, 0]}>{atoms}</group>
      {axes}
    </group>
  );
}

function Cubic4bar3m() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(cubicGroup._4bar3m, generalPoint, false);
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color={atomColor} position={p} />);
  });
  let axes = [];
  Object.entries(cubicAxis._4bar3m).forEach(([key, value]) => {
    axes.push(<AxisLine props={value} />);
  });
  return (
    <group>
      <group rotation={[0, 0, 0]}>{atoms}</group>
      {axes}
    </group>
  );
}

function Cubic432() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(cubicGroup._432, generalPoint, false);
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color={atomColor} position={p} />);
  });
  let axes = [];
  Object.entries(cubicAxis._432).forEach(([key, value]) => {
    axes.push(<AxisLine props={value} />);
  });
  return (
    <group>
      <group rotation={[0, 0, 0]}>{atoms}</group>
      {axes}
    </group>
  );
}

function Cubicm3bar() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(cubicGroup._m3bar, generalPoint, false);
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color={atomColor} position={p} />);
  });
  let axes = [];
  Object.entries(cubicAxis._m3bar).forEach(([key, value]) => {
    axes.push(<AxisLine props={value} />);
  });
  return (
    <group>
      <group rotation={[0, 0, 0]}>{atoms}</group>
      {axes}
    </group>
  );
}

function Cubic23() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(cubicGroup._23, generalPoint, false);
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color={atomColor} position={p} />);
  });
  let axes = [];
  Object.entries(cubicAxis._23).forEach(([key, value]) => {
    axes.push(<AxisLine props={value} />);
  });
  return (
    <group>
      <group rotation={[0, 0, 0]}>{atoms}</group>
      {axes}
    </group>
  );
}

export { Cubicm3barm, Cubic4bar3m, Cubic432, Cubicm3bar, Cubic23 };
