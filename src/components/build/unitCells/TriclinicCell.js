import React from "react";
import * as THREE from "three";
import { Line } from "drei";
import basicArgsObj from "../BasicParams";

const basicArgs = [
  basicArgsObj.radiusTop,
  basicArgsObj.radiusBottom,
  basicArgsObj.height / 2,
  basicArgsObj.radialSegments,
  basicArgsObj.heightSegments,
  basicArgsObj.openEnded,
  basicArgsObj.thetaStart,
  basicArgsObj.thetaLength,
];

const TriclinicCell = () => {
  const edgeLength = basicArgsObj.height / 1.5;
  const a = edgeLength * 0.9;
  const b = edgeLength * 1.15;
  const c = edgeLength * 0.85;
  const ashift = -edgeLength * 0.2;
  const bshift = edgeLength * 0.4;
  // const cshift = edgeLength * 0.4;
  const points = [
    [0, 0, 0],
    [a, 0, 0],
    [a, b, 0],
    [0, b, 0],
    [0, 0, 0],
    [ashift, bshift, c],
    [a + ashift, bshift, c],
    [a + ashift, b + bshift, c],
    [ashift, b + bshift, c],
    [ashift, bshift, c],
    [a + ashift, bshift, c],
    [a, 0, 0],
    [a, b, 0],
    [a + ashift, b + bshift, c],
    [ashift, b + bshift, c],
    [0, b, 0],
  ];
  return (
    <group rotation={[0, Math.PI / 24, 0]}>
      <group
        position={[
          -(edgeLength + ashift) / 2,
          -(edgeLength + bshift) / 2,
          -(edgeLength + 0) / 2,
        ]}
      >
        <Line
          points={points} // Array of points
          color="grey" // Default
          lineWidth={5} // In pixels (default)
          dashed={false} // Default
        />
      </group>
    </group>
  );
};

export default TriclinicCell;
