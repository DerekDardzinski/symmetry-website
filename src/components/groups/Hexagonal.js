import React from "react";
import hexagonalGroup from "./crystalSystems/Hexagonal";
import hexagonalAxis from "./props/Hexagonal";
import generatePointGroup from "../build/Generate";
import { matrix } from "mathjs";
import AxisLine from "../build/Axes";
import Atom from "../build/Atom";
import { atomColor } from "../build/AxesProps";

function Hexagonal6ommm() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(
    hexagonalGroup._6ommm,
    generalPoint,
    true
  );
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color={atomColor} position={p} />);
  });
  let axes = [];
  Object.entries(hexagonalAxis._6ommm).forEach(([key, value]) => {
    axes.push(<AxisLine props={value} />);
  });
  return (
    <group>
      <group rotation={[0, 0, 0]}>{atoms}</group>
      {axes}
    </group>
  );
}

function Hexagonal6barm2() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(
    hexagonalGroup._6barm2,
    generalPoint,
    true
  );
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color={atomColor} position={p} />);
  });
  let axes = [];
  Object.entries(hexagonalAxis._6barm2).forEach(([key, value]) => {
    axes.push(<AxisLine props={value} />);
  });
  return (
    <group>
      <group rotation={[0, 0, 0]}>{atoms}</group>
      {axes}
    </group>
  );
}

function Hexagonal6mm() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(hexagonalGroup._6mm, generalPoint, true);
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color={atomColor} position={p} />);
  });
  let axes = [];
  Object.entries(hexagonalAxis._6mm).forEach(([key, value]) => {
    axes.push(<AxisLine props={value} />);
  });
  return (
    <group>
      <group rotation={[0, 0, 0]}>{atoms}</group>
      {axes}
    </group>
  );
}

function Hexagonal622() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(hexagonalGroup._622, generalPoint, true);
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color={atomColor} position={p} />);
  });
  let axes = [];
  Object.entries(hexagonalAxis._622).forEach(([key, value]) => {
    axes.push(<AxisLine props={value} />);
  });
  return (
    <group>
      <group rotation={[0, 0, 0]}>{atoms}</group>
      {axes}
    </group>
  );
}

function Hexagonal6om() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(hexagonalGroup._6om, generalPoint, true);
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color={atomColor} position={p} />);
  });
  let axes = [];
  Object.entries(hexagonalAxis._6om).forEach(([key, value]) => {
    axes.push(<AxisLine props={value} />);
  });
  return (
    <group>
      <group rotation={[0, 0, 0]}>{atoms}</group>
      {axes}
    </group>
  );
}

function Hexagonal6bar() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(
    hexagonalGroup._6bar,
    generalPoint,
    true
  );
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color={atomColor} position={p} />);
  });
  let axes = [];
  Object.entries(hexagonalAxis._6bar).forEach(([key, value]) => {
    axes.push(<AxisLine props={value} />);
  });
  return (
    <group>
      <group rotation={[0, 0, 0]}>{atoms}</group>
      {axes}
    </group>
  );
}

function Hexagonal6() {
  const generalPoint = matrix([[1.5], [0.3], [0.9]]);
  const positions = generatePointGroup(hexagonalGroup._6, generalPoint, true);
  let atoms = [];
  positions.forEach((p) => {
    atoms.push(<Atom color={atomColor} position={p} />);
  });
  let axes = [];
  Object.entries(hexagonalAxis._6).forEach(([key, value]) => {
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
  Hexagonal6ommm,
  Hexagonal6barm2,
  Hexagonal6mm,
  Hexagonal6om,
  Hexagonal622,
  Hexagonal6bar,
  Hexagonal6,
};
