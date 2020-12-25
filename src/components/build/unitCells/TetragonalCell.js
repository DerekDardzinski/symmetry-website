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

const TetragonalCell = () => {
  const edgeLength = basicArgsObj.height / 1.5;
  const a = edgeLength;
  const b = edgeLength;
  const c = edgeLength * 1.3;
  const points = [
    [0, 0, 0],
    [a, 0, 0],
    [a, b, 0],
    [0, b, 0],
    [0, 0, 0],
    [0, 0, c],
    [a, 0, c],
    [a, b, c],
    [0, b, c],
    [0, 0, c],
    [a, 0, c],
    [a, 0, 0],
    [a, b, 0],
    [a, b, c],
    [0, b, c],
    [0, b, 0],
  ];
  return (
    <group rotation={[0, Math.PI / 24, 0]}>
      <group position={[-a / 2, -b / 2, -c / 2]}>
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

export default TetragonalCell;
